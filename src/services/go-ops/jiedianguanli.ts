// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 连接节点 POST /peer/node/connect */
export async function postPeerNodeConnect(
  body: API.NodeConnectReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: { msg?: string } }>(
    '/peer/node/connect',
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

/** 获取节点文件夹信息 POST /peer/node/files */
export async function postPeerNodeFiles(
  body: API.NodeFileListReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: { files?: API.FileInfo[] } }>(
    '/peer/node/files',
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

/** 创建节点文件夹 POST /peer/node/files/createDir */
export async function postPeerNodeFilesCreateDir(
  body: API.NodeFileCreateDirReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: { files?: API.FileInfo[] } }>(
    '/peer/node/files/createDir',
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

/** 删除节点文件 POST /peer/node/files/delete */
export async function postPeerNodeFilesDelete(
  body: API.NodeFileDeleteReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: { files?: API.FileInfo[] } }>(
    '/peer/node/files/delete',
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

/** 移动节点文件 POST /peer/node/files/move */
export async function postPeerNodeFilesMove(
  body: API.NodeFileMoveReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: { files?: API.FileInfo[] } }>(
    '/peer/node/files/move',
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

/** 获取节点状态 POST /peer/node/stat */
export async function postPeerNodeStat(body: API.NodeStatReq, options?: { [key: string]: any }) {
  return request<{
    code?: number;
    message?: string;
    data?: {
      PeerId?: string;
      HostInfo?: API.InfoStat;
      Swapmem?: API.SwapMemoryStat;
      Mem?: API.VirtualMemoryStat;
      CpuInfo?: API.InfoStat[];
      DiskUseInfo?: API.UsageStat;
      Interfaces?: API.InterfaceStat[];
    };
  }>('/peer/node/stat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 停止节点连接 POST /peer/node/stop */
export async function postPeerNodeStop(body: API.NodeStopReq, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: { msg?: string } }>('/peer/node/stop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取节点连接信息 POST /peer/nodes */
export async function postPeerNodes(body: API.NodeReq, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: { Nodes?: API.Node[] } }>(
    '/peer/nodes',
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
