import { Badge, Button, Col, Dropdown, Input, Row, Tabs, Tooltip, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import usecustomStyles from '../../../Common/customStyles';
import { Search } from 'lucide-react';
import SimpleBar from 'simplebar-react';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import Spinners from '../../../Common/Spinner';
import { DeleteOutlined, EditOutlined, FolderOutlined, MoreOutlined, PlusOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { chatContactData } from '../../../Common/data';
import { useDispatch } from 'react-redux';
import { getDirectContact, getChannels, getMessages as onGetMessages } from '../../../slices/thunk';
import MainChat from './MainChat';
import avatar2 from "../../../assets/images/users/avatar-2.jpg"
import styled from 'styled-components';
import classNames from 'classnames';


const { Text } = Typography;

const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.sidebarText};
`;
const BorderBottom = styled.div`
      border-bottom: 1px solid  ${({ theme }) => theme.token.borderGray};
`;
const BgBlue = styled.div`
      background-color: ${({ theme }) => theme.token.emailSidebar};
`;

const dropitems = [
    {
        label: <span><EditOutlined />  Edit</span>,
        key: '1',
    },
    {
        label: <span><FolderOutlined />  Block</span>,
        key: '2',
    },
    {
        label: <span><DeleteOutlined />  Remove</span>,
        key: '3',
    },
]

const SidebarChat = () => {

    const dispatch = useDispatch()

    const userChatShow = useRef();

    const [customActiveTab, setcustomActiveTab] = useState("1");
    const toggleCustom = (tab) => {
        if (customActiveTab !== tab) {
            setcustomActiveTab(tab);
        }
    };

    const selectChatState = (state) => state.Chat;
    const chatProperties = createSelector(
        selectChatState,
        (state) => ({
            chats: state.chats,
            messages: state.messages,
            loading: state.loading,
            channels: state.channels
        })
    );
    // Inside your component
    const {
        chats, messages, channels, loading
    } = useSelector(chatProperties);

    const [isLoading, setLoading] = useState(loading);

    const [Chat_Box_Username, setChat_Box_Username] = useState("Lisa Parker");
    const [currentRoomId, setCurrentRoomId] = useState(1);
    const [user_Status, setUser_Status] = useState("online");
    const [Chat_Box_Image, setChat_Box_Image] = useState(avatar2);

    useEffect(() => {
        dispatch(getDirectContact());
        dispatch(getChannels());
        dispatch(onGetMessages(currentRoomId));
    }, [dispatch, currentRoomId]);

    // search

    useEffect(() => {
        const searchUsers = () => {
            const input = document.getElementById("search-user");
            const filter = input.value.toUpperCase();
            const userList = document.getElementsByClassName("users-list");

            Array.prototype.forEach.call(userList, (el) => {
                const li = el.getElementsByTagName("li");

                for (let i = 0; i < li.length; i++) {
                    const a = li[i].getElementsByTagName("a")[0];
                    const txtValue = a.textContent || a.innerText;

                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "";
                    } else {
                        li[i].style.display = "none";
                    }
                }
            });
        };

        // Add an event listener to the input element when the component mounts
        const input = document.getElementById("search-user");
        if (input) {
            input.addEventListener('keyup', searchUsers);
        }
        return () => {
            if (input) {
                input.removeEventListener('keyup', searchUsers);
            }
        };
    }, [])

    //Use For Chat Box

    const [chatSlider, setChatSlider] = useState(false)

    const userChatOpen = (chats) => {
        setChat_Box_Username(chats.name);
        setCurrentRoomId(chats.roomId);
        setChat_Box_Image(chats.image);
        setUser_Status(chats.status)
        dispatch(onGetMessages(chats.roomId));
        if (window.innerWidth < 991) {
            userChatShow.current.classList.add("user-chat-show");
            userChatShow.current.style.overflow = 'visible';
            userChatShow.current.style.display = 'block';
            // userChatShow.current.style.height = '500px';
            setChatSlider(true)
        }
        // remove unread msg on read in chat
        var unreadMessage = document.getElementById("unread-msg-user" + chats.id);
        var msgUser = document.getElementById("msgUser" + chats.id);
        if (unreadMessage) {
            unreadMessage.style.display = "none";
        }
        if (msgUser) {
            msgUser.classList.remove("unread-msg-user");
        }
    };

    const backToUserChat = () => {
        userChatShow.current.classList.remove("user-chat-show");
        setChatSlider(false)
    }

    // tabs
    const items = [
        {
            key: '1',
            label: <NavLink className={classNames({ active: customActiveTab === '1' })} style={{ color: customActiveTab === "1" ? customStyles.colorPrimary : customStyles.textMuted }} onClick={() => { toggleCustom("1"); }}>Chats</NavLink>,
            children: <div>
                {
                    isLoading ? <Spinners setLoading={setLoading} />
                        :
                        <SimpleBar style={{ padding: "20px", margin: "-16px -16px -4px" }} className="chat-room-list pt-3 chat-sidebar">
                            <div >
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: '0 0 10px' }}>
                                    <div className="flex-grow-1" >
                                        <h4 style={{ marginBottom: '0' }}>
                                            Direct Messages
                                        </h4>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Tooltip title="Add Contact" placement="bottom">
                                            <Button
                                                id="addcontact"
                                                className="btn btn-soft-success btn-sm shadow-none" style={{ fontSize: '11px', fontWeight: '500', width: '37px', padding: '0' }}
                                            >
                                                <PlusOutlined />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </div>

                                <div className="chat-message-list">
                                    <ul className="list-unstyled chat-list chat-user-list users-list" id="userList">
                                        {(chats || []).map((chat) => (
                                            <li key={chat.id + chat.status} style={{ marginBottom: customStyles.marginXS }} className={Chat_Box_Username === chat.name ? "active activebg" : ""}>
                                                <Link to="#!"
                                                    onClick={() => userChatOpen(chat)}
                                                    className={chat.badge && chat.badge !== 0 ? "unread-msg-user" : ''} id={"msgUser" + chat.id}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            <div className={`flex-shrink-0 chat-user-img ${chat.status === 'Online' ? "online" : "away"} align-self-center me-2 ms-0`} style={{ alignSelf: "center", marginRight: "10px" }}>
                                                                <div className="avatar-xxs">
                                                                    {chat.image ? (
                                                                        <img src={chat.image} style={{ height: "32px", width: "32px", borderRadius: "50%" }} alt="" />
                                                                    ) : (
                                                                        <div style={{ backgroundColor: customStyles.colorPrimaryBg, height: "32px", width: "32px", borderRadius: "50%", color: customStyles.colorPrimary, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                                                            {chat.name.charAt(0)}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <span className="user-status"></span>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <TextMuted className="activeclass text-truncate mb-0">{chat.name}</TextMuted>
                                                            </div>
                                                        </div>
                                                        {chat.badge &&
                                                            <div style={{ float: "right" }} id={"unread-msg-user" + chat.id}>
                                                                <Badge count={chat.badge} color='rgba(67, 142, 255, 1)' style={{ fontSize: '11px', fontWeight: '500', borderRadius: '4px' }}></Badge>
                                                            </div>
                                                        }
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: '10px 0' }}>
                                    <div className="flex-grow-1">
                                        <h4 style={{ marginBottom: '0' }}>
                                            Channels
                                        </h4>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Tooltip title="Add Contact" placement="bottom">
                                            <Button
                                                id="addcontact"
                                                className="btn btn-soft-success btn-sm shadow-none" style={{ fontSize: '11px', fontWeight: '500', width: '37px', padding: '0' }}
                                            >
                                                <PlusOutlined />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </div>

                                <div className="chat-message-list">
                                    <ul className="list-unstyled chat-list chat-user-list mb-0 users-list" id="channelList">
                                        {(channels || []).map((channel, key) => (
                                            <React.Fragment key={key}>
                                                <li className={Chat_Box_Username === channel.name ? "active activebg" : ""} style={{ marginBottom: customStyles.marginXS }}>
                                                    <Link to="#" className="unread-msg-user"
                                                        onClick={() => userChatOpen(channel)}
                                                    >
                                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                                <div className="flex-shrink-0 chat-user-img online">
                                                                    <div className="avatar-xxs">
                                                                        <div style={{ color: customStyles.colorPrimary, fontSize: '11px', fontWeight: '500', backgroundColor: 'rgba(67, 142, 255, 0.10)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }} >
                                                                            #
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <TextMuted className="activeclass text-truncate mb-0">
                                                                        {channel.name}
                                                                    </TextMuted>
                                                                </div>
                                                            </div>
                                                            {channel.unReadMessage && (
                                                                <div style={{ float: "right" }} id={"unread-msg-user" + channel.id}>
                                                                    <Badge count={channel.badge} style={{ color: customStyles.colorText, fontSize: '11px', fontWeight: '500', backgroundColor: customStyles.colorPrimaryBg, borderRadius: '4px' }}></Badge>
                                                                </div>

                                                            )}
                                                        </div>
                                                    </Link>
                                                </li>
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SimpleBar>
                }
            </div>,
        },
        {
            key: '2',
            label: <NavLink className={classNames({ active: customActiveTab === '2' })} style={{ color: customActiveTab === '2' ? customStyles.colorPrimary : customStyles.textMuted }} onClick={() => { toggleCustom("2"); }}>Contacts</NavLink>,
            children: <div>
                <SimpleBar className="chat-room-list" style={{ padding: "20px", margin: "-16px -16px -20px", height: "60vh" }}>
                    {
                        isLoading ? <Spinners setLoading={setLoading} />
                            :
                            <div className="sort-contact">
                                {(chatContactData || []).map((contact, key) => (
                                    <BorderBottom key={key} style={{ margin: '0 0 4px 0' }}>
                                        <div className="contact-list-title" style={{ marginBottom: '4px' }}>{contact.title}</div>
                                        <ul id={"contact-sort-" + contact.title} className="list-unstyled contact-list" style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                                            {
                                                contact.contacts && contact.contacts.map((item, key) => (
                                                    <li key={key} className={Chat_Box_Username === item.name ? "active activebg" : ""}>
                                                        <div style={{ display: "flex", alignItems: "center", cursor: "pointer", justifyContent: "space-between" }}>
                                                            <div style={{ display: "flex" }}>
                                                                <div>
                                                                    <div>
                                                                        {item.image ? <img src={item.image} style={{ height: "32px", width: "32px", borderRadius: "50%", marginRight: "10px" }} alt="" /> :
                                                                            <span style={{ backgroundColor: customStyles.colorPrimary, height: "32px", width: "32px", borderRadius: "50%", display: 'flex', alignItems: "center", justifyContent: 'center', color: "white", padding: "2px ", fontSize: "14px", marginRight: "10px" }} >
                                                                                {item.name.charAt(0) + item.name.split(" ").slice(-1).toString().charAt(0)}
                                                                            </span>}
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    onClick={() => userChatOpen(item)}
                                                                >
                                                                    <p className="contactlist-name activeclass" style={{ marginBlock: '4px' }}>{item.name}</p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <Dropdown menu={{ items: dropitems, }} >
                                                                    <MoreOutlined />
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </BorderBottom>)
                                )}
                            </div>
                    }
                </SimpleBar>
            </div>
        }
    ];

    const onChange = (key) => {
        console.log(key);
    };


    return (
        <React.Fragment>
            <Row gutter={[0, 16]} style={{ overflow: "hidden"}}>
                <Col xs={24} lg={10} xl={6} style={{ display: chatSlider ? 'none' : 'block' }}>
                    <div className="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
                        <BgBlue style={{ padding: '20px', borderRadius: '6px', marginRight: "20px" }} className="chat-leftsidebar">
                            <div style={{ marginBottom: "12px", }}>
                                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <div className="flex-grow-1">
                                        <Text style={{ fontSize: customStyles.h5 }} className="mb-4">Chats</Text>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Tooltip title="Add Contact" placement="bottom">
                                            <Button
                                                id="addcontact"
                                                className="btn btn-soft-success btn-sm shadow-none " style={{ padding: '6px 12px', fontSize: '11px', fontWeight: '500' }}
                                            >
                                                <PlusOutlined />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="search-box">
                                    <div style={{ position: "relative", display: "flex", alignItems: "center", marginBottom: "0px" }}>
                                        <Search size={15} style={{ color: customStyles.textMuted, position: "absolute", zIndex: "1", marginLeft: "10px", outline: 'none', boxShadow: 'none' }} />
                                        <Input placeholder="Search here..." style={{ paddingLeft: "30px", outline: 'none', boxShadow: 'none' }} id='search-user' />
                                        {/* onKeyUp={searchUsers} */}
                                    </div>
                                </div>
                                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                            </div>
                        </BgBlue>
                    </div>
                </Col>
                <Col xs={24} lg={14} xl={18} style={{ height: chatSlider ? "617px" : "auto" }}>
                    <MainChat isLoading={isLoading} setLoading={setLoading} Chat_Box_Username={Chat_Box_Username} user_Status={user_Status} messages={messages} Chat_Box_Image={Chat_Box_Image} userChatShow={userChatShow} backToUserChat={backToUserChat} chatSlider={chatSlider} />
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default SidebarChat