
import request from '@/utils/request';

export interface appAddType {
    name: string;
}


export interface appItemType {
    appid: string;
    apiKey: string;
    secKey: string;
    owner?: string;
    name: string;
    status: number;
    ownerUid?: string;
    created?: string;
    updated?: string;
}

export interface appQueryType {
    name: string;
    owner: string;
    pageNum: number;
    pageSize: number;
}

export interface appDeleteType {
    appids: string[];
}


export async function appCreate(params: appAddType) {
    return request('/v1/m/app/create', {
        method: 'POST',
        data: params,
    });
}

export async function appQuery(params: appQueryType) {
    return request('/v1/m/app/query', {
        method: 'POST',
        data: params,
    });
}

export async function appDelete(params: appDeleteType) {
    return request('/v1/m/app/delete', {
        method: 'POST',
        data: params,
    });
}


