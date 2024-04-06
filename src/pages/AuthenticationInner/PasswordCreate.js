import React from 'react'
import { Card, Form, Input, Button, Checkbox, Row, Col } from 'antd';
import usecustomStyles from '../../Common/customStyles';
import ParticleAuth from '../../Common/ParticleAuth';
import styled from 'styled-components';

const customStyles = usecustomStyles();

const StyleWrapper = styled.div`
    background-color: ${({ theme }) => theme.token.authbgcolor};
`

const PasswordCreate = () => {

    // page title
    document.title = "Password Create" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <StyleWrapper className="auth-page-wrapper">
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col xs={24} lg={14}>
                        <Card>
                        <Row gutter={[16, 24]}>
                                <ParticleAuth />
                                <Col xs={24} lg={14}>
                                    <Card style={{ border: "0px" }}>
                                        <div className="text-center mt-2" style={{ margin: "20px" }}>
                                            <h5 style={{ fontSize: "20px", color: customStyles.colorPrimary }}>Create new password</h5>
                                            <p>Your new password must be different from previous used password.</p>
                                        </div>
                                        <div>
                                            <Form name="login-form" >
                                                <div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom:'4px' }}>
                                                        <label>Password</label>
                                                        <a href="/auth-pass-reset-basic" style={{fontSize:'12px'}}>Forgot password?</a>
                                                    </div>
                                                    <Form.Item
                                                        name="password"
                                                        rules={[{ required: true, message: 'Please enter your password' }]}
                                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                    >
                                                        <Input.Password

                                                            placeholder="Enter Password" style={{outline:'none', boxShadow:'none'}}
                                                        />
                                                        <div style={{ fontSize: "12px", marginTop:'4px', display:'block' }}>Your password must be 8-20 characters long.</div>
                                                    </Form.Item>
                                                </div>

                                                <div>
                                                    <label style={{marginBottom:'4px', display:'block' }}>Confirm Password</label>
                                                    <Form.Item
                                                        name="confirmpassword"
                                                        rules={[{ required: true, message: 'Confirm Password' }]}
                                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                    >
                                                        <Input.Password placeholder="Confirm password" style={{outline:'none', boxShadow:'none'}} />
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
                                            </Form>
                                            <div style={{ marginTop: "40px" }} className="text-center">
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
        </React.Fragment>
    )
}

export default PasswordCreate