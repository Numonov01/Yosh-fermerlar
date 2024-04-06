import React from 'react'
import { Card, Form, Button, Row, Col } from 'antd';
import usecustomStyles from '../../Common/customStyles';
import { Smile } from 'lucide-react';
import ParticleAuth from '../../Common/ParticleAuth';
import styled from 'styled-components';

const customStyles = usecustomStyles();
const StyleWrapper = styled.div`
    background-color: ${({ theme }) => theme.token.authbgcolor};
`

const SuccessMessage = () => {

    // page title
    document.title = "Success Message" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <StyleWrapper className="auth-page-wrapper" >
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col xs={24} lg={12}>
                        <Card>
                        <Row gutter={[16, 24]}>
                                <ParticleAuth />
                                <Col xs={24} lg={14}>
                                    <Card style={{border: "0px" }}>
                                        <div className='text-center'>
                                            <Smile size={70} style={{ color: customStyles.colorPrimary, marginBottom: "20px" }} />
                                        </div>

                                        <div>
                                            <Form name="success-form" >
                                                <div className='text-center'>
                                                    <div style={{ color: customStyles.textMuted }}>
                                                        <h4 style={{ fontSize: "22px" }}>Well done !</h4>
                                                        <p>Aww yeah, you successfully read this important message.</p>
                                                    </div>

                                                    <Form.Item>
                                                        <Button href='/dashboard' type="primary" htmlType="submit" style={{ width: "100%" }}>
                                                            Back to Dashboard
                                                        </Button>
                                                    </Form.Item>
                                                </div>
                                            </Form>
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

export default SuccessMessage