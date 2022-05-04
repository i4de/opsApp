// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 节点添加agent POST /peer/agent/add */
export async function postPeerAgentAdd(body: API.AddAgentReq, options?: { [key: string]: any }) {
  return request<{ code?: number; message?: string; data?: { list?: API.AgentInfo[] } }>(
    '/peer/agent/add',
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

/** 查询agent状态 POST /peer/agent/status */
export async function postPeerAgentStatus(
  body: API.QueryAgentStatusReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: { List?: API.PeerAgentStatus[] } }>(
    '/peer/agent/status',
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

/** 节点更新agent POST /peer/agent/update */
export async function postPeerAgentUpdate(
  body: API.UpdateAgentReq,
  options?: { [key: string]: any },
) {
  return request<{ code?: number; message?: string; data?: { list?: API.AgentInfo[] } }>(
    '/peer/agent/update',
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
