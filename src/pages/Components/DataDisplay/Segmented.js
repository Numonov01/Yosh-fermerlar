import React, { useState } from 'react';
import { Avatar, Button, Card, Col, Row, Segmented, Space, Typography } from 'antd';
import { AppstoreOutlined, BarsOutlined, UserOutlined } from '@ant-design/icons';
//user images
import userImg1 from '../../../assets/images/users/avatar-1.jpg';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

const UiSegmented = () => {
    // page title
    document.title = "Segmented" + process.env.REACT_APP_PAGE_TITLE;

    //Controlled mode
    const [value, setValue] = useState('Map');

    //Dynamic
    const [options, setOptions] = useState(['Daily', 'Weekly', 'Monthly']);
    const [moreLoaded, setMoreLoaded] = useState(false);
    const handleLoadOptions = () => {
        setOptions((prev) => [...prev, 'Quarterly', 'Yearly']);
        setMoreLoaded(true);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Segmented" />

            <Row gutter={[24]}>
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The most basic usage.</Text></p>
                        <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
                    </Card>
                    <Card title="Controlled mode" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Controlled Segmented.</Text></p>
                        <Segmented options={['Map', 'Transit', 'Satellite']} value={value} onChange={setValue} />
                    </Card>
                    <Card title="Custom Render" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Custom each Segmented Item by ReactNode.</Text></p>
                        <Space direction="vertical">
                            <Segmented
                                options={[
                                    {
                                        label: (
                                            <div
                                                style={{
                                                    padding: 4,
                                                }}
                                            >
                                                <Avatar src={userImg1} />
                                                <div>User 1</div>
                                            </div>
                                        ),
                                        value: 'user1',
                                    },
                                    {
                                        label: (
                                            <div
                                                style={{
                                                    padding: 4,
                                                }}
                                            >
                                                <Avatar
                                                    style={{
                                                        backgroundColor: '#f56a00',
                                                    }}
                                                >
                                                    K
                                                </Avatar>
                                                <div>User 2</div>
                                            </div>
                                        ),
                                        value: 'user2',
                                    },
                                    {
                                        label: (
                                            <div
                                                style={{
                                                    padding: 4,
                                                }}
                                            >
                                                <Avatar
                                                    style={{
                                                        backgroundColor: '#87d068',
                                                    }}
                                                    icon={<UserOutlined />}
                                                />
                                                <div>User 3</div>
                                            </div>
                                        ),
                                        value: 'user3',
                                    },
                                ]}
                            />
                            <Segmented
                                options={[
                                    {
                                        label: (
                                            <div
                                                style={{
                                                    padding: 4,
                                                }}
                                            >
                                                <div>Spring</div>
                                                <div>Jan-Mar</div>
                                            </div>
                                        ),
                                        value: 'spring',
                                    },
                                    {
                                        label: (
                                            <div
                                                style={{
                                                    padding: 4,
                                                }}
                                            >
                                                <div>Summer</div>
                                                <div>Apr-Jun</div>
                                            </div>
                                        ),
                                        value: 'summer',
                                    },
                                    {
                                        label: (
                                            <div
                                                style={{
                                                    padding: 4,
                                                }}
                                            >
                                                <div>Autumn</div>
                                                <div>Jul-Sept</div>
                                            </div>
                                        ),
                                        value: 'autumn',
                                    },
                                    {
                                        label: (
                                            <div
                                                style={{
                                                    padding: 4,
                                                }}
                                            >
                                                <div>Winter</div>
                                                <div>Oct-Dec</div>
                                            </div>
                                        ),
                                        value: 'winter',
                                    },
                                ]}
                            />
                        </Space>
                    </Card>
                    <Card title="With Icon only" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Set <Text code>icon</Text> without <Text code>label</Text> for Segmented Item.</Text></p>
                        <Segmented
                            options={[
                                {
                                    value: 'List',
                                    icon: <BarsOutlined />,
                                },
                                {
                                    value: 'Kanban',
                                    icon: <AppstoreOutlined />,
                                },
                            ]}
                        />
                    </Card>
                    <Card title="With Icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Set <Text code>icon</Text> for Segmented Item.</Text></p>
                        <Segmented
                            options={[
                                {
                                    label: 'List',
                                    value: 'List',
                                    icon: <BarsOutlined />,
                                },
                                {
                                    label: 'Kanban',
                                    value: 'Kanban',
                                    icon: <AppstoreOutlined />,
                                },
                            ]}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Block Segmented" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary"><Text code>block</Text> property will make the <Text code>Segmented</Text> fit to its parent width.</Text></p>
                        <Segmented block options={[123, 456, 'longtext-longtext-longtext-longtext']} /> 
                    </Card>
                    <Card title="Disabled " style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Disabled Segmented.</Text></p>
                        <Space direction="vertical">
                            <Segmented options={['Map', 'Transit', 'Satellite']} disabled />
                            <Segmented
                                options={[
                                    'Daily',
                                    {
                                        label: 'Weekly',
                                        value: 'Weekly',
                                        disabled: true,
                                    },
                                    'Monthly',
                                    {
                                        label: 'Quarterly',
                                        value: 'Quarterly',
                                        disabled: true,
                                    },
                                    'Yearly',
                                ]}
                            />
                        </Space>
                    </Card>
                    <Card title="Three sizes of Segmented" style={{ marginBottom: customStyles.margin, overflowX:'auto' }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">There are three sizes of an Segmented: <Text code>large</Text> (40px), <Text code>default</Text> (32px) and <Text code>small</Text> (24px).</Text></p>
                        <Space direction="vertical">
                            <Segmented size="large" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
                            <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
                            <Segmented size="small" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
                        </Space>
                    </Card>
                    <Card title="Dynamic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Load <Text code>options</Text> dynamically.</Text></p>
                        <Space direction="vertical">
                            <Segmented options={options} />
                            <Button type="primary" disabled={moreLoaded} onClick={handleLoadOptions}>
                                Load more options
                            </Button>
                        </Space>
                    </Card>
                </Col>{/* end col */}
            </Row>
        </>
    )
}

export default UiSegmented
