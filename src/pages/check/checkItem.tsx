import React, { useState, useRef } from 'react';
import { Form, Modal, Button, Card, message } from 'antd';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import {
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProFormRadio,
  ProFormDigit,
  ProFormList,
  ProFormGroup,
} from '@ant-design/pro-form';
import {
  postCheckItemAdd,
  postCheckItemQuery,
  postCheckItemDelete,
} from '@/services/go-ops/xunjianguanli';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { history } from 'umi';

const queryCheckItemList = async (params: {
  pageSize: number;
  current: number;
  name: string;
  type: string;
}) => {
  let q: API.QueryCheckItemReq = {
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
  await postCheckItemQuery(q).then((res) => {
    r = {
      data: res?.data?.list,
      success: true,
      total: res?.data?.total as number,
    };
  });

  return r;
};

const handleRemove = async (list: API.CheckItemRes[]) => {
  let uuids = list.map((item) => item.checkItemId);
  let req: API.DeleteCheckItemReq = {
    checkItemIds: uuids,
  };
  await postCheckItemDelete(req).then((res) => {
    if (res.code == 0) {
      message.info('删除成功');
    } else {
      message.error('删除失败:' + res.message);
    }
  });
};

const CheckItem: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.CheckItemRes[]>([]);
  const [deleteVisible, setDeleteVisible] = useState(false);

  const columns: ProColumns<API.CheckItemRes>[] = [
    {
      title: '检查项id',
      dataIndex: 'checkItemId',
      tip: '检查项id',
      search: false,
      key: 'checkItemId',
    },
    {
      title: '名称',
      dataIndex: 'name',
      valueType: 'textarea',
      key: 'name',
    },
    {
      title: '描述信息',
      dataIndex: 'desc',
      valueType: 'textarea',
      key: 'desc',
    },
    {
      title: '解释器',
      dataIndex: 'cmd',
      valueType: 'textarea',
      key: 'cmd',
    },
    {
        title: '超时时间',
        dataIndex: 'waitTime',
        valueType: 'textarea',
        key: 'waitTime',
      },
    {
      title: '类型',
      dataIndex: 'type',
      valueEnum: {
        shell: 'shell',
        powershell: 'powershell',
      },
      key: 'type',
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      search: false,
      render: (_, record) => [
        <a
          key={'info-' + record.checkItemId}
          onClick={() => {
            history.push({
              pathname: '/checkitem/detail/' + record.checkItemId,
            });
          }}
        >
          查看
        </a>,
        <a
          key={'edit-' + record.checkItemId}
          onClick={() => {
            history.push({
              pathname: '/resource/check/edit/' + record.checkItemId,
            });
          }}
        >
          修改
        </a>,
        <a
          key={'delete-' + record.checkItemId}
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
    <PageContainer content="">
      <ProTable<API.CheckItemRes>
        headerTitle="巡检项管理"
        actionRef={actionRef}
        rowKey="checkItemId"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              history.push({
                pathname: '/resource/check/item/add',
              });
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        columns={columns}
        request={queryCheckItemList}
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

export default CheckItem;
