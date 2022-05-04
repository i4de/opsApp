import { PageContainer } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { AppListItem } from './data';
import { singleAppQuery } from '@/services/app';
import { history, useRouteMatch } from 'umi';
import { Card, Col, Row } from 'antd';

const UpdateApplication: React.FC = () => {
  const match = useRouteMatch();
  const appid = match.params['id'];

  const empty: AppListItem = {
    appid: '',
    apikey: '',
    seckey: '',
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
        apikey: res.data.apikey,
        name: res.data.name,
        owner: res.data.owner,
        ownerUid: res.data.ownerUid,
        seckey: res.data.seckey,
        status: res.data.status == '1' ? '已启用' : '未启用',
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
          <Row>
            <Col span={2}>
              <p>appid:</p>
            </Col>
            <Col span={22}>{appItem.appid}</Col>
          </Row>
          <Row>
            <Col span={2}>
              <p>app名称:</p>
            </Col>
            <Col span={22}>{appItem.name}</Col>
          </Row>
          <Row>
            <Col span={2}>
              <p>拥有者:</p>
            </Col>
            <Col span={22}>{appItem.owner}</Col>
          </Row>
          <Row>
            <Col span={2}>
              <p>状态:</p>
            </Col>
            <Col span={22}>{appItem.status}</Col>
          </Row>
        </Card>
      )}
    </PageContainer>
  );
};

export default UpdateApplication;
