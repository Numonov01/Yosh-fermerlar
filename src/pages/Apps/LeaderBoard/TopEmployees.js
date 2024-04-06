import { Badge, Card, Col, Dropdown, Row, Space, Typography } from 'antd'
import React from 'react'

import avatar2 from "../../../assets/images/users/avatar-2.jpg"
import avatar6 from "../../../assets/images/users/avatar-6.jpg"
import avatar7 from "../../../assets/images/users/avatar-7.jpg"
import { ChevronDown } from 'lucide-react'
import usecustomStyles from '../../../Common/customStyles'
import styled from 'styled-components';

const { Text } = Typography;

const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const TextLight = styled.div`
      color: ${({ theme }) => theme.token.textLight};
`;
const BorderRight = styled.div`
      border-right: 1px solid ${({ theme }) => theme.token.borderGray};
`;
const TopEmployees = () => {

    const items = [
        { label: 'Today', key: '0' },
        { label: 'Yesterday', key: '1' },
        { label: 'Last 7 Days', key: '2' },
        { label: 'Last 30 Days', key: '3' },
        { label: 'This Month', key: '4' },
        { label: 'Last Month', key: '5' },
    ];

    return (
        <React.Fragment>
            <Row gutter={[16, 16]} style={{ marginTop: customStyles.margin, marginBottom : customStyles.margin}}>
                <Col xs={24} md={12}>
                    <TextLight style={{ fontSize: '16px', fontWeight:'500' }}>Top 3 Employees Of The Month</TextLight>
                </Col>
                <Col xs={24} md={12}>
                    <div style={{justifyContent: 'end', display:'flex'}}>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <a href='/#' onClick={(e) => e.preventDefault()} style={{ color: customStyles.colorText }}>
                                <Space>
                                    <Text style={{ fontSize: "12px" }}>SORT BY: </Text><div style={{ color: customStyles.textMuted, marginTop: '-4px' }}>Today<ChevronDown size={15} /></div>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={8} md={12}>
                    <Badge.Ribbon text="1st" color="cyan">
                        <Card>
                            <div className="text-center py-3">
                                <div className="mx-auto avatar-md p-1 bg-card-custom border rounded-circle">
                                    <img style={{ height: "72px", width: "72px", borderRadius: "50%", margin: "15px 0px" }} src={avatar2} className="img-fluid rounded-circle" alt="" />
                                </div>

                                <h5 style={{ fontSize: "16px", marginBottom:'0px' }}>Mildred O. Schultz</h5>
                                <TextMuted>Manager</TextMuted>

                                <Row>
                                    <Col>
                                        <div id="user-chart-1" className="apex-charts" dir="ltr">
                                            {/* <EmployeesWidgetsCharts data={[2, 22, 11, 21, 17, 25]} dataColors='["--tb-primary"]'/> */}
                                        </div>
                                    </Col>
                                    <div style={{width: '100%', textAlign:'center', marginTop:'16px'}}>
                                        <h5 style={{  fontSize: "15px", marginBottom:'0'}}> 16h 9m</h5>
                                        <TextMuted>Working Time</TextMuted>
                                    </div>
                                </Row>

                                <Row style={{ marginTop: customStyles.marginSM, textAlign: "center", display: "flex", justifyContent: "space-between" }}>
                                    <BorderRight style={{  padding: "0px 20px" }}>
                                        <h5 style={{ fontSize: customStyles.h5, marginBottom:'0' }}>874</h5>
                                        <TextMuted>Accuracy</TextMuted>
                                    </BorderRight>
                                    <BorderRight style={{padding: "0px 15px 0px 15px" }}>
                                        <h5 style={{ fontSize: customStyles.h5, marginBottom:'0'}}>21</h5>
                                        <TextMuted>Aesthetic</TextMuted>
                                    </BorderRight>
                                    <Col style={{ padding: "0px 20px" }}>
                                        <h5 style={{ fontSize: customStyles.h5, marginBottom:'0' }}>8741</h5>
                                        <TextMuted>Points</TextMuted>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Badge.Ribbon>
                </Col>

                <Col xs={24} lg={8} md={12}>
                    <Badge.Ribbon text="2nd" color="green">
                        <Card>
                            <div className="text-center py-3">
                                <div className="mx-auto avatar-md p-1 bg-card-custom border rounded-circle">
                                    <img style={{ height: "72px", width: "72px", borderRadius: "50%", margin: "15px 0px" }} src={avatar6} alt="" />
                                </div>

                                <h5 style={{ fontSize: "16px", marginBottom:'0'}}>Joanna W. Owens</h5>
                                <TextMuted>Ux Designer</TextMuted>

                                <Row className="mt-4 pt-2">
                                    <Col>
                                        <div id="user-chart-2" className="apex-charts" dir="ltr">
                                            {/* <EmployeesWidgetsCharts data={[18, 17, 21, 11, 21, 5]} dataColors='["--tb-primary"]'/> */}
                                        </div>
                                    </Col>
                                    <div style={{width: '100%', textAlign:'center', marginTop:'16px'}}>
                                        <h5 style={{ fontSize: '15px', marginBottom:'0'}}> 13h 12m</h5>
                                        <TextMuted>Working Time</TextMuted>
                                    </div>
                                </Row>

                                <Row style={{ marginTop: customStyles.marginSM, textAlign: "center", display: "flex", justifyContent: "space-between" }}>
                                    <BorderRight style={{padding: "0px 20px" }}>
                                        <h5 style={{ fontSize: customStyles.h5, marginBottom:'0'}}>562</h5>
                                        <TextMuted>Accuracy</TextMuted>
                                    </BorderRight>
                                    <BorderRight style={{padding: "0px 15px 0px 10px"}}>
                                        <h5 style={{ fontSize: customStyles.h5, marginBottom:'0'}}>45</h5>
                                        <TextMuted>Aesthetic</TextMuted>
                                    </BorderRight>
                                    <Col style={{ padding: "0px 20px" }}>
                                        <h5 style={{ fontSize: customStyles.h5, marginBottom:'0'}}>8402</h5>
                                        <TextMuted>Points</TextMuted>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Badge.Ribbon>
                </Col>

                <Col xs={24} lg={8} md={12}>
                    <Badge.Ribbon text="3rd" color="volcano">
                        <Card>
                            <div className="text-center py-3">
                                <div className="mx-auto avatar-md p-1 bg-card-custom border rounded-circle">
                                    <img style={{ height: "72px", width: "72px", borderRadius: "50%", margin: "15px 0px" }} src={avatar7} alt="" />
                                </div>

                                <h5 style={{ fontSize: "16px", marginBottom:'0' }}>Robert J. Napier</h5>
                                <TextMuted>Marketer</TextMuted>

                                <Row className="mt-4 pt-2">
                                    <Col>
                                        <div id="user-chart-3" className="apex-charts" dir="ltr">
                                            {/* <EmployeesWidgetsCharts data={[22, 7, 18, 7, 17, 8]} dataColors='["--tb-primary"]'/> */}
                                        </div>
                                    </Col>
                                    <div style={{width: '100%', textAlign:'center', marginTop:'16px'}}>
                                        <h5 style={{ fontSize: '15px', marginBottom:'0'}}> 10h 52m</h5>
                                        <TextMuted>Working Time</TextMuted>
                                    </div>
                                </Row>

                                <Row style={{ marginTop: customStyles.marginSM, textAlign: "center", display: "flex", justifyContent: "space-between" }}>
                                    <BorderRight style={{padding: "0px 20px" }}>
                                        <h5 style={{ fontSize: customStyles.h5, marginBottom:'0'}}>965</h5>
                                        <Text type="secondary">Accuracy</Text>
                                    </BorderRight>
                                    <BorderRight style={{padding: "0px 15px 0px 10px" }}>
                                        <h5 style={{ fontSize: customStyles.h5, marginBottom:'0'}}>632</h5>
                                        <Text type="secondary">Aesthetic</Text>
                                    </BorderRight>
                                    <Col style={{ padding: "0px 20px" }}>
                                        <h5 style={{ fontSize: customStyles.h5, marginBottom:'0'}}>5663</h5>
                                        <Text type="secondary">Points</Text>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Badge.Ribbon>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default TopEmployees