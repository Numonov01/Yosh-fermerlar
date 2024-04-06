import React, { useState } from 'react';
import { Badge, Button, Card, Col, Descriptions, Radio, Row, Typography } from 'antd';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

const UiDescriptions = () => {
    // page title
    document.title = "Descriptions" + process.env.REACT_APP_PAGE_TITLE;

    //custom size
    const [size, setSize] = useState('default');
    const onChange = (e) => {
        console.log('size checked', e.target.value);
        setSize(e.target.value);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Descriptions" />

            <Row gutter={[24]}>
                <Col span={24} className="gutter-row">
                    <Card title="Basic Examples" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Simplest Usage.</Text></p>
                        <Descriptions title="User Info">
                            <Descriptions.Item label="UserName">Edward Diana</Descriptions.Item>
                            <Descriptions.Item label="Telephone">+(241) 12345 67890</Descriptions.Item>
                            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                            <Descriptions.Item label="Remark">empty</Descriptions.Item>
                            <Descriptions.Item label="Address">
                                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Border Descriptions" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Descriptions with border and background color.</Text></p>
                        <Descriptions title="User Info" bordered>
                            <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                            <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                            <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                            <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                            <Descriptions.Item label="Usage Time" span={2}>
                                2019-04-24 18:00:00
                            </Descriptions.Item>
                            <Descriptions.Item label="Status" span={3}>
                                <Badge status="processing" text="Running" />
                            </Descriptions.Item>
                            <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                            <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                            <Descriptions.Item label="Config Info">
                                Data disk type: MongoDB
                                <br />
                                Database version: 3.4
                                <br />
                                Package: dds.mongo.mid
                                <br />
                                Storage space: 10 GB
                                <br />
                                Replication factor: 3
                                <br />
                                Region: East China 1
                                <br />
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Custom size" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Custom sizes to fit in a variety of containers.</Text></p>
                        <div>
                            <Radio.Group onChange={onChange} value={size} style={{ marginBottom: customStyles.marginXS }}>
                                <Radio value="default">default</Radio>
                                <Radio value="middle">middle</Radio>
                                <Radio value="small">small</Radio>
                            </Radio.Group>
                            <Descriptions
                                bordered
                                title="Custom Size"
                                size={size}
                                extra={<Button type="primary">Edit</Button>}
                            >
                                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                                <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                                <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                                <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                                <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                                <Descriptions.Item label="Config Info">
                                    Data disk type: MongoDB
                                    <br />
                                    Database version: 3.4
                                    <br />
                                    Package: dds.mongo.mid
                                    <br />
                                    Storage space: 10 GB
                                    <br />
                                    Replication factor: 3
                                    <br />
                                    Region: East China 1
                                    <br />
                                </Descriptions.Item>
                            </Descriptions>
                            <br />
                            <br />
                            <Descriptions title="Custom Size" size={size} extra={<Button type="primary">Edit</Button>}>
                                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                                <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                                <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                                <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                                <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                            </Descriptions>
                        </div>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Responsive" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Responsive configuration enables perfect presentation on small screen devices.</Text></p>
                        <div>
                            <Descriptions
                                title="Responsive Descriptions"
                                bordered
                                column={{
                                    xxl: 4,
                                    xl: 3,
                                    lg: 3,
                                    md: 3,
                                    sm: 2,
                                    xs: 1,
                                }}
                            >
                                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                                <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                                <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                                <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                                <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                                <Descriptions.Item label="Config Info">
                                    Data disk type: MongoDB
                                    <br />
                                    Database version: 3.4
                                    <br />
                                    Package: dds.mongo.mid
                                    <br />
                                    Storage space: 10 GB
                                    <br />
                                    Replication factor: 3
                                    <br />
                                    Region: East China 1
                                </Descriptions.Item>
                            </Descriptions>
                        </div>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Vertical" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Simplest Usage.</Text></p>
                        <Descriptions title="User Info" layout="vertical">
                            <Descriptions.Item label="UserName">Edward Diana</Descriptions.Item>
                            <Descriptions.Item label="Telephone">+(241) 12345 67890</Descriptions.Item>
                            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                            <Descriptions.Item label="Address" span={2}>
                                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Descriptions.Item>
                            <Descriptions.Item label="Remark">empty</Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Vertical border" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Descriptions with border and background color.</Text></p>
                        <Descriptions title="User Info" layout="vertical" bordered>
                            <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                            <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                            <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                            <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                            <Descriptions.Item label="Usage Time" span={2}>
                                2019-04-24 18:00:00
                            </Descriptions.Item>
                            <Descriptions.Item label="Status" span={3}>
                                <Badge status="processing" text="Running" />
                            </Descriptions.Item>
                            <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                            <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                            <Descriptions.Item label="Config Info">
                                Data disk type: MongoDB
                                <br />
                                Database version: 3.4
                                <br />
                                Package: dds.mongo.mid
                                <br />
                                Storage space: 10 GB
                                <br />
                                Replication factor: 3
                                <br />
                                Region: East China 1
                                <br />
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiDescriptions
