import React, { useRef, useState } from "react";
import { Card, Result, Button, Descriptions, Divider, Alert, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, { ProFormRadio, ProFormTextArea, ProFormDigit, ProFormSelect, ProFormText, StepsForm } from '@ant-design/pro-form';

import ProCard from '@ant-design/pro-card';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { vmItemType, vmQuery, vmQueryType } from '@/services/vm';
import ProTable from '@ant-design/pro-table';

const TaskAdd: React.FC = () => {

    return (
        <ProCard>
            <ProFormText
                width="md"
                label="任务名称"
                name="name"
                rules={[
                    {
                        required: true,
                        message: '请输入任务名称',
                    },
                ]}
                placeholder="给任务起一个名字"
            />
            <ProFormText
                label="任务描述"
                name="desc"
                rules={[
                    {
                        required: true,
                        message: '请输入任务描述',
                    },
                ]}
                placeholder="这个任务是干嘛的"
            />
        </ProCard>
    )
}


const ScriptAdd: React.FC = () => {


    return (
        <>
            <ProFormRadio.Group
                options={[
                    {
                        value: 'shell',
                        label: 'shell',
                    },
                    {
                        value: 'powershell',
                        label: 'powershell',
                    },
                ]}
                rules={[
                    {
                        required: true,
                        message: '请选择脚本类型',
                    },
                ]}
                label="脚本类型"
                name="type"
            />
            <ProFormTextArea
                label="脚本内容"
                name="content"
                fieldProps={{
                    autoSize: { minRows: 6, maxRows: 50 },
                }}
                rules={[
                    {
                        required: true,
                        message: '请输入脚本内容',
                    },
                ]}
                placeholder="这里填写脚本内容"
            />
        </>
    )
}



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


const SelectPeer: React.FC = () => {

    const actionRef = useRef<ActionType>();
    const columns: ProColumns<vmItemType>[] = [
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
            title: 'osInfo',
            dataIndex: 'osInfo',
            search: false,
        },
        {
            title: 'ip',
            dataIndex: 'publicIp',
            search: false,
        },
    ];

    return (

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
    );
}

const CreateTaskResult: React.FC = () => {


    return (
        <>
            <h1>结果</h1>
        </>
    )
}


const ScriptTaskCreate: React.FC = () => {

    const [current, setCurrent] = useState(0);
    return (
        <PageContainer>
            <Card>
                <StepsForm
                    current={current}
                    onCurrentChange={setCurrent}
                    submitter={{
                        render: (props, dom) => {
                            if (props.step === 4) {
                                return null;
                            }
                            return dom;
                        },
                    }}
                >
                    <StepsForm.StepForm
                        title="填写任务信息"
                    >
                        <TaskAdd />
                    </StepsForm.StepForm>

                    <StepsForm.StepForm
                        title="填写脚本信息"
                    >
                        <ScriptAdd />
                    </StepsForm.StepForm>
                    <StepsForm.StepForm
                        title="选择节点"
                    >
                        <SelectPeer />
                    </StepsForm.StepForm>
                    <StepsForm.StepForm
                        title="预览任务"
                    >
                        <CreateTaskResult />
                    </StepsForm.StepForm>
                    <StepsForm.StepForm
                        title="完成"
                    >
                        <CreateTaskResult />
                    </StepsForm.StepForm>

                </StepsForm>
            </Card>
        </PageContainer>
    )
}


export default ScriptTaskCreate