// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加主机信息 POST /v1/m/vm/add */
export async function postV1MVmAdd(body: API.AddVmReq, options?: { [key: string]: any }) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      peerId?: string;
      name?: string;
      hostname?: string;
      publicIp?: string;
      uuid?: string;
      os?: string;
      creater?: string;
      updater?: string;
    };
  }>('/v1/m/vm/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除主机信息 POST /v1/m/vm/delete */
export async function postV1MVmDelete(body: API.DeleteVmReq, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: Record<string, any> }>(
    '/v1/m/vm/delete',
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

/** 查询主机节点 POST /v1/m/vm/query */
export async function postV1MVmQuery(body: API.QueryVmReq, options?: { [key: string]: any }) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      total?: number;
      pageNum?: number;
      pageSize?: number;
      pageTotal?: number;
      list?: API.Vm[];
    };
  }>('/v1/m/vm/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新主机信息 POST /v1/m/vm/update */
export async function postV1MVmUpdate(body: API.UpdateVmReq, options?: { [key: string]: any }) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      peerId?: string;
      name?: string;
      hostname?: string;
      publicIp?: string;
      uuid?: string;
      os?: string;
      creater?: string;
      updater?: string;
    };
  }>('/v1/m/vm/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
