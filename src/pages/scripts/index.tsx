import { scriptQueryType, queryScripts, deleteScripts, scriptDeleteType } from '@/services/scripts';
import React, { useState, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal, message } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { ScriptListItem, TableListPagination } from './data';
import { history } from "umi"

const querySciptList = async (params: {
  pageSize: number;
  current: number;
  name: string;
  type: string;
}) => {
  let q: scriptQueryType = {
    pageNum: params.current,
    pageSize: params.pageSize,
    name: params.name,
    type: params.type,
  };

  let r = {
    data: [],
    success: false,
    total: 0,
  };
  await queryScripts(q).then((res) => {
    r = {
      data: res?.data?.list,
      success: true,
      total: res?.data?.total,
    };
  });

  return r;
};

const handleRemove = async (list: ScriptListItem[]) => {
  let uuids = list.map((item) => item.scriptUid);
  let req: scriptDeleteType = {
    scriptIds: uuids,
  };
  await deleteScripts(req).then((res) => {
    if (res.code == 0) {
      message.info('删除成功');
    } else {
      message.error('删除失败:' + res.message);
    }
  });
};

const ScriptList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<ScriptListItem[]>([]);
  const [deleteVisible, setDeleteVisible] = useState(false);

  const columns: ProColumns<ScriptListItem>[] = [
    {
      title: '脚本uid',
      dataIndex: 'scriptUid',
      tip: '脚本uid唯一的id',
      search: false,
    },
    {
      title: '名称',
      dataIndex: 'name',
      valueType: 'textarea',
    },
    {
      title: '描述',
      dataIndex: 'desc',
      valueType: 'textarea',
      search: false,
    },
    {
      title: '类型',
      dataIndex: 'type',
      valueEnum: {
        shell: 'shell',
        powershell:'powershell'
      },
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      search: false,
      render: (_, record) => [
        <a>查看</a>,
        <a>修改</a>,
        <a
          onClick={() => {
            handleRemove([record]);
            actionRef.current?.reloadAndRest?.();
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<ScriptListItem, TableListPagination>
        headerTitle="脚本管理"
        actionRef={actionRef}
        rowKey="scriptUid"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => {
            history.push({
              pathname: '/scripts/add',
            })
          }}>
            <PlusOutlined /> 新建
          </Button>,
        ]}
        columns={columns}
        request={querySciptList}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
            </div>
          }
        >
          <Button
            onClick={async () => {
              setDeleteVisible(true);
            }}
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}
      <Modal
        title=""
        visible={deleteVisible}
        onOk={async () => {
          setDeleteVisible(false);
          await handleRemove(selectedRowsState);
          setSelectedRows([]);
          actionRef.current?.reloadAndRest?.();
        }}
        onCancel={() => {
          setDeleteVisible(false);
        }}
      >
        <p>是否要删除这{selectedRowsState.length}项?</p>
      </Modal>
    </PageContainer>
  );
};

export default ScriptList;
