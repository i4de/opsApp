// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建一个app POST /v1/m/app/create */
export async function postV1MAppCreate(body: API.AddAppReq, options?: { [key: string]: any }) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      appid?: string;
      apiKey?: string;
      secKey?: string;
      owner?: string;
      name?: string;
      status?: number;
      ownerUid?: string;
    };
  }>('/v1/m/app/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除app POST /v1/m/app/delete */
export async function postV1MAppDelete(body: API.DeleteAppReq, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: Record<string, any> }>(
    '/v1/m/app/delete',
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

/** 查询app POST /v1/m/app/query */
export async function postV1MAppQuery(body: API.QueryAppReq, options?: { [key: string]: any }) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      total?: number;
      pageNum?: number;
      pageSize?: number;
      pageTotal?: number;
      list?: API.App[];
    };
  }>('/v1/m/app/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id查询app POST /v1/m/app/single_query */
export async function postV1MAppSingle_query(
  body: API.QuerySingleAppReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      appid?: string;
      apiKey?: string;
      secKey?: string;
      owner?: string;
      name?: string;
      status?: number;
      ownerUid?: string;
    };
  }>('/v1/m/app/single_query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新一个app POST /v1/m/app/update */
export async function postV1MAppUpdate(body: API.UpdateAppReq, options?: { [key: string]: any }) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      appid?: string;
      apiKey?: string;
      secKey?: string;
      owner?: string;
      name?: string;
      status?: number;
      ownerUid?: string;
    };
  }>('/v1/m/app/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
