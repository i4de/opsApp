import React, { useEffect, useState } from 'react';
import { postV1MTaskInfo } from '@/services/go-ops/Taskguanli';
import { history } from 'umi';
import { Card, Descriptions, Table, Tag } from 'antd';

const TaskInfo: React.FC = (props) => {
  const [taskContent, setTaskContent] = useState({});
  const [taskInfo, setTaskInfo] = useState<API.Task>({});
  const [subTaskList, setSubTaskList] = useState<API.Task[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    console.log(props.match.params.id);
    let id = props.match.params.id;
    postV1MTaskInfo({ taskid: id }).then((res) => {
      if (res.code != 0) {
        history.push({ pathname: '/404' });
        return;
      }

      let task = res.data;

      setTaskInfo(task?.task as API.Task);

      let taskContent = JSON.parse(task?.task?.content as string);

      setTaskContent(taskContent);

      let subList = task?.sublist?.map((item) => {
        let taskItem = item.task;
        let itemContent = JSON.parse(taskItem?.content);
        taskItem.content = itemContent;
        return taskItem;
      });

      let peerids = subList?.map((item) => {
        return item?.content.peerId;
      });
      setSubTaskList(subList as API.Task[]);
      console.log('subList:', subList);
      setLoading(false);
    });
  }, []);

  console.log('sub task list:', subTaskList);

  const scriptItemColunms = [
    {
      title: '节点id',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'code',
      dataIndex: 'code',
      key: 'code',
      render: (_, record) => {
        return <Tag color="green" key={record.taskId + '-code'}>{record.content.resCmd.code}</Tag>;
      },
    },
    {
      title: 'exitCode',
      dataIndex: 'exitCode',
      key: 'exitCode',
      render: (_, record) => {
        return <p key={record.taskId + '-exitCode'}>{record.content.resCmd.exitCode}</p>;
      },
    },
    {
      title: 'stdout',
      dataIndex: 'stdout',
      key: 'stdout',
      render: (_, record) => {
        return <p key={record.taskId + '-stdout'}>{record.content.resCmd.stdout}</p>;
      },
    },
    {
      title: 'stderr',
      dataIndex: 'stderr',
      key: 'stderr',
      render: (_, record) => {
        return <p key={record.taskId + '-stderr'}>{record.content.resCmd.stderr}</p>;
      },
    },
  ];

  return (
    <>
      <Card>
        <Descriptions title="任务详情">
          <Descriptions.Item label="任务名称">{taskInfo.name}</Descriptions.Item>
          <Descriptions.Item label="任务id">{taskInfo.taskId}</Descriptions.Item>
          <Descriptions.Item label="状态">{taskInfo.status}</Descriptions.Item>
          <Descriptions.Item label="类型">{taskInfo.type}</Descriptions.Item>
          <Descriptions.Item label="创建人">{taskInfo.creater}</Descriptions.Item>
          <Descriptions.Item label="创建时间">{taskInfo.created}</Descriptions.Item>
        </Descriptions>

        <Descriptions title="执行记录"></Descriptions>
        <Table dataSource={subTaskList} columns={scriptItemColunms} loading={loading} key="taskId"></Table>
      </Card>
    </>
  );
};

export default TaskInfo;
