import { Avatar, Badge, Button, Card, Col, Progress, Row } from 'antd'
import { ArrowUpCircle } from 'lucide-react'
import React from 'react'
import usecustomStyles from '../../Common/customStyles';
import styled from 'styled-components';

const customStyles = usecustomStyles();
const TextMuted = styled.div`
color: ${({ theme }) => theme.token.textMute};
`;

const BgInfo = styled.div`
      background-color: ${({ theme }) => theme.token.colorInfoBg};
`;

const TextInfo = styled.div`
      color: ${({ theme }) => theme.token.textInfo};
`;
const TextPrimary = styled.div`
      color: ${({ theme }) => theme.token.textDark};
`;
const Otherwidgets = () => {

    const conicColors1 = { '0%': '#87d068', '30%': '#ffe58f', '100%': '#ffccc7' };
    const conicColors2 = { '0%': '#87d068', '100%': '#ffccc7' };
    const conicColors3 = { '60%': '#87d068', '85%': '#ffe58f', '100%': '#ffccc7' };


    return (
        <React.Fragment>
            <Row gutter={[24]}>
                <Col sm={24} lg={12} style={{ marginBottom: customStyles.margin }}>
                        <BgInfo style={{ padding: '22px', borderRadius: '8px',}}>
                            <Row style={{ display: "flex", justifyContent: "space-between" }} className="gy-3">
                                <Col className="col-sm">
                                    <TextPrimary style={{ fontSize: "18px", marginBottom: '8px', fontWeight: '600' }}>Need More Sales?</TextPrimary>
                                    <TextInfo className="mb-0">Upgrade to pro for added benefits.</TextInfo>
                                </Col>
                                <Col className="col-sm-auto">
                                    <Button type='primary' style={{ backgroundColor: "#4ab0c1", boxShadow: 'none', paddingLeft: "0px", height: "40px" }} shape='round'><Avatar size="large" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", marginTop: "-6px", marginRight: "6px" }} icon={<ArrowUpCircle style={{ paddingTop: "7px" }} />} /> Go Pro Now</Button>
                                </Col>
                                <div style={{ position: "absolute", marginTop: customStyles.marginXXS, marginLeft: "50%", opacity: "0.25" }} className="position-absolute top-0 start-50 mt-2 opacity-25">
                                    {/* <Store size={60} /> */}
                                </div>
                            </Row>
                        </BgInfo>
                </Col>
                <Col sm={24} lg={12} style={{ marginBottom: customStyles.margin }}>
                    <div style={{ borderRadius: '8px', padding: '22px',  backgroundColor: customStyles.colorPrimary, color: customStyles.colorBgContainer }}>
                        <Row style={{ display: "flex", justifyContent: "space-between" }} gutter={[16, 16]}>
                            <Col>
                                <h5 style={{fontSize: "18px", marginBottom: '8px', fontWeight: '600' }} >Need More Sales?</h5>
                                <p style={{ marginBottom: "0px" }}>Upgrade to pro for added benefits.</p>
                            </Col>
                            <Col>
                                <Button type='primary' shape='round' style={{ paddingLeft: "0px", height: "42px", marginRight: customStyles.marginXS, backgroundColor: "#106fff", outline:'none', boxShadow:'none' }}><Avatar size="large" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", marginTop: "-6px", marginRight: "6px" }} icon={<ArrowUpCircle style={{ paddingTop: "7px" }} />} /> Go Pro Now</Button>
                            </Col>
                        </Row>
                       
                    </div>
                </Col>
            </Row>

            <Row gutter={[24]}>
                <Col sm={24} xl={8} style={{ marginBottom: customStyles.margin, width: '100%' }}>
                    <Card>
                        <h4 style={{ fontSize: "16px", fontWeight: "500", marginBottom:'4px' }}>Brand Logo Design - MD</h4>
                        <TextMuted style={{marginTop:'8px'}}>Graphics Work</TextMuted>
                        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-evenly", marginTop:'8px', }}>
                            <p>
                                <Badge count={1} style={{ marginRight: customStyles.marginXXS, backgroundColor: customStyles.colorSuccess }} />Completed
                            </p>
                            <p>
                                <Badge count={3} style={{ marginRight: customStyles.marginXXS, backgroundColor: customStyles.colorWarning }} />In Progress
                            </p>
                            <p><Badge count={2} style={{ marginRight: customStyles.marginXXS, backgroundColor: customStyles.colorDangerBg }} />To Do</p>
                        </div>
                        <Progress percent={100} strokeColor={conicColors1} showInfo={false} />
                    </Card>
                </Col>
                <Col sm={24} xl={8} style={{ marginBottom: customStyles.margin, width: '100%' }}>
                    <Card>
                        <h4 style={{ fontSize: "16px", fontWeight: "500", marginBottom:'4px'}}>Redesign - Landing Page</h4>
                        <TextMuted style={{marginTop:'8px'}}>UI/UX Design</TextMuted>
                        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-evenly", marginTop:'8px', }}>
                            <p>
                                <Badge count={3} style={{ marginRight: customStyles.marginXXS, backgroundColor: customStyles.colorSuccess }} />Completed
                            </p>
                            <p>
                                <Badge count={1} style={{ marginRight: customStyles.marginXXS, backgroundColor: customStyles.colorWarning }} />In Progress
                            </p>
                            <p><Badge count={8} style={{ marginRight: customStyles.marginXXS, backgroundColor: customStyles.colorDangerBg }} />To Do</p>
                        </div>

                        <Progress percent={100} strokeColor={conicColors2} showInfo={false} />
                    </Card>
                </Col>
                <Col sm={24} xl={8} style={{ marginBottom: customStyles.margin, width: '100%' }}>
                    <Card>
                        <h4 style={{ fontSize: "16px", fontWeight: "500", marginBottom:'4px'}}>Ecommerce App for Web</h4>
                        <TextMuted style={{marginTop:'8px'}}>CRM Project</TextMuted>
                        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-evenly", marginTop:'8px', }}>
                            <p>
                                <Badge count={10} style={{ marginRight: customStyles.marginXXS, backgroundColor: customStyles.colorSuccess }} />Completed
                            </p>
                            <p>
                                <Badge count={3} style={{ marginRight: customStyles.marginXXS, backgroundColor: customStyles.colorWarning }} />In Progress
                            </p>
                            <p><Badge count={2} style={{ marginRight: customStyles.marginXXS, backgroundColor: customStyles.colorDangerBg }} />To Do</p>
                        </div>
                        <Progress percent={100} strokeColor={conicColors3} showInfo={false} />
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default Otherwidgets