import { Button, Card, Col, Dropdown, Input, Row, Typography, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import Spinners from '../../../Common/Spinner';

import userDummayImage from "../../../assets/images/users/user-dummy-img.jpg"
import { useDispatch } from 'react-redux';
import { addMessage as onAddMessage, deleteMessage as onDeleteMessage } from '../../../slices/thunk';
import { Archive, Bookmark, CheckCheck, Copy, MicOff, Reply, Search, Share2, Trash2 } from 'lucide-react';
import usecustomStyles from '../../../Common/customStyles';
import { InfoCircleOutlined, MoreOutlined, SearchOutlined, SendOutlined, SmileOutlined, LeftOutlined } from '@ant-design/icons';
import PersonalInfo from './PersonalInfo';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import EmojiPicker from 'emoji-picker-react';

const { Text } = Typography;


const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const BgBlue = styled.div`
      background-color: ${({ theme }) => theme.token.emailSidebars};
      border: 1px solid ${({ theme }) => theme.token.borderGray};
`;
const BorderTop = styled.div`
      border-top: 1px solid  ${({ theme }) => theme.token.borderGray};
`;

const MainChat = ({ isLoading, setLoading, Chat_Box_Username, userChatShow, user_Status, messages, Chat_Box_Image, backToUserChat }) => {

    const dispatch = useDispatch();

    const [isInfoDetails, setIsInfoDetails] = useState(false);
    const [curMessage, setcurMessage] = useState("");
    const [reply, setreply] = useState("");

    // add message
    const addMessage = () => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        if (curMessage !== '') {
            const message = {
                id: Math.floor(Math.random() * 100),
                from_id: 1,
                to_id: 2,
                msg: curMessage,
                reply: reply,
                isImages: false,
                has_images: [],
                datetime: `${hours}:${minutes} ${ampm}`
            };
            dispatch(onAddMessage(message));
        }
        setcurMessage("");
        setreply('');
    };

    const chatRef = useRef(null);
    useEffect(() => {
        if (chatRef.current?.el) {
            chatRef.current.getScrollElement().scrollTop = chatRef.current.getScrollElement().scrollHeight;
        }
    }, [messages])

    const onKeyPress = (e) => {
        const { key, value } = e;
        if (key === "Enter") {
            e.preventDefault();
            setcurMessage(value);
            addMessage();
        }
    };

    //Info details offcanvas
    const toggleInfo = () => {
        setIsInfoDetails(!isInfoDetails);
    };

    //Search Message
    const searchMessages = () => {
        const searchInput = document.getElementById("searchMessage");
        const searchFilter = searchInput.value.toUpperCase();
        const searchUL = document.getElementById("users-conversation");
        const searchLI = searchUL.getElementsByTagName("li");

        Array.prototype.forEach.call(searchLI, (search) => {
            const a = search.getElementsByTagName("p")[0] || '';
            const txtValue = a.textContent || a.innerText || '';

            if (txtValue.toUpperCase().indexOf(searchFilter) > -1) {
                search.style.display = "";
            } else {
                search.style.display = "none";
            }
        });
    };

    // Copy Message
    const handleClick = (ele) => {
        const copy = ele.closest(".chat-list")?.innerText;
        if (copy) {
            navigator.clipboard.writeText(copy)
                .then(() => {
                    message.success('Message copied successfully');
                })
                .catch((error) => {
                    console.error('Copy failed:', error);
                });
        }

        const copyClipboardElement = document.getElementById("copyClipBoard");
        if (copyClipboardElement) {
            copyClipboardElement.style.display = "block";
            setTimeout(() => {
                copyClipboardElement.style.display = "none";
            }, 1000);
        }
    };

    // search dropdown
    const searchdrop = [
        {
            label:
                <div style={{ position: "relative", display: "flex", alignItems: "center", }}>
                    <Search size={15} style={{ color: customStyles.textMuted, position: "absolute", zIndex: "1", marginLeft: "10px" }} />
                    <Input placeholder="Search here..." style={{ paddingLeft: "30px" }}
                        onKeyUp={searchMessages}
                    />
                </div>
            ,
            key: '1',
        }
    ]

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
            label: <span><Trash2 size={14} />  Remove</span>,
            key: '3',
        },
    ]

    const [deleteId, setDeleteId] = useState({})

    const chatdrop = [
        {
            label: <span style={{ color: customStyles.textMuted }}><Reply size={14}
            // onClick={() => setreply({ sender: message.sender, msg: userChat.msg, id: userChat.id })}
            />  Reply</span>,
            key: '1',
        },
        {
            label: <span style={{ color: customStyles.textMuted }}><Share2 size={14} />  Forward</span>,
            key: '2',
        },
        {
            label:
                <span style={{ color: customStyles.textMuted }}><Copy size={14}
                    onClick={(e) => handleClick(e.target)}
                />  Copy</span>
            ,
            key: '3',
        },
        {
            label: <span style={{ color: customStyles.textMuted }}><Bookmark size={14} />  Bookmark</span>,
            key: '4',
        },
        {
            label: <span style={{ color: customStyles.textMuted }}><Trash2 size={14}
                onClick={() => dispatch(onDeleteMessage(deleteId.id))}
            />  Delete</span>,
            key: '5',
        },
    ]

    // emoji
    const [emojiPicker, setemojiPicker] = useState(false);
    const [emojiArray, setemojiArray] = useState([]);
    const onEmojiClick = (event, emojiObject) => {
        setemojiArray([...emojiArray, event.emoji]);
        setcurMessage(curMessage + event.emoji);
    };

    return (
        <React.Fragment>

            {/* Chat */}

            <div style={{ width: "100%", overflow: "hidden" }} className="user-chat" ref={userChatShow}>
                <Card className="chat-content d-lg-flex" >
                    <div style={{ width: "100%", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "relative" }}>
                            <div className="p-3 user-chat-topbar" >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", borderBottom: '1px solid #80808021', paddingBottom: '10px' }}>
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center" }} >
                                            <div className="flex-grow-1 overflow-hidden">
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <div style={{ marginRight: '10px', color: customStyles.textMuted }}>
                                                        <Link to="#" onClick={backToUserChat}>
                                                            <LeftOutlined />
                                                        </Link>
                                                    </div>
                                                    <div style={{ position: 'relative' }} className=" flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                                        {Chat_Box_Image === undefined ? (
                                                            <img src={userDummayImage} style={{ height: "40px", width: "40px", borderRadius: "50%" }} alt="" />
                                                        ) : (
                                                            <img src={Chat_Box_Image} style={{ height: "40px", width: "40px", borderRadius: "50%" }} alt="" />
                                                        )}
                                                        <span className="user-status"></span>

                                                        <div style={{ position: 'absolute', bottom: '0', right: '0', width: '12px', height: '12px', backgroundColor: 'green', borderRadius: '50%', border: '2px solid white' }}></div>
                                                    </div>
                                                    <div style={{ overflow: "hidden", marginLeft: "15px" }} >
                                                        <a className="username" href="#userProfileCanvasExample" >
                                                            <Text type='primary' style={{ fontSize: '16px', fontWeight: "500" }}>
                                                                {Chat_Box_Username}
                                                            </Text>
                                                        </a>
                                                        <div>
                                                            <TextMuted style={{ fontSize: "15px" }} type='secondary' className="serStatus">
                                                                <small style={{ fontSize: "12px" }}>{user_Status === null ? "24 Members" : user_Status}</small>
                                                            </TextMuted>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <ul style={{ listStyleType: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }} className="list-inline user-chat-nav text-end mb-0">
                                            <BgBlue style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Link to="#">
                                                    <Dropdown menu={{ items: searchdrop, }}
                                                        trigger={['click']}
                                                    >
                                                        <SearchOutlined style={{ fontSize: "14px" }} />
                                                    </Dropdown>
                                                </Link>
                                            </BgBlue>

                                            <BgBlue style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 6px' }}>
                                                <Link to="#" onClick={toggleInfo}>
                                                    <InfoCircleOutlined style={{ fontSize: "14px" }} />
                                                </Link>
                                            </BgBlue>

                                            <BgBlue style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Link>
                                                    <Dropdown menu={{ items: drop, }}
                                                        trigger={['click']}
                                                    >
                                                        <MoreOutlined style={{ fontWeight: "bold", fontSize: "14px" }} />
                                                    </Dropdown>
                                                </Link>
                                            </BgBlue>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div style={{ position: "relative" }} id="users-chat">
                                <div className="chat-conversation p-3 p-lg-4 simplebar-scrollable-y" id="chat-conversation">
                                    {
                                        isLoading ? <Spinners setLoading={setLoading} />
                                            :
                                            <SimpleBar style={{ padding: "20px" }} className='chat-sidebar' ref={chatRef}>
                                                <ul className="list-unstyled chat-conversation-list" id="users-conversation">
                                                    {
                                                        (messages || []).map((message) => (
                                                            message.usermessages.map((userChat, key) => (
                                                                <li className={userChat.to_id === 1 ? "chat-list left" : "chat-list right"} key={key}
                                                                    style={userChat.to_id === 1 ? {} : { display: "flex", justifyContent: "flex-end" }}>
                                                                    <div className="conversation-list" style={{ display: "flex" }}>

                                                                        <div className="user-chat-content">
                                                                            <div style={{ display: "flex", borderRadius: '4px' }} className="ctext-wrap">
                                                                                {
                                                                                    userChat.isImages === true ?
                                                                                        <div className="message-img mb-0" style={{ display: "flex" }}>
                                                                                            {
                                                                                                userChat.has_images && userChat.has_images.map((img, key) => (
                                                                                                    // : { id; image }
                                                                                                    <div className="message-img-list" key={key}>
                                                                                                        <div>
                                                                                                            <a className="popup-img d-inline-block" href={img.image}>
                                                                                                                <img src={img.image} alt="" style={{ height: "100px", width: "150px", borderRadius: "4px", marginRight: "10px" }} />
                                                                                                            </a>


                                                                                                        </div>
                                                                                                        <div className="message-img-link">
                                                                                                            <ul className="list-inline mb-0">
                                                                                                                <Dropdown menu={{ items: chatdrop, }}
                                                                                                                    trigger={['click']}
                                                                                                                >
                                                                                                                    <MoreOutlined style={{
                                                                                                                        fontWeight: "bolder", marginTop: "-20px",
                                                                                                                        marginLeft: "-20px", position: "absolute", color: "white"
                                                                                                                    }} />
                                                                                                                </Dropdown>
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                ))
                                                                                            }
                                                                                        </div>
                                                                                        :
                                                                                        <>
                                                                                            <BgBlue className="ctext-wrap-content">
                                                                                                {
                                                                                                    userChat.reply ?
                                                                                                        <>
                                                                                                            <div className="replymessage-block mb-0"
                                                                                                                style={{ display: "flex", alignItems: "start" }}>
                                                                                                                <div className="flex-grow-1">
                                                                                                                    <h5 className="conversation-name">{userChat.reply.sender}</h5>
                                                                                                                    <Text className="mb-0" style={{ backgroundColor: customStyles.colorDanger }}>{userChat.reply.msg}</Text>

                                                                                                                </div>
                                                                                                                <div className="flex-shrink-0">
                                                                                                                    <button type="button" className="btn btn-sm btn-link mt-n2 me-n3 font-size-18">
                                                                                                                    </button>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="mb-0 ctext-content mt-1">{userChat.msg}</div>
                                                                                                        </>
                                                                                                        :
                                                                                                        <div className="mb-0 ctext-content" style={{ fontSize: '13px' }}>
                                                                                                            {userChat.msg}
                                                                                                        </div>
                                                                                                }
                                                                                            </BgBlue>
                                                                                            <Dropdown menu={{ items: chatdrop, }}
                                                                                                trigger={['click']}
                                                                                                className='align-self-start message-box-drop dropdown'
                                                                                                style={{ alignSelf: "left" }}
                                                                                            >
                                                                                                <a href="/#" onClick={(e) => {
                                                                                                    e.preventDefault()
                                                                                                    setDeleteId(userChat)
                                                                                                }}>
                                                                                                    <MoreOutlined style={{ fontWeight: "bold", color: customStyles.textMuted }} />
                                                                                                </a>
                                                                                            </Dropdown>
                                                                                        </>
                                                                                }
                                                                            </div>
                                                                            <div className="conversation-name">
                                                                                <Link className="check-message-icon">
                                                                                    <CheckCheck size={13} />
                                                                                </Link>
                                                                                <Text type='secondary' style={{ fontSize: "11px", marginLeft: "8px" }}>
                                                                                    {userChat.datetime}
                                                                                </Text>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                            )))
                                                    }
                                                </ul>
                                            </SimpleBar>
                                    }
                                </div>

                                {/* emoji picker */}
                                {emojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} width={250} height={382} />}
                            </div>

                            <BorderTop className="chat-input-section" style={{ marginTop: '8px' }}>
                                <form id="chatinput-form" style={{ paddingTop: '20px' }}>
                                    <Row gutter={[24]} style={{ display: "flex", alignItems: "center" }}>
                                        <Col span={1}>
                                            <div className="chat-input-links">
                                                <div className="links-list-item">
                                                    <Button
                                                        className="emoji-btn"
                                                        id="emoji-btn"
                                                        onClick={() => setemojiPicker(!emojiPicker)}
                                                    >
                                                        <SmileOutlined />
                                                    </Button>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col span={21}>
                                            <Input
                                                type="text"
                                                value={curMessage}
                                                onKeyDown={onKeyPress}
                                                onChange={e => setcurMessage(e.target.value)}
                                                className="form-control chat-input bg-light border-light"
                                                id="chat-input"
                                                placeholder="Type your message..."
                                                style={{ margin: '0px 20px 0px 15px', outline: 'none', boxShadow: 'none', width: "100%" }}
                                            />
                                        </Col>
                                        <Col span={1}>
                                            <div className="chat-input-links" >
                                                <div className="links-list-item">
                                                    <Button
                                                        disabled={curMessage === ""}
                                                        onClick={() => {
                                                            addMessage();
                                                            setemojiPicker(false);
                                                            setemojiArray('');
                                                        }}
                                                        style={{ backgroundColor: customStyles.colorSuccess, color: "white", marginLeft:"5px" }}
                                                        className="btn btn-success chat-send waves-effect waves-light disable"
                                                    >
                                                        <SendOutlined />
                                                    </Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </BorderTop>

                            <PersonalInfo
                                show={isInfoDetails}
                                onCloseClick={() => setIsInfoDetails(false)}
                                cuurentiseImg={Chat_Box_Username}
                                currentuser={Chat_Box_Image}
                            />
                        </div>
                    </div>
                </Card>
            </div>
            <ToastContainer />
        </React.Fragment>
    )
}

export default MainChat