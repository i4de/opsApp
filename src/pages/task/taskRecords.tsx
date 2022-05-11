import React, { useState, useRef } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { taskRecordItemType, taskRecordQueryType, taskRecordQuery } from '@/services/task';
import ProTable from '@ant-design/pro-table';
import { history } from 'umi';

const queryTaskRecord = async (params: {
  pageSize: number;
  current: number;
  name: string;
  taskId: string;
}) => {
  let q: taskRecordQueryType = {
    pageNum: params.current,
    pageSize: params.pageSize,
    name: params.name,
    taskid: params.taskId,
  };

  let r = {
    data: [],
    success: false,
    total: 0,
  };
  await taskRecordQuery(q).then((res) => {
    r = {
      data: res?.data?.list,
      success: true,
      total: res?.data?.total,
    };
  });

  return r;
};

const TaskRecords: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<taskRecordItemType>[] = [
    {
      title: '任务id',
      dataIndex: 'taskId',
      tip: '任务唯一id',
      key: 'taskId',
    },
    {
      title: '名称',
      dataIndex: 'name',
      valueType: 'textarea',
      key: 'name',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => {
        if (record.status == 'doing') {
          return <p>运行中</p>;
        }
        if (record.status == 'done') {
          return <p>完成</p>;
        }
        if (record.status == 'failed') {
          return <p>失败</p>;
        }
        return <p>未知</p>;
      },
    },
    {
      title: '内容',
      dataIndex: 'content',
      valueType: 'textarea',
      search: false,
      key: 'content',
    },

    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      search: false,
      render: (_, record) => [<a key={'info-' + record.taskId} onClick={()=> {
        history.push({
          pathname: '/task/info/' + record.taskId,
        });
      }}>查看</a>],
    },
  ];

  return (
    <PageContainer>
      <ProTable<taskRecordItemType>
        headerTitle="任务记录"
        actionRef={actionRef}
        rowKey="taskId"
        search={{
          labelWidth: 120,
        }}
        columns={columns}
        request={queryTaskRecord}
      ></ProTable>
    </PageContainer>
  );
};

export default TaskRecords;
