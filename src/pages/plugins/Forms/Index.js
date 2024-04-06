import React, { useRef, useState } from 'react'
import Breadcrumb from '../../../Common/Breadcrumb'
import { Button, Card, Row, Space, Switch, message } from 'antd'
import {
    ProForm,
    ProFormDateMonthRangePicker,
    ProFormDatePicker,
    ProFormDateQuarterRangePicker,
    ProFormDateRangePicker,
    ProFormDateTimePicker,
    ProFormDateTimeRangePicker,
    ProFormDateWeekRangePicker,
    ProFormDateYearRangePicker,
    ProFormTimePicker,
    ProFormSelect,
    ProFormFieldSet,
    ProFormDependency,
    ProFormText,
    ModalForm,
    DrawerForm
} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';
import usecustomStyles from '../../../Common/customStyles';


const customStyles = usecustomStyles();

// Reset Form
const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

const Forms = () => {

    // Page title
    document.title = "Forms" + process.env.REACT_APP_PAGE_TITLE;
    const [readonly, setReadonly] = useState(false);

    // Modal & Drawer
    const [modalVisit, setModalVisit] = useState(false);
    const [drawerVisit, setDrawerVisit] = useState(false);

    // Reset form
    const restFormRef = useRef();
    const formRef = useRef();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <React.Fragment>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Plugins" pageTitle="Pro Forms" />

            {/* Date */}
            <Row>
                {/* <Col span={24} lg={12} xl={12} className="gutter-row"> */}
                <Card title="Date Form Examples" style={{ marginBottom: customStyles.margin }}>
                    <div>
                        <Switch
                            style={{
                                marginBlockEnd: 16,
                            }}
                            checked={readonly}
                            checkedChildren="Edit"
                            unCheckedChildren="Readonly"
                            onChange={setReadonly}
                        />
                        <ProForm
                            readonly={readonly}
                            initialValues={{
                                date: Date.now(),
                                dateWeek: Date.now(),
                                dateMonth: Date.now(),
                                dateQuarter: Date.now(),
                                dateYear: Date.now(),
                                dateTime: Date.now(),
                                time: '00:01:05',
                                timeRange: ['05:00:00', '11:00:00'],
                                dateTimeRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
                                dateRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
                            }}
                            onFinish={async (values) => {
                                console.log(values);
                            }}
                        >
                            <ProForm.Group title="Date related grouping">
                                <ProFormDatePicker name="date" label="Date" placeholder="Please Choose..." />
                                <ProFormDatePicker
                                    name="date"
                                    fieldProps={{
                                        format: 'YY-MM',
                                    }}
                                    label="Years"
                                    placeholder="Please Choose..."
                                />
                                <ProFormTimePicker name="time" label="Time" placeholder="Please Choose..." />
                                <ProFormTimePicker.RangePicker name="timeRange" label="Time Interval" placeholder="" />
                                <ProFormDatePicker.Week name="dateWeek" label="Week" placeholder="Please Choose..." />
                                <ProFormDateWeekRangePicker name="dateWeekRange" label="Weekly Range" placeholder="" />
                                <ProFormDatePicker.Month name="dateMonth" label="Moon" placeholder="Please Choose..." />
                                <ProFormDateMonthRangePicker name="dateMonthRange" label="Monthly Range" placeholder="" />
                                <ProFormDatePicker.Quarter name="dateQuarter" label="Date Quarter" placeholder="Please Choose..." />
                                <ProFormDateQuarterRangePicker
                                    name="dateQuarterRange"
                                    label="Quarterly range"
                                    placeholder=""
                                />
                                <ProFormDatePicker.Year name="dateYear" label="Year" placeholder="Please Choose..." />
                                <ProFormDateYearRangePicker name="dateYearRange" label="Annual Range" placeholder="" />
                                <ProFormDateTimePicker
                                    name="dateTime"
                                    label="Date Time"
                                    fieldProps={{
                                        format: (value) => value.format('YYYY-MM-DD'),
                                    }}
                                    placeholder="Please Choose..."
                                />
                                <ProFormDateRangePicker name="dateRange" label="Date Range" placeholder="" />
                                <ProFormDateTimeRangePicker
                                    name="dateTimeRange"
                                    label="Date Time Interval"
                                    placeholder=""
                                />
                            </ProForm.Group>
                        </ProForm>
                    </div>
                </Card>
                {/* </Col> */}
            </Row>

            {/* Query Select */}
            <Row>
                <Card title="Query Select Examples" style={{ marginBottom: customStyles.margin }}>
                    <div>
                        {/* <Switch
                            style={{
                                marginBlockEnd: 16,
                            }}
                            checked={readonly}
                            checkedChildren="Edit"
                            unCheckedChildren="Readonly"
                            onChange={setReadonly}
                        /> */}
                        <ProForm>
                            <ProForm.Group style={{ display: "block" }}>
                                <ProFormSelect.SearchSelect
                                    suffixIcon={null}
                                    name="userQuery"
                                    label="Query Selector - request"
                                    fieldProps={{
                                        labelInValue: true,
                                        style: {
                                            minWidth: 140,
                                        },
                                    }}
                                    placeholder="Please Choose..."
                                    debounceTime={300}
                                    request={async ({ keyWords = '' }) => {
                                        return [
                                            { label: 'All', value: 'all' },
                                            { label: 'Open', value: 'open' },
                                            { label: 'Asignee', value: 'assignees' },
                                            { label: 'Closed', value: 'closed' },
                                            { label: 'Processing', value: 'processing' },
                                        ].filter(({ value, label }) => {
                                            return value.includes(keyWords) || label.includes(keyWords);
                                        });
                                    }}
                                />
                                <ProFormSelect.SearchSelect
                                    suffixIcon={null}
                                    name="userQuery2"
                                    label="Query Selector - valueEnum"
                                    fieldProps={{
                                        style: {
                                            minWidth: 140,
                                        },
                                    }}
                                    placeholder="Please Choose..."
                                    valueEnum={{
                                        all: { text: 'All', status: 'Default' },
                                        open: {
                                            text: 'Open',
                                            status: 'Error',
                                        },
                                        closed: {
                                            text: 'Closed',
                                            status: 'Success',
                                        },
                                        processing: {
                                            text: 'Processing',
                                            status: 'Processing',
                                        },
                                    }}
                                />
                                <ProFormSelect.SearchSelect
                                    suffixIcon={null}
                                    name="userQuery3"
                                    label="Query Selector - options"
                                    fieldProps={{
                                        labelInValue: false,
                                        style: {
                                            minWidth: 140,
                                        },
                                    }}
                                    placeholder="Please Choose..."
                                    options={[
                                        { label: 'All', value: 'all' },
                                        { label: 'Open', value: 'open' },
                                        { label: 'Closed', value: 'closed' },
                                        { label: 'Processing', value: 'processing' },
                                    ]}
                                />
                            </ProForm.Group>
                        </ProForm>
                    </div>
                </Card>

                {/* Structured Data */}
                <Card title="Structured Data Examples" style={{ marginBottom: customStyles.margin }}>
                    <div>
                        {/* <Switch
                            style={{
                                marginBlockEnd: 16,
                            }}
                            checked={readonly}
                            checkedChildren="Edit"
                            unCheckedChildren="Readonly"
                            onChange={setReadonly}
                        /> */}
                        <ProForm
                            initialValues={{
                                list: ['1', '2', '3'],
                            }}
                        >
                            <ProForm.Item label="Interdependent Forms">
                                <ProFormDependency name={['list']}>
                                    {({ list }) => {
                                        return <div>{JSON.stringify(list, null, 2)}</div>;
                                    }}
                                </ProFormDependency>
                            </ProForm.Item>
                            <ProFormFieldSet name="list" label="Component List">
                                <ProFormText width="md" placeholder="Please Choose..." />
                                <ProFormSelect
                                    width="md"
                                    placeholder="Please Choose..."
                                    request={async () => [
                                        { label: 'All', value: 'all' },
                                        { label: 'Open', value: 'open' },
                                        { label: 'Closed', value: 'closed' },
                                        { label: 'Processing', value: 'processing' },
                                    ]}
                                    name="useMode"
                                    label="The effective method of the contract agreement"
                                />
                                <ProFormText width="md" placeholder="Please Choose..." />
                            </ProFormFieldSet>

                            <ProFormFieldSet
                                placeholder="Please Choose..."
                                name="list"
                                label="Component List- Input.Group"
                                // type="group"
                                rules={[
                                    {
                                        validator: (_, value) => {
                                            const [name, name1, name2] = value || [];
                                            if (!name) {
                                                throw new Error('The first value cannot be empty');
                                            }
                                            if (!name1) {
                                                throw new Error('The second value cannot be empty');
                                            }
                                            if (!name2) {
                                                throw new Error('The third value cannot be empty');
                                            }
                                        },
                                    },
                                ]}
                                transform={(value) => ({
                                    list: value,
                                    startTime: value[0],
                                    endTime: value[1],
                                })}
                            >
                                <ProFormText width="md" placeholder="Please Choose..." />
                                <ProFormText width="md" placeholder="Please Choose..." />
                                <ProFormText width="md" placeholder="Please Choose..." />
                            </ProFormFieldSet>

                            <ProFormFieldSet
                                placeholder="Please Choose..."
                                name="list"
                                label="Component List"
                                transform={(value) => ({
                                    list: value,
                                    startTime: value[0],
                                    endTime: value[1],
                                })}
                            >
                                <ProFormText width="md" readonly />
                                -
                                <ProFormText width="md" readonly />
                                -
                                <ProFormText width="md" readonly />
                            </ProFormFieldSet>
                        </ProForm>
                    </div>
                </Card>
            </Row>

            {/* Modal Drawer */}
            <Row>

                {/* Modal & Drawer */}
                <Card title="Modal and Drawer Forms Examples" style={{ marginBottom: customStyles.margin, marginRight: customStyles.margin }}>
                    <div>

                        <Space>
                            <Button
                                type="primary"
                                onClick={() => {
                                    setModalVisit(true);
                                }}
                            >
                                <PlusOutlined />
                                Modal Open
                            </Button>
                            <Button
                                type="primary"
                                onClick={() => {
                                    setDrawerVisit(true);
                                }}
                            >
                                <PlusOutlined />
                                Drawer Open
                            </Button>
                        </Space>
                        {/* Modal */}
                        <ModalForm
                            title="Create new form"
                            open={modalVisit}
                            onFinish={async () => {
                                message.success('Submitted successfully');
                                return true;
                            }}
                            onOpenChange={setModalVisit}
                        >
                            <ProForm.Group>
                                <ProFormText
                                    width="md"
                                    name="name"
                                    label="Contracted customer"
                                    tooltip="The longest is 24 Bit"
                                    placeholder="Please enter name"
                                />

                                <ProFormText
                                    width="md"
                                    name="company"
                                    label="company name"
                                    placeholder="Please enter name"
                                />
                            </ProForm.Group>
                            <ProForm.Group>
                                <ProFormText
                                    width="md"
                                    name="contract"
                                    label="contract title"
                                    placeholder="Please enter name"
                                />
                                <ProFormDateRangePicker name="contractTime" label="Contract Time" placeholder="" />
                            </ProForm.Group>
                            <ProForm.Group>
                                <ProFormSelect
                                    options={[
                                        {
                                            value: 'chapter',
                                            label: 'Effective after stamping',
                                        },
                                    ]}
                                    width="xs"
                                    name="useMode"
                                    label="Effective method of the contract agreement"
                                    placeholder="Please Enter"
                                />
                                <ProFormSelect
                                    width="xs"
                                    options={[
                                        {
                                            value: 'time',
                                            label: 'Termination after completion of performance',
                                        },
                                    ]}
                                    name="unusedMode"
                                    label="Contract becomes invalid"
                                    placeholder="Please Enter"
                                />
                            </ProForm.Group>
                            <ProFormText width="sm" name="id" label="Contract number" placeholder="Please Enter Contract Number" />
                            <ProFormText
                                name="project"
                                disabled
                                label="Project name"
                                initialValue="xxxxproject"
                            />
                            <ProFormText
                                width="xs"
                                name="mangerName"
                                disabled
                                label="Business manager"
                                initialValue="Start the journey"
                            />
                        </ModalForm>
                        {/* Drawer */}
                        <DrawerForm
                            onOpenChange={setDrawerVisit}
                            title="Create new form"
                            open={drawerVisit}
                            onFinish={async () => {
                                message.success('Submitted successfully');
                                return true;
                            }}
                        >
                            <ProForm.Group>
                                <ProFormText
                                    width="md"
                                    name="name"
                                    label="Contracted customer"
                                    tooltip="The longest is 24 Bit"
                                    placeholder="Please enter name"
                                />

                                <ProFormText
                                    width="md"
                                    name="company"
                                    label="company name"
                                    placeholder="Please enter name"
                                />
                            </ProForm.Group>
                            <ProForm.Group>
                                <ProFormText
                                    width="md"
                                    name="contract"
                                    label="contract title"
                                    placeholder="Please enter name"
                                />
                                <ProFormDateRangePicker name="contractTime" label="Contract Time" placeholder="" />
                            </ProForm.Group>
                            <ProForm.Group>
                                <ProFormSelect
                                    options={[
                                        {
                                            value: 'chapter',
                                            label: 'Effective after stamping',
                                        },
                                    ]}
                                    width="xs"
                                    name="useMode"
                                    label="Effective method of the contract agreement"
                                    placeholder="Please select a method"
                                />
                                <ProFormSelect
                                    width="xs"
                                    options={[
                                        {
                                            value: 'time',
                                            label: 'Termination after completion of performance',
                                        },
                                    ]}
                                    name="unusedMode"
                                    label="Contract becomes invalid"
                                    placeholder="Please enter a contract type"
                                />
                            </ProForm.Group>
                            <ProFormText width="sm" name="id" label="Contract number" placeholder="Please Enter Contract Number" />
                            <ProFormText
                                name="project"
                                disabled
                                label="Project name"
                                initialValue="xxxxproject"
                            />
                            <ProFormText
                                width="xs"
                                name="mangerName"
                                disabled
                                label="Business manager"
                                initialValue="Start the journey"
                            />
                        </DrawerForm>
                    </div>
                </Card>

                {/* Reset Form */}
                <Card title="Reset Forms Examples" style={{ marginBottom: customStyles.margin, overflowX:'auto'}}>
                    <div>
                        <Space>
                            <ModalForm
                                title="Create new form"
                                formRef={restFormRef}
                                open={modalVisible}
                                trigger={
                                    <Button
                                        type="primary"
                                        onClick={() => {
                                            setModalVisible(true);
                                        }}
                                    >
                                        Pass formRef Reset
                                    </Button>
                                }
                                onOpenChange={setModalVisible}
                                submitter={{
                                    searchConfig: {
                                        resetText: 'Reset',
                                    },
                                    resetButtonProps: {
                                        onClick: () => {
                                            restFormRef.current?.resetFields();
                                            //   setModalVisible(false);
                                        },
                                    },
                                }}
                                onFinish={async (values) => {
                                    await waitTime(2000);
                                    console.log(values);
                                    message.success('Submitted successfully');
                                    return true;
                                }}
                            >
                                <ProFormText
                                    width="md"
                                    name="name"
                                    label="Contracted customer"
                                    tooltip="The longest is 24 Bit"
                                    placeholder="Please enter name"
                                />

                                <ProFormText
                                    width="md"
                                    name="company"
                                    label="company name"
                                    placeholder="Please enter name"
                                />
                            </ModalForm>
                            <ModalForm
                                title="Create new form"
                                formRef={formRef}
                                trigger={<Button type="primary">Customized footer button reset</Button>}
                                submitter={{
                                    render: (props, defaultDoms) => {
                                        return [
                                            ...defaultDoms,
                                            <Button
                                                key="extra-reset"
                                                onClick={() => {
                                                    props.reset();
                                                }}
                                            >
                                                Reset
                                            </Button>,
                                        ];
                                    },
                                }}
                                onFinish={async (values) => {
                                    await waitTime(2000);
                                    console.log(values);
                                    message.success('Submitted successfully');
                                    return true;
                                }}
                            >
                                <ProFormText
                                    width="md"
                                    name="name"
                                    label="Contracted customer"
                                    tooltip="The longest is 24 Bit"
                                    placeholder="Please enter name"
                                />

                                <ProFormText
                                    width="md"
                                    name="company"
                                    label="company name"
                                    placeholder="Please enter name"
                                />
                            </ModalForm>
                        </Space>
                    </div>
                </Card>
            </Row>
        </React.Fragment >
    )
}

export default Forms