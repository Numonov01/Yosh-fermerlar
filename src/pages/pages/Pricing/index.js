import React from 'react'
import Breadcrumb from '../../../Common/Breadcrumb'
import { Button, Card, Col, Row, Typography } from 'antd';
import { themecolor } from '../../../config';
import { BadgeCheck, BadgeX, BookMarked, CheckCircle2, Layers, Medal } from 'lucide-react';
import usecustomStyles from '../../../Common/customStyles';
import { styled } from 'styled-components';
const { Text, Title } = Typography;
const customStyles = usecustomStyles();

const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const BorderTop = styled.div`
      Border: 1px dashed  ${({ theme }) => theme.token.borderGray};
`;
const BgBlue = styled.div`
      background-color: ${({ theme }) => theme.token.colorInfoBg};
`;
const pricingPlans = [
    { id: 1, plan: "Starter", price: "$19", planDesc: "The perfect way to get started and get used to our tools.", projects: "3", customers: "299", ftpLogin: "5", currentplan: true },
    { id: 2, plan: "Professional", price: "$29", planDesc: "Excellent for scalling teams to build culture. Special plan for professional business.", projects: "8", customers: "449", ftpLogin: "7", support: true },
    { id: 3, plan: "Enterprise", price: "$39", planDesc: "This plan is for those who have a team alredy and running a large business.", projects: "15", customers: "Unlimited", ftpLogin: "12", support: true, storage: "35GB" },
    { id: 4, plan: "Unlimited", price: "$49", planDesc: "For most businesses that want to optimize web queries.", projects: "Unlimited", customers: "Unlimited", ftpLogin: "Unlimited", support: true, storage: "Unlimited", domian: true, popular: true }
]

const pricingPriceplan = [
    { id: 1, bgColor: "#d9e8ff", plan: "Starter", planfor: "Starter plans", price: "22", color: "#438eff", users: "1", storage: "01 GB", domain: "No", support: "No", btnColor: "#438eff" },
    { id: 2, bgColor: "#ffe2e2", plan: "Professional", planfor: "Professional plans", price: "29.99", color: "#ff6c6c", users: "1", storage: "01 GB", domain: "No", support: "No", btnColor: "#ff6c6c", isRibbon: true },
    { id: 3, bgColor: "#dbeff3", plan: "Unlimited", planfor: "Unlimited plans", price: "49.99", color: "#4ab0c1", users: "5", storage: "40 GB", domain: "Yes", support: "Yes", btnColor: "#4ab0c1" },
]

const pricingPackageplan = [
    { id: 1, icon: <BookMarked size={20} />, plan: "Basic Plan", planfor: "For Startup", price: "19.99", uptoProject: "Upto", projects: "3", uptoCustomer: "Upto", customers: "299", ftpLogin: "5", btnColor: "soft-secondary", btntext: "Sign Up Free" },
    { id: 2, icon: <Medal size={20} />, plan: "Pro Business", planfor: "Professional plans", uptoProject: "Upto", price: "29.99", projects: "15", customers: "Unlimited", ftpLogin: "12", btnColor: "secondary", btntext: "Get Started", support: true },
    { id: 3, icon: <Layers size={20} />, plan: "Platinum Plan", planfor: "Enterprise Businesses", price: "39.99", projects: "Unlimited", customers: "Unlimited", ftpLogin: "Unlimited", btnColor: "soft-secondary", btntext: "Get Started", support: true, storage: true, domain: true },
]

const Pricing = () => {

    document.title = "Pricing" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>

            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Pages" pageTitle="Pricing" />

            {/* Cards 1 */}
            <Row style={{ justifyContent: "center", marginBottom: customStyles.marginXS }}>
                <Col span={24} >
                    <div className="text-center" style={{ marginBottom: '24px' }}>
                        <div>
                            <Text style={{ fontWeight: "500", fontSize: "22px", marginBottom: '8px', display: 'block' }}>Our Plans for your Business</Text>
                        </div>
                        <TextMuted style={{ fontSize: "15px" }}>Simple pricing. No hidden fees. Advanced features for you business.</TextMuted>
                    </div>
                </Col>
            </Row>
            {/* Cards */}
            <Row gutter={[24]}>
                {(pricingPlans || []).map((item, key) => (
                    <Col xs={24} xl={6} md={12} key={key} >
                        <Card style={{ marginBottom: customStyles.margin, borderTop: '2px solid #438eff' }} key={key} >
                            <Title level={5} style={{ marginBottom: "0px" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div>
                                        <h5>{item.plan}</h5>
                                    </div>
                                    <div>
                                        <h2>{item.price} <small style={{ fontSize: "13px" }}>/Month</small></h2>
                                    </div>
                                </div>
                            </Title>
                            <TextMuted>{item.planDesc}</TextMuted>
                            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '14px' }}>
                                <li>
                                    <div style={{ display: "flex", marginBottom: customStyles.marginXS }}>
                                        <div>
                                            <CheckCircle2 style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS, }} size={15} />
                                        </div>
                                        <div >
                                            <b>{item.projects}</b> Projects
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div style={{ display: "flex", marginBottom: customStyles.marginXS }}>
                                        <div>
                                            <CheckCircle2 style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} />
                                        </div>
                                        <div>
                                            <b>{item.customers}</b> Customers
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div style={{ display: "flex", marginBottom: customStyles.marginXS }}>
                                        <div>
                                            <CheckCircle2 style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} />
                                        </div>
                                        <div>
                                            Scalable Bandwidth
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div style={{ display: "flex", marginBottom: customStyles.marginXS }}>
                                        <div>
                                            <CheckCircle2 style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} />
                                        </div>
                                        <div>
                                            <b>{item.ftpLogin}</b> FTP Login
                                        </div>
                                    </div>
                                </li>

                                {item.support && <li>
                                    <div style={{ display: "flex", marginBottom: customStyles.marginXS }}>
                                        <div>
                                            <CheckCircle2 style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} />
                                        </div>
                                        <div>
                                            <b>24/7</b> Support
                                        </div>
                                    </div>
                                </li>}

                                {item.storage && <li>
                                    <div style={{ display: "flex", marginBottom: customStyles.marginXS }}>
                                        <div>
                                            <CheckCircle2 style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} />
                                        </div>
                                        <div>
                                            <b>{item.storage}</b> Storage
                                        </div>
                                    </div>
                                </li>}

                                {item.domian && <li>
                                    <div style={{ display: "flex", marginBottom: customStyles.marginXS }}>
                                        <div>
                                            <CheckCircle2 style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} />
                                        </div>
                                        <div>
                                            Domain
                                        </div>
                                    </div>
                                </li>}

                            </ul>
                            <div>
                                <Button type='primary' style={{ width: "100%" }} className={item.currentplan ? "btn btn-primary disabled w-100" : "btn btn-primary w-100"} >{item.currentplan ? "Your Current Plan" : "Change Plan"}</Button>
                            </div>

                        </Card>
                    </Col>))}
            </Row>

            {/* packages */}

            <Row style={{ justifyContent: "center", marginBottom: '38px' }} >
                <Col pan={24}>
                    <div style={{ marginBottom: '30px' }}>
                        <div className="text-center"  >
                            <Text style={{ fontWeight: "500", fontSize: "22px", marginBottom: '8px', display: 'block' }}>Our Plans for your Plans</Text>
                        </div>
                        <TextMuted style={{ fontSize: "15px" }}>Simple pricing. No hidden fees. Advanced features for you business.</TextMuted>
                    </div>
                </Col>
            </Row>

            <Row style={{ justifyContent: "center" }} gutter={[24, 24]}>
                {(pricingPackageplan || []).map((item, key) => (
                    <Col xs={24} xl={6} md={12} key={key} >
                        <Card style={{ marginBottom: customStyles.margin, position: 'relative' }} >
                            <BorderTop style={{ position: 'absolute', top: '-7%', left: '42%', width: '70px', height: '70px', borderRadius: '50%', padding: '4px' }}>
                                <BgBlue style={{ padding: '6px', width: '100%', height: '100%', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: customStyles.colorPrimary }}>
                                    {item.icon}
                                </BgBlue>
                            </BorderTop>

                            {/* <Avatar size="large" icon={item.icon} style={{ paddingTop: "3px", display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '0', left: '0', width: '62px', height: '62px' }} /> */}

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>

                                <div style={{ marginLeft: '8px', marginBottom: '10px' }}>
                                    <h3 style={{ marginBottom: '2px', fontSize: '16px', fontWeight: '600' }}>{item.plan}</h3>
                                    <TextMuted style={{ marginBottom: '0' }}>{item.planfor}</TextMuted>
                                </div>
                            </div>
                            <h2 style={{ fontWeight: '600', fontSize: '30px' }}><sup><small>$</small></sup>{item.price}<span style={{ fontSize: "13px", }}>/Month</span></h2>
                            <BorderTop style={{ marginBottom: '18px' }} />
                            <div>
                                <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
                                    <li style={{ marginBottom: customStyles.marginXS }}>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                <BadgeCheck style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} />
                                            </div>
                                            <div>
                                                {item.uptoProject}  <b>{item.projects}</b> Projects
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: customStyles.marginXS }}>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                <BadgeCheck style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} />
                                            </div>
                                            <div>
                                                {item.uptoCustomer} <b>{item.customers}</b> Customers
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: customStyles.marginXS }}>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                <BadgeCheck style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} />
                                            </div>
                                            <div>
                                                Scalable Bandwidth
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: customStyles.marginXS }}>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                <BadgeCheck style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} />
                                            </div>
                                            <div>
                                                <b>{item.ftpLogin}</b> FTP Login
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: customStyles.marginXS }}>
                                        <div style={{ display: "flex" }}>
                                            <div className={item.support ? "flex-shrink-0 text-success me-1" : "flex-shrink-0 text-danger me-1"}>
                                                {item.support ? <BadgeCheck style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} /> : <BadgeX style={{ verticalAlign: 'middle', color: "red", marginRight: "5px" }} size={15} />}
                                            </div>
                                            <div>
                                                <b>24/7</b> Support
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: customStyles.marginXS }}>
                                        <div style={{ display: "flex" }}>
                                            <div className={item.storage ? "flex-shrink-0 text-success me-1" : "flex-shrink-0 text-danger me-1"}>
                                                {item.storage ? <BadgeCheck style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} /> : <BadgeX style={{ verticalAlign: 'middle', color: "red", marginRight: "5px" }} size={15} />}
                                            </div>
                                            <div>
                                                <b> Unlimited</b> Storage
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: customStyles.marginXS }}>
                                        <div style={{ display: "flex" }}>
                                            <div className={item.domain ? "flex-shrink-0 text-success me-1" : "flex-shrink-0 text-danger me-1"}>
                                                {item.domain ? <BadgeCheck style={{ verticalAlign: 'middle', color: themecolor.token.colorSuccess, marginRight: "5px", marginBottom: customStyles.marginXXS }} size={15} /> : <BadgeX style={{ verticalAlign: 'middle', color: "red", marginRight: "5px" }} size={15} />}
                                            </div>
                                            <div>
                                                Domain
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div style={{ marginTop: '24px' }}>
                                    <Button type='primary' style={{ width: "100%", }} href="#" >{item.btntext}</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Simple */}
            <Row style={{ justifyContent: "center", marginBottom: '38px', marginTop: '38px' }}  >
                <Col span={24}>
                    <div className="text-center">
                        <Text style={{ fontWeight: "500", fontSize: "22px", marginBottom: '8px', display: 'block' }}>Simple Pricing Plan</Text>
                        <TextMuted style={{ fontSize: "15px" }}>Simple pricing. No hidden fees. Advanced features for you business.</TextMuted>
                    </div>
                </Col>
            </Row>
            <Row style={{ justifyContent: "center" }} gutter={[24]}>
                {(pricingPriceplan || []).map((item, key) => (
                    <Col xs={24} xl={8} md={12} key={key} >
                        <Card style={{ background: item.bgColor, marginBottom: customStyles.margin }} >
                            <Row style={{ marginBottom: customStyles.margin }}>
                                <Col xs={12} >
                                    <div>
                                        <h3 style={{ color: customStyles.colorText, marginBottom:'4px' }}>{item.plan}</h3>
                                        <TextMuted>{item.planfor}</TextMuted>
                                    </div>

                                    <div>
                                        <h2 style={{ color: customStyles.colorText, fontSize:'30px', marginTop:'24px' }}><sup><small>$</small></sup>{item.price} <Text style={{ fontSize: "13px" }}> /Per month</Text></h2>
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0}}>
                                        <li style={{ marginBottom: customStyles.marginXS, color: customStyles.colorText }}>Users: <span style={{ color: item.color, fontWeight: 'bold' }}>{item.users}</span></li>
                                        <li style={{ marginBottom: customStyles.marginXS, color: customStyles.colorText }}>Storage: <span style={{ color: item.color, fontWeight: 'bold' }}>{item.storage}</span></li>
                                        <li style={{ marginBottom: customStyles.marginXS, color: customStyles.colorText }}>Domain: <span style={{ color: item.color, fontWeight: 'bold' }}>{item.domain}</span></li>
                                        <li style={{ marginBottom: customStyles.marginXS, color: customStyles.colorText }}>Support: <span style={{ color: item.color, fontWeight: 'bold' }}>{item.support}</span></li>
                                    </ul>
                                </Col>
                            </Row>
                            <div>
                                <Button type='primary' href="#!" style={{ backgroundColor: item.btnColor, width: "100%" }}>Buy Now</Button>
                            </div>
                        </Card>
                    </Col>))}
            </Row>
        </React.Fragment >
    )
}

export default Pricing