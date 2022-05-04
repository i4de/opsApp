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
        apiKey: res.data.apiKey,
        name: res.data.name,
        owner: res.data.owner,
        ownerUid: res.data.ownerUid,
        secKey: res.data.secKey,
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
            <Col xs={24} md={2}>
              <p>appid:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak:'break-all', display: 'block' }}>{appItem.appid}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={2}>
              <p>app名称:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak:'break-all', display: 'block' }}>{appItem.name}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={2}>
              <p>apiKey:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak:'break-all', display: 'block' }}>{appItem.apiKey}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={2}>
              <p>secKey:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak:'break-all', display: 'block' }}>{appItem.secKey}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={2}>
              <p>拥有者:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak:'break-all', display: 'block' }}>{appItem.owner}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={2}>
              <p>状态:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak:'break-all', display: 'block' }}>{appItem.status}</p>
            </Col>
          </Row>
        </Card>
      )}
    </PageContainer>
  );
};

export default UpdateApplication;
