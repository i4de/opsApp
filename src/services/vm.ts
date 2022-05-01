import request from '@/utils/request';

export interface vmItemType {
  uuid: string;
  name: string;
  hostname: string;
  osType?: string;
  osInfo?: string;
  hosttype?: string;
  networktype?: string;
  privateIp?: string;
  publicIp?: string;
  created?: string;
  updated?: string;
  creater?: string;
  address?: string;
  peerId?: string;
}

export interface vmQueryType {
  name?: string;
  uuid?: string;
  hostname?: string;
  pageNum?: number;
  pageSize?: number;
  peerId?: string;
}

// 查询
export async function vmQuery(params: vmQueryType) {
  return request('/v1/m/vm/query', {
    method: 'POST',
    data: params,
  });
}


export interface vmFileListType {
  nodeid: string;
  path: string;
}


export async function vmFileList(params: vmFileListType) {
  return request('/peer/node/files', {
    method: 'POST',
    data: params,
  });
}