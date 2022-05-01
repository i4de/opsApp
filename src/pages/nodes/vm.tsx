import React, { useState, useRef } from 'react';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { vmItemType, vmQuery, vmQueryType } from '@/services/vm';
import { PageContainer } from '@ant-design/pro-layout';
import { history } from 'umi';
const queryVm = async (params: {
  pageSize: number;
  current: number;
  name: string;
  hostname: string;
}) => {
  let q: vmQueryType = {
    pageNum: params.current,
    pageSize: params.pageSize,
    name: params.name,
    hostname: params.hostname,
  };

  let r = {
    data: [],
    success: false,
    total: 0,
  };
  await vmQuery(q).then((res) => {
    r = {
      data: res?.data?.list,
      success: true,
      total: res?.data?.total,
    };
  });

  return r;
};

const VmList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<vmItemType>[] = [
    {
      title: 'uuid',
      dataIndex: 'uuid',
      tip: '可以自定义',
    },
    {
      title: '节点id',
      dataIndex: 'peerId',
      valueType: 'textarea',
    },
    {
      title: '名称',
      dataIndex: 'name',
      valueType: 'textarea',
    },
    {
      title: 'hostname',
      dataIndex: 'hostname',
      valueType: 'textarea',
    },
    {
      title: 'osType',
      dataIndex: 'osType',
    },
    {
      title: 'osInfo',
      dataIndex: 'osInfo',
      search: false,
    },
    {
      title: 'address',
      dataIndex: 'address',
      search: false,
    },
    {
      title: 'ip',
      dataIndex: 'publicIp',
      search: false,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      search: false,
      render: (_, record) => [<a onClick={() => {
        history.push({
          pathname: '/nodes/vm/file/' + record.peerId,
        });
        
      }}>查看</a>],
    },
  ];

  return (
    <PageContainer>
      <ProTable<vmItemType>
        headerTitle="主机节点信息"
        actionRef={actionRef}
        rowKey="uuid"
        search={{
          labelWidth: 120,
        }}
        columns={columns}
        request={queryVm}
      ></ProTable>
    </PageContainer>
  );
};

export default VmList;
