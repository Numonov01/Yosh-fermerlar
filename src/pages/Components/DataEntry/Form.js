import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Button, Card, Cascader, Checkbox, Col, ColorPicker, DatePicker, Form, Input, InputNumber, Modal, Radio, Rate, Row, Select, Slider, Space, Switch, Typography, Upload, message } from 'antd';
import { PlusOutlined, InfoCircleOutlined, MinusCircleOutlined, UserOutlined, SmileOutlined, UploadOutlined, InboxOutlined } from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import TreeSelect from 'rc-tree-select';
import usecustomStyles from '../../../Common/customStyles';

const { Option } = Select;
const { Text } = Typography;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const customStyles = usecustomStyles();

//basic example
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

//Form methods
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 6,
        span: 18,
    },
};

//Form disabled
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

//Validate Only
const SubmitButton = ({ form }) => {
    const [submittable, setSubmittable] = React.useState(false);

    // Watch all values
    // const values = Form.useWatch([], form);
    React.useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(
                () => {
                    setSubmittable(true);
                },
                () => {
                    setSubmittable(false);
                },
            );
    }, [form]);
    return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
            Submit
        </Button>
    );
};

//Path Prefix
const MyFormItemContext = React.createContext([]);
function toArr(str) {
    return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};

//Dynamic Form Item

const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 20,
            offset: 4,
        },
    },
};

//Dynamic Form nest Items
const onFinishDynamicItems = (values) => {
    console.log('Received values of form:', values);
};

//Control between forms
const layoutControl = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayoutControl = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, open }) => {
    const prevOpenRef = useRef();
    useEffect(() => {
        prevOpenRef.current = open;
    }, [open]);
    const prevOpen = prevOpenRef.current;
    useEffect(() => {
        if (!open && prevOpen) {
            form.resetFields();
        }
    }, [form, prevOpen, open]);
};
const ModalForm = ({ open, onCancel }) => {
    const [form] = Form.useForm();
    useResetFormOnCloseModal({
        form,
        open,
    });
    const onOk = () => {
        form.submit();
    };
    return (
        <Modal title="Basic Drawer" open={open} onOk={onOk} onCancel={onCancel}>
            <Form form={form} layout="vertical" name="userForm">
                <Form.Item
                    name="name"
                    label="User Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="age"
                    label="User Age"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
            </Form>
        </Modal>
    );
};

//Other Form Controls
const formItemOtherLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};
const normFileOther = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const onFinishOther = (values) => {
    console.log('Received values of form: ', values);
};

const UiForm = () => {
    // page title
    document.title = "Form" + process.env.REACT_APP_PAGE_TITLE;

    //Form methods
    const [form] = Form.useForm();
    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({
                    note: 'Hi, man!',
                });
                break;
            case 'female':
                form.setFieldsValue({
                    note: 'Hi, lady!',
                });
                break;
            case 'other':
                form.setFieldsValue({
                    note: 'Hi there!',
                });
                break;
            default:
        }
    };
    const onFinishMethod = (values) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    const onFill = () => {
        form.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };

    //Form Layout
    const [form2] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;

    //Form disabled
    const [componentDisabled, setComponentDisabled] = useState(true);
    
    //Required style
    const [formRequired] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };

    //Form size
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChangeSize = ({ size }) => {
        setComponentSize(size);
    };

    //No block rule
    const [formRule] = Form.useForm();
    const onFinishRule = () => {
        message.success('Submit success!');
    };
    const onFinishFailedRule = () => {
        message.error('Submit failed!');
    };
    const onFillRule = () => {
        formRule.setFieldsValue({
            url: 'https://taobao.com/',
        });
    };

    //Watch Hooks
    const [formWatch] = Form.useForm();
    const nameValue = Form.useWatch('name', formWatch);

    //Validate Only
    const [formValidate] = Form.useForm();

    //Path Prefix
    const onFinishPrefix = (value) => {
        console.log(value);
    };

    //Dynamic Form Item
    const onFinishDynamic = (values) => {
        console.log('Received values of form:', values);
    };

    //Control between forms
    const [open, setOpen] = useState(false);
    const showUserModal = () => {
        setOpen(true);
    };
    const hideUserModal = () => {
        setOpen(false);
    };
    const onFinishControl = (values) => {
        console.log('Finish:', values);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="Form" />

            <Row gutter={[16, 24]}>
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Basic Usage" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic Form data control. Includes layout, initial values, validation and submit.</Text></p>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 6,
                            }}
                            wrapperCol={{
                                span: 18,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 6,
                                    span: 18,
                                }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 6,
                                    span: 18,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Form Methods" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Call form method with <Text type="secondary" code>Form.useForm</Text>.</Text></p>
                        <Form
                            {...layout}
                            form={form}
                            name="control-hooks"
                            onFinish={onFinishMethod}
                        >
                            <Form.Item
                                name="note"
                                label="Note"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select a option and change input text above"
                                    onChange={onGenderChange}
                                    allowClear
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="other">other</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                noStyle
                                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                            >
                                {({ getFieldValue }) =>
                                    getFieldValue('gender') === 'other' ? (
                                        <Form.Item
                                            name="customizeGender"
                                            label="Customize Gender"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    ) : null
                                }
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                <Button htmlType="button" onClick={onReset}>
                                    Reset
                                </Button>
                                <Button type="link" htmlType="button" onClick={onFill}>
                                    Fill form
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Form Layout" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">There are three layout for form: <Text type="secondary" code>horizontal</Text>, <Text type="secondary" code>vertical</Text>, <Text type="secondary" code>inline</Text>.</Text></p>
                        <Form
                            {...formItemLayout}
                            layout={formLayout}
                            form={form2}
                            initialValues={{
                                layout: formLayout,
                            }}
                            onValuesChange={onFormLayoutChange}
                            style={{
                                maxWidth: formLayout === 'inline' ? 'none' : 600,
                            }}
                        >
                            <Form.Item label="Form Layout" name="layout">
                                <Radio.Group value={formLayout}>
                                    <Radio.Button value="horizontal">Horizontal</Radio.Button>
                                    <Radio.Button value="vertical">Vertical</Radio.Button>
                                    <Radio.Button value="inline">Inline</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Field A">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label="Field B">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item {...buttonItemLayout}>
                                <Button type="primary">Submit</Button>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Required style" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Switch required or optional style with <Text type="secondary" code>requiredMark</Text>.</Text></p>
                        <Form
                            form={formRequired}
                            layout="vertical"
                            initialValues={{
                                requiredMarkValue: requiredMark,
                            }}
                            onValuesChange={onRequiredTypeChange}
                            requiredMark={requiredMark}
                        >
                            <Form.Item label="Required Mark" name="requiredMarkValue">
                                <Radio.Group>
                                    <Radio.Button value="optional">Optional</Radio.Button>
                                    <Radio.Button value>Required</Radio.Button>
                                    <Radio.Button value={false}>Hidden</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Field A" required tooltip="This is a required field">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item
                                label="Field B"
                                tooltip={{
                                    title: 'Tooltip with customize icon',
                                    icon: <InfoCircleOutlined />,
                                }}
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary">Submit</Button>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Form size" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Set component size, only works for antd components.</Text></p>
                        <Form
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal"
                            initialValues={{
                                size: componentSize,
                            }}
                            onValuesChange={onFormLayoutChangeSize}
                            size={componentSize}
                            style={{
                                maxWidth: 600,
                            }}
                        >
                            <Form.Item label="Form Size" name="size">
                                <Radio.Group>
                                    <Radio.Button value="small">Small</Radio.Button>
                                    <Radio.Button value="default">Default</Radio.Button>
                                    <Radio.Button value="large">Large</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Input">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Select">
                                <Select>
                                    <Select.Option value="demo">Demo</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="TreeSelect">
                                <TreeSelect
                                    treeData={[
                                        {
                                            title: 'Light',
                                            value: 'light',
                                            children: [
                                                {
                                                    title: 'Bamboo',
                                                    value: 'bamboo',
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item label="Cascader">
                                <Cascader
                                    options={[
                                        {
                                            value: 'zhejiang',
                                            label: 'Zhejiang',
                                            children: [
                                                {
                                                    value: 'hangzhou',
                                                    label: 'Hangzhou',
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item label="DatePicker">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="InputNumber">
                                <InputNumber />
                            </Form.Item>
                            <Form.Item label="Switch" valuePropName="checked">
                                <Switch />
                            </Form.Item>
                            <Form.Item label="Button">
                                <Button>Button</Button>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Label Can Wrap" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Turn on <Text type="secondary" code>labelWrap</Text> to wrap label if text is long.</Text></p>
                        <Form
                            name="wrap"
                            labelCol={{
                                flex: '130px',
                            }}
                            labelAlign="left"
                            labelWrap
                            wrapperCol={{
                                flex: 1,
                            }}
                            colon={false}
                            style={{
                                maxWidth: 600,
                            }}
                        >
                            <Form.Item
                                label="Normal label"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="A super long label text"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item label=" ">
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="No Block Rule" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary"><Text type="secondary" code>rule</Text> with <Text type="secondary" code>warningOnly</Text> will not block form submit.</Text></p>
                        <Form
                            form={formRule}
                            layout="vertical"
                            onFinish={onFinishRule}
                            onFinishFailed={onFinishFailedRule}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="url"
                                label="URL"
                                rules={[
                                    {
                                        required: true,
                                    },
                                    {
                                        type: 'url',
                                        warningOnly: true,
                                    },
                                    {
                                        type: 'string',
                                        min: 6,
                                    },
                                ]}
                            >
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item>
                                <Space>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                    <Button htmlType="button" onClick={onFillRule}>
                                        Fill
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Watch Hooks" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary"><Text type="secondary" code>useWatch</Text> helps watch the field change and only re-render for the value change. API Ref.</Text></p>
                        <Form form={formWatch} layout="vertical" autoComplete="off">
                            <Form.Item name="name" label="Name (Watch to trigger rerender)">
                                <Input />
                            </Form.Item>
                            <Form.Item name="age" label="Age (Not Watch)">
                                <InputNumber />
                            </Form.Item>
                        </Form>

                        <Typography>
                            <pre>Name Value: {nameValue}</pre>
                        </Typography>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Validate Only" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Dynamic adjust submit button's <Text type="secondary" code>disabled</Text> status by <Text type="secondary" code>validateOnly</Text> of <Text type="secondary" code>validateFields</Text>.</Text></p>
                        <Form form={formValidate} name="validateOnly" layout="vertical" autoComplete="off">
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="age"
                                label="Age"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <Space>
                                    <SubmitButton form={formValidate} />
                                    <Button htmlType="reset">Reset</Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Path Prefix" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">In some scenarios, you may want to set a prefix for some fields consistently. You can achieve this effect with HOC.</Text></p>
                        <Form name="form_item_path" layout="vertical" onFinish={onFinishPrefix}>
                            <MyFormItemGroup prefix={['user']}>
                                <MyFormItemGroup prefix={['name']}>
                                    <MyFormItem name="firstName" label="First Name">
                                        <Input />
                                    </MyFormItem>
                                    <MyFormItem name="lastName" label="Last Name">
                                        <Input />
                                    </MyFormItem>
                                </MyFormItemGroup>

                                <MyFormItem name="age" label="Age">
                                    <Input />
                                </MyFormItem>
                            </MyFormItemGroup>

                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Dynamic Form Item" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add or remove form items dynamically. <Text type="secondary" code>add</Text> function support config initial value.</Text></p>
                        <Form
                            name="dynamic_form_item"
                            {...formItemLayoutWithOutLabel}
                            onFinish={onFinishDynamic}
                            style={{
                                maxWidth: 600,
                            }}
                        >
                            <Form.List
                                name="names"
                                rules={[
                                    {
                                        validator: async (_, names) => {
                                            if (!names || names.length < 2) {
                                                return Promise.reject(new Error('At least 2 passengers'));
                                            }
                                        },
                                    },
                                ]}
                            >
                                {(fields, { add, remove }, { errors }) => (
                                    <>
                                        {fields.map((field, index) => (
                                            <Form.Item
                                                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                                label={index === 0 ? 'Passengers' : ''}
                                                required={false}
                                                key={field.key}
                                            >
                                                <Form.Item
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            whitespace: true,
                                                            message: "Please input passenger's name or delete this field.",
                                                        },
                                                    ]}
                                                    noStyle
                                                >
                                                    <Input
                                                        placeholder="passenger name"
                                                        style={{
                                                            width: '60%',
                                                        }}
                                                    />
                                                </Form.Item>
                                                {fields.length > 1 ? (
                                                    <MinusCircleOutlined
                                                        className="dynamic-delete-button"
                                                        onClick={() => remove(field.name)}
                                                    />
                                                ) : null}
                                            </Form.Item>
                                        ))}
                                        <Form.Item>
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                style={{
                                                    width: '60%',
                                                }}
                                                icon={<PlusOutlined />}
                                            >
                                                Add field
                                            </Button>
                                            <Button
                                                type="dashed"
                                                onClick={() => {
                                                    add('The head item', 0);
                                                }}
                                                style={{
                                                    width: '60%',
                                                    marginTop: '20px',
                                                }}
                                                icon={<PlusOutlined />}
                                            >
                                                Add field at head
                                            </Button>
                                            <Form.ErrorList errors={errors} />
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Dynamic Form Nest Items" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Nest dynamic field need extends <Text type="secondary" code>field</Text>. Pass <Text type="secondary" code>field.name</Text> to nest item.</Text></p>
                        <Form
                            name="dynamic_form_nest_item"
                            onFinish={onFinishDynamicItems}
                            style={{
                                maxWidth: 600,
                            }}
                            autoComplete="off"
                        >
                            <Form.List name="users">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Space
                                                key={key}
                                                style={{
                                                    display: 'flex',
                                                    marginBottom: 8,
                                                }}
                                                align="baseline"
                                            >
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'first']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Missing first name',
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="First Name" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'last']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Missing last name',
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Last Name" />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add field
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Control Between Forms" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use <Text type="secondary" code>Form.Provider</Text> to process data between forms. In this case, submit button is in the Modal which is out of Form. You can use <Text type="secondary" code>form.submit</Text> to submit form. Besides, we recommend native <Text type="secondary" code>&#10094;Button htmlType="submit" /&#10095;</Text> to submit a form.</Text></p>
                        <Form.Provider
                            onFormFinish={(name, { values, forms }) => {
                                if (name === 'userForm') {
                                    const { basicForm } = forms;
                                    const users = basicForm.getFieldValue('users') || [];
                                    basicForm.setFieldsValue({
                                        users: [...users, values],
                                    });
                                    setOpen(false);
                                }
                            }}
                        >
                            <Form
                                {...layoutControl}
                                name="basicForm"
                                onFinish={onFinishControl}
                                style={{
                                    maxWidth: 600,
                                }}
                            >
                                <Form.Item
                                    name="group"
                                    label="Group Name"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="User List"
                                    shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
                                >
                                    {({ getFieldValue }) => {
                                        const users = getFieldValue('users') || [];
                                        return users.length ? (
                                            <ul className='list-unstyled'>
                                                {users.map((user) => (
                                                    <li key={user.name} className="user">
                                                        <Avatar icon={<UserOutlined />} />
                                                        {user.name} - {user.age}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <Typography.Text className="ant-form-text" type="secondary">
                                                ( <SmileOutlined /> No user yet. )
                                            </Typography.Text>
                                        );
                                    }}
                                </Form.Item>
                                <Form.Item {...tailLayoutControl}>
                                    <Button htmlType="submit" type="primary">
                                        Submit
                                    </Button>
                                    <Button
                                        htmlType="button"
                                        style={{
                                            margin: '0 8px',
                                        }}
                                        onClick={showUserModal}
                                    >
                                        Add User
                                    </Button>
                                </Form.Item>
                            </Form>

                            <ModalForm open={open} onCancel={hideUserModal} />
                        </Form.Provider>
                    </Card>{/* end card */}
                </Col>{/* end col */}             
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Other Form Controls" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Demonstration of validation configuration for form controls which are not shown in the demos above.</Text></p>
                        <Form
                            name="validate_other"
                            {...formItemOtherLayout}
                            onFinish={onFinishOther}
                            initialValues={{
                                'input-number': 3,
                                'checkbox-group': ['A', 'B'],
                                rate: 3.5,
                                'color-picker': null,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                        >
                            <Form.Item label="Plain Text">
                                <span className="ant-form-text">China</span>
                            </Form.Item>
                            <Form.Item
                                name="select"
                                label="Select"
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select your country!',
                                    },
                                ]}
                            >
                                <Select placeholder="Please select a country">
                                    <Option value="china">China</Option>
                                    <Option value="usa">U.S.A</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="select-multiple"
                                label="Select[multiple]"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select your favourite colors!',
                                        type: 'array',
                                    },
                                ]}
                            >
                                <Select mode="multiple" placeholder="Please select favourite colors">
                                    <Option value="red">Red</Option>
                                    <Option value="green">Green</Option>
                                    <Option value="blue">Blue</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="InputNumber">
                                <Form.Item name="input-number" noStyle>
                                    <InputNumber min={1} max={10} />
                                </Form.Item>
                                <span
                                    className="ant-form-text"
                                    style={{
                                        marginLeft: 8,
                                    }}
                                >
                                    machines
                                </span>
                            </Form.Item>

                            <Form.Item name="switch" label="Switch" valuePropName="checked">
                                <Switch />
                            </Form.Item>

                            <Form.Item name="slider" label="Slider">
                                <Slider
                                    marks={{
                                        0: 'A',
                                        20: 'B',
                                        40: 'C',
                                        60: 'D',
                                        80: 'E',
                                        100: 'F',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item name="radio-group" label="Radio.Group">
                                <Radio.Group>
                                    <Radio value="a">item 1</Radio>
                                    <Radio value="b">item 2</Radio>
                                    <Radio value="c">item 3</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                name="radio-button"
                                label="Radio.Button"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please pick an item!',
                                    },
                                ]}
                            >
                                <Radio.Group>
                                    <Radio.Button value="a">item 1</Radio.Button>
                                    <Radio.Button value="b">item 2</Radio.Button>
                                    <Radio.Button value="c">item 3</Radio.Button>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item name="checkbox-group" label="Checkbox.Group">
                                <Checkbox.Group>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox
                                                value="A"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                A
                                            </Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox
                                                value="B"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                                disabled
                                            >
                                                B
                                            </Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox
                                                value="C"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                C
                                            </Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox
                                                value="D"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                D
                                            </Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox
                                                value="E"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                E
                                            </Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox
                                                value="F"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                F
                                            </Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item>

                            <Form.Item name="rate" label="Rate">
                                <Rate />
                            </Form.Item>

                            <Form.Item
                                name="upload"
                                label="Upload"
                                valuePropName="fileList"
                                getValueFromEvent={normFileOther}
                                extra="longgggggggggggggggggggggggggggggggggg"
                            >
                                <Upload name="logo" action="/upload.do" listType="picture">
                                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                                </Upload>
                            </Form.Item>
                            <Form.Item label="Dragger">
                                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                                    <Upload.Dragger name="files" action="/upload.do">
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                    </Upload.Dragger>
                                </Form.Item>
                            </Form.Item>
                            <Form.Item
                                name="color-picker"
                                label="ColorPicker"
                                rules={[
                                    {
                                        required: true,
                                        message: 'color is required!',
                                    },
                                ]}
                            >
                                <ColorPicker />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    span: 12,
                                    offset: 6,
                                }}
                            >
                                <Space>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                    <Button htmlType="reset">reset</Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Form disabled" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Set component disabled, only works for antd components.</Text></p>
                        <Checkbox
                            checked={componentDisabled}
                            onChange={(e) => setComponentDisabled(e.target.checked)}
                        >
                            Form disabled
                        </Checkbox>
                        <Form
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal"
                            disabled={componentDisabled}
                            style={{
                                maxWidth: 600,
                            }}
                        >
                            <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
                                <Checkbox>Checkbox</Checkbox>
                            </Form.Item>
                            <Form.Item label="Radio">
                                <Radio.Group>
                                    <Radio value="apple"> Apple </Radio>
                                    <Radio value="pear"> Pear </Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Input">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Select">
                                <Select>
                                    <Select.Option value="demo">Demo</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="TreeSelect">
                                <TreeSelect
                                    treeData={[
                                        {
                                            title: 'Light',
                                            value: 'light',
                                            children: [
                                                {
                                                    title: 'Bamboo',
                                                    value: 'bamboo',
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item label="Cascader">
                                <Cascader
                                    options={[
                                        {
                                            value: 'zhejiang',
                                            label: 'Zhejiang',
                                            children: [
                                                {
                                                    value: 'hangzhou',
                                                    label: 'Hangzhou',
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item label="DatePicker">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="RangePicker">
                                <RangePicker />
                            </Form.Item>
                            <Form.Item label="InputNumber">
                                <InputNumber />
                            </Form.Item>
                            <Form.Item label="TextArea">
                                <TextArea rows={4} />
                            </Form.Item>
                            <Form.Item label="Switch" valuePropName="checked">
                                <Switch />
                            </Form.Item>
                            <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                                <Upload action="/upload.do" listType="picture-card">
                                    <div>
                                        <PlusOutlined />
                                        <div
                                            style={{
                                                marginTop: 8,
                                            }}
                                        >
                                            Upload
                                        </div>
                                    </div>
                                </Upload>
                            </Form.Item>
                            <Form.Item label="Button">
                                <Button>Button</Button>
                            </Form.Item>
                            <Form.Item label="Slider">
                                <Slider />
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */} 
            </Row>{/* end row */}

        </>
    )
}

export default UiForm
