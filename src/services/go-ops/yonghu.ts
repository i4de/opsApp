// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 用户信息 GET /user/info */
export async function getUserInfo(options?: { [key: string]: any }) {
  return request<{
    code?: number;
    message?: string;
    data?: { uid?: string; username?: string; email?: string; phone?: string; avatar?: string };
  }>('/user/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 POST /user/login */
export async function postUserLogin(body: API.AuthLoginReq, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: { token?: string; expire?: string } }>(
    '/user/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 登出 POST /user/logout */
export async function postUserLogout(body: API.AuthLogoutReq, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: Record<string, any> }>('/user/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** token续期 POST /user/refresh_token */
export async function postUserRefresh_token(
  body: API.AuthRefreshTokenReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: { token?: string; expire?: string } }>(
    '/user/refresh_token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
