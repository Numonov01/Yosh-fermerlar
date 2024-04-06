import React from 'react'
import { Card, Form, Input, Button, Row, Col, Image } from 'antd';
import usecustomStyles from '../../Common/customStyles';

import avatar1 from "../../assets/images/users/avatar-1.jpg"
import ParticleAuth from '../../Common/ParticleAuth';
import styled from 'styled-components';

const customStyles = usecustomStyles();

const StyleWrapper = styled.div`
    background-color: ${({ theme }) => theme.token.authbgcolor};
`

const LockScreen = () => {

    // page title
    document.title = "Lock Screen" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <StyleWrapper className="auth-page-wrapper">
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col xs={24} lg={14}>
                        <Card>
                            <Row gutter={[16, 24]}>
                                <ParticleAuth />
                                <Col xs={24} lg={14}>
                                    <Card style={{border: "0px" }}>
                                        <div className="text-center" style={{ margin: "20px" }}>
                                            <h5 style={{ fontSize: "20px", color: customStyles.colorPrimary }}>Lock Screen</h5>
                                            <p>Enter your password to unlock the screen!</p>
                                        </div>

                                        <div className="user-thumb text-center">
                                            <Image src={avatar1} style={{ height: "92px", width: "92px", borderRadius: "50%" }} alt="thumbnail" />
                                            <h5 style={{ fontSize: "15px" }}>Hi ! Edward Diana</h5>
                                        </div>

                                        <div >
                                            <Form name="login-form" >
                                                <div>
                                                    <label style={{marginBottom:'4px', display:'block'}}>Password or Pin</label>
                                                    <Form.Item
                                                        name="password"
                                                        rules={[{ required: true, message: 'Please enter your password' }]}
                                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                    >
                                                        <Input.Password

                                                            placeholder="Enter Password" style={{outline:'none', boxShadow:'none'}}
                                                        />
                                                    </Form.Item>
                                                </div>

                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                                        Unlock
                                                    </Button>
                                                </Form.Item>
                                            </Form>
                                            <div style={{ marginTop: "40px" }} className="text-center">
                                                <p>Not you ? return <a href="/auth-signin" style={{ marginRight: "5px", textDecoration: "underline", fontWeight: "bold" }}>Signin</a></p>
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

export default LockScreen