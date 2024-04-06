import { Card, Col, Row, Typography } from 'antd'
import React from 'react'

import avatar1 from "../../../assets/images/users/avatar-1.jpg"
import usecustomStyles from '../../../Common/customStyles';
import { RiseOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';
import { LineChart } from 'lucide-react';
import styled from 'styled-components';

const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const BorderTop = styled.div`
      border-top: 1px solid ${({ theme }) => theme.token.borderGray};
`;
const BgInfo = styled.div`
      background-color: ${({ theme }) => theme.token.colorInfoBg};
`;

const { Text } = Typography;

const LeaderWidget = () => {

    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                <Col lg={8} xs={24} md={12}>
                    <Card style={{ backgroundColor: customStyles.colorPrimary, color: customStyles.colorBgContainer }}>
                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #eff2f733", marginBottom: "5px" }}>
                                <div style={{ overflow: "hidden" }}>
                                    <h4 style={{ fontSize: "17px" }} >Hello, Diana</h4>
                                    <p > Welcome to Leaderboard</p>
                                </div>

                                <div className="flex-shrink-0">
                                    <div className="avatar-sm">
                                        <span style={{ fontSize: "30px" }}>
                                            🎉
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: "14px", marginTop: "12px", marginBottom: "0px" }} > <span>#35</span> Leaderboard position to reach level 3</p>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col lg={8} xs={24} md={12}>
                    <Card>
                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                                <div className="flex-grow-1">
                                    <h4 style={{ fontSize: "18px", fontWeight: '500' }}>
                                        <span className="counter-value" data-target="12.48">
                                            <CountUp start={0} end={12.48} duration={5} decimal='.' decimals={2} />
                                        </span>k </h4>
                                    <TextMuted style={{ paddingBottom: '8px' }}>Total Member</TextMuted>
                                </div>

                                <div>
                                    <div className="avatar-sm">
                                        <span className="avatar-title bg-primary-subtle rounded fs-2">
                                            <BgInfo style={{ padding: '4px', width: '48px', height: '48px', borderRadius: "5px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                                <LineChart size={45} style={{ color: customStyles.colorInfo, }} />
                                            </BgInfo>
                                            {/* <div id="mini-chart-1" className="apex-charts" dir="ltr">
                                                <LineChart size={45} style={{ color: customStyles.colorPrimary, backgroundColor: customStyles.colorPrimaryBg, padding: "3px", borderRadius: "5px" }} />
                                            </div> */}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <BorderTop style={{ marginTop: "12px", paddingTop: '8px' }} className="mt-2 pt-1 ">
                                <Text style={{ color: customStyles.colorSuccess, fontSize: "14px", marginBottom: "0px", display: 'flex', alignItems: 'center' }}>
                                    <RiseOutlined />{" "}5.26
                                    <TextMuted style={{ fontSize: '12px', marginLeft: '6px' }}>VS Prev. 28 days</TextMuted>
                                </Text>
                            </BorderTop>
                        </div>
                    </Card>
                </Col>

                <Col lg={8} xs={24} md={12}>
                    <Card>
                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                                <div className="flex-grow-1">
                                    <h4 style={{ fontSize: "16px", fontWeight: '500' }}>Edward Diana</h4>
                                    <TextMuted>All Time Winner</TextMuted>
                                </div>

                                <div className="flex-shrink-0">
                                    <div className="avatar-sm">
                                        <span>
                                            <img style={{ height: "48px", borderRadius: "5px" }} src={avatar1} alt="Header Avatar" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <BorderTop style={{ marginTop: "22px", paddingTop: '10px' }} className="mt-2 pt-1">
                                <TextMuted style={{ fontSize: "12px", marginBottom: "0px" }}> 25 Points to Reach Level 3</TextMuted>
                            </BorderTop>
                        </div>
                    </Card>
                </Col>

            </Row>
        </React.Fragment>
    )
}

export default LeaderWidget