import { Avatar, Card, Col, Image, Row, Timeline, Tooltip } from 'antd'
import React from 'react'
import Breadcrumb from '../../../Common/Breadcrumb'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import avatar6 from "../../../assets/images/users/avatar-6.jpg"
import { FileArchive, FileText } from 'lucide-react';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;

const Timelinepage = () => {

    document.title = "Timeline" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Pages" pageTitle="Timeline" />

            <Row style={{ marginBottom: customStyles.margin }}>
                <Col lg={12} xl={24}>

                    <Timeline mode="alternate">
                        <items label="22 NOV 2022">
                            <Card>
                                <h5 style={{ fontSize: "18px" }}>Frank hook joined with our company</h5>
                                <TextMuted>
                                    It makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own.
                                </TextMuted>
                            </Card>
                        </items>

                        <items color="green" label="30 OCT 2022">
                            <Card>
                                <h5 style={{ fontSize: "18px" }}>Design Review with Timeless</h5>
                                <TextMuted>
                                    12:30 - 03:20 PM, California, US.
                                </TextMuted>
                                <div style={{ marginTop: customStyles.marginXS }}>
                                    <Avatar.Group>
                                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                        <Link to="https://ant.design">
                                            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                        </Link>
                                        <Tooltip title="Ant User" placement="top">
                                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                        </Tooltip>
                                        <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                                    </Avatar.Group>
                                </div>
                            </Card>
                        </items>

                        <items label="19 NOV 2022">
                            <Card>
                                <div>
                                    <div style={{ display: "flex", marginBottom: "5px" }}>
                                        <div>
                                            <Image src={avatar6} alt="" style={{ height: "48px", width: "48px", borderRadius: "50%", marginRight: customStyles.margin }} />
                                        </div>
                                        <div>
                                            <h5 style={{ fontSize: "18px", marginBottom: "0px" }}>Brianna Clinton</h5>
                                            <TextMuted>Creative Designer</TextMuted>
                                        </div>
                                    </div>
                                    <TextMuted>
                                        I'm so impressed by your dedication to learning. I know it wasn't easy when that technology solution you presented didn't work out.
                                    </TextMuted>
                                </div>
                            </Card>
                        </items>

                        <items color="red" label="24 NOV 2022">
                            <Card>
                                <div>
                                    <div style={{ marginBottom: customStyles.marginXS }}>
                                        <span style={{ backgroundColor: "#e7dffe", color: "#6a4ec7", borderRadius: "4px", padding: "4px 8px", fontSize: "10px", marginRight: "5px" }}>Business</span>
                                        <span style={{ backgroundColor: "#e7dffe", color: "#6a4ec7", borderRadius: "4px", padding: "4px 8px", fontSize: "10px" }} >Marketing</span>
                                    </div>
                                    <TextMuted style={{ marginBottom: customStyles.marginXS }}>
                                        A business is defined as <b>an organization or enterprising entity engaged in commercial, industrial, or professional activities.</b> Businesses can be for-profit entities or non-profit organizations. Business types range from limited liability companies to sole proprietorships, corporations, and partnerships.
                                    </TextMuted>
                                </div>
                            </Card>
                        </items>

                        <items label="15 DEC 2022">
                            <Card>
                                <div>
                                    <h5 style={{ fontSize: "18px", marginBottom: "0px" }}>Project</h5>
                                    <p>
                                        <b>@jennifer_daina</b> edited <b>lizant.zip</b> and attach 2 files to the lizant project.
                                    </p>

                                    <Row>
                                        <Col lg={8} style={{marginRight: "10px"}}>
                                            <Card>
                                                <div style={{display: "flex", alignItems:"center" }}>
                                                    <div style={{marginRight : "5px"}}>
                                                        <FileArchive />
                                                    </div>
                                                    <div>
                                                        <h6>lizant.zip</h6>
                                                        <p style={{fontSize: "11px"}}>12.76 MP</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col lg={8}>
                                            <Card>
                                                <div style={{display: "flex", alignItems:"center" }}>
                                                    <div style={{marginRight : "5px"}}>
                                                        <FileText />
                                                    </div>
                                                    <div>
                                                        <h6>documentation.pdf</h6>
                                                        <p style={{fontSize: "11px"}}>754 KB</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </items>

                        <items label="8 JAN 2023">
                            <Card>
                                <div>
                                    <h5 style={{ fontSize: "18px", marginBottom: "0px" }}>New ticket received 
                                        New
                                        </h5>
                                    <TextMuted style={{ marginBottom: customStyles.marginXS }}>
                                        It is important for us that we receive email notifications when a ticket is created as our IT staff are mobile and will not always be looking at the dashboard for new tickets.
                                    </TextMuted>
                                    <div>
                                        <Link href="#" style={{ textDecorationLine: "underline" }}>Read More </Link>
                                    </div>
                                </div>
                            </Card>
                        </items>
                    </Timeline>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Timelinepage