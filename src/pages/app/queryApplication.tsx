import { PageContainer } from '@ant-design/pro-layout';
import { AppTableListPagination, AppListItem } from './data';
import React, { useRef, useState } from 'react';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { history } from 'umi';
import { appDelete, appDeleteType, appQuery, appQueryType } from '@/services/app';
import { message, Popconfirm } from 'antd';

const handleRemove = async (list: AppListItem[]) => {
  let uuids = list.map((item) => item.appid);
  let req: appDeleteType = {
    appids: uuids,
  };
  await appDelete(req).then((res) => {
    if (res.code == 0) {
      message.info('删除成功');
    } else {
      message.error('删除失败:' + res.message);
    }
  });
};

const QueryApplication: React.FC = () => {
  // const [setSelectedRows] = useState<AppListItem[]>([]);

  const valueEnum = {
    0: 'close',
    1: 'open',
  };
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<AppListItem>[] = [
    {
      title: '应用名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '拥有者',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      disable: true,
      search: false,
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      filters: true,
      onFilter: true,
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        close: {
          text: '未启用',
          status: 'Error',
        },
        open: {
          text: '启用',
          status: 'Success',
        },
      },
    },

    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a
          key="update"
          onClick={() => {
            history.push({ pathname: '/app/update/' + record.appid });
          }}
        >
          修改
        </a>,
        <Popconfirm
          key="delete"
          title="确认删除App吗？"
          onConfirm={() => {
            handleRemove([record]);
            actionRef.current?.reloadAndRest?.();
          }}
        >
          <a href="#">删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<AppListItem, AppTableListPagination>
        headerTitle="脚本管理"
        actionRef={actionRef}
        rowKey={(record) => record.appid}
        search={{
          labelWidth: 120,
        }}
        request={async (params: AppTableListPagination, sort, filter) => {
          let q: appQueryType = {
            name: params.name,
            owner: params.owner,
            pageNum: params.current,
            pageSize: params.pageSize,
          };
          var data: AppListItem[] = [];
          let r = {
            data: data,
            success: false,
            total: 0,
          };
          await appQuery(q).then((res) => {
            const templist: AppListItem[] = res?.data?.list;
            templist.forEach((item) => (item.status = valueEnum[item.status]));
            r = {
              data: templist,
              success: true,
              total: res?.data?.total,
            };
          });
          return r;
        }}
        columns={columns}
      />
    </PageContainer>
  );
};

export default QueryApplication;
