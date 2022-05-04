// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建定时任务 POST /v1/m/task/cron/create */
export async function postV1MTaskCronCreate(
  body: API.AddCronTaskReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      name?: string;
      type?: string;
      creater?: string;
      content?: string;
      cronExpr?: string;
      status?: string;
      created?: string;
      cronUid?: string;
      lastRunTime?: string;
      nextRunTime?: string;
      updated?: string;
      updater?: string;
    };
  }>('/v1/m/task/cron/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除定时任务 POST /v1/m/task/cron/delete */
export async function postV1MTaskCronDelete(
  body: API.DeleteCronTaskReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: { message?: string } }>(
    '/v1/m/task/cron/delete',
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

/** 查询定时任务 POST /v1/m/task/cron/query */
export async function postV1MTaskCronQuery(
  body: API.QueryCronTaskReq,
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
      list?: API.CronTaskItemRes[];
    };
  }>('/v1/m/task/cron/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 启动定时任务 POST /v1/m/task/cron/start */
export async function postV1MTaskCronStart(
  body: API.StartCronTaskReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: Record<string, any> }>(
    '/v1/m/task/cron/start',
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

/** 停止定时任务 POST /v1/m/task/cron/stop */
export async function postV1MTaskCronStop(
  body: API.StopCronTaskReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: Record<string, any> }>(
    '/v1/m/task/cron/stop',
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

/** 更新定时任务 POST /v1/m/task/cron/update */
export async function postV1MTaskCronUpdate(
  body: API.UpdateCronTaskReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      name?: string;
      type?: string;
      creater?: string;
      content?: string;
      cronExpr?: string;
      status?: string;
      created?: string;
      cronUid?: string;
      lastRunTime?: string;
      nextRunTime?: string;
      updated?: string;
      updater?: string;
    };
  }>('/v1/m/task/cron/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 单个任务信息 POST /v1/m/task/info */
export async function postV1MTaskInfo(body: API.TaskInfoReq, options?: { [key: string]: any }) {
  return request<{
    code?: number;
    message?: string;
    data?: { task?: API.Task; sublist?: API.TaskInfo[] };
  }>('/v1/m/task/info', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建预设任务 POST /v1/m/task/preset/create */
export async function postV1MTaskPresetCreate(
  body: API.AddTaskPresetReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      uuid?: string;
      type?: string;
      name?: string;
      creater?: string;
      content?: string;
      created?: string;
      updated?: string;
      updater?: string;
    };
  }>('/v1/m/task/preset/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除预设任务 POST /v1/m/task/preset/deleted */
export async function postV1MTaskPresetDeleted(
  body: API.DeleteTaskPresetReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: { message?: string } }>(
    '/v1/m/task/preset/deleted',
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

/** 查询预设任务 POST /v1/m/task/preset/query */
export async function postV1MTaskPresetQuery(
  body: API.QueryTaskPresetReq,
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
      list?: API.TaskPresetItemRes[];
    };
  }>('/v1/m/task/preset/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新预设任务 POST /v1/m/task/preset/update */
export async function postV1MTaskPresetUpdate(
  body: API.UpdateTaskPresetReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      uuid?: string;
      type?: string;
      name?: string;
      creater?: string;
      content?: string;
      created?: string;
      updated?: string;
      updater?: string;
    };
  }>('/v1/m/task/preset/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 任务查询 POST /v1/m/task/query */
export async function postV1MTaskQuery(body: API.TaskQueryReq, options?: { [key: string]: any }) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      total?: number;
      pageNum?: number;
      pageSize?: number;
      pageTotal?: number;
      list?: API.Task[];
    };
  }>('/v1/m/task/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
