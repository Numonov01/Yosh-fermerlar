import React, { useState } from 'react';
import { Dropdown, Badge, Avatar, Image, Button, Checkbox, Typography } from 'antd';
import { BadgeCheck, BellRing, Clock, MessageSquare } from 'lucide-react';
import usecustomStyles from './customStyles';
import { StyleSimpleBar } from './SidebarStyle';

import avatar3 from "../assets/images/users/avatar-2.jpg"
import avatar8 from "../assets/images/users/avatar-9.jpg"
import { ClockCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

const customStyles = usecustomStyles();

const notifications = [
    {
        id: 1,
        text: 'Your Elite author Graphic Optimization reward is ready!',
        time: <span><Clock size={10} /> Just 30 sec ago</span>,
        unread: true,
        icon: <Avatar style={{ backgroundColor: customStyles.colorInfoBg, color: customStyles.colorInfo }} icon={<BadgeCheck size={14} />} />,
    },
    {
        id: 2,
        text: 'Angela Bernier answered to your comment on the cash flow forecast\'s graph.',
        time: <span><Clock size={10} /> 48 min ago</span>,
        unread: true,
        icon: <Badge dot offset={[-3, 25]} style={{ height: "8px", width: "8px", backgroundColor: customStyles.colorWarning }}>
            <Image visible={false} src={avatar3} style={{ width: "32px", height: "32px", borderRadius: "50%", mask: "none" }} alt="user-pic" />
        </Badge>
    },
    {
        id: 3,
        text: 'You have received 20 new messages in the conversation.',
        time: <span><Clock size={10} /> 2 hrs ago</span>,
        unread: true,
        icon: <Avatar style={{ backgroundColor: customStyles.colorDangerBg, color: customStyles.colorDanger }} icon={<MessageSquare size={14} />} />,
    },
];

const NotificationDropdown = () => {
    const [notificationCount, setNotificationCount] = useState(
        notifications.filter((notification) => notification.unread).length
    );

    const handleClearAll = () => {
        // const updatedNotifications = notifications.map((notification) => ({
        //     ...notification,
        //     unread: false,
        // }))

        setNotificationCount(0);
    };



    const notificationMenu = [
        {
            label: <div>
                <div>
                    <div style={{ padding: customStyles.paddingSM, borderBottom: "1px solid", borderBottomColor: customStyles.bglight }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h6 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "0px" }}>
                                Notifications{' '}
                                <Badge style={{ backgroundColor: customStyles.colorDangerBg, color: customStyles.colorDanger, fontSize: "13px", fontWeight: "bold" }} count={notificationCount} ></Badge>
                            </h6>
                            <Button type="primary" onClick={handleClearAll}>
                                Clear All
                            </Button>
                        </div>
                        <p style={{ fontSize: "14px", marginBottom: "0px" }}>
                            You have{' '}
                            <span style={{ fontWeight: "bold" }}>
                                {notificationCount}
                            </span>{' '}
                            unread messages
                        </p>
                    </div>
                </div>
                <StyleSimpleBar style={{ height: "300px", width: "310px" }}>
                    <div style={{ padding: "15px 0px" }} id="notificationItemsTabContent" >
                        <h6 style={{ fontSize: "13px", margin: "0px 0px 8px", textTransform: "uppercase" }} >
                            New
                        </h6>
                        {notifications.map((notification) => (
                            <div
                                style={{ padding: "15px" }}
                                className={`text-reset notification-item d-block dropdown-item position-relative ${notification.unread ? 'unread-message' : ''
                                    }`}
                                key={notification.id}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginRight: customStyles.marginXS }}>
                                        {notification.icon}
                                    </div>
                                    <div>
                                        <h6 style={{ fontSize: "14px", marginBottom: customStyles.marginXS, lineHeight: "base" }}>{notification.text}</h6>
                                        <p style={{ fontSize: "11px", textTransform: "uppercase", marginBottom: "0px" }}>
                                            <span>
                                                <ClockCircleOutlined /> {notification.time}
                                            </span>
                                        </p>
                                    </div>
                                    <Text style={{ fontSize: "15px" }}>
                                        <div >
                                            <Checkbox
                                                value=""
                                                id={`all-notification-check${notification.id}`}
                                            />
                                            <label
                                                htmlFor={`all-notification-check${notification.id}`}
                                            ></label>
                                        </div>
                                    </Text>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h6 style={{ fontSize: "13px", textTransform: "uppercase", }}>
                        Read Before
                    </h6>

                    <div style={{ padding: customStyles.paddingSM, position: "relative" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>

                            <div style={{ position: "relative", marginRight: customStyles.marginXS }}>
                                <Badge dot offset={[-3, 25]} style={{ height: "8px", width: "8px", backgroundColor: customStyles.colorWarning }}>
                                    <Image src={avatar8} style={{ width: "32px", height: "32px", borderRadius: "50%", mask: "none" }} alt="user-pic" />
                                </Badge>
                            </div>

                            <div>
                                {/* <Link href="#!" > */}
                                <h6 style={{ fontSize: "14px", marginBottom: customStyles.marginXXS }}>Maureen Gibson</h6>
                                {/* </Link> */}
                                <div style={{ fontSize: "13px" }}>
                                    <p>We talked about a project on linkedin.</p>
                                </div>
                                <p style={{ fontSize: "11px", textTransform: "uppercase", marginBottom: "0px" }}>
                                    <span><Clock size={10} /> 4 hrs ago</span>
                                </p>
                            </div>
                            <Text style={{fontSize: "15px"}}>
                                <div>
                                    <Checkbox type="checkbox" value="" id="all-notification-check04" />
                                    <label htmlFor="all-notification-check04"></label>
                                </div>
                            </Text>
                        </div>
                    </div>
                </StyleSimpleBar>
            </div>,
            key: '0',
        }
    ]


    return (
        <Dropdown menu={{ items: notificationMenu, }} trigger={['click']} placement="bottomRight">
            <div
                type="text"
                id="notificationDropdown"
                style={{ marginTop: "7px", marginRight: customStyles.marginXS }}
            >
                <Badge count={notificationCount} size="small" style={{boxShadow: "none"}}>
                    <BellRing size={20} style={{ marginTop: "2px" }} />
                </Badge>
            </div>
        </Dropdown>
    );
}

export default NotificationDropdown;

