import React, { useRef, useState, useCallback } from 'react';
import {
  Card,
  Result,
  Button,
  Descriptions,
  Tabs,
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
  ProFormList,
  ProFormFieldSet,
  ProFormGroup,
} from '@ant-design/pro-form';

import ProCard from '@ant-design/pro-card';
import { ProColumns, ActionType, EditableProTable } from '@ant-design/pro-table';
import { vmItemType, vmQuery, vmQueryType } from '@/services/vm';
import ProTable from '@ant-design/pro-table';
import TaskStore from './store';
import { observer, useObserver } from 'mobx-react';
import Field from '@ant-design/pro-field';
import { scriptTaskType, createScriptAsyncTask } from '@/services/task';
import { history } from 'umi';
import { taskPresetItemType, taskPresetCreate } from '@/services/taskPreset';

const { Step } = Steps;
const { TabPane } = Tabs;

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

const MoreScriptInfo: React.FC = () => {
  let params: String[] = [];
  return (
    <div>
      <ProFormText name="path" label="脚本工作路径" />
      <ProFormText name="cmd" label="解释器" />
      <ProForm.Group>
        <ProFormText name="user" width="md" label="脚本执行的用户" />
        <ProFormSelect
          width="md"
          options={[
            {
              value: 0,
              label: '命令行执行',
            },
            {
              value: 1,
              label: '内容执行',
            },
            {
              value: 2,
              label: '脚本名执行，脚本存在本机',
            },
            {
              value: 3,
              label: '从服务器上下载脚本执行',
            },
          ]}
          name="execway"
          label="脚本执行方式"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDigit name="time" width="md" label="脚本超时时间" fieldProps={{ precision: 0 }} />
        <ProFormText name="ext" width="md" label="文件拓展名" />
      </ProForm.Group>
      <ProFormList
        name="args"
        label="脚本参数"
        initialValue={[]}
        creatorButtonProps={{
          position: 'top',
          creatorButtonText: '新增一条',
        }}
        creatorRecord={{
          param: '',
        }}
      >
        <ProFormText name="param" width="xl" />
      </ProFormList>
      <ProFormList
        name="env"
        label="环境变量"
        deleteIconProps={{
          tooltipText: '删除该参数',
        }}
        creatorButtonProps={{
          creatorButtonText: '增加参数',
        }}
      >
        <ProFormGroup key="group">
          <ProFormText name="key" label="参数名称" />
          <ProFormText name="value" label="默认值" />
          <ProFormText name="desc" label="参数描述" />
        </ProFormGroup>
      </ProFormList>
    </div>
  );
};

const ScriptAdd: React.FC = () => {
  const [showType, setshowType] = useState<boolean>(false);
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
                key="before"
                onClick={() => {
                  TaskStore.pre();
                }}
              >
                上一步
              </Button>,
              <Button
                key="after"
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
        onFinish={(values: Map<string, any>) => {
          if (values.hasOwnProperty('args')) {
            let tempargs =
              values['args'].length == 0 ? [] : values['args'].map((item) => item['param']);
            values['args'] = tempargs;
          }
          if (values.hasOwnProperty('env')) {
            let tempenv = {};
            values['env'].forEach((e) => (tempenv[e['key']] = e['value']));
            values['env'] = tempenv;
          }

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
            {
              value: 'python',
              label: 'python',
            },
            {
              value: 'perl',
              label: 'perl',
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
        {showType && <MoreScriptInfo />}
        <div style={{ marginBottom: '20px' }}>
          <a onClick={() => setshowType(!showType)}> {showType ? '收起' : '更多'}</a>
        </div>
      </ProForm>
    </Card>
  );
};

const FileAdd: React.FC = () => {
  return (
    <>
      <h1>文件下发</h1>
    </>
  );
};

const HostCheckAdd: React.FC = () => {
  return (
    <>
      <h1>巡检</h1>
    </>
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
                key="before"
                onClick={() => {
                  TaskStore.pre();
                }}
              >
                上一步
              </Button>,
              <Button
                key="after"
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

  await createScriptAsyncTask(q).then((res) => {
    TaskStore.res = res;
  });
};

const handleCreateTaskPreset = async () => {
  let peers: string[] = TaskStore.vmlist.map((item) => item.peerId);
  let q: taskPresetItemType = {
    type: 'script',
    name: TaskStore.task.name,
    creater: 'luxingwen',
    content: JSON.stringify(TaskStore.script),
  };
  await taskPresetCreate(q).then((res) => {
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
                onClick={async () => {
                  await handleCreateTaskPreset();
                  TaskStore.next();
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
        subTitle={'任务id是: ' + TaskStore.res.data['taskid']}
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
  const [contentTitle, setContentTitle] = useState('填写脚本信息');

  const tabchange = (key) => {
    if (key == 'script') {
      setContentTitle('填写脚本信息');
      TaskStore.type = 'script';
    }
    if (key == 'file') {
      setContentTitle('填写文件信息');
      TaskStore.type = 'file';
    }
    if (key == 'hostcheck') {
      setContentTitle('填写巡检信息');
      TaskStore.type = 'hostcheck';
    }
  };

  const ScriptContentDom = (props) => {
    if (TaskStore.step != 1) {
      return <></>;
    }

    if (TaskStore.type == '') {
      TaskStore.type = 'script';
    }

    if (TaskStore.type == 'script') {
      return <ScriptAdd />;
    }
    if (TaskStore.type == 'file') {
      return <FileAdd />;
    }
    if (TaskStore.type == 'hostcheck') {
      return <HostCheckAdd />;
    }
    return <></>;
  };

  return useObserver(() => (
    <PageContainer>
      <Card>
        <Tabs defaultActiveKey="script" onChange={tabchange}>
          <TabPane
            tab="脚本任务"
            disabled={TaskStore.type != 'script' && TaskStore.step > 0}
            key="script"
          ></TabPane>
          <TabPane
            tab="文件下发"
            disabled={TaskStore.type != 'file' && TaskStore.step > 0}
            key="file"
          ></TabPane>
          <TabPane
            tab="巡检任务"
            disabled={TaskStore.type != 'hostcheck' && TaskStore.step > 0}
            key="hostcheck"
          ></TabPane>
        </Tabs>

        <Steps current={TaskStore.step}>
          <Step title="填写任务信息" description=""></Step>
          <Step title={contentTitle} description="" />
          <Step title="选择节点" description="" />
          <Step title="预览任务" description="" />
          <Step title="完成" description="" />
        </Steps>
        {TaskStore.step == 0 && <TaskAdd />}
        <ScriptContentDom />
        {TaskStore.step == 2 && <SelectPeer />}
        {TaskStore.step == 3 && <CreateTaskResult />}
        {TaskStore.step == 4 && <ScriptTaskResult />}
      </Card>
    </PageContainer>
  ));
};

export default ScriptTaskCreate;
