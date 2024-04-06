import React, { useRef, useState } from 'react';
import { Button, Card, Col, Form, Mentions, Row, Space, Typography } from 'antd';
// import debounce from 'lodash/debounce';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const { getMentions } = Mentions;

const customStyles = usecustomStyles();

const avatarLoginStyle = {
  width: '20px',
  height: '20px',
  marginRight: '8px'
}

//basic
const onChange = (value) => {
    console.log('Change:', value);
};
const onSelect = (option) => {
    console.log('select', option);
};

const UiMentions = () => {
    // page title
    document.title = "Mentions" + process.env.REACT_APP_PAGE_TITLE;

    //Asynchronous loading
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const ref = useRef();
    const loadGithubUsers = (key) => {
        if (!key) {
            setUsers([]);
            return;
        }
        fetch(`https://api.github.com/search/users?q=${key}`)
            .then((res) => res.json())
            .then(({ items = [] }) => {
                if (ref.current !== key) return;
                setLoading(false);
                setUsers(items.slice(0, 10));
            });
    };
    const onSearch = (search) => {
        ref.current = search;
        setLoading(!!search);
        setUsers([]);
        loadGithubUsers(search);
    };

    //With Form
    const [form] = Form.useForm();
    const onReset = () => {
        form.resetFields();
    };
    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            console.log('Submit:', values);
        } catch (errInfo) {
            console.log('Error:', errInfo);
        }
    };
    const checkMention = async (_, value) => {
        const mentions = getMentions(value);
        if (mentions.length < 2) {
            throw new Error('More than one must be selected!');
        }
    };

    const options = [
        {
            value: 'afc163',
            label: 'afc163',
        },
        {
            value: 'zombieJ',
            label: 'zombieJ',
        },
        {
            value: 'yesmeck',
            label: 'yesmeck',
        },
    ];

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="Mentions" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic usage.</Text></p>
                        <Mentions
                            style={{
                                width: '100%',
                            }}
                            onChange={onChange}
                            onSelect={onSelect}
                            defaultValue="@afc163"
                            options={[
                                {
                                    value: 'afc163',
                                    label: 'afc163',
                                },
                                {
                                    value: 'zombieJ',
                                    label: 'zombieJ',
                                },
                                {
                                    value: 'yesmeck',
                                    label: 'yesmeck',
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                    <Card title="With Form" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Controlled mode, for example, to work with <Text type="secondary" code>Form</Text>.</Text></p>
                        <Form form={form} layout="horizontal" onFinish={onFinish}>
                            <Form.Item
                                name="coders"
                                label="Top coders"
                                labelCol={{
                                    span: 6,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                rules={[
                                    {
                                        validator: checkMention,
                                    },
                                ]}
                            >
                                <Mentions
                                    rows={1}
                                    options={[
                                        {
                                            value: 'afc163',
                                            label: 'afc163',
                                        },
                                        {
                                            value: 'zombieJ',
                                            label: 'zombieJ',
                                        },
                                        {
                                            value: 'yesmeck',
                                            label: 'yesmeck',
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                name="bio"
                                label="Bio"
                                labelCol={{
                                    span: 6,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Mentions
                                    rows={3}
                                    placeholder="You can use @ to ref user here"
                                    options={[
                                        {
                                            value: 'afc163',
                                            label: 'afc163',
                                        },
                                        {
                                            value: 'zombieJ',
                                            label: 'zombieJ',
                                        },
                                        {
                                            value: 'yesmeck',
                                            label: 'yesmeck',
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    span: 14,
                                    offset: 6,
                                }}
                            >
                                <Space wrap>
                                    <Button htmlType="submit" type="primary">
                                        Submit
                                    </Button>
                                    <Button htmlType="button" onClick={onReset}>
                                        Reset
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Asynchronous Loading" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">async.</Text></p>
                        <Mentions
                            style={{
                                width: '100%',
                            }}
                            loading={loading}
                            onSearch={onSearch}
                            options={users.map(({ login, avatar_url: avatar }) => ({
                                key: login,
                                value: login,
                                className: 'antd-demo-dynamic-option',
                                label: (
                                    <>
                                        <img src={avatar} alt={login} style={avatarLoginStyle} />
                                        <span>{login}</span>
                                    </>
                                ),
                            }))}
                        />
                    </Card>{/* end card */}
                    <Card title="Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add status to Mentions with <Text type="secondary" code>status</Text>, which could be <Text type="secondary" code>error</Text> or <Text type="secondary" code>warning</Text>。</Text></p>
                        <Space direction="vertical">
                            <Mentions
                                onChange={onChange}
                                onSelect={onSelect}
                                defaultValue="@afc163"
                                status="error"
                                options={options}
                            />
                            <Mentions
                                onChange={onChange}
                                onSelect={onSelect}
                                defaultValue="@afc163"
                                status="warning"
                                options={options}
                            />
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiMentions
