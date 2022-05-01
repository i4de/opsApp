export type ScriptListItem = {
  name: string;
  content?: string;
  args?: string;
  desc?: string;
  type: string;
  ownerType?: string;
  ownerUid?: string;
  created?: string;
  updated?: string;
  scriptUid: string;
};

export type TableListPagination = {
  total: number;
  pageSize: number;
  current: number;
};

export type ScriltListData = {
  total: number;
  pageNum: number;
  pageSize: number;
  pageTotal: number;
  list: ScriptListItem[];
};
