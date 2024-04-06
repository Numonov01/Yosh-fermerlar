import React from 'react';
import { Space, Avatar, Card, Col, Row, Typography, Badge, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import AvatarUrl from '../../../assets/images/logo-sm.png';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

const Avatars = () => {
    // page title
    document.title = "Avatar" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Avatar" />

            <Row gutter={[16, 24]}>
                <Col span={24} xxl={12} className="gutter-row">
                    <Card title="Basic Examples" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Three sizes and two shape s are available.</Text></p>
                        <Row gutter={[16, 24]}>
                            <Col span={24} sm={12} className="gutter-row">
                                <Space wrap size={16}>
                                    <Avatar size={64} icon={<UserOutlined />} />
                                    <Avatar size="large" icon={<UserOutlined />} />
                                    <Avatar icon={<UserOutlined />} />
                                    <Avatar size="small" icon={<UserOutlined />} />
                                </Space>
                            </Col>
                            <Col span={24} sm={12} className="gutter-row">
                                <Space wrap size={16}>
                                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                                    <Avatar shape="square" size="large" icon={<UserOutlined />} />
                                    <Avatar shape="square" icon={<UserOutlined />} />
                                    <Avatar shape="square" size="small" icon={<UserOutlined />} />
                                </Space>
                            </Col>
                        </Row>
                    </Card>
                    <Card title="Type" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.</Text></p>
                        <Space size={16} wrap>
                            <Avatar icon={<UserOutlined />} />
                            <Avatar>U</Avatar>
                            <Avatar size={40}>USER</Avatar>
                            <Avatar src={AvatarUrl} />
                            <Avatar src={<img src={AvatarUrl} alt="avatar" />} />
                            <Avatar
                                style={{
                                    backgroundColor: '#fde3cf',
                                    color: '#f56a00',
                                }}
                            >
                                U
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#87d068',
                                }}
                                icon={<UserOutlined />}
                            />
                        </Space>
                    </Card>
                    <Card title="Avatar.Group" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Avatar group display.</Text></p>
                        <Row gutter={[16, 24]}>
                            <Col span={12} sm={6} className="gutter-row">
                                <Avatar.Group>
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                    <a href="https://ant.design">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#f56a00',
                                            }}
                                        >
                                            K
                                        </Avatar>
                                    </a>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                </Avatar.Group>
                            </Col>
                            <Col span={12} sm={6} className="gutter-row">
                                <Avatar.Group
                                    maxCount={2}
                                    maxStyle={{
                                        color: '#f56a00',
                                        backgroundColor: '#fde3cf',
                                    }}
                                >
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                                    <Avatar
                                        style={{
                                            backgroundColor: '#f56a00',
                                        }}
                                    >
                                        K
                                    </Avatar>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                </Avatar.Group>
                            </Col>
                            <Col span={12} sm={6} className="gutter-row">
                                <Avatar.Group
                                    maxCount={2}
                                    size="large"
                                    maxStyle={{
                                        color: '#f56a00',
                                        backgroundColor: '#fde3cf',
                                    }}
                                >
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                                    <Avatar
                                        style={{
                                            backgroundColor: '#f56a00',
                                        }}
                                    >
                                        K
                                    </Avatar>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                </Avatar.Group>
                            </Col>
                            <Col span={12} sm={6} className="gutter-row">
                                <Avatar.Group
                                    maxCount={2}
                                    maxPopoverTrigger="click"
                                    size="large"
                                    maxStyle={{
                                        color: '#f56a00',
                                        backgroundColor: '#fde3cf',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    <Avatar
                                        style={{
                                            backgroundColor: '#f56a00',
                                        }}
                                    >
                                        K
                                    </Avatar>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#1677ff',
                                        }}
                                        icon={<AntDesignOutlined />}
                                    />
                                </Avatar.Group>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={24} xxl={12} className="gutter-row">
                    <Card title="With Badge" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Usually used for reminders and notifications.</Text></p>
                        <Space size={24}>
                            <Badge count={1}>
                                <Avatar shape="square" icon={<UserOutlined />} />
                            </Badge>
                            <Badge dot>
                                <Avatar shape="square" icon={<UserOutlined />} />
                            </Badge>
                        </Space>
                    </Card>
                    <Card title="Autoset Font Size" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar. You can also use <Text code>gap</Text> to set the unit distance between left and right sides.</Text></p>
                        <Space size={24}>
                            <Badge count={1}>
                                <Avatar shape="square" icon={<UserOutlined />} />
                            </Badge>
                            <Badge dot>
                                <Avatar shape="square" icon={<UserOutlined />} />
                            </Badge>
                        </Space>
                    </Card>
                    <Card title="Responsive Size" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Avatar size can be automatically adjusted based on the screen size.</Text></p>
                        <Avatar
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 90,
                            }}
                            icon={<AntDesignOutlined />}
                        />
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Avatars
