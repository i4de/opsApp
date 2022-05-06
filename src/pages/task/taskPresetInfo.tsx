import { PageContainer } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { history, useRouteMatch } from 'umi';
import { Button, Card, Col, Row } from 'antd';
import { TaskDetail, ContentObj } from './data';
import { taskPresetQuery, taskPresetQueryType } from '@/services/taskPreset';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
          <Row>
            <Col xs={24} md={2}>
              <p>uuid:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak: 'break-all', display: 'block' }}>{taskInfo.uuid}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={2}>
              <p>任务名:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak: 'break-all', display: 'block' }}>{taskInfo.name}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={2}>
              <p>任务类型:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak: 'break-all', display: 'block' }}>{taskInfo.type}</p>
            </Col>
          </Row>

          <Row>
            <Col xs={24} md={2}>
              <p>创建人:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak: 'break-all', display: 'block' }}>{taskInfo.creater}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={2}>
              <p>创建时间:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak: 'break-all', display: 'block' }}>{taskInfo.created}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={2}>
              <p>更新人:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak: 'break-all', display: 'block' }}>{taskInfo.updater}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={2}>
              <p>更新时间:</p>
            </Col>
            <Col xs={24} md={22}>
              <p style={{ wordBreak: 'break-all', display: 'block' }}>{taskInfo.updated}</p>
            </Col>
          </Row>
          {/* <div>
            脚本类型: <span> {taskInfo.content_type} </span>
          </div> */}
          <div>
            脚本内容：
            <SyntaxHighlighter language={taskInfo.content_type} style={dark}>
              {taskInfo.content_text}
            </SyntaxHighlighter>
          </div>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/task/presetupdate/' + uuid,
              });
            }}
          >
            编辑
          </Button>
        </Card>
      )}
    </PageContainer>
  );
};

export default UpdateApplication;
