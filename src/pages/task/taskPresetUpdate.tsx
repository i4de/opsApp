import { PageContainer } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { TaskDetail, ContentObj } from './data';
import { history, useRouteMatch } from 'umi';
import { Card, message } from 'antd';
import ProForm, { ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import {
  taskPresetQuery,
  taskPresetQueryType,
  taskPresetUpdate,
  taskPresetItemType,
} from '@/services/taskPreset';

const UpdateApplication: React.FC = () => {
  const match = useRouteMatch();
  const uuid: string = match.params['id'];
  const params: taskPresetQueryType = {
    uuid: uuid,
  };

  const empty: TaskDetail = {
    uuid: '',
    type: '',
    name: '',
    creater: '',
    content_type: '',
    content_text: '',
    created: '',
    updated: '',
    updater: '',
  };
  const [taskInfo, setTaskItem] = useState<TaskDetail>(empty);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    taskPresetQuery(params).then((res) => {
      if (res.data == null) {
        history.push({ pathname: '/404' });
        return;
      }
      let json: ContentObj = JSON.parse(res.data.list[0].content);

      let resDetail: TaskDetail = {
        uuid: res.data.list[0].uuid,
        type: res.data.list[0].type,
        name: res.data.list[0].type,
        creater: res.data.list[0].creater,
        content_type: json.type,
        content_text: json.content,
        created: res.data.list[0].created,
        updated: res.data.list[0].updated,
        updater: res.data.list[0].updater,
      };
      console.log(resDetail);
      setTaskItem(resDetail);
      setLoading(true);
    });
  }, []);

  return (
    <PageContainer>
      {loading && (
        <Card bordered={false}>
          <ProForm
            initialValues={taskInfo}
            onFinish={async (values) => {
              console.log(values);
              const queryParams: taskPresetItemType = {
                uuid: uuid,
                type: values.type,
                name: values.name,
                content: JSON.stringify({
                  type: values.content_type,
                  content: values.content_text,
                }),
              };
              console.log(queryParams);
              await taskPresetUpdate(queryParams).then((res) => {
                if (res.code == 0) {
                  message.info('????????????');
                } else {
                  message.error('????????????:' + res.message);
                }
              });
            }}
          >
            <ProFormText
              name="uuid"
              disabled
              label="uuid:"
              initialValue={{uuid}}
            />
            <ProFormText  name="name" label="?????????" placeholder="??????????????????" />
            <ProFormText  name="type" label="????????????" placeholder="?????????????????????:" />
            <ProForm.Group>
            <ProFormText
              name="creater"
              width="md"
              disabled
              label="?????????:"
            />
            <ProFormText
              name="created"
              width="md"
              disabled
              label="????????????:"
            />
            </ProForm.Group>
            <ProForm.Group>
            <ProFormText
              name="updater"
              width="md"
              disabled
              label="?????????:"
            />
            <ProFormText
              name="updated"
              width="md"
              disabled
              label="????????????:"
            />
            </ProForm.Group>
            <ProFormTextArea
              label="????????????"
              name="content_text"
              fieldProps={{
                autoSize: { minRows: 6, maxRows: 50 },
              }}
              rules={[
                {
                  required: true,
                  message: '?????????????????????',
                },
              ]}
              placeholder="????????????????????????"
            />
          </ProForm>
        </Card>
      )}
    </PageContainer>
  );
};

export default UpdateApplication;
