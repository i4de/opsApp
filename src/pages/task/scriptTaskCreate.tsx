import React, { useRef, useState, useCallback } from 'react';
import { Card, Result, Button, Descriptions, Divider, Alert, Statistic, Steps } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, {
  ProFormRadio,
  ProFormTextArea,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  StepsForm,
} from '@ant-design/pro-form';

import ProCard from '@ant-design/pro-card';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { vmItemType, vmQuery, vmQueryType } from '@/services/vm';
import ProTable from '@ant-design/pro-table';
import TaskStore from './store';
import { observer, useObserver } from 'mobx-react';


const { Step } = Steps;

const TaskAdd: React.FC = () => {
  return useObserver(() => (
    <ProCard>
      <ProFormText
        width="md"
        label="任务名称"
        name="name"
        rules={[
          {
            required: true,
            message: '请输入任务名称',
          },
        ]}
        placeholder="给任务起一个名字"
      />
      <ProFormText
        label="任务描述"
        name="desc"
        rules={[
          {
            required: true,
            message: '请输入任务描述',
          },
        ]}
        placeholder="这个任务是干嘛的"
      />
      <Button
        type="primary"
        onClick={() => {
          TaskStore.next();
        }}
      >
        下一步
      </Button>
    </ProCard>
  ));
};

const ScriptAdd: React.FC = () => {
  return (
    <Card bordered={false} style={{ marginTop: '20px' }}>
      <ProFormRadio.Group
        options={[
          {
            value: 'shell',
            label: 'shell',
          },
          {
            value: 'powershell',
            label: 'powershell',
          },
        ]}
        rules={[
          {
            required: true,
            message: '请选择脚本类型',
          },
        ]}
        label="脚本类型"
        name="type"
      />
      <ProFormTextArea
        label="脚本内容"
        name="content"
        fieldProps={{
          autoSize: { minRows: 6, maxRows: 50 },
        }}
        rules={[
          {
            required: true,
            message: '请输入脚本内容',
          },
        ]}
        placeholder="这里填写脚本内容"
      />
      <Button
        onClick={() => {
          TaskStore.pre();
        }}
      >
        上一步
      </Button>

      <Button
        type="primary"
        onClick={() => {
          TaskStore.next();
        }}
      >
        下一步
      </Button>
    </Card>
  );
};

const queryVm = async (params: {
  pageSize: number;
  current: number;
  name: string;
  hostname: string;
}) => {
  let q: vmQueryType = {
    pageNum: params.current,
    pageSize: params.pageSize,
    name: params.name,
    hostname: params.hostname,
  };

  let r = {
    data: [],
    success: false,
    total: 0,
  };
  await vmQuery(q).then((res) => {
    r = {
      data: res?.data?.list,
      success: true,
      total: res?.data?.total,
    };
  });

  return r;
};

const SelectPeer: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<vmItemType>[] = [
    {
      title: '节点id',
      dataIndex: 'peerId',
      valueType: 'textarea',
    },
    {
      title: '名称',
      dataIndex: 'name',
      valueType: 'textarea',
    },
    {
      title: 'hostname',
      dataIndex: 'hostname',
      valueType: 'textarea',
    },

    {
      title: 'osInfo',
      dataIndex: 'osInfo',
      search: false,
    },
    {
      title: 'ip',
      dataIndex: 'publicIp',
      search: false,
    },
  ];

  return useObserver(() => (
    <Card style={{ marginTop: '20px' }} bordered={false}>
      <ProTable<vmItemType>
        headerTitle="主机节点信息"
        actionRef={actionRef}
        rowKey="uuid"
        search={{
          labelWidth: 120,
        }}
        columns={columns}
        request={queryVm}
        rowSelection={{
          onChange: (_, selectedRows) => {
            //setSelectedRows(selectedRows);
          },
        }}
      ></ProTable>
      <Button
        onClick={() => {
          TaskStore.pre();
        }}
      >
        上一步
      </Button>

      <Button
        type="primary"
        onClick={() => {
          TaskStore.next();
        }}
      >
        下一步
      </Button>
    </Card>
  ));
};

const CreateTaskResult: React.FC = () => {
  return (
    <>
      <h1>结果</h1>
      <Button
        onClick={() => {
          TaskStore.pre();
        }}
      >
        上一步
      </Button>

      <Button
        onClick={() => {
          TaskStore.next();
        }}
      >
        下一步
      </Button>
    </>
  );
};

const ScriptTaskCreate: React.FC = () => {
  return useObserver(() => (
    <PageContainer>
      <Card>
        <Steps current={TaskStore.step}>
          <Step title="填写任务信息" description=""></Step>
          <Step title="填写脚本信息" description="" />
          <Step title="选择节点" description="" />
          <Step title="预览任务" description="" />
          <Step title="完成" description="" />
        </Steps>
        {TaskStore.step == 0 && <TaskAdd />}
        {TaskStore.step == 1 && <ScriptAdd />}
        {TaskStore.step == 2 && <SelectPeer />}
        {TaskStore.step == 3 && <CreateTaskResult />}
      </Card>
    </PageContainer>
  ));
};

export default ScriptTaskCreate;
