import { Card, Col } from 'antd'
import React from 'react'
import usecustomStyles from '../../Common/customStyles';
import { ArrowUpRight, Briefcase, CircleDollarSign, UserCircle2 } from 'lucide-react';
import CountUp from 'react-countup';
import {styled} from 'styled-components';

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
`;

const Widget = () => {
    return (
        <React.Fragment>
            <Col xs={24} xl={8}>
                <Card style={{ marginBottom: customStyles.margin }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <p style={{ textTransform: "uppercase", fontSize: "13px" }}>Total Earnings</p>
                            <h4 style={{ fontSize: "22px", marginBottom: '10px' }}>$
                                <CountUp start={0} end={745.35} duration={3} decimal='.' decimals={2} />
                            </h4>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h5 style={{ fontSize: "12px", color: customStyles.colorSuccess, alignItems: "center", marginBottom: '0' }}>
                                    <ArrowUpRight size={13} /> +18.30 %
                                </h5>{" "}
                                <TextMuted style={{ marginBottom: '0', marginLeft: '4px', }} > than last week</TextMuted>
                            </div>
                        </div>
                        <div>
                            <BgSuccess style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                <CircleDollarSign style={{ color: customStyles.colorSuccess, }} />
                            </BgSuccess>
                        </div>
                    </div>
                </Card>
                <Card style={{ marginBottom: customStyles.margin }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div >
                            <BgInfo style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Briefcase style={{ color: customStyles.colorInfo, }} />
                            </BgInfo>
                        </div>
                        <div style={{ textAlign: "end" }}>
                            <p style={{ textTransform: "uppercase", fontSize: "13px" }} className="text-truncate">Orders</p>
                            <h4 style={{ fontSize: "22px" }}>
                                <CountUp start={0} end={698.36} duration={3} decimal='.' decimals={2} />
                                k </h4>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                                <TextMuted style={{ marginBottom: '0', marginRight: '4px', }} > than last week</TextMuted>
                                <h5 style={{ fontSize: "12px", color: customStyles.colorDanger, alignItems: "center", marginBottom: '0' }}>
                                    <ArrowUpRight size={13} /> -2.74 %
                                </h5>{" "}
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <p style={{ textTransform: "uppercase", fontSize: "13px" }} className="text-truncate">Customers</p>
                            <h4 style={{ fontSize: "22px" }}>
                                <CountUp start={0} end={183.35} duration={3} decimal='.' decimals={2} />M </h4>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h5 style={{ fontSize: "12px", color: customStyles.colorSuccess, alignItems: "center", marginBottom: '0' }}>
                                    <ArrowUpRight size={13} /> +29.08 %
                                </h5>{" "}
                                <TextMuted style={{ marginBottom: '0', marginLeft: '4px', }} > than last week</TextMuted>
                            </div>
                        </div>
                        <div>
                            <BgWarning style={{ padding: '6px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <UserCircle2 style={{ color: customStyles.colorWarning, }} />
                            </BgWarning>
                        </div>
                    </div>
                </Card>
            </Col>
        </React.Fragment >
    )
}

export default Widget