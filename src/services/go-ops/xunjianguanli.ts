// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 添加巡检项 POST /check/item/add */
export async function postCheckItemAdd(
  body: API.AddCheckItemReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: { checkItemId?: string; name?: string; desc?: string; type?: string; content?: string };
  }>('/check/item/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除检查项 POST /check/item/delete */
export async function postCheckItemDelete(
  body: API.DeleteCheckItemReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: Record<string, any> }>(
    '/check/item/delete',
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

/** 查询检查项 POST /check/item/query */
export async function postCheckItemQuery(
  body: API.QueryCheckItemReq,
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
      list?: API.CheckItemRes[];
    };
  }>('/check/item/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新检查项 POST /check/item/update */
export async function postCheckItemUpdate(
  body: API.UpdateCheckItemReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: { checkItemId?: string; name?: string; desc?: string; type?: string; content?: string };
  }>('/check/item/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
