import request from '@/utils/request';

export interface taskRecordItemType {
  taskId: string;
  type: string;
  content: string;
  name: string;
  reqid: string;
  parentId?: string;
  status: string;
  created: string;
  updated?: string;
  creater?: string;
}

export interface taskRecordQueryType {
  name?: string;
  creater?: string;
  taskid?: string;
  pageNum?: number;
  pageSize?: number;
}

// 查询任务
export async function taskRecordQuery(params: taskRecordQueryType) {
  return request('/v1/m/task/query', {
    method: 'POST',
    data: params,
  });
}

// 定时任务
export interface cronTaskItemType {
  name: string;
  type: string;
  creater?: string;
  content: string;
  cronExpr: string;
  status: string;
  created?: string;
  cronUid?: string;
  lastRunTime?: string;
  nextRunTime?: string;
  updated?: string;
  updater?: string;
}

export interface cronTaskQueryType {
  name?: string;
  creater?: string;
  cronUid?: string;
  pageNum?: number;
  pageSize?: number;
}

// 创建脚本
export async function cronTaskQuery(params: cronTaskQueryType) {
  return request('/v1/m/task/cron/query', {
    method: 'POST',
    data: params,
  });
}
