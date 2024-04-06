import { MoreOutlined } from '@ant-design/icons'
import { Avatar, Card, Col, Dropdown, Pagination, Row, Space, Typography } from 'antd'
import React from 'react'
import usecustomStyles from '../../Common/customStyles';

import avatar1 from "../../assets/images/users/avatar-1.jpg"
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../assets/images/users/avatar-5.jpg"
import avatar6 from "../../assets/images/users/avatar-6.jpg"
import avatar7 from "../../assets/images/users/avatar-7.jpg"
import avatar8 from "../../assets/images/users/avatar-8.jpg"
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const BgInfo = styled.div`
      background-color: ${({ theme }) => theme.token.colorInfoBg};
`;
const BorderBottom = styled.div`
      border-bottom: 1px solid ${({ theme }) => theme.token.borderGray};
`;
const items = [
    { label: "Edit", key: '0', },
    { label: 'Delete', key: '1', },
];

const { Text } = Typography;

const UpcomingActivity = () => {

    const data = [
        {
            id: 1,
            day: 'Tue',
            date: 25,
            time: '12:00am - 03:30pm',
            title: 'Meeting for campaign with sales team',
            avatars: [avatar1, avatar2, avatar3, avatar4, avatar5],
            tag: 'Paid',
            num: 5,
            color: customStyles.colorInfo,
        },
        {
            id: 2,
            day: 'Wed',
            date: 20,
            time: '02:00pm - 03:45pm',
            title: 'Adding a new event with attachments',
            avatars: [avatar4, avatar5, avatar6, avatar7],
            tag: 'Pending',
            num: 3,
            color: customStyles.colorSuccess,
        },
        {
            id: 3,
            day: 'Wed',
            date: 17,
            time: '04:30pm - 07:15pm',
            title: 'Create new project Bundling Product',
            avatars: [avatar8, avatar1, avatar2],
            tag: 'Cancelled',
            num: 4,
            color: customStyles.colorPrimary,
        },
        {
            id: 4,
            day: 'Tue',
            date: 12,
            time: '10:30am - 01:15pm',
            title: 'Weekly closed sales won checking with sales team',
            avatars: [avatar1, avatar5, avatar2],
            tag: 'Pending',
            num: 9,
            color: customStyles.colorWarning,
        },
    ];

    return (
        <React.Fragment>
            <Col xs={24} xl={12} xxl={8} style={{ width: '100%', marginBottom: customStyles.margin }}>
                <Card>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h5 style={{ fontSize: "16px", fontWeight:'500' }}>Upcoming Activities</h5>
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
                    <div >
                        <ul style={{ listStyleType: "none", paddingLeft: "0px" }} >
                            {data.map((item) => (
                                <BorderBottom key={item.id} style={{ padding: "8px 0px" }}>
                                    <Row align="middle" gutter={16}>
                                        <Col xs={6} md={3}>
                                            <BgInfo style={{ padding: "10px 10px", borderRadius: "10px", width: '54px' }}>
                                                <div className="text-center">
                                                    <Text>
                                                        <h5 style={{ fontSize: customStyles.h5, marginBottom: "0px" }}>{item.date}</h5>
                                                    </Text>
                                                    <Text>
                                                        <div>{item.day}</div>
                                                    </Text>
                                                </div>
                                            </BgInfo>
                                        </Col>
                                        <Col xs={18}>
                                            <Row>
                                                <Col xs={18} md={20}>
                                                    <h5 style={{ fontSize: "13px", marginBottom: "0px" }}>{item.time}</h5>
                                                    <a href="/#" style={{ fontSize: "14px" }}>
                                                        <TextMuted>
                                                            {item.title}
                                                        </TextMuted>
                                                    </a>
                                                </Col>
                                                <Col xs={18} md={4}>
                                                    <div style={{ display: "flex" }}>
                                                        <Avatar.Group>
                                                            {item.avatars && (item.avatars || []).map((subitem, idx) => (
                                                                <div key={idx}>
                                                                    <Link href="#">
                                                                        <Avatar size='small' src={subitem} style={{ borderRadius: "50%", marginLeft: "8px" }} alt="" />
                                                                    </Link>
                                                                </div>
                                                            ))
                                                            }
                                                            <div>
                                                                <Link href="#">
                                                                    <div>
                                                                        <Avatar style={{ backgroundColor: item.color, marginLeft: "8px" }} size='small'>
                                                                            {item.num}
                                                                        </Avatar>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </Avatar.Group>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </BorderBottom>
                            ))}
                        </ul>
                        <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                            <Col>
                                <div style={{marginBottom: '4px', textAlign:'center'}}>
                                    Showing<b>4</b> of{' '}
                                    <b>125</b> Results
                                </div>
                            </Col>
                            <Col>
                                <Pagination
                                    size="small"
                                    total={125}
                                    defaultCurrent={2}
                                    showSizeChanger={false}
                                />
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default UpcomingActivity