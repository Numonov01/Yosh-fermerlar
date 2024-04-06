import React from 'react';
import { Button, Card, Col, Row, Space, Typography, message } from 'antd';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

const UiMessage = () => {
    // page title
    document.title = "Message" + process.env.REACT_APP_PAGE_TITLE;

    //Hooks usage (recommended)
    const [messageApi, contextHolder] = message.useMessage();
    const info = () => {
        messageApi.info('Hello, Lizant - React & Ant Design Admin & Dashboard!');
    };

    //Other types of message
    const [messageApiType, contextHolderType] = message.useMessage();
    const success = () => {
        messageApiType.open({
            type: 'success',
            content: 'This is a success message',
        });
    };
    const error = () => {
        messageApiType.open({
            type: 'error',
            content: 'This is an error message',
        });
    };
    const warning = () => {
        messageApiType.open({
            type: 'warning',
            content: 'This is a warning message',
        });
    };

    //Customize duration
    const [messageApiCustomDuration, contextHolderCustomDuration] = message.useMessage();
    const successCustomDuration = () => {
        messageApiCustomDuration.open({
            type: 'success',
            content: 'This is a prompt message for success, and it will disappear in 10 seconds',
            duration: 10,
        });
    };

    //Message with loading indicator
    const [messageApiLoading, contextHolderLoading] = message.useMessage();
    const successLoading = () => {
        messageApiLoading.open({
            type: 'loading',
            content: 'Action in progress..',
            duration: 0,
        });
        // Dismiss manually and asynchronously
        setTimeout(messageApiLoading.destroy, 2500);
    };

    //Customized style
    const [messageApiCustom, contextHolderCustom] = message.useMessage();
    const successCustom = () => {
        messageApiCustom.open({
            type: 'success',
            content: 'This is a prompt message with custom className and style',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    //Promise interface
    const [messageApiInterface, contextHolderInterface] = message.useMessage();
    const successInterface = () => {
        messageApiInterface.open({
                type: 'loading',
                content: 'Action in progress..',
                duration: 2.5,
            })
            .then(() => message.success('Loading finished', 2.5))
            .then(() => message.info('Loading finished', 2.5));
    };

    //Static method (deprecated)
    const infoStatic = () => {
        message.info('This is a normal message');
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Feedback" pageTitle="Message" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Hooks usage (recommended)" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use <Text type="secondary" code>message.useMessage</Text> to get <Text type="secondary" code>contextHolder</Text> with context accessible issue. Please note that, we recommend to use top level registration instead of <Text type="secondary" code>message</Text> static method, because static method cannot consume context, and ConfigProvider data will not work.</Text></p>
                        {contextHolder}
                        <Button type="primary" onClick={info}>
                            Display normal message
                        </Button>
                    </Card>
                    <Card title="Customize duration" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Customize message display duration from default <Text type="secondary" code>3s</Text> to <Text type="secondary" code>10s</Text>.</Text></p>
                        {contextHolderCustomDuration}
                        <Button onClick={successCustomDuration}>Customized display duration</Button>
                    </Card>
                    <Card title="Promise interface" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary"><Text type="secondary" code>message</Text> provides a promise interface for <Text type="secondary" code>onClose</Text>. The above example will display a new message when the old message is about to close.</Text></p>
                        {contextHolderInterface}
                        <Button onClick={successInterface}>Display sequential messages</Button>
                    </Card>
                    <Card title="Update Message Content" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Update message content with unique <Text type="secondary" code>key</Text>.</Text></p>
                        {contextHolderInterface}
                        <Button onClick={successInterface}>Display sequential messages</Button>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Other Types of Message" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Messages of success, error and warning types.</Text></p>
                        {contextHolderType}
                        <Space>
                            <Button onClick={success}>Success</Button>
                            <Button onClick={error}>Error</Button>
                            <Button onClick={warning}>Warning</Button>
                        </Space>
                    </Card>
                    <Card title="Message with Loading Indicator" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Display a global loading indicator, which is dismissed by itself asynchronously.</Text></p>
                        {contextHolderLoading}
                        <Button onClick={successLoading}>Display a loading indicator</Button>
                    </Card>
                    <Card title="Customized style" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The <Text type="secondary" code>style</Text> and <Text type="secondary" code>className</Text> are available to customize Message.</Text></p>
                        {contextHolderCustom}
                        <Button onClick={successCustom}>Customized style</Button>
                    </Card>
                    <Card title="Static method (deprecated)" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Static methods cannot consume Context. Please use hooks first.</Text></p>
                        <Button type="primary" onClick={infoStatic}>
                            Static Method
                        </Button>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiMessage
