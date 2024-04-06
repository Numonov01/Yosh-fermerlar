import { Button, Card, Col, Dropdown, Progress, Row, Typography } from 'antd'
import React from 'react'
import usecustomStyles from '../../../Common/customStyles';
import { AlertTriangle, CheckSquare, ChevronDown } from 'lucide-react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import APIKeyReportChart from './APIKeyReportChart';
import CountUp from 'react-countup';
import styled from 'styled-components';


const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;

const BgSuccess = styled.div`
      background-color: ${({ theme }) => theme.token.colorSuccessBg};
`;
const BgWarning = styled.div`
      background-color: ${({ theme }) => theme.token.colorWarningBg};
`;
const items = [
    { label: 'Today', key: '0' },
    { label: 'Yesterday', key: '1' },
    { label: 'Last 7 Days', key: '2' },
    { label: 'Last 30 Days', key: '3' },
    { label: 'This Month', key: '4' },
    { label: 'Last Month', key: '5' },
];

const { Text } = Typography;

const ApiWidgets = () => {

    return (
        <React.Fragment>
            <Row gutter={[16, 16]} style={{ marginBottom: customStyles.margin }}>
                <Col xxl={6} md={12} xs={24}>
                    <Card hoverable>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <Text>Successful conversions</Text>
                                <Text style={{ fontSize: customStyles.h2, display: 'block', marginBottom: "0px" }}>
                                    <CountUp start={0} end={50} duration={5} />
                                </Text>
                                <TextMuted style={{ marginBottom: "0px", marginTop:'20px' }}><span style={{ fontSize: "11px", color: customStyles.colorSuccess, marginRight: "5px", marginBottom: "0px" }} ><ArrowUpOutlined /> 8.24 % </span> 7 last week</TextMuted>
                            </div>
                            <div>
                            <BgSuccess style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <CheckSquare style={{ color: customStyles.colorSuccess, }} />
                            </BgSuccess>
                               
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} md={12} xs={24}>
                    <Card hoverable>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <Text>Failed conversions</Text>
                                <Text style={{ fontSize: customStyles.h2, display: 'block', marginBottom: "0px" }}>
                                    <CountUp start={0} end={8} duration={5} />
                                </Text>
                                <TextMuted style={{ marginBottom: "0px", marginTop:'20px'}}>
                                    <span style={{ fontSize: "11px", color: customStyles.colorDanger, marginRight: "5px", marginBottom: "0px" }}><ArrowDownOutlined /> 25.87 % </span> 7 last week</TextMuted>
                            </div>
                            <div >
                            <BgWarning style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <AlertTriangle style={{ color: customStyles.colorWarning, }} />
                            </BgWarning>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} md={12} xs={24}>
                    <Card>
                        <Text style={{ marginBottom: "0px" }}>Developer Plan</Text>
                        <div>
                            <Progress percent={38} showInfo={false} style={{ marginBottom: "0px" }} />
                        </div>
                        <TextMuted>You used 215 of 2000 of your API</TextMuted>
                        <div>
                            <Button typeof='primary' style={{marginTop:'10px',  backgroundColor: customStyles.colorInfo, color: "white", fontSize: "13px", float: "right" }} >Create API Key</Button>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} md={12} xs={24}>
                    <Card>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom:'6px' }}>
                                <Text>API Key Report</Text>
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    trigger={['click']}
                                >
                                    <a href='/#' onClick={(e) => e.preventDefault()} style={{ color: customStyles.colorText }}>
                                        <TextMuted>
                                            <Text style={{ fontSize: "12px" }}>SORT BY: </Text><span style={{ color: customStyles.textMuted }}>Today<ChevronDown size={15} /></span>
                                        </TextMuted>
                                    </a>
                                </Dropdown>
                            </div>
                            <div id="hours_spent_chart"
                                style={{ marginTop: customStyles.marginXXS, marginBottom: "0px", paddingBottom: "0px" }}>
                                <APIKeyReportChart dataColors={customStyles.colorPrimary} />
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ApiWidgets