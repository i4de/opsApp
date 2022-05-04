import { PageContainer } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { AppListItem } from './data';
import { singleAppQuery, appUpdate, appUpdateType } from '@/services/app';
import { history, useRouteMatch } from 'umi';
import { Card, message } from 'antd';
import ProForm, { ProFormSwitch, ProFormText } from '@ant-design/pro-form';

const UpdateApplication: React.FC = () => {
  const match = useRouteMatch();
  const appid = match.params['id'];

  const empty: AppListItem = {
    appid: '',
    apiKey: '',
    secKey: '',
    owner: '',
    name: '',
    status: '',
  };
  const [appItem, setappItem] = useState<AppListItem>(empty);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    singleAppQuery(appid).then((res) => {
      if (res.data == null) {
        history.push({ pathname: '/404' });
        return;
      }
      const newApp: AppListItem = {
        appid: res.data.appid,
        apiKey: res.data.apikey,
        name: res.data.name,
        owner: res.data.owner,
        ownerUid: res.data.ownerUid,
        secKey: res.data.seckey,
        status: res.data.status,
      };
      console.log(newApp);
      setappItem(newApp);
      setLoading(true);
    });
  }, []);

  return (
    <PageContainer>
      {loading && (
        <Card bordered={false}>
          <ProForm
            initialValues={appItem}
            onFinish={async (values) => {
              console.log(values)
              const params: appUpdateType = {
                appid: appid,
                name: values['name'],
                owner: values['owner'],
                status: values['status'] ? 1 : 2,
              };
              console.log(params);
              await appUpdate(params).then((res) => {
                if (res.code == 0) {
                  message.info('更新成功');
                } else {
                  message.error('更新失败:' + res.message);
                }
              });
            }}
          >
            <ProFormText
              width="md"
              label="APP名称"
              name="name"
              rules={[
                {
                  required: true,
                  message: '请输入APP名称',
                },
              ]}
            />
            <ProFormText width="md" name="owner" label="拥有者" placeholder="请输入拥有者" />
            <ProFormSwitch name="status" label="Switch" />
          </ProForm>
        </Card>
      )}
    </PageContainer>
  );
};

export default UpdateApplication;
