import React from 'react';
import { Button, Card, Col, Row, Statistic, Typography } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, LikeOutlined } from '@ant-design/icons';
import { themecolor } from '../../../config';
import CountUp from 'react-countup';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

//Animated number
const formatter = (value) => <CountUp end={value} separator="," />;

//Countdown
const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const onFinish = () => {
    console.log('finished!');
};
const onChange = (val) => {
    if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
        console.log('changed!');
    }
};

const UiStatistic = () => {
    // page title
    document.title = "Statistic" + process.env.REACT_APP_PAGE_TITLE;


    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Statistic" />

            <Row gutter={[24]}>
                <Col xs={24}  className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Simplest Usage.</Text></p>
                        <Row gutter={16}>
                            <Col xs={24} md={8}>
                                <Statistic title="Active Users" value={112893} />
                            </Col>
                            <Col xs={24} md={8}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                                <Button
                                    style={{
                                        marginTop: customStyles.marginXS,
                                    }}
                                    type="primary"
                                >
                                    Recharge
                                </Button>
                            </Col>
                            <Col xs={24} md={8}>
                                <Statistic title="Active Users" value={112893} loading />
                            </Col>
                        </Row>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24}  xl={12} className="gutter-row">
                    <Card title="Unit" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add unit through <Text code>prefix</Text> and <Text code>suffix</Text>.</Text></p>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                            </Col>
                            <Col span={12}>
                                <Statistic title="Unmerged" value={93} suffix="/ 100" />
                            </Col>
                        </Row>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24}  xl={12} className="gutter-row">
                    <Card title="Animated number" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Animated number with react-countup.</Text></p>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Statistic title="Active Users" value={112893} formatter={formatter} />
                            </Col>
                            <Col span={12}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
                            </Col>
                        </Row>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24}  className="gutter-row">
                    <Card title="In Card" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Display statistic data in Card.</Text></p>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} lg={8}>
                                <Card>
                                    <Statistic
                                        title="Active"
                                        value={11.28}
                                        precision={2}
                                        valueStyle={{
                                            color: themecolor.token.colorError,
                                        }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>{/* end col */}
                            <Col xs={24} lg={8}>
                                <Card>
                                    <Statistic
                                        title="Idle"
                                        value={9.3}
                                        precision={2}
                                        valueStyle={{
                                            color: themecolor.token.colorSuccess,
                                        }}
                                        prefix={<ArrowDownOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>{/* end col */}
                            <Col xs={24} lg={8}>
                                <Card>
                                    <Statistic
                                        title="Active"
                                        value={18.62    }
                                        precision={2}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>{/* end col */}
                        </Row>{/* end row */}
                    </Card>
                </Col>{/* end col */}
                <Col xs={24}  className="gutter-row">
                    <Card title="Countdown" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Countdown component.</Text></p>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={12} lg={6}>
                                <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
                            </Col>{/* end col */}
                            <Col xs={24} sm={12} lg={6}>
                                <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                            </Col>{/* end col */}
                            <Col xs={24} sm={12} lg={6}>
                                <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
                            </Col>{/* end col */}
                            <Col xs={24} sm={12} lg={6}>
                                <Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
                            </Col>{/* end col */}
                        </Row>{/* end row */}
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiStatistic
