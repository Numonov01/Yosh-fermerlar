import { MoreOutlined, UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons'
import { Button, Card, Col, Dropdown, Image, Row, Space, Timeline } from 'antd'
import React, { useState } from 'react'
import usecustomStyles from '../../Common/customStyles';

import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar8 from "../../assets/images/users/avatar-8.jpg"
import avatar9 from "../../assets/images/users/avatar-9.jpg"
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import SimpleBar from 'simplebar-react';

import smallImg3 from "../../assets/images/small/img-3.jpg"
import smallImg5 from "../../assets/images/small/img-5.jpg"
import smallImg7 from "../../assets/images/small/img-7.jpg"
import smallImg9 from "../../assets/images/small/img-9.jpg"
import styled from 'styled-components';


const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const BorderBottom = styled.div`
      border-bottom: 1px solid  ${({ theme }) => theme.token.borderGray};
`;
const items = [
    { label: "View", key: '0', },
    { label: "Edit", key: '1', },
    { label: 'Delete', key: '2', },
];

const connectiondata = [
    {
        id: 1,
        name: "Esther James",
        avatarSrc: avatar3,
        role: "475 Connections",
    },
    {
        id: 2,
        name: "George Whalen",
        avatarSrc: avatar2,
        role: "Backend Developer"
    },
    {
        id: 3,
        name: "Daniel Gonzalez",
        avatarSrc: avatar8,
        role: "React JS Developer"
    },
    {
        id: 4,
        name: "Scott Wilson",
        avatarSrc: avatar9,
        role: "Full Stack Developer"
    },
    {
        id: 5,
        name: "George Whalen",
        avatarSrc: avatar2,
        role: "Backend Developer"
    },
    {
        id: 6,
        name: "Daniel Gonzalez",
        avatarSrc: avatar8,
        role: "React JS Developer"
    },
]

const ConnenctionandStream = () => {

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled); // Toggle the state
    };


    return (
        <React.Fragment>
            <Col xs={24} xl={12} xxl={8} style={{width: '100%', marginBottom: customStyles.margin}}>
                <Card>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h5 style={{ fontSize: "16px", fontWeight:'500' }}>Connections</h5>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()} href="/#">
                                <Space>
                                    <MoreOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div>
                        {
                            connectiondata.map((item) => (
                                <BorderBottom key={item.id}>
                                <Row gutter={[16]} style={{ display: "flex", alignItems: "center", margin:'6px 0' }}>
                                    <Col xs={2} style={{ marginRight: "15px" }}>
                                        <Image src={item.avatarSrc} style={{ width: "32px", height: "32px", borderRadius: "50%" }} alt="" />
                                    </Col>
                                    <Col xs={19}>
                                        <Row>
                                            <Col xs={16} lg={20}>
                                                <div>
                                                    <h6 style={{ fontSize: "14px", marginBottom:"4px" }} >{item.name}</h6>
                                                    <TextMuted style={{ fontSize: "12px" }} >{item.role}</TextMuted>
                                                </div>
                                            </Col>
                                            <Col xs={3} lg={4} >
                                                <Button type="default" style={{ color: customStyles.colorInfo }} onClick={(id) => handleToggle(id)}>
                                                    {isToggled ? <span><UserAddOutlined /> Follow</span> : <span><UserDeleteOutlined /> Unfollow</span>}
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                </BorderBottom>
                            ))
                        }
                    </div>
                    <div className='text-center' style={{paddingTop:'10px',}}>
                        <Link href="#!" style={{ textAlign: "center", justifyContent:"center", display: "flex", alignItems: "center" }}>View All Connections <MoveRight size={20} style={{marginLeft: '10px'}} /></Link>
                    </div>


                </Card>
            </Col>
            <Col xxl={7} style={{marginBottom : customStyles.margin, width:'100%'}}>
                <Card>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h5 style={{ fontSize: "16px", fontWeight:'500' }}>Activity Stream</h5>
                        <div >
                            <Button type="primary" style={{ boxShadow:'none',  backgroundColor: customStyles.colorPrimaryBg, color: customStyles.colorPrimary, fontSize: "13px" }}>
                                View All Activity
                            </Button>
                        </div>
                    </div>

                    <SimpleBar style={{height: "376px"}}>
                        <Timeline
                            items={[
                                {
                                    children: <>
                                        <h6 style={{fontSize: "14px", marginTop: "12px"}}>Purchase by James Price</h6>
                                        <p className="mb-3">09:24 PM</p>
                                        <p >Product noise evolve smartwatch</p>
                                    </>,
                                },
                                {
                                    children: <>
                                        <h6 style={{fontSize: "14px"}}>New ticket received <span className="badge text-bg-info align-middle ms-1">New</span></h6>
                                        <p className="mb-3">4 days ago</p>
                                        <p className="text-muted mb-0">User <span className="text-secondary">Erica245</span> submitted a ticket</p>
                                    </>,
                                },
                                {
                                    children: <>
                                        <h6 style={{fontSize: "14px"}}>Adding a new event with attachments</h6>
                                        <p className="mb-3">30 days ago</p>
                                        <Row className="g-3">
                                            <div className="col-auto">
                                                <div className="d-flex position-relative gap-2 border border-dashed p-2 rounded-3">
                                                    <div className="flex-shrink-0">
                                                        <i className="bi bi-file-earmark-image fs-17 text-danger"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        <Link href="#" className="stretched-link">
                                                            <h6 style={{fontSize: "14px"}}>UI/UX design</h6>
                                                        </Link>
                                                        <small className="text-muted">685 KB</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="d-flex position-relative gap-2 border border-dashed p-2 rounded-3">
                                                    <div className="flex-shrink-0">
                                                        <i className="bi bi-file-pdf fs-17 text-info"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2" style={{marginLeft:'6px'}}>
                                                        <Link href="#" className="stretched-link">
                                                            <h6 style={{fontSize: "14px"}}>Lizant Invoice</h6>
                                                        </Link>
                                                        <small className="text-muted">342 KB</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </>,
                                },
                                {
                                    children: <>
                                        <h6 style={{fontSize: "14px"}}>Templates layout upload</h6>
                                        <p className="mb-3">1 week ago</p>
                                        <p className="text-muted fst-italic">
                                            Powerful, clean & modern responsive bootstrap 5 admin template. The maximum file size for uploads in this demo :
                                        </p>
                                        <Row gutter={[24]} className="mt-2">
                                            <Col xxl={20}>
                                                <Row gutter={[16]} style={{display: "flex", border: "1px dashed #eff2f7", borderRightStyle: "dashed", padding: "5px"}}>
                                                    <Col lg={6}>
                                                        <Image src={smallImg3} alt="" className="img-fluid rounded" />
                                                    </Col>

                                                    <Col lg={6}>
                                                        <Image src={smallImg5} alt="" className="img-fluid rounded" />
                                                    </Col>

                                                    <Col lg={6}>
                                                        <Image src={smallImg7} alt="" className="img-fluid rounded" />
                                                    </Col>

                                                    <Col lg={6}>
                                                        <Image src={smallImg9} alt="" className="img-fluid rounded" />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </>
                                },
                                {
                                    children: <>
                                        <p style={{marginBottom:'4px'}}>01:30 PM</p>
                                        <p>Lunch time after which sleep just doesn't want to let go of me. 🤝</p>
                                    </>
                                },
                                {
                                    children: <>
                                        <p style={{marginBottom:'4px'}}>3:30 PM</p>
                                        <p>Drink the magical chai, it will ward off sleep they said. 🤷‍</p>
                                    </>
                                },
                                {
                                    children: <>
                                        <p style={{marginBottom:'4px'}}>4:30 PM </p>
                                        <p>The only time I don't feel sleepy cause it's work out time. I mean walking time. 😹</p>
                                    </>
                                },
                                {
                                    children: <>
                                        <p style={{marginBottom:'4px'}}>07:00 PM </p>
                                        <p>Food my tummy needs, sleep my body needs.👿</p>
                                    </>
                                },
                                {
                                    children: <>
                                        <p style={{marginBottom:'4px'}}>07:30 PM </p>
                                        <p>My tummy's happy time 🍝</p>
                                    </>
                                },
                                {
                                    children: <>
                                        <p style={{marginBottom:'4px'}}>10:00 PM </p>
                                        <p>uh oh!!! fuel low, get some snacks but wait should I just take a quick nap?🤓 </p>
                                    </>
                                },
                                {
                                    children: <>
                                        <p style={{marginBottom:'4px'}}>2:30 PM </p>
                                        <p>All hail! The time to sleep has finally arrived.😴😴😴😴😴 </p>
                                    </>
                                },

                            ]}
                        />
                    </SimpleBar>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default ConnenctionandStream