import { Form, Input, Button, Card, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { updateScripts, queryScripts } from '@/services/scripts';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import {
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProFormRadio,
  ProFormDigit,
  ProFormList,
  ProFormGroup
} from '@ant-design/pro-form';
import { history } from 'umi';
import type { ScriptListItem } from './data';

const onFinish = async (scriptId: string, values: Record<string, any>) => {
  values['scriptId'] = scriptId;
  await updateScripts(values).then((res) => {
    if (res.code == 0) {
      message.info('更新成功');
    } else {
      message.error('更新失败:' + res.message);
    }
  });
};

const ScriptEdit: React.FC = (props) => {
  const [script, setScript] = useState<ScriptListItem>({});
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    console.log(props.match.params.id);
    let id = props.match.params.id;
    await queryScripts({ scriptId: id }).then((res) => {
      console.log('res:', res);
      if (res.data.total == 0 || res.data.list.length == 0) {
        history.push({ pathname: '/404' });
        return;
      }
      let itemScript = res.data.list[0];
      if (itemScript.args != "") {
        itemScript.args = JSON.parse(itemScript.args);
      }
      setScript(() => {
        return itemScript;
      });

      setLoading(true);
    });
  }, []);

  return (
    <PageContainer content="修改脚本">
      {loading && (
        <Card bordered={false}>
          <ProForm
            onFinish={(values) => {
              onFinish(script.scriptUid, values);
            }}
            initialValues={script}
          >
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

            <ProFormList
              name="args"
              label="脚本参数信息"
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
          </ProForm>
        </Card>
      )}
    </PageContainer>
  );
};

export default ScriptEdit;
