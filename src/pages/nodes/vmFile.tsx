import React, { useState, useRef, useEffect } from 'react';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { vmItemType, vmQuery, vmQueryType, vmFileList } from '@/services/vm';
import { PageContainer } from '@ant-design/pro-layout';
import VmList from './vm';
import { Card, Table } from 'antd';

const VmFile: React.FC = (props) => {
  const [peerInfo, setPeerInfo] = useState<vmItemType>({});
  const [path, setPath] = useState('./');
  const [files, setFiles] = useState([]);

  const handleChangePath = (reqpath) => {
    let id = peerInfo.peerId;
    vmFileList({ nodeid: id, path: reqpath }).then((res) => {
        console.log('file res:', res);
        setFiles(res?.data?.files);
        setPath(reqpath);
    });
  }

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      valueType: 'textarea',
      render: (_, record) => {
          if(record.type == 'dir') {
              return <a onClick={() => {handleChangePath(record.path + record.name + '/')}}> {record.name} </a>
          }
          return <span>{record.name}</span>;
      }
    },
    {
      title: '大小',
      dataIndex: 'size',
      valueType: 'textarea',
    },
    {
      title: '修改时间',
      dataIndex: 'mtime',
      valueType: 'textarea',
    },
  ];



  useEffect(() => {
    let id = props.match.params.id;
    vmQuery({ peerId: id }).then((res) => {
      if (res.data.total == 0) {
        history.push({ pathname: '/404' });
        return;
      }
      setPeerInfo(() => {
        return res.data.list[0];
      });
    });
    vmFileList({ nodeid: id, path: path }).then((res) => {
      console.log('file res:', res);
      setFiles(res?.data?.files);
    });
  }, []);

  console.log('files:', files);

  return (
    <PageContainer>
      <Card>
          <a>{path}</a>
        <Table columns={columns} dataSource={files} pagination={false}></Table>
      </Card>
    </PageContainer>
  );
};

export default VmFile;
