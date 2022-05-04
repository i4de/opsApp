// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建一个脚本 POST /v1/m/script/add */
export async function postV1MScriptAdd(body: API.AddScriptReq, options?: { [key: string]: any }) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      scriptId?: string;
      name?: string;
      content?: string;
      args?: API.KVString[];
      desc?: string;
      type?: string;
      creater?: string;
      updater?: string;
      waitTime?: number;
      cmd?: string;
    };
  }>('/v1/m/script/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除脚本信息 POST /v1/m/script/delete */
export async function postV1MScriptDelete(
  body: API.DeleteScriptReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: Record<string, any> }>(
    '/v1/m/script/delete',
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

/** 查询脚本库信息 POST /v1/m/script/query */
export async function postV1MScriptQuery(
  body: API.ScriptQueryReq,
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
      list?: API.Script[];
    };
  }>('/v1/m/script/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新脚本信息 POST /v1/m/script/update */
export async function postV1MScriptUpdate(
  body: API.UpdateScriptReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      scriptId?: string;
      name?: string;
      content?: string;
      args?: API.KVString[];
      desc?: string;
      type?: string;
      creater?: string;
      updater?: string;
      waitTime?: number;
      cmd?: string;
    };
  }>('/v1/m/script/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
