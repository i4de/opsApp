export type AppListItem = {
  appid: string;
  apiKey: string;
  secKey: string;
  owner: string;
  name: string;
  status: string;
  ownerUid?: string;
  created?: string;
  updated?: string;
};

export type AppTableListPagination = {
  name: string;
  owner: string;
  total: number;
  pageSize: number;
  current: number;
};

export type AppListData = {
  total: number;
  pageNum: number;
  pageSize: number;
  pageTotal: number;
  list: ScriptListItem[];
};
