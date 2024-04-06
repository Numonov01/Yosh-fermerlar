import React from 'react';
import { Card, Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { GoogleOutlined, GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import usecustomStyles from '../../Common/customStyles';
import { Facebook } from 'lucide-react';

import ParticleAuth from '../../Common/ParticleAuth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const customStyles = usecustomStyles();

const StyleWrapper = styled.div`
    background-color: ${({ theme }) => theme.token.authbgcolor};
`

const SignIn = () => {

    // page title
    document.title = "Sign In" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <StyleWrapper className="auth-page-wrapper">
            <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Col xs={24} lg={12}>
                    <Card>
                        <Row gutter={[16, 24]}>
                            <ParticleAuth />
                            <Col xs={24} lg={14}>
                                <Card style={{ border: "0px" }}>
                                    <div className="text-center" style={{ margin: "20px" }}>
                                        <h5 style={{ fontSize: "20px", color: customStyles.colorPrimary }}>Welcome Back!</h5>
                                        <p>Sign in to continue to Lizant.</p>
                                    </div>
                                    <div>
                                        <Form name="login-form" >
                                            <div>
                                                <label style={{marginBottom:'4px', display:'block'}}>Username</label>
                                                <Form.Item
                                                    name="username"
                                                    rules={[{ required: true, message: 'Please enter your username' }]}
                                                >
                                                    <Input placeholder="Please Enter Your Username" style={{ outline: 'none', boxShadow: 'none' }} />
                                                </Form.Item>
                                            </div>
                                            <div>
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <label style={{marginBottom:'4px', display:'block'}}>Password</label>
                                                    <Link href="/auth-pass-reset-basic" style={{fontSize:'12px'}}>Forgot password?</Link>
                                                </div>
                                                <Form.Item
                                                    name="password"
                                                    rules={[{ required: true, message: 'Please enter your password' }]}
                                                >
                                                    <Input.Password

                                                        placeholder="Please Enter Your Password" style={{ outline: 'none', boxShadow: 'none' }}
                                                    />
                                                </Form.Item>
                                            </div>

                                            <Form.Item>
                                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                                    <Checkbox>Remember me</Checkbox>
                                                </Form.Item>
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                                    Sign In
                                                </Button>
                                            </Form.Item>

                                            <div style={{ paddingTop: "18px" }} className="text-center">
                                                <div className="signin-other-title">
                                                    <h5 style={{ fontSize: "13px" }}>Sign In with</h5>
                                                </div>
                                                <div style={{ paddingTop: "25px" }}>
                                                    <Button style={{ height: "50px", width: "50px", backgroundColor: customStyles.colorPrimaryBg, marginRight: "8px", color: customStyles.colorPrimary, border: "0px" }}><Facebook size={14} /></Button>
                                                    <Button style={{ height: "50px", width: "50px", backgroundColor: customStyles.colorDangerBg, marginRight: "8px", color: customStyles.colorDanger, border: "0px" }}><GoogleOutlined /></Button>
                                                    <Button style={{ height: "50px", width: "50px", backgroundColor: "rgba(20,24,33,.1)", marginRight: "8px", border: "0px" }}><GithubOutlined /></Button>
                                                    <Button style={{ height: "50px", width: "50px", backgroundColor: customStyles.colorInfoBg, marginRight: "8px", color: customStyles.colorInfo, border: "0px" }}><TwitterOutlined /></Button>
                                                </div>
                                            </div>
                                        </Form>
                                        <div style={{ marginTop: "50px" }} className="text-center">
                                            <p>Don't have an account?  <a href="/auth-signup" style={{ marginRight: "5px", textDecoration: "underline", color: customStyles.colorSecondary, fontWeight: "bold" }}>Sign Up</a></p>
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

export default SignIn;
