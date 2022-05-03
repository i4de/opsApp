import React, { useRef, useState, useCallback } from 'react';
import {
  Card,
  Result,
  Button,
  Descriptions,
  Divider,
  Alert,
  Statistic,
  Steps,
  message,
  Table,
} from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, {
  ProFormRadio,
  ProFormTextArea,
  ProFormDigit,
  ProFormSelect,
  ProFormInstance,
  ProFormText,
  StepsForm,
} from '@ant-design/pro-form';

import ProCard from '@ant-design/pro-card';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { vmItemType, vmQuery, vmQueryType } from '@/services/vm';
import ProTable from '@ant-design/pro-table';
import TaskStore from './store';
import { observer, useObserver } from 'mobx-react';
import Field from '@ant-design/pro-field';
import { scriptTaskType, createScriptAsyncTask } from '@/services/task';
import { history } from 'umi';

const { Step } = Steps;

const TaskAdd: React.FC = () => {
  return useObserver(() => (
    <ProCard>
      <ProForm
        initialValues={TaskStore.task}
        submitter={{
          // 配置按钮文本
          searchConfig: {
            resetText: '',
            submitText: '下一步',
          },
          resetButtonProps: {
            style: {
              // 隐藏重置按钮
              display: 'none',
            },
          },
        }}
        onFinish={(values) => {
          TaskStore.task = values;
          TaskStore.next();
        }}
      >
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
      </ProForm>
    </ProCard>
  ));
};

const ScriptAdd: React.FC = () => {
  return (
    <Card bordered={false} style={{ marginTop: '20px' }}>
      <ProForm
        initialValues={TaskStore.script}
        submitter={{
          // 配置按钮文本
          searchConfig: {
            resetText: '',
            submitText: '下一步',
          },
          resetButtonProps: {
            style: {
              // 隐藏重置按钮
              display: 'none',
            },
          },
          render: (props, doms) => {
            console.log(props);

            return [
              <Button
                onClick={() => {
                  TaskStore.pre();
                }}
              >
                上一步
              </Button>,
              <Button
                type="primary"
                onClick={() => {
                  props.form?.submit?.();
                }}
              >
                下一步
              </Button>,
            ];
          },
        }}
        onFinish={(values) => {
          TaskStore.script = values;
          TaskStore.next();
        }}
      >
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
      </ProForm>
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
    if (res.code != 0) {
      message.error('error:' + res.message);
    }
    r = {
      data: res?.data?.list,
      success: true,
      total: res?.data?.total,
    };
  });

  return r;
};

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

const SelectPeer: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<vmItemType[]>([]);

  let selectPeer: string[] = TaskStore.vmlist.map((item) => item.uuid);
  console.log('select peer:', selectPeer);
  return useObserver(() => (
    <Card style={{ marginTop: '20px' }} bordered={false}>
      <ProForm
        submitter={{
          render: (props, doms) => {
            console.log(props);

            return [
              <Button
                onClick={() => {
                  TaskStore.pre();
                }}
              >
                上一步
              </Button>,
              <Button
                type="primary"
                onClick={() => {
                  props.form?.submit?.();
                }}
              >
                下一步
              </Button>,
            ];
          },
        }}
        onFinish={(values) => {
          if (TaskStore.vmlist.length == 0) {
            message.warn('你没有选择任何主机');
            return;
          }
          TaskStore.next();
        }}
      >
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
            defaultSelectedRowKeys: selectPeer,
            onChange: (_, selectedRows) => {
              TaskStore.vmlist = selectedRows;
            },
          }}
        ></ProTable>
      </ProForm>
    </Card>
  ));
};

const handleCreateScriptTask = async () => {
  let peers: string[] = TaskStore.vmlist.map((item) => item.peerId);
  let q: scriptTaskType = {
    name: TaskStore.task.name,
    peers: peers,
    content: TaskStore.script,
    creater: 'luxingwen',
  };
  console.log('haneerr->', q);

  await createScriptAsyncTask(q).then((res) => {
    console.log('res --> ', res);
    TaskStore.res = res;
  });
};

const CreateTaskResult: React.FC = () => {
  return (
    <Card bordered={false}>
      <ProForm
        submitter={{
          render: (props, doms) => {
            console.log(props);

            return [
              <Button
                onClick={() => {
                  TaskStore.pre();
                }}
              >
                上一步
              </Button>,
              <Button
                type="primary"
                onClick={async () => {
                  await handleCreateScriptTask();
                  TaskStore.next();
                }}
              >
                立即执行
              </Button>,
              <Button
                type="dashed"
                onClick={() => {
                  props.form?.submit?.();
                }}
              >
                另存预设
              </Button>,
            ];
          },
        }}
      >
        <Descriptions column={1}>
          <Descriptions.Item label="任务名称">
            <Field text={TaskStore.task.name} mode="read" />
          </Descriptions.Item>
          <Descriptions.Item label="任务描述">
            <Field text={TaskStore.task.desc} mode="read" />
          </Descriptions.Item>
          <Descriptions.Item label="脚本类型">
            <Field text={TaskStore.script.type} mode="read" />
          </Descriptions.Item>
          <Descriptions.Item label="脚本内容">
            <Field valueType="code" text={TaskStore.script.content} mode="read" />
          </Descriptions.Item>

          <Descriptions.Item label="已选主机列表">
            <Table columns={columns} dataSource={TaskStore.vmlist}></Table>
          </Descriptions.Item>
        </Descriptions>
      </ProForm>
    </Card>
  );
};

const ScriptTaskResult: React.FC = () => {
  return (
    <Card bordered={false}>
      <Result
        status="success"
        title="你已经成功创建任务!"
        subTitle="任务id是:."
        extra={[
          <Button
            type="primary"
            key="console"
            onClick={() => {

              TaskStore.reset();
              
              history.push({
                pathname: '/task/record',
              });
            }}
          >
            去查看任务详情
          </Button>,
        ]}
      />
    </Card>
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
        {TaskStore.step == 4 && <ScriptTaskResult />}
      </Card>
    </PageContainer>
  ));
};

export default ScriptTaskCreate;
