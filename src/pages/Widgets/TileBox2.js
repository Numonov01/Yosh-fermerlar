import {  Card, Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowDownRight, ArrowUpRight, Briefcase, CircleDollarSign, UserCircle2, Wallet } from 'lucide-react'
import CountUp from 'react-countup'
import usecustomStyles from '../../Common/customStyles'
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
const TileBox2 = () => {
    return (
        <React.Fragment>
            <Row gutter={[24]} style={{ display: "flex", justifyContent: "space-between", }}>
                <Col xs={24} sm={12} xl={6} style={{marginBottom: customStyles.margin}}>
                    <Card hoverable>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div>
                                <p style={{ textTransform: "uppercase", fontSize: "13px", marginBottom:'0' }} >Total Earnings</p>
                            </div>
                            <div style={{ color: customStyles.colorSuccess }}>
                                <h5 style={{fontSize: "14px"}}>
                                    <ArrowUpRight size={15} /> +16.24 %
                                </h5>
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "end", justifyContent: "space-between", marginTop: customStyles.marginXS}}>
                            <div>
                                <h4 style={{fontSize: "22px"}}><span data-target="559.25">
                                    $<CountUp start={0} end={559.25} duration={2} />k
                                </span></h4>
                                <Link href="#" style={{textDecoration: "underline"}}>View net earnings</Link>
                            </div>
                            <BgSuccess style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <CircleDollarSign style={{ color: customStyles.colorSuccess, }} />
                            </BgSuccess>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} xl={6} style={{marginBottom: customStyles.margin}}>
                    <Card style={{ backgroundColor: customStyles.colorInfo }} hoverable>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div>
                                <p style={{ textTransform: "uppercase", fontSize: "13px", color: customStyles.colorInfoBg, marginBottom:'0' }}>Orders</p>
                            </div>
                            <div style={{ color: customStyles.colorWarning }}>
                                <h5 style={{fontSize: "14px"}}>
                                    <ArrowDownRight size={15} /> -3.57 %
                                </h5>
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "end", justifyContent: "space-between", marginTop: customStyles.marginXS}}>
                            <div>
                                <h4 style={{color: customStyles.colorBgContainer, fontSize: "22px"}}><span data-target="36894">
                                    <CountUp start={0} end={36894} duration={2} separator=',' />
                                </span></h4>
                                <Link href="#" style={{color: customStyles.colorInfoBg, textDecoration: "underline" }}>View all orders</Link>
                            </div>
                            <BgInfo style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <Briefcase style={{ color: customStyles.colorInfo, }} />
                            </BgInfo>
                            
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} xl={6} style={{marginBottom: customStyles.margin}}>
                    <Card hoverable>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div>
                                <p style={{ textTransform: "uppercase", fontSize: "13px", marginBottom:'0' }} >Customers</p>
                            </div>
                            <div style={{ color: customStyles.colorSuccess }}>
                                <h5 style={{fontSize: "14px"}}>
                                    <ArrowUpRight size={15} /> +29.08 %
                                </h5>
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "end", justifyContent: "space-between", marginTop: customStyles.marginXS}}>
                            <div>
                                <h4 style={{fontSize: "22px"}}><span data-target="183.35">
                                    <CountUp start={0} end={183.35} duration={2} />M
                                </span></h4>
                                <Link href="#" style={{textDecoration: "underline"}}>See details</Link>
                            </div>
                            <BgWarning style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <UserCircle2 style={{ color: customStyles.colorWarning, }} />
                            </BgWarning>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} xl={6} style={{marginBottom: customStyles.margin}}>
                    <Card hoverable>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div>
                                <p style={{ textTransform: "uppercase", fontSize: "13px", marginBottom:'0' }} >My Balance</p>
                            </div>
                            <div >
                                <h5 style={{fontSize: "14px"}}>
                                    +0.00 %
                                </h5>
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "end", justifyContent: "space-between", marginTop: customStyles.marginXS}}>
                            <div>
                                <h4 style={{fontSize: "22px"}}><span data-target="190.73">
                                    $<CountUp start={0} end={190.73} duration={2} />k
                                </span></h4>
                                <Link href="#" style={{textDecoration: "underline"}}>Withdraw money</Link>
                            </div>
                            <BgInfo style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <Wallet style={{ color: customStyles.colorInfo, }} />
                            </BgInfo>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default TileBox2