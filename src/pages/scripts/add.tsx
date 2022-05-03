import { Form, Input, Button, Card, message } from 'antd';
import React from 'react';
import { createScripts } from '@/services/scripts';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import {
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProFormRadio,
  ProFormDigit,
} from '@ant-design/pro-form';

const onFinish = async (values: Record<string, any>) => {
  await createScripts(values).then((res) => {
    if (res.code == 0) {
      message.info('添加成功');
    } else {
      message.error('添加失败:' + res.message);
    }
  });
};

const ScriptAdd: React.FC = () => {
  return (
    <PageContainer content="">
      <Card bordered={false}>
        <ProForm onFinish={onFinish}>
          <ProFormText
            width="md"
            label="脚本名称"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入脚本名称',
              },
            ]}
            placeholder="给脚本起一个名字"
          />
          <ProFormText
            label="脚本描述"
            name="desc"
            rules={[
              {
                required: true,
                message: '请输入脚本描述信息',
              },
            ]}
            placeholder="这个脚本是干嘛的？"
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
    </PageContainer>
  );
};

export default ScriptAdd;
