import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import {
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProFormRadio,
  ProFormDigit,
  ProFormList,
  ProFormGroup,
} from '@ant-design/pro-form';

import { postCheckItemAdd } from '@/services/go-ops/xunjianguanli';

const onFinish = async (values: API.AddCheckItemReq) => {
    await postCheckItemAdd(values).then((res) => {
      if (res.code == 0) {
        message.info('添加成功');
      } else {
        message.error('添加失败:' + res.message);
      }
    });
  };


const CheckItemAdd: React.FC = () => {
  return (
    <PageContainer content="">
      <Card bordered={false}>
        <ProForm onFinish={onFinish}>
          <ProFormText
            width="md"
            label="巡检项名称"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入巡检项名称',
              },
            ]}
            placeholder="给这个巡检项取起一个名字"
          />
          <ProFormText
            label="巡检项描述"
            name="desc"
            rules={[
              {
                required: true,
                message: '请输入巡检描述信息',
              },
            ]}
            placeholder="这个巡检项是干嘛的？"
          />
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
          <ProFormText label="脚本解释器" name="cmd" placeholder="你可以自定义脚本的解释器" />

          <ProFormDigit label="超时时间" name="waitTime" width="sm" />

          <ProFormTextArea
            label="巡检脚本内容"
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
    </PageContainer>
  );
};

export default CheckItemAdd;
