import React from 'react'
import { Card, Row, Col, Image, Button } from 'antd';
import usecustomStyles from '../../../Common/customStyles';

//import images
import logoLightFull from "../../../assets/images/logo-light.png";
import authEffect2 from "../../../assets/images/effect-pattern/auth-effect-2.png";
import authEffect from "../../../assets/images/effect-pattern/auth-effect.png";
import maintain from "../../../assets/images/maintenance.webp"
import { HomeFilled } from '@ant-design/icons';
import styled from 'styled-components';

const customStyles = usecustomStyles();
const StyleWrapper = styled.div`
    background-color: ${({ theme }) => theme.token.authbgcolor};
`

const Maintenance = () => {

    // page title
    document.title = "Maintenance" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <StyleWrapper className="auth-page-wrapper">
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col xs={24} md={14}>
                        <Card>
                            <Row gutter={[16, 24]}>
                                <Col xs={24} lg={10}>
                                    <Card style={{ backgroundColor: customStyles.colorPrimary, color: customStyles.colorBgContainer, height: "100%", }}>
                                        <div style={{ display: 'flex', flexDirection: "column", alignItems: "space-between", padding: "20px" }}>
                                            <div style={{ marginBottom: "30px" }}>
                                                <img src={logoLightFull} alt="" height="42" />
                                                <img src={authEffect2} alt="" style={{ position: "absolute", zIndex: "1", top: '0%', right: 0, transform: 'rotate(-45deg)' }} />
                                                <img src={authEffect} alt="" style={{ top: "-15px", left: "-20px", position: "absolute", zIndex: "1" }} />
                                                <img src={authEffect} alt="" style={{ position: "absolute", zIndex: "1", bottom: "-15px", right: "-20px" }} />
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col xs={24} lg={14} >
                                    <Card style={{ border: "0px" }}>
                                        <div className='text-center'>
                                            <div style={{ marginBottom: "50px", color: customStyles.textMuted }}>
                                                <h2 style={{ fontSize: "22px", fontWeight: "500", color:'#438eff', marginBottom:'4px'}}>Site is Under Maintenance</h2>
                                                <p style={{ marginBottom: "30px", fontSize: "14px" }}>Please check back in sometime</p>
                                                <div>
                                                    <Button type='primary' href='/dashboard'><HomeFilled /> Back to Home</Button>
                                                </div>
                                            </div>
                                            <Image src={maintain} alt='' style={{ width: "330px", height: "318px" }} />
                                        </div>

                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </StyleWrapper>
        </React.Fragment>
    )
}

export default Maintenance