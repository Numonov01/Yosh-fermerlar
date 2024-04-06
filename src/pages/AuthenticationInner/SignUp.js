import React from 'react';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import usecustomStyles from '../../Common/customStyles';
import { Facebook } from 'lucide-react';
import { GithubOutlined, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ParticleAuth from '../../Common/ParticleAuth';

const customStyles = usecustomStyles();

const StyleLine = styled.div`
.signin-other-title {
    position: relative;
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        right: 0;
        border-top: 1px dashed #eff2f7;
        top: 10px;
    }
    .title {
        display: inline-block;
        position: relative;
        z-index: 9;
        background-color: #d0d0d0;
        padding: 2px 16px;
    }
  }
`;

const StyleWrapper = styled.div`
    background-color: ${({ theme }) => theme.token.authbgcolor};
`

const AuthSignUp = () => {
    // page title
    document.title = "Sign Up" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <StyleWrapper className="auth-page-wrapper" >
            <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col xs={24} lg={12}>
                    <Card>
                    <Row gutter={[16, 24]}>
                           <ParticleAuth />
                           <Col xs={24} lg={14}>
                                <Card style={{ border: "0px" }}>
                                    <div className="text-center" style={{ margin: "20px" }}>
                                        <h5 style={{ fontSize: "20px", color: customStyles.colorPrimary }}>Create New Account</h5>
                                        <p>Get your free Lizant account now</p>
                                    </div>
                                    <div>
                                        <Form name="login-form" >
                                            <div>
                                                <label style={{marginBottom:'4px', display:'block'}}>Email <span style={{color: customStyles.colorDanger}}>*</span></label>
                                                <Form.Item
                                                    name="email"
                                                    rules={[{ required: true, message: 'Enter your Email address' }]}
                                                >
                                                    <Input placeholder="email"  style={{outline:'none', boxShadow:'none'}}s/>
                                                </Form.Item>
                                            </div>
                                            <div>
                                                <label style={{marginBottom:'4px', display:'block'}}>Username <span style={{color: customStyles.colorDanger}}>*</span></label>
                                                <Form.Item
                                                    name="username"
                                                    rules={[{ required: true, message: 'Please enter your username' }]}
                                                >
                                                    <Input placeholder="Username" style={{outline:'none', boxShadow:'none'}} />
                                                </Form.Item>
                                            </div>
                                            <div>
                                                <label style={{marginBottom:'4px', display:'block'}}>Password</label>
                                                <Form.Item
                                                    name="password"
                                                    rules={[{ required: true, message: 'Please enter your password' }]}
                                                >
                                                    <Input.Password

                                                        placeholder="Password"
                                                        style={{outline:'none', boxShadow:'none'}}
                                                    />
                                                </Form.Item>
                                            </div>

                                            <Form.Item>
                                                <div>
                                                    <p style={{fontSize: "12px", fontStyle: "italic", marginBottom: "0px"}}>By registering you agree to the Lizant <Link href="/#" style={{textDecoration: "underline", fontStyle: "normal"}}>Terms of Use</Link></p>
                                                </div>
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                                    Sign Up
                                                </Button>
                                            </Form.Item>

                                            <div style={{ paddingTop: "18px" }} className='text-center'>
                                                <StyleLine className="signin-other-title">
                                                    <h5 style={{fontSize: "13px"}}>Create account with</h5>
                                                </StyleLine>
                                                <div style={{ paddingTop: "25px" }}>
                                                    <Button style={{ height: "50px", width: "50px", backgroundColor: customStyles.colorPrimaryBg, marginRight: "8px", color: customStyles.colorPrimary, border: "0px" }}><Facebook size={14} /></Button>
                                                    <Button style={{ height: "50px", width: "50px", backgroundColor: customStyles.colorDangerBg, marginRight: "8px", color: customStyles.colorDanger, border: "0px" }}><GoogleOutlined /></Button>
                                                    <Button style={{ height: "50px", width: "50px", backgroundColor: "rgba(20,24,33,.1)", marginRight: "8px", border: "0px" }}><GithubOutlined /></Button>
                                                    <Button style={{ height: "50px", width: "50px", backgroundColor: customStyles.colorInfoBg, marginRight: "8px", color: customStyles.colorInfo, border: "0px" }}><TwitterOutlined /></Button>
                                                </div>
                                            </div>
                                        </Form>
                                        <div style={{ marginTop: "50px" }} className="text-center">
                                            <p>Already have an account ?  <a href="/auth-signin" style={{ marginRight: "5px", textDecoration: "underline", fontWeight: "bold" }}>Sign In</a></p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </StyleWrapper>
    )
}

export default AuthSignUp
