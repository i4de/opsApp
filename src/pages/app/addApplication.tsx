import { PageContainer } from '@ant-design/pro-layout';
import Card from 'antd/lib/card';
import React from 'react';
import { ProForm, ProFormText } from '@ant-design/pro-form';
// import { createScripts } from '@/services/scripts';
import {appAddType, appCreate} from '@/services/app'
import { message } from 'antd';

const onFinish = async (values: appAddType) => {
    await appCreate(values).then((res) => {
      if (res.code == 0) {
        message.info('添加成功');
      } else {
        message.error('添加失败:' + res.message);
      }
    });
  };

const AddApplication: React.FC = () => {
  return (
    <PageContainer content="">
      <Card bordered={false}>
        <ProForm onFinish={onFinish}>
          <ProFormText
            width="md"
            label="应用名称"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入应用名称',
              },
            ]}
            placeholder="给应用起个名字"
          />
          <ProFormText
            label="拥有者"
            name="owner"
            rules={[
              {
                required: true,
                message: '请输入应用归属',
              },
            ]}
            placeholder="请输入应用拥有者"
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default AddApplication;
