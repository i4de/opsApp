// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加插件 POST /v1/m/plugin/create */
export async function postV1MPluginCreate(
  body: API.AddPluginReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      uuid?: string;
      name?: string;
      packageName?: string;
      os?: string;
      arch?: string;
      md5?: string;
      creater?: string;
      updater?: string;
      created?: string;
      updated?: string;
    };
  }>('/v1/m/plugin/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除插件 POST /v1/m/plugin/delete */
export async function postV1MPluginDelete(
  body: API.DeletePluginReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: Record<string, any> }>(
    '/v1/m/plugin/delete',
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

/** 查询插件 POST /v1/m/plugin/query */
export async function postV1MPluginQuery(
  body: API.QueryPluginReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      total?: number;
      pageNum?: number;
      pageSize?: number;
      pageTotal?: number;
      list?: API.Plugin[];
    };
  }>('/v1/m/plugin/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新插件 POST /v1/m/plugin/update */
export async function postV1MPluginUpdate(
  body: API.UpdatePluginReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      uuid?: string;
      name?: string;
      packageName?: string;
      os?: string;
      arch?: string;
      md5?: string;
      creater?: string;
      updater?: string;
      created?: string;
      updated?: string;
    };
  }>('/v1/m/plugin/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
