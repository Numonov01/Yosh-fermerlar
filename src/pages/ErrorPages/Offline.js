import React from 'react'
import { Card, Button, Row, Col } from 'antd';
import { HeartFilled, SyncOutlined } from '@ant-design/icons';
import usecustomStyles from '../../Common/customStyles';
import styled from 'styled-components';

//import images
import logoLightFull from "../../assets/images/logo-light.png";
import authEffect2 from "../../assets/images/effect-pattern/auth-effect-2.png";
import authEffect from "../../assets/images/effect-pattern/auth-effect.png";

const customStyles = usecustomStyles();

const StyleWrapper = styled.div`
    background-color: ${({ theme }) => theme.token.authbgcolor};
`

const Offline = () => {

    // page title
    document.title = "Offline Page" + process.env.REACT_APP_PAGE_TITLE;

    const handleRefreshPage = () => {
        window.location.reload(); // Reload the page
    };

    return (
        <React.Fragment>
            <StyleWrapper className="auth-page-wrapper">
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col xs={24} lg={14}>
                        <Card>
                            <Row gutter={[16, 24]}>
                                <Col xs={24} xl={10}>
                                    <Card style={{ backgroundColor: customStyles.colorPrimary, color: customStyles.colorBgContainer, height: "100%", }}>
                                        <div style={{ display: 'flex', flexDirection: "column", alignItems: "space-between", padding: "20px" }}>
                                            <div style={{ marginBottom: "30px" }}>
                                                <img src={logoLightFull} alt="" height="26" />
                                                <img src={authEffect2} alt="" style={{ position: "absolute", zIndex: "1", top: '0%', right: 0, transform: 'rotate(-45deg)' }} />
                                                <img src={authEffect} alt="" style={{ top: "-15px", left: "-20px", position: "absolute", zIndex: "1" }} />
                                                <img src={authEffect} alt="" style={{ position: "absolute", zIndex: "1", bottom: "-15px", right: "-20px" }} />
                                            </div>

                                            <div>
                                                <h3 style={{ fontSize: "22px", fontWeight: "bold" }}>Start your journey with us.</h3>
                                                <p>It brings together your tasks, projects, timelines, files, and more</p>
                                            </div>
                                            <div>
                                                <p style={{ marginBottom: "0px" }}>&copy; {new Date().getFullYear()} Lizant. Crafted with <HeartFilled style={{ color: customStyles.colorDanger }} /> by Themesbrand</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col xs={24} xl={14}>
                                    <Card style={{ border: "0px", display: 'flex', flexDirection: "column", alignItems: "space-between", padding: "20px", height: '100%', justifyContent: 'space-between', textAlign:'center' }}>
                                        <div style={{ position: "relative" }}>
                                            <h4 style={{ fontSize: "20px", textTransform: "uppercase" }}>We're Currently Offline</h4>
                                            <p style={{ fontSize: "15px", marginBottom: "30px" }}>We can't show you this images because you aren't connected to the internet. When you’re back online refresh the page or hit the button below</p>
                                            <div>
                                                <Button type='primary' onClick={handleRefreshPage} style={{outline:'none', boxShadow:'none'}}><SyncOutlined />Refresh</Button>
                                            </div>
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

export default Offline