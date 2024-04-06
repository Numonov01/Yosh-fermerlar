import React from 'react'
import Breadcrumb from '../../../Common/Breadcrumb';
import { Avatar, Button, Col, Collapse, Image, Row, Typography } from 'antd';

import faqimage from "../../../assets/images/faq.png"
import { Mail, Twitter } from 'lucide-react';
import { faqdata, faqitems, privacy } from '../../../Common/data';
import usecustomStyles from '../../../Common/customStyles';
import { styled } from 'styled-components';
const { Text } = Typography;

const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;

const FaqPage = () => {

    document.title = "Faqs" + process.env.REACT_APP_PAGE_TITLE;

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <React.Fragment>

            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Pages" pageTitle="Faqs" />

            <Row gutter={[24]}>
                <Col lg={12} xl={24}>
                    <div style={{ padding: "20px 0px 40px 0", marginBottom: customStyles.margin}}> 
                    {/* backgroundColor: "#eff2f7", */}
                        <Row style={{ justifyContent: 'center' }}>
                            <Col xxl={10} >
                                <div className="text-center">
                                    <div>
                                        <Text style={{ fontWeight: "500", fontSize: customStyles.h3, }}>Frequently Asked Questions</Text>
                                    </div>
                                    <TextMuted style={{ fontSize: "15px", marginTop:'6px' }}>If you can not find answer to your question in our FAQ, you can always contact us or email us. We will answer you shortly!</TextMuted>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row gutter={[24]} >
                <Col xl={8} lg={8} style={{ marginBottom: customStyles.margin }} >
                    <Text style={{ fontSize: "16px", fontWeight: "500", marginBottom: customStyles.margin }}>General Questions</Text>
                    <Collapse items={faqitems} defaultActiveKey={['1']} onChange={onChange} style={{ marginTop: customStyles.margin }} />
                </Col>
                <Col xl={8} lg={8} style={{ marginBottom: customStyles.margin }}>
                <Text style={{ fontSize: "16px", fontWeight: "500", marginBottom: customStyles.margin }}>Manage Account</Text>
                    <Collapse items={faqdata} defaultActiveKey={['2']} onChange={onChange} style={{ marginTop: customStyles.margin }} />
                </Col>
                <Col xl={8} lg={8} style={{ marginBottom: customStyles.margin }}>
                    <div className="text-center">
                        <div style={{ marginBottom: customStyles.margin }}>
                            <Image src={faqimage} alt="" style={{ height: "200px" }} />
                        </div>
                        <div>
                            <Text style={{ fontSize: customStyles.h3 }}>Any Questions ?</Text>
                        </div>
                        <Text type='secondary'>You can ask anything you want to know about Feedback.</Text>
                        <div style={{ marginTop: customStyles.marginXS }}>
                            <Button type='primary' shape='round' style={{ paddingLeft: "0px", height: "40px", marginRight: customStyles.marginXS }}><Avatar size="large" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", marginTop: "-6px", marginRight: "6px" }} icon={<Mail style={{ paddingTop: "7px" }} />} /> Email Us</Button>
                            <Button type='primary' style={{ backgroundColor: "#4ab0c1", paddingLeft: "0px", height: "40px" }} shape='round'><Avatar size="large" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", marginTop: "-6px", marginRight: "6px" }} icon={<Twitter style={{ paddingTop: "7px" }} />} /> Send Us Tweet</Button>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row style={{ marginBottom: customStyles.margin }}>
                <Col>
                <Text style={{ fontSize: "16px", fontWeight: "500", marginBottom: customStyles.margin }}>Privacy Security</Text>
                    <Collapse items={privacy} defaultActiveKey={['1']} onChange={onChange} style={{ marginTop: customStyles.margin }} />
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default FaqPage