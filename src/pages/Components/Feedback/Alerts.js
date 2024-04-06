import React, { useState } from 'react';
import { Alert, Button, Card, Col, Row, Space, Switch, Typography } from 'antd';
import Marquee from 'react-fast-marquee';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { ErrorBoundary } = Alert;

const { Text } = Typography;

const customStyles = usecustomStyles();

const onClose = (e) => {
    console.log(e, 'I was closed.');
};

//ErrorBoundary
const ThrowError = () => {
    const [error, setError] = useState();
    const onClick = () => {
        setError(new Error('An Uncaught Error'));
    };
    if (error) {
        throw error;
    }
    return (
        <Button danger onClick={onClick}>
            Click me to throw a error
        </Button>
    );
};

const Alerts = () => {
    // page title
    document.title = "Alerts" + process.env.REACT_APP_PAGE_TITLE;

    //Smoothly Unmount
    const [visible, setVisible] = useState(true);
    const handleClose = () => {
        setVisible(false);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Feedback" pageTitle="Alerts" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Alerts" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The simplest usage for short messages. There are 4 types of Alert: <Text type="secondary" code>success</Text>, <Text type="secondary" code>info</Text>, <Text type="secondary" code>warning</Text>, <Text type="secondary" code>error</Text>.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Alert message="Success Text" type="success" />
                            <Alert message="Info Text" type="info" />
                            <Alert message="Warning Text" type="warning" />
                            <Alert message="Error Text" type="error" />
                        </Space>
                    </Card>
                    {/* end card */}
                    <Card title="Closable" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">To show close button.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Alert
                                message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                                type="warning"
                                closable
                                onClose={onClose}
                            />
                            <Alert
                                message="Error Text"
                                description="Error Description Error Description Error Description Error Description Error Description Error Description"
                                type="error"
                                closable
                                onClose={onClose}
                            />
                        </Space>
                    </Card>
                    {/* end card */}
                    <Card title="Icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A relevant icon will make information clearer and more friendly.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Alert message="Success Tips" type="success" showIcon />
                            <Alert message="Informational Notes" type="info" showIcon />
                            <Alert message="Warning" type="warning" showIcon closable />
                            <Alert message="Error" type="error" showIcon />
                            <Alert
                                message="Success Tips"
                                description="Detailed description and advice about successful copywriting."
                                type="success"
                                showIcon
                            />
                            <Alert
                                message="Informational Notes"
                                description="Additional description and information about copywriting."
                                type="info"
                                showIcon
                            />
                            <Alert
                                message="Warning"
                                description="This is a warning notice about copywriting."
                                type="warning"
                                showIcon
                                closable
                            />
                            <Alert
                                message="Error"
                                description="This is an error message about copywriting."
                                type="error"
                                showIcon
                            />
                        </Space>
                    </Card>
                    {/* end card */}
                    <Card title="Loop Banner" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Show a loop banner by using with react-text-loop-next or react-fast-marquee.</Text></p>
                        <Alert
                            banner
                            message={
                                <Marquee pauseOnHover gradient={false}>
                                    I can be a React component, multiple React components, or just some text.
                                </Marquee>
                            }
                        />
                    </Card>
                    {/* end card */}
                    <Card title="ErrorBoundary" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">ErrorBoundary Component for making error handling easier in React.</Text></p>
                        <ErrorBoundary>
                            <ThrowError />
                        </ErrorBoundary>
                    </Card>
                    {/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Description" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Additional description for alert message.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Alert
                                message="Yey! Everything worked!"
                                description="This alert needs your attention, but it's not super important. Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
                                type="success"
                            />
                            <Alert
                                message="Well done !"
                                description="Aww yeah, you successfully read this important alert message. Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
                                type="info"
                            />
                            <Alert
                                message="Uh oh, something went wrong!"
                                description="Better check yourself, you're not looking too good. Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
                                type="warning"
                            />
                            <Alert
                                message="Something is very wrong!"
                                description="Change a few things up and try submitting again. Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
                                type="error"
                            />
                        </Space>
                    </Card>
                    {/* end card */}
                    <Card title="Banner" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Display Alert as a banner at top of page.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Alert message="Warning text" banner />
                            <Alert
                                message="Very long warning text warning text text text text text text text"
                                banner
                                closable
                            />
                            <Alert showIcon={false} message="Warning text without icon" banner />
                            <Alert type="error" message="Error text" banner />
                        </Space>
                    </Card>
                    {/* end card */}
                    <Card title="Smoothly Unmount" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Smoothly unmount Alert upon close.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            {visible && (
                                <Alert message="Alert Message Text" type="success" closable afterClose={handleClose} />
                            )}
                            <p>click the close button to see the effect</p>
                            <Switch onChange={setVisible} checked={visible} disabled={visible} />
                        </Space>
                    </Card>
                    {/* end card */}
                    <Card title="Custom Action" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Custom action.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Alert
                                message="Success Tips"
                                type="success"
                                showIcon
                                action={
                                    <Button size="small" type="text">
                                        UNDO
                                    </Button>
                                }
                                closable
                            />
                            <Alert
                                message="Error Text"
                                showIcon
                                description="Error Description Error Description Error Description Error Description"
                                type="error"
                                action={
                                    <Button size="small" danger>
                                        Detail
                                    </Button>
                                }
                            />
                            <Alert
                                message="Warning Text"
                                type="warning"
                                action={
                                    <Space>
                                        <Button size="small" ghost>
                                            Done
                                        </Button>
                                    </Space>
                                }
                                closable
                            />
                            <Alert
                                message="Info Text"
                                description="Info Description Info Description Info Description Info Description"
                                type="info"
                                action={
                                    <Space direction="vertical">
                                        <Button size="small" type="primary">
                                            Accept
                                        </Button>
                                        <Button size="small" danger ghost>
                                            Decline
                                        </Button>
                                    </Space>
                                }
                                closable
                            />
                        </Space>
                    </Card>
                    {/* end card */}
                </Col>
                {/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default Alerts
