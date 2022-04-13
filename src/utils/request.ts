/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { notification } from 'antd';
import { extend } from 'umi-request';

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {

  const { response } = error;

  if (response && response.status) {
    response.clone().text().then(v => {
      try {
        const data = JSON.parse(v)
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
    })
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }


  return response;
};


const authInterceptor = (url: string, options: any) => {
  // const accessToken = getAccessToken()
  // if (accessToken) {
  //   if (options.headers) {
  //     (options.headers['Access-Token'] = accessToken)
  //   }
  // }

  // if (token) {
  //   if (options.headers) {
  //     (options.headers.Authorization = token)
  //   }
  // }

  return {
    url,
    options: { ...options },
  };
}

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  prefix: 'http://10.25.73.230:8199',
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

const responseInterceptors = async (response: any, options: any) => {
  response.clone().text().then(v => {
    const data = JSON.parse(v)
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
  })
  return response
}


export const stream = extend({
  credentials: 'include',
  parseResponse: false
})

stream.interceptors.request.use(
  authInterceptor,
  { global: false }
)

request.interceptors.response.use(
  responseInterceptors,
  { global: false }
);

request.interceptors.request.use(
  authInterceptor,
  { global: false }
); // second paramet defaults { global: true }

export default request;

