import request from '@/utils/request';

export interface nodeConnectTypes {
    nodeid: string;
    remoteAddr: string;
}

export interface nodeStopType {
    nodeid: string;
    remoteId: string;
}

export interface nodesListType {
    nodeid?: string;
}
// 连接节点
export async function nodeConnect(params: nodeConnectTypes) {
    return request('/peer/node/connect', {
        method: 'POST',
        data: params,
    });
}

// 断开节点
export async function nodeStop(params: nodeStopType) {
    return request('/peer/node/stop', {
        method: 'POST',
        data: params,
    });
}
// 节点列表
export async function nodesList(params?: nodesListType) {
    return request('/peer/nodes', {
        method: 'POST',
        data: params,
    });
}

// 节点状态
export async function nodeStat(params?: nodesListType) {
    return request('/peer/node/stat', {
        method: 'POST',
        data: params,
    });
}

// 执行脚本
export async function syncScript(params: any) {
    return request('/script/sync', {
        method: 'POST',
        data: params,
    });
}