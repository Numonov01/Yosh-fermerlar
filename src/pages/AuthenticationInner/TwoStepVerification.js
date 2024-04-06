import React from 'react'
import { Card, Form, Button, Row, Col } from 'antd';
import usecustomStyles from '../../Common/customStyles';

import { AtSign } from 'lucide-react';
import ParticleAuth from '../../Common/ParticleAuth';
import styled from 'styled-components';

const customStyles = usecustomStyles();
const StyleWrapper = styled.div`
    background-color: ${({ theme }) => theme.token.authbgcolor};
`

const TwoStepVerification = () => {

    //  page title
    document.title = "Two Steps Verification" + process.env.REACT_APP_PAGE_TITLE;

    const moveToNext = (index) => {
        let nextEle = document.getElementById('digit' + index + '-input')

        if ((nextEle).value.length === 1) {
            if (index !== 4) {
                document.getElementById('digit' + (index + 1) + '-input')?.focus();
            } else {
                nextEle?.blur();
                // Submit code
                console.log('submit code');
            }
        }
    }

    return (
        <React.Fragment>
            <StyleWrapper className="auth-page-wrapper">
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Col xs={24} lg={12}>
                        <Card>
                        <Row gutter={[16, 24]}>
                                <ParticleAuth />
                                <Col xs={24} lg={14}>
                                    <Card style={{border: "0px" }}>
                                        <div className="text-center">
                                            <AtSign size={70} />
                                        </div>

                                        <div>
                                            <div style={{ color: customStyles.textMuted, marginBottom:'20px' }} className='text-center'>
                                                <h5 style={{ fontSize: "20px", color: customStyles.colorPrimary }}>Verify Your Email</h5>
                                                <p>Please enter the 4 digit code sent to <span>example@abc.com</span></p>
                                            </div>
                                            <Form name="two-step-form">
                                                <Row style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                                                    <div style={{height: "40px", marginBottom:'20px'}}>
                                                        <input style={{ backgroundColor: customStyles.colorPrimaryBg, border: "0px", height:'100%', textAlign: "center" }} type="text"
                                                            onKeyUp={() => moveToNext(1)}
                                                            maxLength={1} id="digit1-input" />
                                                    </div>

                                                    <div style={{height: "40px", marginBottom:'20px'}}>
                                                        <input style={{ height:'100%', backgroundColor: customStyles.colorPrimaryBg, border: "0px", textAlign: "center" }} type="text"
                                                            onKeyUp={() => moveToNext(2)}
                                                            maxLength={1} id="digit2-input" />
                                                    </div>

                                                    <div style={{height: "40px", marginBottom:'20px'}}>
                                                        <input style={{height:'100%', backgroundColor: customStyles.colorPrimaryBg, border: "0px", textAlign: "center" }} type="text"
                                                            onKeyUp={() => moveToNext(3)}
                                                            maxLength={1} id="digit3-input" />
                                                    </div>

                                                    <div style={{height: "40px", marginBottom:'20px'}}>
                                                        <input style={{height:'100%', backgroundColor: customStyles.colorPrimaryBg, border: "0px", textAlign: "center" }} type="text"
                                                            onKeyUp={() => moveToNext(4)}
                                                            maxLength={1} id="digit4-input" />
                                                    </div>
                                                </Row>

                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                                        Confirm
                                                    </Button>
                                                </Form.Item>
                                            </Form>
                                            <div style={{ marginTop: "40px" }} className="text-center">
                                                <p>Didn't receive a code ? <a href="/auth-signin" style={{ marginRight: "5px", textDecoration: "underline", fontWeight: "bold" }}>Resend</a></p>
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

export default TwoStepVerification