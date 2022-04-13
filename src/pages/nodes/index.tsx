import { nodeConnect, nodesList, nodeStat, nodeStop, syncScript } from '@/services/node';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card, Drawer, Form, Input, message, Modal, Space, Table, Tabs } from 'antd';
import copy from 'copy-to-clipboard';
import { useEffect, useRef, useState } from 'react';
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import './index.less';

interface tableType {
  id: string,
  name: string,
  addr: string
}

const { TabPane } = Tabs;

export default function IndexPage() {

  const [form] = Form.useForm();
  const [connectForm] = Form.useForm();
  const [stopForm] = Form.useForm();
  const [dataSource, setDataSource] = useState()
  const [adjacentDataSource, setAdjacentDataSource] = useState([])
  const [nodeStatData, setNodeStatData] = useState()
  const [conncetModalVisible, setConncetModalVisible] = useState(false)
  const [stopModalVisible, setStopModalVisible] = useState(false)
  const [nodeModalVisible, setNodeModalVisible] = useState(false)
  const [statusVisible, setStatusVisible] = useState(false)
  const [resultData, setResultData] = useState()
  const [loading, setLoading] = useState(false)


  const curRecord = useRef<null | tableType>()
  const curJSONInput = useRef()

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  }
  const handleConnect = (record) => {
    setConncetModalVisible(true)
    curRecord.current = record
  }
  const handleStop = (record) => {
    setStopModalVisible(true)
    curRecord.current = record
  }
  const handleNode = (record) => {
    setNodeModalVisible(true)
    curRecord.current = record
    nodesList({ nodeid: curRecord?.current?.id }).then(res => setAdjacentDataSource(res?.data?.Nodes))
  }

  const handleStatus = (record) => {
    setStatusVisible(true)
    curRecord.current = record
    nodeStat({ nodeid: curRecord.current?.id }).then(res => setNodeStatData(res?.data))
  }

  const handleOk = (type) => {
    const connectFun = () => {
      const params = {
        nodeid: curRecord.current?.id
      }
      nodeConnect({ ...params, ...connectForm.getFieldsValue() }).then(res => {
        if (res?.data?.msg == 'OK') {
          message.success('成功')
          handleCancel()
        }
      }
      )
    }

    const stopFun = () => {
      console.log(stopForm.getFieldsValue());
      const params = {
        nodeid: curRecord.current?.id
      }
      nodeStop({ ...params, ...stopForm.getFieldsValue() }).then(res => {
        if (res?.data?.msg == 'OK') {
          message.success('成功')
          handleCancel()
        }
      })
    }

    switch (type) {
      case 'connect': connectFun()

        break;
      case 'stop': stopFun()

        break;
      default:
        break;
    }
  }

  const handleCancel = () => {
    setConncetModalVisible(false)
    setStopModalVisible(false)
    setNodeModalVisible(false)
    setAdjacentDataSource([])
    connectForm.resetFields()
    stopForm.resetFields()
    curRecord.current = null
  }

  const onClose = () => {
    setStatusVisible(false)
  }


  const handleScript = () => {
    syncScript(curJSONInput.current).then(res => setResultData(res))
  }

  const handleJSONChange = (e) => {
    curJSONInput.current = e.jsObject
  }

  const copyJSON = () => {
    const json = resultData ?? ''
    copy(JSON.stringify(json));
    message.success('复制成功')
  }

  const onFinish = (v) => {
    setLoading(true)
    nodesList(v).then(res => setDataSource(res?.data?.Nodes)).finally(() => {
      setLoading(false)
    })
  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'ID',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'Name',
    },
    {
      title: 'Addr',
      dataIndex: 'addr',
      key: 'Addr',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleConnect(record)} key="connect">连接</a>
          <a onClick={() => handleStop(record)} key="stop">断开</a>
          <a onClick={() => handleNode(record)} key="node">相邻节点</a>
          <a onClick={() => handleStatus(record)} key="stat">状态</a>
        </Space>
      ),
    },
  ];

  const adjacentColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'ID',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'Name',
    },
    {
      title: 'Addr',
      dataIndex: 'addr',
      key: 'Addr',
    }
  ]

  useEffect(() => {
    nodesList().then(res => setDataSource(res?.data?.Nodes ?? []))
  }, [])
  return (
    <>
      <div className='header'>
        <p>节点管理系统</p>
      </div>

      <div className='content'>
        <Tabs defaultActiveKey="1">
          <TabPane tab="节点操作" key="1">
            <Card style={{ marginBottom: '20px' }}>
              <div className='search-form'>
                <Form
                  layout={'inline'}
                  form={form}
                  onFinish={onFinish}
                >
                  <Form.Item label="节点 ID" name={'nodeid'}>
                    <Input placeholder="请输入节点 ID" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>查询</Button>
                  </Form.Item>
                </Form>
              </div>
            </Card>
            <div className='table-form'>
              <Card>
                <Table dataSource={dataSource} columns={columns} key="data" loading={loading} />
              </Card>
            </div>
          </TabPane>
          <TabPane tab="脚本操作" key="2">
            <div className='json-wrap'>
              <div className='input-wrap'>
                <p>请输入JSON</p>
                <JSONInput
                  id="a_unique_id_0"
                  locale={locale}
                  height="550px"
                  onChange={(e) => handleJSONChange(e)}
                />
                <div className='input-wrap-btn'>
                  <Button type="primary" onClick={() => handleScript()}> 提交</Button>
                </div>
              </div>
              <div className='arrow'>
                <ArrowRightOutlined />
              </div>
              <div className='result-wrap'>
                <p>结果展示</p>
                <JSONInput
                  id="a_unique_id_1"
                  locale={locale}
                  placeholder={resultData}
                  height="550px"
                />
                <div className='result-wrap-btn'>
                  <Button type="primary" onClick={() => copyJSON()}>复制</Button>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>

      <Modal title="连接节点" visible={conncetModalVisible} cancelText="取消" okText="确定" onOk={() => handleOk('connect')} onCancel={handleCancel}>
        <Form
          {...formItemLayout}
          layout={'horizontal'}
          form={connectForm}
        >
          <Form.Item label="远程地址" name="remoteAddr">
            <Input placeholder="请输入远程地址" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal title="断开节点" visible={stopModalVisible} cancelText="取消" okText="确定" onOk={() => handleOk('stop')} onCancel={handleCancel}>
        <Form
          {...formItemLayout}
          layout={'horizontal'}
          form={stopForm}
        >
          <Form.Item label="远程节点 ID" name='remoteId'>
            <Input placeholder="请输入远程节点 ID" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal title="相邻节点" width={'70%'} footer={null} visible={nodeModalVisible} onCancel={handleCancel}>
        <Table dataSource={adjacentDataSource} columns={adjacentColumns} key="adjacent" />
      </Modal>

      <Drawer title="状态信息" placement="right" width={'40%'} onClose={onClose} visible={statusVisible}>
        <JSONInput
          id="a_unique_id_2"
          locale={locale}
          placeholder={nodeStatData}
          width='100%'
          height='100%'
        />
      </Drawer>
    </>
  );
}
