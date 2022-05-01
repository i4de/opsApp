import request from '@/utils/request';


export interface scriptsCreateType {
    name: string;
    content: string;
    args?: Map<string, string>;
    desc: string;
    type: string;
}


export interface scriptQueryType {
    name?: string;
    type?: string;
    pageNum?: number;
    pageSize?: number;
    scriptId?: string;
}

export interface scriptDeleteType {
    scriptIds: string[];
}

// 创建脚本
export async function createScripts(params: scriptsCreateType) {
    return request('/v1/m/script/add', {
        method: 'POST',
        data: params,
    });
}



// 创建脚本
export async function queryScripts(params: scriptQueryType) {
    return request('/v1/m/script/query', {
        method: 'POST',
        data: params,
    });
}



// 创建脚本
export async function updateScripts(params:any) {
    return request('/v1/m/script/update', {
        method: 'POST',
        data: params,
    });
}



export async function deleteScripts(params: scriptDeleteType) {
    return request('/v1/m/script/delete', {
        method: 'POST',
        data: params,
    });
}
