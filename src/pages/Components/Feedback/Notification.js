import React, { useMemo } from 'react';
import { Button, Card, Col, Divider, Row, Space, Typography, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons'
import {
    BorderBottomOutlined,
    BorderTopOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
} from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

//Hooks usage (recommended)
const Context = React.createContext({
    name: 'Default',
});

//Custom close button
const close = () => {
    console.log(
        'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
};

//Static Method (deprecated)
const openNotificationStaticMethod = () => {
    notification.open({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

//Update Message Content
const key = 'updatable';

const UiNotification = () => {
    // page title
    document.title = "Notification" + process.env.REACT_APP_PAGE_TITLE;

    //Hooks usage (recommended)
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (placement) => {
        api.info({
            message: `Notification ${placement}`,
            description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
            placement,
        });
    };
    const contextValue = useMemo(
        () => ({
            name: 'Welcom to Lizant',
        }),
        [],
    );

    //Duration after which the notification box is closed
    const [apiDuration, contextHolderDuration] = notification.useNotification();
    const openNotificationDuration = () => {
        apiDuration.open({
            message: 'Notification Title',
            description:
                'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
            duration: 0,
        });
    };

    //Notification with icon
    const [apiWithIcon, contextHolderWithIcon] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        apiWithIcon[type]({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    //Custom close button
    const [apiCustomClose, contextHolderCustomClose] = notification.useNotification();
    const openNotificationCustomClose = () => {
        const key = `open${Date.now()}`;
        const btn = (
            <Space>
                <Button type="link" size="small" onClick={() => apiCustomClose.destroy()}>
                    Destroy All
                </Button>
                <Button type="primary" size="small" onClick={() => apiCustomClose.destroy(key)}>
                    Confirm
                </Button>
            </Space>
        );
        apiCustomClose.open({
            message: 'Notification Title',
            description:
                'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
            btn,
            key,
            onClose: close,
        });
    };

    //Customized Icon
    const [apiCustomizedIcon, contextHolderCustomizedIcon] = notification.useNotification();
    const openNotificationCustomizedIcon = () => {
        apiCustomizedIcon.open({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: (
                <SmileOutlined
                    style={{
                        color: '#108ee9',
                    }}
                />
            ),
        });
    };

    //Placement
    const [apiPlacement, contextHolderPlacement] = notification.useNotification();
    const openNotificationPlacement = (placement) => {
        apiPlacement.info({
            message: `Notification ${placement}`,
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement,
        });
    };

    //Update Message Content
    const [apiUpdateMessage, contextHolderUpdateMessage] = notification.useNotification();
    const openNotificationUpdateMessage = () => {
        apiUpdateMessage.open({
            key,
            message: 'Notification Title',
            description: 'description.',
        });
        setTimeout(() => {
            api.open({
                key,
                message: 'New Title',
                description: 'New description.',
            });
        }, 1000);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Feedback" pageTitle="Notification" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Hooks Usage (Recommended)" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use <Text type="secondary" code>notification.useNotification</Text> to get <Text type="secondary" code>contextHolder</Text> with context accessible issue. Please note that, we recommend to use top level registration instead of <Text type="secondary" code>notification</Text> static method, because static method cannot consume context, and ConfigProvider data will not work.</Text></p>
                        <Context.Provider value={contextValue}>
                            {contextHolder}
                            <Space>
                                <Button
                                    type="primary"
                                    onClick={() => openNotification('topLeft')}
                                    icon={<RadiusUpleftOutlined />}
                                >
                                    topLeft
                                </Button>
                                <Button
                                    type="primary"
                                    onClick={() => openNotification('topRight')}
                                    icon={<RadiusUprightOutlined />}
                                >
                                    topRight
                                </Button>
                            </Space>
                            <Divider />
                            <Space>
                                <Button
                                    type="primary"
                                    onClick={() => openNotification('bottomLeft')}
                                    icon={<RadiusBottomleftOutlined />}
                                >
                                    bottomLeft
                                </Button>
                                <Button
                                    type="primary"
                                    onClick={() => openNotification('bottomRight')}
                                    icon={<RadiusBottomrightOutlined />}
                                >
                                    bottomRight
                                </Button>
                            </Space>
                        </Context.Provider>
                    </Card>
                    <Card title="Notification with Icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A notification box with a icon at the left side.</Text></p>
                        {contextHolderWithIcon}
                        <Space>
                            <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
                            <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
                            <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
                            <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
                        </Space>
                    </Card>
                    <Card title="Customized Icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The icon can be customized to any react node.</Text></p>
                        {contextHolderCustomizedIcon}
                        <Button type="primary" onClick={openNotificationCustomizedIcon}>
                            Open the notification box
                        </Button>
                    </Card>
                    <Card title="Static Method (Deprecated)" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Static methods cannot consume Context. Please use hooks first.</Text></p>
                        <Button type="primary" onClick={openNotificationStaticMethod}>
                            Open the notification box
                        </Button>
                    </Card> 
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Duration after which the notification box is closed" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary"><Text type="secondary" code>Duration</Text> can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically.</Text></p>
                        {contextHolderDuration}
                        <Button type="primary" onClick={openNotificationDuration}>
                            Open the notification box
                        </Button>
                    </Card>
                    <Card title="Custom Close Button" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">To customize the style or font of the close button.</Text></p>
                        {contextHolderCustomClose}
                        <Button type="primary" onClick={openNotificationCustomClose}>
                            Open the notification box
                        </Button>
                    </Card>
                    <Card title="Placement" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A notification box can appear from the <Text type="secondary" code>topRight</Text>, <Text type="secondary" code>bottomRight</Text>, <Text type="secondary" code>bottomLeft</Text> or <Text type="secondary" code>topLeft</Text> of the viewport via <Text type="secondary" code>placement</Text>.</Text></p>
                        {contextHolderPlacement}
                        <Space>
                            <Button type="primary" onClick={() => openNotificationPlacement('top')} icon={<BorderTopOutlined />}>
                                top
                            </Button>
                            <Button
                                type="primary"
                                onClick={() => openNotificationPlacement('bottom')}
                                icon={<BorderBottomOutlined />}
                            >
                                bottom
                            </Button>
                        </Space>
                        <Divider />
                        <Space>
                            <Button
                                type="primary"
                                onClick={() => openNotificationPlacement('topLeft')}
                                icon={<RadiusUpleftOutlined />}
                            >
                                topLeft
                            </Button>
                            <Button
                                type="primary"
                                onClick={() => openNotificationPlacement('topRight')}
                                icon={<RadiusUprightOutlined />}
                            >
                                topRight
                            </Button>
                        </Space>
                        <Divider />
                        <Space>
                            <Button
                                type="primary"
                                onClick={() => openNotificationPlacement('bottomLeft')}
                                icon={<RadiusBottomleftOutlined />}
                            >
                                bottomLeft
                            </Button>
                            <Button
                                type="primary"
                                onClick={() => openNotificationPlacement('bottomRight')}
                                icon={<RadiusBottomrightOutlined />}
                            >
                                bottomRight
                            </Button>
                        </Space>
                    </Card>
                    <Card title="Update Message Content" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Update content with unique key.</Text></p>
                        {contextHolderUpdateMessage}
                        <Button type="primary" onClick={openNotificationUpdateMessage}>
                            Open the notification box
                        </Button>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiNotification
