import { Badge, Button, Card, Col, Dropdown, Input, Row, Typography } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import SimpleBar from 'simplebar-react'
import PerfectScrollbar from "react-perfect-scrollbar"
import { chatHistory, chatList, chatmsg } from '../../Common/data'
import moment from 'moment'
import avatar1 from "../../assets/images/users/avatar-1.jpg"
import usecustomStyles from '../../Common/customStyles'
import { Link } from 'react-router-dom'
import { CloseOutlined, MoreOutlined, SendOutlined } from '@ant-design/icons'
import { styled } from 'styled-components'
import { Archive, Bookmark, Check, CheckCheck, Copy, MicOff, Reply, Share2, Trash2 } from 'lucide-react'


const customStyles = usecustomStyles();
const { Text, Title } = Typography;
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const BgBlue = styled.div`
      background-color: ${({ theme }) => theme.token.emailSidebars};
      border: 1px solid ${({ theme }) => theme.token.borderGray};
`;

const StyleChat = styled.div`
background-color: ${({ theme }) => theme.token.colorBgContainer};
    .header {
        border-bottom: 1px dashed ${({ theme }) => theme.token.borderGray};
    }
  }
`;

const StyleBorder = styled.div`
      border-top: 1px dashed;
      padding-top: 15px;
      border-top-color: ${({ theme }) => theme.token.colorBorder};
`;


const RecentChat = () => {

    const [info, setInfo] = useState("")
    const [chatSlider, setChatSlider] = useState(false)
    const [chatMsg, setchatMsg] = useState([...chatmsg])
    const [chatBox, setChatBox] = useState(null);
    const [chatSearchList, setChatSearchList] = useState(chatList)

    const scrollToBottom = useCallback(() => {
        if (chatBox) {
            chatBox.scrollTop = chatBox.scrollHeight + 1000;
        }
    }, [chatBox]);

    useEffect(() => {
        if ((chatMsg || []).length > 1) {
            scrollToBottom();
        }
    }, [chatMsg, scrollToBottom]);

    const chatInfo = (ele) => {
        setInfo(ele)
        chatMsg.map((item) => {
            if (item.img) {
                item.img = ele.img
            }
            return item;
        })
        setChatSlider(true)
    }

    const sendMessage = () => {
        let msg = document.getElementById("chat-input")
        let timeStamp = moment(new Date()).format("hh:mm a")
        if (msg.value !== "") {
            let senderMsg = { id: chatMsg.length + 1, subItem: [{ id: 1, msg: msg.value, timeStamp }], isSender: true }
            setchatMsg([...chatMsg, senderMsg])
            msg.value = ""
        } else {
            msg.nextSibling.classList.remove("d-none")
            msg.nextSibling.classList.add("d-block")
            setTimeout(() => {
                msg.nextSibling.classList.remove("d-block")
                msg.nextSibling.classList.add("d-none")
            }, 1000);
        }
    }

    const searchChat = (ele) => {
        let search = ele.target.value;
        if (search) {
            search = search.toUpperCase();
            setChatSearchList(chatList.filter((data) => (
                data.name.toUpperCase().includes(search) || data.msg.toUpperCase().includes(search)
            ))
            );
        } else {
            setChatSearchList(chatList);
        }
    };

    const drop = [
        {
            label: <span><Archive size={14} />  Archive</span>,
            key: '1',
        },
        {
            label: <span><MicOff size={14} />  Muted</span>,
            key: '2',
        },
        {
            label: <span><Trash2 size={14} />  Delete</span>,
            key: '3',
        },
    ]

    const drop1 = [
        {
            label: <span><Reply size={14} />  Reply</span>,
            key: '1',
        },
        {
            label: <span><Share2 size={14} />  Forward</span>,
            key: '2',
        },
        {
            label: <span><Copy size={14} />  Copy</span>,
            key: '3',
        },
        {
            label: <span><Bookmark size={14} />  Bookmark</span>,
            key: '4',
        },
        {
            label: <span><Trash2 size={14} />  Delete</span>,
            key: '5',
        },
    ]

    return (
        <React.Fragment>
            <Col xxl={5} className="layout-rightside-col">
                <div className="overlay"></div>
                <div className={chatSlider ? "layout-rightside show" : "layout-rightside"}>
                    <Card className="rounded-0 left-sidebar">
                        <div className="widget-userlist">
                            <div>
                                <h4 style={{ fontSize: "13px", textTransform: "uppercase", marginBottom: '14px' }}>Recent Chat</h4>
                                <ul style={{ display: "flex", justifyContent: "space-between" }} className="list-unstyled chat-panel-list">
                                    {chatHistory.map((item, key) => (<li key={key} onClick={() => chatInfo(item)}>
                                        <Link href="#" className="text-center">
                                            <div className="chat-user-img ">
                                                <Badge dot offset={[-5, 40]} status={item.status} >
                                                    <img src={item.img} style={{ height: "48px", width: "48px", borderRadius: "50%" }} alt="" />
                                                    <span className="user-status"></span>
                                                </Badge>
                                            </div>
                                            <TextMuted style={{ fontSize: '13px', marginTop: '4px' }}>{item.name}</TextMuted>
                                        </Link>
                                    </li>))}
                                </ul>
                            </div>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <div className="search-box flex-grow-1" style={{ width: '100%', marginBottom: '0px', marginTop: '20px' }}>
                                        <Input type="text" style={{ width: "100%", outline: 'none', boxShadow: 'none' }} id="searchResultList" autoComplete="off" placeholder="Search for ..." onKeyUp={(e) => searchChat(e)} />
                                    </div>
                                </div>
                            </div>
                            <SimpleBar style={{ padding: "20px", margin: "-0 -16px", height: "100%" }}>
                                <ul style={{ listStyleType: "none", paddingLeft: '0', marginBottom: '50px' }} className="chat-panel-list list-group list-group-flush mb-0 border-dashed">
                                    {chatSearchList.map((item, key) => (
                                        <li className="list-group-item" key={key} onClick={() => chatInfo(item)} style={{ marginBottom: '16px' }}>
                                            <div style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}>
                                                <div style={{ marginRight: "10px" }} className="flex-shrink-0 me-2">
                                                    <img src={item.img} alt="" style={{ height: "32px", width: "32px", borderRadius: "50%" }} className="chatlist-user-image" />
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', flexGrow: '1' }}>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <Link href="#" className="stretched-link"><Text style={{ fontSize: "13px", fontWeight: '500', }} className="mb-1 chatlist-user-name">{item.name}</Text></Link>
                                                        <TextMuted style={{ fontSize: "13px", marginBottom: '0', marginTop: '4px', }} className={item.badge ? "chatlist-desc text-info mb-0 text-truncate" : "chatlist-desc mb-0 text-truncate "}>{item.msg}</TextMuted>
                                                    </div>
                                                    <div style={{ textAlign: "end", alignSelf: "start" }}>
                                                        <TextMuted style={{ fontSize: "12px", marginBottom: '6px', }}>{item.timeStamp}</TextMuted>
                                                        {item.badge &&
                                                            <Badge count={item.unreadMsg} style={{ fontSize: "10px", backgroundColor: 'rgba(67, 142, 255, 0.10)', color: customStyles.colorPrimary, }}></Badge>}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>))}
                                </ul>
                            </SimpleBar>
                        </div>

                        {/* sidechat open */}

                        <StyleChat className="widget-user-chatlist" style={{ display: chatSlider ? 'block' : 'none', height: "100vh" }}>
                            <div className='header' style={{ padding: "24px", }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
                                            <div>
                                                <div className="chat-user-img online">
                                                    <div className="avatar-xs">
                                                        <Badge dot offset={[-3, 25]} status="purple" >
                                                            <img src={info.img || avatar1} style={{ height: "32px", width: "32px", borderRadius: "50%" }} className="rounded-circle img-fluid userprofile" alt="" />
                                                            <span className="user-status"></span>
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Title level={5} style={{ fontSize: "14px", marginBottom: '0' }} className="profile-username">{info.name || "Ashley Silva"}</Title>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <Dropdown menu={{ items: drop, }}
                                                trigger={['click']}
                                                style={{ marginRight: customStyles.marginSM }}
                                            >
                                                <MoreOutlined size={16} />
                                            </Dropdown>
                                            <div>
                                                <Button type="link" danger id="close-chatlist" onClick={() => setChatSlider(false)}><CloseOutlined /></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SimpleBar style={{ padding: "20px", height: "100%" }}>

                                <div id="users-chat">
                                    <PerfectScrollbar id="chat-conversation" containerRef={ref => setChatBox(ref)}>
                                        <ul id="users-conversation" className='list-unstyled'>
                                            {(chatmsg || []).map((item, key) => (
                                                <li className={item.isSender ? "chat-list right" : "chat-list left"} style={{ padding: '10px' }} key={key}>
                                                    <div className="conversation-list">
                                                        {item.img && <div className="chat-avatar">
                                                            <img src={item.img} alt="" style={{ marginRight: '10px', height: "28px", width: "28px", borderRadius: "50%" }} />
                                                        </div>}
                                                        <StyleChat className="user-chat-content">
                                                            {item.subItem.map((item, key) => (
                                                                <React.Fragment key={key}>
                                                                    <div className="ctext-wrap">
                                                                        <BgBlue className="ctext-wrap-content">
                                                                            <Text className="mb-0 ctext-content">{item.msg}</Text>
                                                                        </BgBlue>
                                                                        <Dropdown menu={{ items: drop1, }}
                                                                            trigger={['click']}
                                                                        >
                                                                            <MoreOutlined />
                                                                        </Dropdown>
                                                                    </div>
                                                                    {item.timeStamp && <div className="conversation-name"><small className="text-muted time">{item.timeStamp}</small> <span className={item.isRead ? "text-success check-message-icon" : "text-muted check-message-icon"}>
                                                                        {item.isRead ? <CheckCheck strokeWidth={1.5} size={10} absoluteStrokeWidth style={{ color: customStyles.colorSuccess }} /> : <Check strokeWidth={1.5} size={10} absoluteStrokeWidth style={{ color: customStyles.textMuted }} />}
                                                                    </span></div>}
                                                                </React.Fragment>
                                                            ))}
                                                        </StyleChat>
                                                    </div>
                                                </li>))}
                                        </ul>
                                        <StyleBorder style={{ position: "relative"}} >
                                            <form className="chat-form" autoComplete="off">
                                                <Row style={{ position: "relative" }}>
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Input type="text"
                                                            id="chat-input"
                                                            placeholder="Enter Message..."
                                                        />
                                                        <Button type="primary" onClick={() => sendMessage()}><SendOutlined /></Button>
                                                    </div>
                                                </Row>
                                            </form>
                                        </StyleBorder>
                                    </PerfectScrollbar>
                                </div>

                            </SimpleBar>
                        </StyleChat>

                    </Card>
                </div>
            </Col>
        </React.Fragment>
    )
}

export default RecentChat