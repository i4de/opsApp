// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 创建文件分发任务 POST /peer/downloadfile */
export async function postPeerDownloadfile(
  body: API.DownloadFileReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: { taskid?: string; status?: string; list?: API.DownloadfileItem[] };
  }>('/peer/downloadfile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 文件分发任务详情 POST /peer/downloadfile/details */
export async function postPeerDownloadfileDetails(
  body: API.DownloadFileDetailsReq,
  options?: { [key: string]: any },
) {
  return request<{
    code?: number;
    message?: string;
    data?: { taskid?: string; status?: string; list?: API.DownloadfileItem[] };
  }>('/peer/downloadfile/details', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
