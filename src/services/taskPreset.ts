import request from '@/utils/request';

export interface taskPresetQueryType {
    uuid: string;
    name: string;
    creater: string;
    pageNum: number;
    pageSize: number;
}


export interface taskPresetItemType {
    uuid?: string;
    type: string;
    name: string;
    creater?: string;
    content: string;
    created?: string;
    updated?: string;
    updater?: string;
}


export interface taskPresetDeleteType {
    uuids: string[];
}


// 查询
export async function taskPresetQuery(params: taskPresetQueryType) {
    return request('/v1/m/task/preset/query', {
        method: 'POST',
        data: params,
    });
}


export async function taskPresetCreate(params: taskPresetItemType) {
    return request('/v1/m/task/preset/create', {
        method: 'POST',
        data: params,
    });
}


export async function taskPresetUpdate(params: taskPresetItemType) {
    return request('/v1/m/task/preset/update', {
        method: 'POST',
        data: params,
    });
}

export async function taskPresetDelete(params: taskPresetDeleteType) {
    return request('/v1/m/task/preset/update', {
        method: 'POST',
        data: params,
    });
}