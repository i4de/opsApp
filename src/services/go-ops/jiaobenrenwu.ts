// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 脚本异步执行 POST /script/async */
export async function postScriptAsync(body: API.ScriptTaskReq, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: { taskid?: string } }>('/script/async', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消脚本运行 POST /script/cancel */
export async function postScriptCancel(
  body: API.ScriptTaskCancelReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: { list?: API.ScriptTaskCancel[] } }>(
    '/script/cancel',
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

/** 远程节点上的脚本任务信息 POST /script/peer/taskinfo */
export async function postScriptPeerTaskinfo(
  body: API.PeerScriptTaskInfoReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      peerid?: string;
      req?: API.interface;
      status?: string;
      value?: API.interface;
      err?: string;
    };
  }>('/script/peer/taskinfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 脚本同步执行 POST /script/sync */
export async function postScriptSync(
  body: API.ScriptTaskSyncReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: { taskid?: string; status?: string; list?: API.ScriptTaskExecItem[] };
  }>('/script/sync', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 脚本任务信息 POST /script/taskinfo */
export async function postScriptTaskinfo(
  body: API.ScriptTaskInfoReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: { taskid?: string; status?: string; list?: API.ScriptTaskExecItem[] };
  }>('/script/taskinfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
