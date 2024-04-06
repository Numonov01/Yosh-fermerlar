import React from 'react';
import { Button, Card, Col, Result, Row, Typography } from 'antd';
import { CloseCircleOutlined, SmileOutlined } from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Paragraph, Text, Link } = Typography;

const customStyles = usecustomStyles();

const UiResult = () => {
    // page title
    document.title = "Result" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Feedback" pageTitle="Result" />

            <Row gutter={[20]}>
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Success" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Show successful results.</Text></p>
                        <Result
                            status="success"
                            title="Successfully Purchased Cloud Server ECS!"
                            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                            extra={[
                                <Button type="primary" key="console">
                                    Go Console
                                </Button>,
                                <Button key="buy">Buy Again</Button>,
                            ]}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Info" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Show processing results.</Text></p>
                        <Result
                            title="Your operation has been executed"
                            extra={
                                <Button type="primary" key="console">
                                    Go Console
                                </Button>
                            }
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Warning" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The result of the warning.</Text></p>
                        <Result
                            status="warning"
                            title="There are some problems with your operation."
                            extra={
                                <Button type="primary" key="console">
                                    Go Console
                                </Button>
                            }
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="403" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You are not authorized to access this page.</Text></p>
                        <Result
                            status="403"
                            title="403"
                            subTitle="Sorry, you are not authorized to access this page."
                            extra={<Button type="primary">Back Home</Button>}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="404" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The page you visited does not exist.</Text></p>
                        <Result
                            status="404"
                            title="404"
                            subTitle="Sorry, the page you visited does not exist."
                            extra={<Button type="primary">Back Home</Button>}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="500" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Something went wrong on server.</Text></p>
                        <Result
                            status="500"
                            title="500"
                            subTitle="Sorry, something went wrong."
                            extra={<Button type="primary">Back Home</Button>}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Error" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Complex error feedback.</Text></p>
                        <Result
                            status="error"
                            title="Submission Failed"
                            subTitle="Please check and modify the following information before resubmitting."
                            extra={[
                                <Button type="primary" key="console">
                                    Go Console
                                </Button>,
                                <Button key="buy">Buy Again</Button>,
                            ]}
                        >
                            <div className="desc">
                                <Paragraph>
                                    <Text
                                        strong
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        The content you submitted has the following error:
                                    </Text>
                                </Paragraph>
                                <Paragraph>
                                    <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
                                    frozen. <Link to=''>Thaw immediately &gt;</Link>
                                </Paragraph>
                                <Paragraph>
                                    <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
                                    eligible to apply. <Link to=''>Apply Unlock &gt;</Link>
                                </Paragraph>
                            </div>
                        </Result>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Custom icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Custom icon.</Text></p>
                        <Result
                            icon={<SmileOutlined />}
                            title="Great, we have done all the operations!"
                            extra={<Button type="primary">Next</Button>}
                        />
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiResult
