import React, { useState } from 'react';
import { Alert, Card, Col, Row, Space, Spin, Switch, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

const exampleStyle = {
    margin: '20px 0',
    marginBottom: '0',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '4px'
}

const contentStyle = {
  padding: '50px',
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: '4px'
}

const UiSpin = () => {
    // page title
    document.title = "Spin" + process.env.REACT_APP_PAGE_TITLE;

    //Embedded mode
    const [loading, setLoading] = useState(false);
    const toggle = (checked) => {
        setLoading(checked);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Feedback" pageTitle="Spin" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Usage" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A simple loading status.</Text></p>
                        <Spin />
                    </Card>
                    <Card title="Inside a Container" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Spin in a container.</Text></p>
                        <div style={exampleStyle}>
                            <Spin />
                        </div>
                    </Card>
                    <Card title="Customized description" style={{ marginBottom: customStyles.margin }}>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Space>
                                <Spin tip="Loading" size="small">
                                    <div style={contentStyle} />
                                </Spin>
                                <Spin tip="Loading">
                                    <div style={contentStyle} />
                                </Spin>
                                <Spin tip="Loading" size="large">
                                    <div style={contentStyle} />
                                </Spin>
                            </Space>

                            <Spin tip="Loading...">
                                <Alert
                                    message="Alert message title"
                                    description="Further details about the context of this alert."
                                    type="info"
                                />
                            </Spin>
                        </Space>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Size" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A small <Text type="secondary" code>Spin</Text> is used for loading text, default sized <Text type="secondary" code>Spin</Text> for loading a card-level block, and large Spin used for loading a page.</Text></p>
                        <Space size="middle">
                            <Spin size="small" />
                            <Spin />
                            <Spin size="large" />
                        </Space>
                    </Card>
                    <Card title="Embedded Mode" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Embedding content into <Text type="secondary" code>Spin</Text> will set it into loading state.</Text></p>
                        <div>
                            <Spin spinning={loading}>
                                <Alert
                                    message="Alert message title"
                                    description="Further details about the context of this alert."
                                    type="info"
                                />
                            </Spin>
                            <div
                                style={{
                                    marginTop: 16,
                                }}
                            >
                                Loading state：
                                <Switch checked={loading} onChange={toggle} />
                            </div>
                        </div>
                    </Card>
                    <Card title="Custom Spinning Indicator" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use custom loading indicator.</Text></p>
                        <LoadingOutlined
                            style={{
                                fontSize: 24,
                            }}
                            spin
                        />
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiSpin
