import { Card, Col, Row, Tag } from 'antd'
import React from 'react'
import CountUp from 'react-countup';
import { BadgeDollarSign, Briefcase, ChevronDown, ChevronUp, UserSquare2 } from 'lucide-react';
import usecustomStyles from '../../Common/customStyles';
import styled from 'styled-components';

const customStyles = usecustomStyles();
const BgInfo = styled.div`
      background-color: ${({ theme }) => theme.token.colorInfoBg};
`;
const BgSuccess = styled.div`
      background-color: ${({ theme }) => theme.token.colorSuccessBg};
`;
const BgWarning = styled.div`
      background-color: ${({ theme }) => theme.token.colorWarningBg};
`
const TileBox3 = () => {
    return (
        <React.Fragment>
            <Row gutter={[24]} style={{ display: "flex", justifyContent: "space-between", }}>
                <Col xs={24} sm={12} xl={6} style={{ marginBottom: customStyles.margin }}>
                    <Card style={{ backgroundColor: customStyles.colorSuccess }}>
                        <div style={{ display: "flex", alignItems: "center", }}>
                            
                            <div style={{ flexShrink: '0' }}>
                            <BgInfo style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <Briefcase style={{ color: customStyles.colorInfo, }} />
                            </BgInfo>
                               
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', flexGrow: '1' }}>
                                <div style={{ marginLeft: customStyles.marginSM }}>
                                    <p style={{ textTransform: "uppercase", fontSize: "13px", color: customStyles.colorSuccessBg }}>Total Sales</p>
                                    <h4 style={{ color: customStyles.colorBgContainer, fontSize: "22px" }}><span data-target="2045">
                                        <CountUp start={100} end={2045} duration={2} />
                                    </span></h4>
                                    <p style={{ color: customStyles.colorSuccessBg, marginBottom: '0' }}>From 1930 last year</p>
                                </div>
                                <div >
                                    <Tag bordered={false} color='success' style={{ float: "right", marginInlineEnd: "0px" }}>
                                        <ChevronUp size={13} />% 6.11
                                    </Tag>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} xl={6} style={{ marginBottom: customStyles.margin }}>
                    <Card>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ flexShrink: '0' }}>
                            <BgWarning style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <UserSquare2 style={{ color: customStyles.colorWarning, }} />
                            </BgWarning>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', flexGrow: '1' }}>
                                <div style={{ marginLeft: customStyles.marginSM }}>
                                    <p style={{ textTransform: "uppercase", fontSize: "13px" }}>Number of Users</p>
                                    <h4 style={{ fontSize: "22px" }}><span data-target="7522">
                                        <CountUp start={100} end={7522} duration={2} />
                                    </span></h4>
                                    <p style={{ marginBottom: '0' }}>From 9530 last year</p>
                                </div>
                                <div >
                                    <Tag bordered={false} color='red' style={{ float: "right", marginInlineEnd: "0px" }}>
                                        <ChevronDown size={13} />% 10.35
                                    </Tag>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} xl={6} style={{ marginBottom: customStyles.margin }}>
                    <Card>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                            <BgSuccess style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <BadgeDollarSign style={{ color: customStyles.colorSuccess, }} />
                            </BgSuccess>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', flexGrow: '1' }}>
                                <div style={{ marginLeft: customStyles.marginSM }}>
                                    <p style={{ textTransform: "uppercase", fontSize: "13px" }}>Total Revenue</p>
                                    <h4 style={{ fontSize: "22px" }}>$<span data-target="2845.05">
                                        <CountUp start={100} end={2845} duration={2} decimal='.' />
                                    </span></h4>
                                    <p style={{ marginBottom: '0' }}>From $1,750.04 last year</p>
                                </div>
                                <div >
                                    <Tag bordered={false} color='success' style={{ float: "right", marginInlineEnd: "0px" }}>
                                        <ChevronUp size={13} />% 22.96
                                    </Tag>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} xl={6} style={{ marginBottom: customStyles.margin }}>
                    <Card>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                            <BgWarning style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <BadgeDollarSign style={{ color: customStyles.colorWarning, }} />
                            </BgWarning>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', flexGrow: '1' }}>
                                <div style={{ marginLeft: customStyles.marginSM }}>
                                    <p style={{ textTransform: "uppercase", fontSize: "13px" }}>Number of Stores</p>
                                    <h4 style={{ fontSize: "22px" }}><span data-target="405">
                                        <CountUp start={100} end={405} duration={2} />k
                                    </span></h4>
                                    <p>From 308 last year</p>
                                </div>
                                <div>
                                    <Tag bordered={false} color='success' style={{ float: "right", marginInlineEnd: "0px", }}>
                                        <ChevronUp size={13} />% 16.31
                                    </Tag>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default TileBox3;