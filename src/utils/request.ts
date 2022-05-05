/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { notification } from 'antd';
import { extend } from 'umi-request';
import { history } from 'umi';
import { stringify } from 'querystring';
import { postUserRefresh_token } from '@/services/go-ops/yonghu';

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;

  if (response && response.status) {
    response
      .clone()
      .text()
      .then((v) => {
        try {
          const data = JSON.parse(v);
          notification.error({
            message: `请求错误, 错误码:${data.code}`,
            description: data.message || data.msg,
          });
        } catch {
          notification.error({
            message: `请求错误, 错误码:${response.status}`,
            description: v,
          });
        }
      });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }

  return response;
};

const getAccessToken = () => {
  return localStorage.getItem('GO-OPS-X-TOKEN');
};

const authInterceptor = (url: string, options: any) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    if (options.headers) {
      options.headers['GO-OPS-X-TOKEN'] = 'Bearer ' + accessToken;
    }
  }

  return {
    url,
    options: { ...options },
  };
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  prefix: 'http://127.0.0.1:8199',
  //prefix: 'http://82.157.165.187:30004',
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  errorConfig: {
    adaptor: (resData: any) => {
      return {
        ...resData,
        success: resData.ok,
        errorMessage: resData.message,
      };
    },
  },
});

// 重定向到登录页面
const redirectLoginPage = () => {
  const queryString = stringify({
    redirect: '',
  });
  window.location.href = `/user/login?${queryString}`;
};

let isRefreshing = false; // 是否正在刷新
const subscribers: any[] = []; // 重试队列，每一项将是一个待执行的函数形式

const addSubscriber = (listener: (newToken: string) => void) => subscribers.push(listener);

// 执行被缓存等待的接口事件
const notifySubscriber = (newToken = '') => {
  subscribers.forEach((callback) => callback(newToken));
  subscribers.length = 0;
};

// 刷新 token 请求
const refreshTokenRequst = async () => {
  const refresh_token = getAccessToken();
  if (!refresh_token) {
    return redirectLoginPage();
  }

  try {
    const res = await postUserRefresh_token({});
    if (res?.data?.token) {
      localStorage.setItem('GO-OPS-X-TOKEN', res.data.token);
      notifySubscriber(res.data.token);
    } else {
      return redirectLoginPage();
    }
  } catch (e) {
    console.error('请求刷新 token 失败');
  }
  isRefreshing = false;
};

// 判断如何响应
function checkStatus(response: { url: any }, options: any) {
  const { url } = response;
  if (!isRefreshing) {
    isRefreshing = true;
    refreshTokenRequst();
  }

  // 正在刷新 token，返回一个未执行 resolve 的 promise
  return new Promise((resolve) => {
    // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
    addSubscriber((newToken: any) => {
      const newOptions = {
        ...options,
        prefix: '',
        params: {},
        headers: {
          'GO-OPS-X-TOKEN': 'Bearer ' + newToken,
        },
      };
      resolve(request(url, newOptions));
    });
  });
}

const responseInterceptors = async (response: any, options: any) => {
  if (response.status === 403) {
    return checkStatus(response, options);
  } else if (response.status === 401 && window.location.pathname !== '/user/login') {
    return redirectLoginPage();
  }
  response
    .clone()
    .text()
    .then((v) => {
      const data = JSON.parse(v);
      if (data?.data?.msg !== 'OK' && data?.data?.msg) {
        notification.error({
          message: `请求错误, 错误码:500`,
          description: data?.data?.msg,
        });
      } else {
        // notification.success({
        //   message: `请求成功, 状态码:200`,
        //   description: data?.data?.msg,
        // });
      }
    });
  return response;
};

export const stream = extend({
  credentials: 'include',
  parseResponse: false,
});

stream.interceptors.request.use(authInterceptor, { global: false });

request.interceptors.response.use(responseInterceptors, { global: false });

request.interceptors.request.use(authInterceptor, { global: false }); // second paramet defaults { global: true }

export default request;
