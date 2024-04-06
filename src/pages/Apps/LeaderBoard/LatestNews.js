import React from 'react'

import avatar1 from "../../../assets/images/users/avatar-1.jpg"
import avatar3 from "../../../assets/images/users/avatar-3.jpg"
import avatar8 from "../../../assets/images/users/avatar-8.jpg"
import avatar9 from "../../../assets/images/users/avatar-9.jpg"
import { Button, Card, Col, Typography } from 'antd'
import SimpleBar from 'simplebar-react'
import { Link } from 'react-router-dom'
import usecustomStyles from '../../../Common/customStyles'
import styled from 'styled-components';

const { Text } = Typography;

const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const LatestNews = () => {
    return (
        <React.Fragment>
            <Col xs={24} xl={6}>
                <Card >
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: '18px'}}>
                        <h4 style={{marginBottom:'0', fontSize:'16px', fontWeight:'500'}}>Latest News</h4>
                        <div>
                            <Button type="dashed">
                                Show All
                            </Button>
                        </div>
                    </div>
                    <div className="px-0">
                        <SimpleBar style={{ maxHeight: "380px" }} className="p-3 pt-0">
                            <Link href="#!" style={{ display: "flex", marginBottom:'12px' }} className="border-bottom">
                                <div>
                                    <div style={{ marginRight: "20px" }}>
                                        <img src={avatar1} style={{ height: "38px", width: "38px", borderRadius: "50%" }} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <Text type='primary' style={{ fontSize: "15px", fontWeight: "500" }}>Henry Carter</Text><br />
                                    <TextMuted>Andrei Coman magna sed porta finibus, risus posted a new article: <Text style={{color: customStyles.colorPrimary, fontWeight:'500'}}>Forget UX Rowland</Text></TextMuted>
                                </div>
                            </Link>

                            <Link href="#!" style={{ display: "flex", marginBottom:'12px' }} className="border-bottom py-3">
                                <div>
                                    <div style={{ marginRight: "20px" }}>
                                        <img src={avatar3} style={{ height: "38px", width: "38px", borderRadius: "50%" }} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <Text type='primary' style={{ fontSize: "15px", fontWeight: "500" }}>Melvin J. Oxford</Text><br />
                                    <TextMuted>Andrei Coman posted a new article: <Text style={{color: customStyles.colorPrimary, fontWeight:'500'}}>Designer Alex</Text></TextMuted>
                                </div>
                            </Link>

                            <Link href="#!" style={{ display: "flex", marginBottom:'12px' }} className="border-bottom py-3">
                                <div>
                                    <div style={{ marginRight: "20px" }}>
                                        <img src={avatar8} style={{ height: "38px", width: "38px", borderRadius: "50%" }} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <Text type='primary' style={{ fontSize: "15px", fontWeight: "500" }}>Marvin J. Veras</Text><br />
                                    <TextMuted>Edward Diana, sed porta finibus, risus Chris Wallace Commented <Text style={{color: customStyles.colorPrimary, fontWeight:'500'}}> Developer Moreno</Text></TextMuted>
                                </div>
                            </Link>

                            <Link href="#!" style={{ display: "flex", marginBottom:'12px' }} className="border-bottom py-3">
                                <div>
                                    <div style={{ marginRight: "20px" }}>
                                        <img src={avatar9} style={{ height: "38px", width: "38px", borderRadius: "50%" }} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <Text type='primary' style={{ fontSize: "15px", fontWeight: "500" }}>Marvin J. Veras</Text><br />
                                    <TextMuted>Edward Diana, Chris combined with Wallace They Commented <Text style={{color: customStyles.colorPrimary, fontWeight:'500'}}>UX Murphy</Text></TextMuted>
                                </div>
                            </Link>

                            <Link href="#!" style={{ display: "flex", marginBottom:'12px' }}>
                                <div>
                                    <div style={{ marginRight: "20px" }}>
                                        <img src={avatar1} style={{ height: "38px", width: "38px", borderRadius: "50%" }} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <Text type='primary' style={{ fontSize: "15px", fontWeight: "500" }}>Henry Carter</Text><br />
                                    <Text type='secondary' className="text-muted mb-0">Andrei Coman magna sed porta finibus, risus posted a new article: <Text style={{color: customStyles.colorPrimary, fontWeight:'500'}}>Forget UX Rowland</Text></Text>
                                </div>
                            </Link>
                            <Link href="#!" style={{ display: "flex", marginBottom:'12px' }} className="border-bottom py-3">
                                <div>
                                    <div style={{ marginRight: "20px" }}>
                                        <img src={avatar3} style={{ height: "38px", width: "38px", borderRadius: "50%" }} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <Text type='primary' style={{ fontSize: "15px", fontWeight: "500" }}>Melvin J. Oxford</Text><br />
                                    <TextMuted>Andrei Coman posted a new article: <Text style={{color: customStyles.colorPrimary, fontWeight:'500'}}>Designer Alex</Text></TextMuted>
                                </div>
                            </Link>

                            <Link href="#!" style={{ display: "flex", marginBottom:'12px' }} className="border-bottom py-3">
                                <div>
                                    <div style={{ marginRight: "20px" }}>
                                        <img src={avatar8} style={{ height: "38px", width: "38px", borderRadius: "50%" }} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <Text type='primary' style={{ fontSize: "15px", fontWeight: "500" }}>Marvin J. Veras</Text><br />
                                    <TextMuted>Edward Diana, sed porta finibus, risus Chris Wallace Commented <Text style={{color: customStyles.colorPrimary, fontWeight:'500'}}> Developer Moreno</Text></TextMuted>
                                </div>
                            </Link>

                            <Link href="#!" style={{ display: "flex", marginBottom:'12px' }} className="border-bottom py-3">
                                <div>
                                    <div style={{ marginRight: "20px" }}>
                                        <img src={avatar9} style={{ height: "38px", width: "38px", borderRadius: "50%" }} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <Text type='primary' style={{ fontSize: "15px", fontWeight: "500" }}>Marvin J. Veras</Text><br />
                                    <TextMuted>Edward Diana, Chris combined with Wallace They Commented <Text style={{color: customStyles.colorPrimary, fontWeight:'500'}}>UX Murphy</Text></TextMuted>
                                </div>
                            </Link>
                        </SimpleBar>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default LatestNews