import React from 'react';
import { Card, Form, Input, Button, Row, Col, Alert } from 'antd';
import usecustomStyles from '../../Common/customStyles';
import { Mail } from 'lucide-react';
import styled from 'styled-components';


import ParticleAuth from '../../Common/ParticleAuth';

const customStyles = usecustomStyles();
const StyleWrapper = styled.div`
    background-color: ${({ theme }) => theme.token.authbgcolor};
`

const PasswordReset = () => {

    // page title
    document.title = "Password Reset" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <StyleWrapper className="auth-page-wrapper" >
            <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Col xs={24} lg={12}>
                    <Card>
                        <Row gutter={[16, 24]}>
                            <ParticleAuth />
                            <Col xs={24} lg={14}>
                                <Card style={{ padding: "20px", border: "0px" }}>
                                    <div className="text-center" style={{ margin: "20px 0" }}>
                                        <h5 style={{ fontSize: "20px", color: customStyles.colorPrimary }}>Forgot Password?</h5>
                                        <p>Reset password with Lizant</p>
                                        <div>
                                            <Mail size={50} style={{ color: customStyles.colorDanger, marginTop: "20px" }} />
                                        </div>
                                    </div>

                                    <Alert type="warning" message="Enter your email and instructions will be sent to you!" style={{ color: customStyles.colorWarning, marginBottom:'20px'}}></Alert>
                                    <div style={{ marginTop: "0px" }} >
                                        <Form name="pass-reset" >
                                            <div className='mt-2'>
                                                <label style={{marginBottom:'4px', display:"block"}}>Email</label>
                                                <Form.Item
                                                    name="email"
                                                    rules={[{ required: true, message: 'Enter your Email Address' }]}
                                                >
                                                    <Input placeholder="Enter your Email Address" style={{outline:'none', boxShadow:'none'}} />
                                                </Form.Item>
                                            </div>

                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                                    Set Reset Link
                                                </Button>
                                            </Form.Item>


                                        </Form>
                                        <div style={{ marginTop: "50px" }} className="text-center">
                                            <p>Wait, I remember my password... <a href="/auth-signin" style={{ marginRight: "5px", textDecoration: "underline", fontWeight: "bold" }}>Click here</a></p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </StyleWrapper>
    );
};

export default PasswordReset;
