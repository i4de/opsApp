interface ContentObj {
  type: string;
  content: string;
}

export type TaskListItem = {
  uuid: string;
  type: string;
  name: string;
  creater: string;
  content: string;
  created: string;
  updated: string;
  updater: string;
};

export type TaskDetail = {
  uuid: string;
  type: string;
  name: string;
  creater: string;
  content_type: string;
  content_text: string;
  created: string;
  updated: string;
  updater: string;
};

export type TaskTableListPagination = {
  uuid: string;
  name: string;
  creater: string;
  total: number;
  pageSize: number;
  current: number;
};

export type TaskListData = {
  total: number;
  pageNum: number;
  pageSize: number;
  pageTotal: number;
  list: ScriptListItem[];
};
