import React, { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Space,
    Switch,
} from 'antd';
import './index.less';
const { TextArea } = Input;

const FormSizeDemo = () => {


    const [scriptForm] = Form.useForm();

    const createScriptTask = () => {
        console.log(scriptForm.getFieldsValue());
    }

    return (
        <Form
            labelCol={{
                span: 2,
            }}
            wrapperCol={{
                span: 8,
            }}
            layout="horizontal"
            form={scriptForm}
        >
            <Form.Item label="任务名称" name="name">
                <Input />
            </Form.Item>
            <Form.Item label="创建人" name="creater">
                <Input />
            </Form.Item>
            <Form.Item label="脚本工作路径" name='path' >
                <Input />
            </Form.Item>
            <Form.Item label="解释器" name='cmd'>
                <Input />
            </Form.Item>
            <Form.Item label="执行用户" name='user'>
                <Input />
            </Form.Item>
            <Form.Item label="脚本输入内容stdin" name='stdin'>
                <Input />
            </Form.Item>
            <Form.Item label="执行方式" name='execWay'>
                <Select >
                    <Select.Option value="0">命令下发</Select.Option>
                    <Select.Option value="1">脚本内容</Select.Option>
                    <Select.Option value="2">脚本名称</Select.Option>
                    <Select.Option value="3">URL下载</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="脚本执行超时时间" name='timeout'>
                <InputNumber />
            </Form.Item>
            <Form.Item label="节点列表" name='peers'>
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="脚本内容" name='content'>
                <CodeEditor
                    language="shell"
                    placeholder="输入脚本内容."
                    padding={15}
                    style={{
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                />
            </Form.Item>
            <Form.Item label="参数">
                <Form.List name="args">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(field => (
                                <Space key={field.key} style={{ marginBottom: 16 }} className='scriptArgs'>
                                    <Form.Item noStyle name={[field.name, 'lastName']} rules={[{ required: true }]}>
                                        <Input placeholder="参数名" />
                                    </Form.Item>
                                    <Form.Item noStyle name={[field.name, 'firstName']} rules={[{ required: true }]}>
                                        <Input placeholder="参数值" />
                                    </Form.Item>
                                    <MinusCircleOutlined
                                        onClick={() => {
                                            remove(field.name);
                                        }}
                                    />

                                </Space>

                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    添加参数
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 2, span: 2 }}>
                <Button type="primary" htmlType="submit" onClick={() => createScriptTask()}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormSizeDemo;