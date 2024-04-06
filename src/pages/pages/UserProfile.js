import React from 'react';
import { Avatar, Badge, Button, Card, Col, Dropdown, Image, Pagination, Progress, Row, Space, Tabs, Tag, Timeline, Typography } from 'antd';
import { themecolor } from '../../config';
import UserProfile from '../../assets/images/users/avatar-1.jpg';
import ConnectionsImg1 from '../../assets/images/users/avatar-2.jpg';

import avatar1 from '../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../assets/images/users/avatar-6.jpg';
import avatar8 from '../../assets/images/users/avatar-8.jpg';

import companyImg1 from "../../assets/images/companies/img-1.png"
import companyImg2 from "../../assets/images/companies/img-2.png"
import companyImg3 from "../../assets/images/companies/img-3.png"
import companyImg4 from "../../assets/images/companies/img-4.png"
import companyImg5 from "../../assets/images/companies/img-5.png"
import companyImg6 from "../../assets/images/companies/img-6.png"
import companyImg7 from "../../assets/images/companies/img-7.png"
import companyImg8 from "../../assets/images/companies/img-8.png"



import { StyleAvatar, StyleProfileContent, StyleProfileCover } from '../../Common/ProfileStyle';
import { Calendar, ChevronRight, Facebook, FacebookIcon, Figma, FileArchive, Gem, Github, Globe, Instagram, Languages, Linkedin, LinkedinIcon, Mail, MapPin, MoreVertical, Phone, Plus, Twitter, User2, Wand2 } from 'lucide-react';

//Breadcrumbs
import Breadcrumb from '../../Common/Breadcrumb';
import { SearchOutlined } from '@ant-design/icons';
import { teamtab } from '../../Common/data';
import usecustomStyles from '../../Common/customStyles';
import { styled } from 'styled-components';
const { Text, Title, Link } = Typography;

const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const TextLight = styled.div`
      color: ${({ theme }) => theme.token.textLight};
`;
const BgSuccess = styled.div`
      background-color: ${({ theme }) => theme.token.colorSuccessBg};
`;
const BgBlue = styled.div`
      background-color: ${({ theme }) => theme.token.colorLightBlue};
      color: ${({ theme }) => theme.token.textBlue};
`;
const BgInfo = styled.div`
      background-color: ${({ theme }) => theme.token.colorInfoBg};
`;

const BgWarning = styled.div`
      background-color: ${({ theme }) => theme.token.colorWarningBg};
`;


//Trigger mode
const itemsTrigger = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
    },
    {
        label: "3rd menu item",
        key: "3",
    },
];

const droplist = [
    { label: "Edit", key: "0" },
    { label: "Delete", key: "1" },
]

const onChange = (key) => {
    console.log(key);
};

const simplePageProjectData = [
    { id: 1, companyLogo: companyImg1, title: "Chat App Update", lastUpdate: "2 year Ago", members: [{ id: 1, img: avatar1 }, { id: 2, img: avatar3 }, { id: 3, text: "J" }], status: "Inprogress", progress: "80", colortag: "warning" },
    { id: 2, companyLogo: companyImg2, title: "ABC Project Customization", lastUpdate: "2 month Ago", members: [{ id: 1, img: avatar2 }, { id: 2, img: avatar4 }, { id: 3, img: avatar1 }], status: "Progress", progress: "65", colortag: "blue" },
    { id: 3, companyLogo: companyImg3, title: "Client - Frank Hook", lastUpdate: "1 year Ago", members: [{ id: 1, text: "M" }, { id: 2, img: avatar1 }, { id: 3, img: avatar3 }], status: "New", progress: "50", colortag: "cyan" },
    { id: 4, companyLogo: companyImg5, title: "Lizant Project", lastUpdate: "11 year Ago", members: [{ id: 1, img: avatar2 }, { id: 2, img: avatar5 }], status: "Completed", progress: "95", colortag: "success" },
    { id: 5, companyLogo: companyImg6, title: "Brand Logo Design", lastUpdate: "10 min Ago", members: [{ id: 1, img: avatar1 }, { id: 2, img: avatar3 }, { id: 3, text: "E" }], status: "New", progress: "38", colortag: "magenta" },
    { id: 6, companyLogo: companyImg4, title: "Chat App", lastUpdate: "8 hr Ago", members: [{ id: 1, img: avatar1 }, { id: 2, text: "R" }, { id: 3, img: avatar3 }], status: "Inprogress", progress: "76", colortag: "orange" },
    { id: 7, companyLogo: companyImg8, title: "Bsuiness Template - UI/UX design", lastUpdate: "7 month Ago", members: [{ id: 1, img: avatar6 }, { id: 2, img: avatar8 }, { id: 3, text: "R" }, { id: 4, img: avatar3 }], status: "Completed", progress: "87", colortag: "purple" },
    { id: 8, companyLogo: companyImg7, title: "Project Update", lastUpdate: "48 min Ago", members: [{ id: 1, img: avatar6 }, { id: 2, img: avatar2 }, { id: 3, img: avatar5 }], status: "Progress", progress: "69", colortag: "green" },
]


const items = [
    {
        key: '1',
        label: (<span>Overview</span>),
        children: (
            <Row gutter={[20]}>
                <Col xs={24} lg={8} xl={6} className="gutter-row">
                    <Card>
                        <TextLight style={{ fontSize: '16px', fontWeight: '500' }}> About Us</TextLight>
                        <Title level={5} style={{ marginBottom: customStyles.marginXS }}></Title>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }} className='list-unstyled'>
                            <li style={{ marginBottom: customStyles.marginXS }}>
                                <TextMuted>
                                    <User2 style={{ marginRight: customStyles.marginXS, verticalAlign: 'middle' }} size={15} />
                                    Joseph Rogers
                                </TextMuted>
                            </li>
                            <li style={{ marginBottom: customStyles.marginXS }}>
                                <TextMuted >
                                    <Gem style={{ marginRight: customStyles.marginXS, verticalAlign: 'middle' }} size={15} />
                                    Lead Designer / Developer
                                </TextMuted>
                            </li>
                            <li style={{ marginBottom: customStyles.marginXS }}>
                                <TextMuted>
                                    <Mail style={{ marginRight: customStyles.marginXS, verticalAlign: 'middle' }} size={15} />
                                    joseph@lizant.com
                                </TextMuted>
                            </li>
                            <li style={{ marginBottom: customStyles.marginXS }}>
                                <TextMuted type='secondary'>
                                    <Phone style={{ marginRight: customStyles.marginXS, verticalAlign: 'middle' }} size={15} />
                                    +(241) 12345 67890
                                </TextMuted>
                            </li>
                            <li style={{ marginBottom: customStyles.marginXS }}>
                                <TextMuted type='secondary'>
                                    <Globe style={{ marginRight: customStyles.marginXS, verticalAlign: 'middle' }} size={15} />
                                    www.lizant.com
                                </TextMuted>
                            </li>
                            <li style={{ marginBottom: customStyles.marginXS }}>
                                <TextMuted type='secondary'>
                                    <MapPin style={{ marginRight: customStyles.marginXS, verticalAlign: 'middle' }} size={15} />
                                    Phoenix, USA
                                </TextMuted>
                            </li>
                            <li style={{ marginBottom: customStyles.marginXS }}>
                                <TextMuted type='secondary'>
                                    <Calendar style={{ marginRight: customStyles.marginXS, verticalAlign: 'middle' }} size={15} />
                                    22 August 2023
                                </TextMuted>
                            </li>
                            <li>
                                <TextMuted type='secondary'>
                                    <Languages style={{ marginRight: customStyles.marginXS, verticalAlign: 'middle' }} size={15} />
                                    English
                                </TextMuted>
                            </li>
                        </ul>
                    </Card>{/* end card */}
                    <Card title='Contact Us' style={{ marginBottom: customStyles.margin }}>
                        <Space wrap>
                            <Button icon={<Github size={20} />} />
                            <Button icon={<Instagram size={20} />} />
                            <Button icon={<Facebook size={20} />} />
                            <Button icon={<Linkedin size={20} />} />
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col xs={24} lg={15} xl={18} className="gutter-row">
                    <Card >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: customStyles.margin }}>
                            <TextLight style={{ fontSize: '16px', fontWeight: '500' }}>Activity Stream</TextLight>
                            <a href="/#">View More <ChevronRight size={14} style={{ marginLeft: customStyles.marginXXS, verticalAlign: 'middle' }} /></a>
                        </div>
                        <Timeline
                            items={[
                                {
                                    children: (
                                        <div>
                                            <TextLight level={5} style={{ marginBottom: customStyles.marginXXS, fontSize: '16px', fontWeight: '600' }}>Purchase by James Price</TextLight>
                                            <TextMuted style={{ marginBottom: '8px', }}>09:24 PM</TextMuted>
                                            <TextMuted style={{ margin: 0 }}>Product noise evolve smartwatch. I recently bought the NOISE brand smartwatch and it has been a great addition to my daily routine. One of the best features of this watch is the battery life - it lasts for several days on a single charge, which is very convenient.</TextMuted>
                                        </div>
                                    ),
                                },
                                {
                                    children: (
                                        <div>
                                            <TextLight level={5} style={{ marginBottom: customStyles.marginXXS, fontSize: '16px', fontWeight: '600' }}>New ticket received <Badge count="New" status="default" /></TextLight>
                                            <TextMuted style={{ marginBottom: '8px' }}>4 days ago</TextMuted>
                                            <TextMuted style={{ margin: 0 }}>User <Link to='#!'>Erica245</Link> submitted a ticket</TextMuted>
                                        </div>
                                    ),
                                },
                                {
                                    children: (
                                        <div>
                                            <TextLight level={5} style={{ marginBottom: customStyles.marginXXS, fontSize: '16px', fontWeight: '600' }}>Adding a new event with attachments</TextLight>
                                            <TextMuted style={{ marginBottom: customStyles.marginXS }}><Text type='secondary'>30 days ago</Text></TextMuted>
                                            <Row gutter={[20, 20]}>
                                                <Col xs={24} xl={6} className="gutter-row">
                                                    <Link to='#!' style={{ display: 'block', padding: '20px', border: '1px solid', borderColor: themecolor.token.colorBorder, borderRadius: themecolor.token.borderRadius }}><Figma size={15} style={{ marginRight: customStyles.marginXXS, verticalAlign: 'middle' }} /> UI/UX Design File</Link>
                                                </Col>
                                                <Col xs={24} xl={6} className="gutter-row">
                                                    <Link to='#!' style={{ display: 'block', padding: '20px', border: '1px solid', borderColor: themecolor.token.colorBorder, borderRadius: themecolor.token.borderRadius }}><FileArchive size={15} style={{ marginRight: customStyles.marginXXS, verticalAlign: 'middle' }} /> Lizant.zip</Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    ),
                                },
                                {
                                    children: (
                                        <div>
                                            <TextLight level={5} style={{ marginBottom: customStyles.marginXXS, fontSize: '16px', fontWeight: '600' }}>Monthly sales report</TextLight>
                                            <TextMuted style={{ marginBottom: '8px' }}><Text type='secondary'>26 April, 2023</Text></TextMuted>
                                            <TextMuted style={{ margin: 0 }}><span style={{ color: themecolor.token.colorError }}>2 days left</span> notification to submit the monthly sales report. <Link to='#!' style={{ textDecoration: 'underline' }}>Reports Builder</Link></TextMuted>
                                        </div>
                                    ),
                                }
                            ]}
                        />
                    </Card>{/* end card */}
                    <Card>
                        <TextLight style={{ fontSize: '16px', fontWeight: '500', marginBottom: customStyles.marginXS }}> Connections</TextLight>
                        <div>
                            <div style={{ float: 'right' }}>
                                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                            </div>
                            <Space>
                                <Avatar src={ConnectionsImg1} size="large" />
                                <div>
                                    <TextLight style={{ marginBottom: customStyles.marginXXS, fontSize: '15px', fontWeight: '600' }} level={5}>Ronald River</TextLight>
                                    <TextMuted style={{ marginBottom: 0 }}>475 Connections</TextMuted>
                                </div>
                            </Space>
                        </div>
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>
        ),
    },
    {
        key: '2',
        label: (<span>Team</span>),
        children: (<Card style={{ marginBottom: customStyles.margin }}>
            <>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h5 style={{ fontSize: "18px" }}>Friends</h5>
                </div>
                <Row gutter={[24]}>
                    {teamtab.map((item, key) => (
                        <Col xs={24} md={12} xl={6} key={key}>
                            <Card style={{ marginBottom: customStyles.margin, position: 'relative' }} >
                                <>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div>
                                            <Image src={item.img} alt="" style={{ height: "72px", width: "72px", borderRadius: "5px" }} />
                                        </div>
                                    </div>
                                    <div className="text-center" style={{ marginBottom: customStyles.margin }}>
                                        <Link href="#member-overview" data-bs-toggle="offcanvas">
                                            <TextLight style={{ fontSize: "17px", marginBottom: '8px', fontWeight: '600', marginTop: '16px' }}>{item.name}</TextLight>
                                        </Link>
                                        <Tag bordered={false} color="purple">
                                            {item.position}
                                        </Tag>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center", marginBottom: customStyles.margin }}>
                                        <div style={{ cursor: 'pointer' }}>
                                            <BgInfo style={{ padding: '6px', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <FacebookIcon size={15} style={{ color: customStyles.colorInfo, }} />
                                            </BgInfo>
                                        </div>
                                        <div style={{ cursor: 'pointer', margin: '0 4px' }}>
                                            <BgSuccess style={{ padding: '6px', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Twitter size={15} style={{ color: customStyles.colorSuccess, }} />
                                            </BgSuccess>
                                        </div>
                                        <div style={{ cursor: 'pointer' }}>
                                            <BgWarning style={{ padding: '6px', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <LinkedinIcon size={15} style={{ color: customStyles.colorWarning, }} />
                                            </BgWarning>

                                        </div>
                                    </div>
                                    <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                                        <Dropdown menu={{ items: itemsTrigger }} style={{ float: 'right' }} trigger={["click"]} >
                                            <Link onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    <MoreVertical size={15} style={{ justifyContent: "flex-end" }} />
                                                </Space>
                                            </Link>
                                        </Dropdown>
                                    </div>
                                </>
                                <div style={{ justifyContent: "space-between", display: "flex" }}>
                                    <BgInfo style={{ width: "48%", cursor: 'pointer', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8px', color: customStyles.colorInfo, }}>Message</BgInfo>
                                    <BgBlue style={{ width: "48%", cursor: 'pointer', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8px' }}>Message</BgBlue>
                                </div>
                            </Card>
                        </Col>))}
                </Row>
            </>
        </Card>),
    },
    {
        key: '3',
        label: (<span>Projects</span>),
        children: (<Card style={{ marginBottom: customStyles.margin }}>
            <>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h5 style={{ fontSize: "18px" }}>Friends</h5>
                </div>
                <Row gutter={[24]}>
                    {simplePageProjectData.map((item, key) => (
                        <Col xs={24} md={12} xl={6} key={key} style={{ justifyContent: "space-between" }}>
                            <Card style={{ marginBottom: customStyles.margin, position: 'relative' }} >
                                <div style={{ display: "flex" }}>
                                    <div style={{ marginRight: customStyles.marginSM, marginBottom: customStyles.margin }}>
                                        <Image src={item.companyLogo} alt="" width={30} height={30} />
                                    </div>
                                    <div style={{ overflow: "hidden", flexGrow: "inherit" }}>

                                        <TextLight style={{ fontSize: '14px', fontWeight: '500', marginBottom: '6px' }} href="#">{item.title}</TextLight>
                                        <TextMuted style={{ fontSize: '14px', fontWeight: '400', display:'flex' }}>Last Update : <TextLight style={{fontWeight:'500', marginLeft:'6px'}}>{item.lastUpdate}</TextLight></TextMuted>
                                    </div>

                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: customStyles.marginXS }}>
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <div>
                                                <TextMuted style={{ fontSize: "12px", marginRight: '12px' }}>Members :</TextMuted>
                                            </div>
                                            <div style={{ display: "flex" }}>
                                                {item.members.map((item, key) => (<div key={key} >

                                                    {item.img ?
                                                        <Image src={item.img} alt="" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft:'-6px', border:'2px solid white' }} />
                                                        :
                                                        <Avatar style={{ backgroundColor: '#d9e8ff', color: themecolor.token.colorPrimary, marginLeft:'-6px', border:'2px solid white' }}>{item.text}</Avatar>

                                                    }
                                                </div>))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Tag bordered={false} color={item.colortag} style={{ float: "right", marginInlineEnd: "0px", fontSize:'10px', fontWeight:'600', padding:'0 4px' }}>
                                            {item.status}
                                        </Tag>
                                    </div>
                                </div>

                                <div>
                                    <h5 style={{ fontSize: "12px", marginBottom:'0', marginTop:'8px' }}>Progress <span style={{ float: "right", color: "#ff6c6c" }}>{item.progress}%</span></h5>
                                    <Progress percent={item.progress} style={{marginBottom:'0'}} size="small" status="exception" showInfo={false} />
                                </div>

                                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                                    <Dropdown menu={{ items: droplist }} trigger={["click"]}  >
                                        <Link onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <MoreVertical size={15} />
                                            </Space>
                                        </Link>
                                    </Dropdown>
                                </div>
                            </Card>

                        </Col>
                    ))}

                    <Col xl={24} >
                        <Pagination defaultCurrent={1} total={50} style={{ display: 'flex', justifyContent: "center" }} />
                    </Col>
                </Row>
            </>
        </Card>
        ),
    },
];

const PagesUserProfile = () => {
    // page title
    document.title = "Profile" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Pages" pageTitle="Profile" />

            <StyleProfileCover>
            </StyleProfileCover>
            <Card style={{ marginBottom: customStyles.margin }}>
                <StyleProfileContent>
                    <Row gutter={[24, 24]} style={{ display: 'flex', alignItems: 'end' }}>
                        <Col lg={4}>
                            <Badge dot>
                                <StyleAvatar src={<img src={UserProfile} alt="avatar" />} shape="square" size={105} />
                            </Badge>
                        </Col>
                        <Col lg={20}>
                            <Title level={5} style={{ marginBottom: '10px' }}>Joseph Rogers</Title>
                            <div>
                                <Space wrap className='subtitle' size={15} style={{ marginRight: '20px', gap: '8px', marginBottom: '10px' }}>
                                    <div>
                                        <Wand2 size={14} /> Lead Designer / Developer
                                    </div>
                                    <div>
                                        <MapPin size={14} /> Phoenix, USA
                                    </div>
                                    <div>
                                        <Calendar size={14} /> August, 2023
                                    </div>
                                </Space>
                                <Button type="primary"><Plus size={12} /> Connect</Button>
                            </div>
                        </Col>
                    </Row>
                    {/* <Badge dot>
                        <StyleAvatar src={<img src={UserProfile} alt="avatar" />} shape="square" size={105} />
                    </Badge> */}
                    {/* <div>
                        <Title level={5} style={{ marginBottom: customStyles.marginXS }}>Joseph Rogers</Title>
                        <Space wrap className='subtitle' size={15}>
                            <div>
                                <Wand2 size={14} /> Lead Designer / Developer
                            </div>
                            <div>
                                <MapPin size={14} /> Phoenix, USA
                            </div>
                            <div>
                                <Calendar size={14} /> August, 2023
                            </div>
                        </Space>
                    </div>
                    <div >
                        <Button type="primary"><Plus size={12} /> Connect</Button>
                    </div> */}
                </StyleProfileContent>

            </Card>{/* end card */}

            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

        </>
    )
}

export default PagesUserProfile;
