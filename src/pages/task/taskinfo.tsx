import React, { useEffect, useState } from 'react';
import { postV1MTaskInfo } from '@/services/go-ops/Taskguanli';
import { history } from 'umi';

const TaskInfo: React.FC = (props) => {
  const [taskContent, setTaskContent] = useState({});
  const [subList, setSubList] = useState([]);
  useEffect(() => {
    console.log(props.match.params.id);
    let id = props.match.params.id;
    postV1MTaskInfo({ taskid: id }).then((res) => {
      if (res.code != 0) {
        history.push({ pathname: '/404' });
        return;
      }

      let task = res.data;
      let taskContent = JSON.parse(task?.task?.content as string);

      setTaskContent(taskContent);

      let subList = task?.sublist?.map((item) => {
        let taskItem = item.task;
        let itemContent = JSON.parse(taskItem?.content);
        taskItem.content = itemContent;
        console.log('task item:', taskItem);
        return taskItem;
      });

      let peerids = subList?.map((item) => {
        return item?.content.peerId;
      });
      setSubList(subList);
    });
  }, []);



  return (
    <>
      <h1>hh</h1>
    </>
  );
};

export default TaskInfo;
