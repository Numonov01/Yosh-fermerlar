import { Button, Card, Col, Row, Typography } from 'antd'
import React from 'react'
import usecustomStyles from '../../Common/customStyles';
import { CheckCircleFilled } from '@ant-design/icons';
import CountriesCharts from './CountriesCharts';

const customStyles = usecustomStyles();
const { Text } = Typography;

const TopRetailShop = () => {

    // const progressData = [
    //     { percent: 8, color: 'primary' },
    //     { percent: 20, color: 'success' },
    //     { percent: 14, color: 'info' },
    //     { percent: 7, color: 'danger' },
    //     { percent: 25, color: 'secondary' },
    //     { percent: 10, color: 'dark' },
    //     { percent: 2, color: 'warning' },
    //     { percent: 14, color: 'light' },
    // ];

    return (
        <React.Fragment>
            <Col xs={24} style={{ marginBottom: customStyles.margin }}>
                <Card>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h4 style={{ marginBottom: '0', fontSize:'16px', fontWeight:'500' }}>Top Retail Sales Location</h4>
                        <div>
                            <Button>
                                Export Report
                            </Button>
                        </div>
                    </div>

                    <Row gutter={[24]} style={{ display: "flex", marginTop: customStyles.margin }}>
                        <Col xs={24} lg={16}>
                            <div id="countries_charts" dir="ltr">
                                <CountriesCharts />
                            </div>
                        </Col>
                        <Col xs={24} lg={8}>
                            <div style={{ marginBottom: '8px' }}>
                                <Text style={{ fontSize: "12px", textTransform: "uppercase", color: customStyles.textMuted }}>All Users Statistics</Text>
                            </div>
                            <div style={{marginBottom: '12px'}}>
                                <Text style={{ fontSize: customStyles.h4, }}>1,87,42,102 <small style={{ fontSize: "13px" }}>users</small></Text>
                            </div>
                            <div>

                                <p>Current Activity</p>

                                <div>
                                    {/* <Progress
                                            type="line"
                                            steps={progressData}
                                            strokeColor={{
                                                primary: '#007bff',
                                                success: '#28a745',
                                                info: '#17a2b8',
                                                danger: '#dc3545',
                                                secondary: '#6c757d',
                                                dark: '#343a40',
                                                warning: '#ffc107',
                                                light: '#f8f9fa',
                                            }}
                                        /> */}
                                    {/* <Progress
                                            type="line"
                                            steps={progressData.map((item, index) => (
                                                <Progress.Step
                                                    key={index}
                                                    percent={item.percent}
                                                    strokeColor={item.color}
                                                />
                                            ))}
                                        /> */}
                                </div>

                                <p><CheckCircleFilled style={{ color: customStyles.colorPrimary }} /> Canada <span style={{ float: "right" }}>8%</span></p>
                                <p><CheckCircleFilled style={{ color: customStyles.colorSuccess }} /> Greenland <span style={{ float: "right" }}>20%</span></p>
                                <p><CheckCircleFilled style={{ color: customStyles.colorInfo }} /> US <span style={{ float: "right" }}>14%</span></p>
                                <p><CheckCircleFilled style={{ color: customStyles.colorSecondary }} /> Russia <span style={{ float: "right" }}>25%</span></p>
                                <p><CheckCircleFilled style={{ color: customStyles.colorDanger }} /> Brazil <span style={{ float: "right" }}>7%</span></p>
                                <p><CheckCircleFilled style={{ color: customStyles.colorDark }} /> Sydney <span style={{ float: "right" }}>10%</span></p>
                                <p><CheckCircleFilled style={{ color: customStyles.colorWarning }} /> Norway<span style={{ float: "right" }}>2%</span></p>
                                <p><CheckCircleFilled style={{ color: customStyles.colorBgContainer }} /> China <span style={{ float: "right" }}>14%</span></p>

                            </div>
                        </Col>
                    </Row>

                </Card>
            </Col>
        </React.Fragment>
    )
}

export default TopRetailShop