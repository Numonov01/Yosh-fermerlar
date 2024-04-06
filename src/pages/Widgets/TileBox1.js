import React from 'react'
import { Card, Col, Row } from 'antd';

import { ArrowDownRight, ArrowUpRight, Briefcase, CircleDollarSign, UserCircle2, Wallet } from 'lucide-react';
import CountUp from 'react-countup';
import usecustomStyles from '../../Common/customStyles';
import styled from 'styled-components';

const customStyles = usecustomStyles();

const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;

const BgInfo = styled.div`
      background-color: ${({ theme }) => theme.token.colorInfoBg};
`;

const BgSuccess = styled.div`
      background-color: ${({ theme }) => theme.token.colorSuccessBg};
`;
const BgWarning = styled.div`
      background-color: ${({ theme }) => theme.token.colorWarningBg};
`
const TileBox1 = () => {
    return (
        <React.Fragment>
            <Row gutter={[24]} style={{ display: "flex", justifyContent: "space-between", }}>
                <Col  xs={24} sm={12} xl={6} style={{marginBottom: customStyles.margin}} >
                    <Card hoverable>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <p style={{ textTransform: "uppercase", fontSize: "13px" }}>Total Earnings</p>
                                <h4 style={{ fontSize: "22px" }}>
                                    <span data-target="745.35">
                                        $<CountUp start={0} end={745.35} duration={2} />
                                    </span>
                                </h4>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <h5 style={{ color: customStyles.colorSuccess, marginRight: customStyles.marginXXS }}>
                                        <ArrowUpRight size={15} /> +18.30 %
                                    </h5>
                                    <TextMuted style={{ marginBottom: "4px" }}>than last week</TextMuted>
                                </div>
                            </div>
                            <BgSuccess style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <CircleDollarSign style={{ color: customStyles.colorSuccess, }} />
                            </BgSuccess>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} xl={6} style={{marginBottom: customStyles.margin}}>

                    <Card hoverable>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                            <BgInfo style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <Briefcase style={{ color: customStyles.colorInfo, }} />
                            </BgInfo>
                            </div>
                            <div style={{ textAlign: "end" }}>
                                <p style={{ textTransform: "uppercase", fontSize: "13px" }}>Orders</p>
                                <h4 style={{ fontSize: "22px" }}><span data-target="698.36">
                                    <CountUp start={0} end={698.36} duration={2} /> k
                                </span></h4>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                                    <h5 style={{ color: customStyles.colorDanger, alignItems: "center", marginRight: customStyles.marginXXS }}>
                                        <ArrowDownRight size={15} /> -2.74 %
                                    </h5>
                                    <TextMuted style={{ marginBottom: "4px" }}>than last week</TextMuted>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col  xs={24} sm={12} xl={6} style={{marginBottom: customStyles.margin}}>
                    <Card hoverable>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <p style={{ textTransform: "uppercase", fontSize: "13px" }}>Customers</p>
                                <h4 style={{ fontSize: "22px" }}><span data-target="195.38">
                                    <CountUp start={0} end={195.38} duration={2} />M
                                </span></h4>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <h5 style={{ color: customStyles.colorSuccess, marginRight: customStyles.marginXXS }}>
                                        <ArrowUpRight size={15} /> +29.08 %
                                    </h5>
                                    <TextMuted style={{ marginBottom: "4px" }}>than last week</TextMuted>
                                </div>
                            </div>
                            <div>
                            <BgSuccess style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <UserCircle2 style={{ color: customStyles.colorSuccess, }} />
                            </BgSuccess>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} xl={6} style={{marginBottom: customStyles.margin}}>
                    <Card hoverable>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                            <BgWarning style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <Wallet style={{ color: customStyles.colorWarning, }} />
                            </BgWarning>
                               
                            </div>
                            <div style={{ textAlign: "end" }}>
                                <p style={{ textTransform: "uppercase", fontSize: "13px" }}>MY BALANCE</p>
                                <h4 style={{ fontSize: "22px" }}>
                                    <span data-target="190.73">
                                        <CountUp start={0} end={190.73} duration={2} />k
                                    </span>
                                </h4>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                                    <h5 style={{ color: customStyles.colorDanger, alignItems: "center", marginRight: customStyles.marginXXS }}>
                                        <ArrowDownRight size={15} /> -2.74 %
                                    </h5>
                                    <TextMuted style={{ marginBottom: "4px" }}>than last week</TextMuted>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default TileBox1