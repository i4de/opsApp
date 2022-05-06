import {
  taskPresetDelete,
  taskPresetDeleteType,
  taskPresetQuery,
  taskPresetQueryType,
} from '@/services/taskPreset';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import React, { useRef } from 'react';
import { TaskListItem, TaskTableListPagination } from './data';
import { history } from 'umi';
import { message, Popconfirm } from 'antd';

const handleRemove = async (list: TaskListItem[]) => {
  let uuids = list.map((item) => item.uuid);
  let req: taskPresetDeleteType = {
    uuids: uuids,
  };
  await taskPresetDelete(req).then((res) => {
    if (res.code == 0) {
      message.info('删除成功');
    } else {
      message.error('删除失败:' + res.message);
    }
  });
};

const TaskPreset: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<TaskListItem>[] = [
    {
      title: 'uuid',
      dataIndex: 'uuid',
      key: 'uuid',
    },
    {
      title: '任务名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '任务类型',
      dataIndex: 'type',
      key: 'type',
      search: false,
    },
    {
      title: '创建人',
      dataIndex: 'creater',
      key: 'creater',
    },
    {
      title: '创建时间',
      dataIndex: 'created',
      key: 'created',
      search: false,
    },

    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a
          key="info"
          onClick={() => {
            history.push({ pathname: '/task/presetinfo/' + record.uuid });
          }}
        >
          查看
        </a>,
        <a
          key="update"
          onClick={() => {
            history.push({ pathname: '/task/presetupdate/' + record.uuid });
          }}
        >
          修改
        </a>,
        <Popconfirm
          key="delete"
          title="确认删除App吗？"
          onConfirm={() => {
            handleRemove([record]);
            actionRef.current?.reloadAndRest?.();
          }}
        >
          <a href="#">删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<TaskListItem, TaskTableListPagination>
        headerTitle="预设任务管理"
        actionRef={actionRef}
        rowKey={(record) => record.uuid}
        search={{
          labelWidth: 120,
        }}
        request={async (params: TaskTableListPagination, sort, filter) => {
          let q: taskPresetQueryType = {
            uuid: params.uuid,
            name: params.name,
            creater: params.creater,
            pageNum: params.current,
            pageSize: params.pageSize,
          };
          var data: TaskListItem[] = [];
          let r = {
            data: data,
            success: false,
            total: 0,
          };
          await taskPresetQuery(q).then((res) => {
            const templist: TaskListItem[] = res?.data?.list;
            r = {
              data: templist,
              success: true,
              total: res?.data?.total,
            };
          });
          return r;
        }}
        columns={columns}
      />
    </PageContainer>
  );
};

export default TaskPreset;
