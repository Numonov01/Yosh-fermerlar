import { Badge, Button, Col, Dropdown, Input, Row, Space, Collapse, Typography, Image, Checkbox } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getMailDetails as OnGetMail, deleteMail, trashMail, unreadMail } from "../../../slices/thunk"
import { createSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { MoreOutlined, StarFilled, TagOutlined, UndoOutlined, CloseOutlined, PrinterFilled, DeleteOutlined, BoldOutlined, ItalicOutlined, LinkOutlined, PictureOutlined, SendOutlined } from '@ant-design/icons';

import img2 from '../../../assets/images/small/img-2.jpg'
import img6 from '../../../assets/images/small/img-6.jpg'

import avatar1 from '../../../assets/images/users/avatar-1.jpg'
import usecustomStyles from '../../../Common/customStyles';
import { AlertTriangle, Inbox, Search, Trash2 } from 'lucide-react';
import { DeleteModal } from '../../../Common/DeleteModal';
import { ToastContainer, toast } from 'react-toastify';
import Spinners from '../../../Common/Spinner';

import SimpleBar from 'simplebar-react';
import { styled } from 'styled-components';
import { current } from '@reduxjs/toolkit';
const { TextArea } = Input;

const { Title, Text } = Typography;

const customStyles = usecustomStyles();

const StyleBorderColor = styled.div`
    border-bottom: 1px solid  ${({ theme }) => theme.token.borderGray};
  `;
const StyleSubText = styled.div`
  color: ${({ theme }) => theme.token.emailSubText};
`;
const StyleTextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const dropdown1 = [
    {
        label: 'Mark as Unread',
        key: '0',
    },
    {
        label: 'Mark as Important',
        key: '1',
    },
    {
        label: 'Add to Tasks',
        key: '2',
    },
    {
        label: 'Add Star',
        key: '3',
    },
    {
        label: 'Mute',
        key: '4',
    },
];

const dropdown2 = [
    {
        label: 'Support',
        key: '0',
    },
    {
        label: 'Freelance',
        key: '1',
    },
    {
        label: 'Social',
        key: '2',
    },
    {
        label: 'Friends',
        key: '3',
    },
    {
        label: 'Family',
        key: '4',
    },
];

const dropdown3 = [
    { label: 'Mark all as read', key: '0' }
]

const Email = ({ displayCategory, displaytype, displaylabel }) => {

    const dispatch = useDispatch();

    const selectMailboxData = createSelector(
        (state) => state.Email,
        (state) => ({
            mailDetails: state.mailDetails,
            isLoader: state.isLoader
        })
    );

    const { mailDetails, isLoader } = useSelector(selectMailboxData);
    const [isLoading, setLoading] = useState(isLoader)

    const [emailinfo, setEmailinfo] = useState([]);

    useEffect(() => {
        dispatch(OnGetMail());
    }, [dispatch]);

    const [mailList, setMailList] = useState([]);
    useEffect(() => {
        setMailList(mailDetails);
    }, [mailDetails]);

    // Checked All Email
    const checkedAll = () => {
        const checkall = document.getElementById("checkall");
        const element = document.querySelectorAll(".message-list li");
        const ele = document.getElementById("email-topbar-actions");
        ele.style.display = 'block';


        if (checkall.classList.contains("ant-checkbox-input")) {
            element.forEach((node) => {
                const eleCheck = node.querySelector(".ant-checkbox")
                eleCheck.classList.add("ant-checkbox-checked");

            });
        } else {
            ele.style.display = 'none';
            element.forEach((node) => {
                const eleCheck = node.querySelector(".ant-checkbox")
                eleCheck.classList.remove("ant-checkbox-checked")
            });
        }
    };


    const [emailSlider, setEmailSlider] = useState(false)

    // SideBar Open

    function sidebarToggle(item) {
        if (item.category !== "starred") {
            document.querySelector(".email-detail-content")?.querySelector(".favourite-btn")?.classList.remove("active")
        }

        const element = document.getElementsByTagName('body')[0];

        if (element.classList.contains("email-detail-show")) {
            element.classList.remove("email-detail-show")
        } else {
            element.classList.add("email-detail-show")
        }
        setEmailinfo(item);

        if (item.unread) {
            dispatch(unreadMail(item.forId));
        }
        setEmailSlider(true)
    }

    // delete button toggle
    const onChangeCheckBox = (value, check) => {
        const element = document.getElementById("email-topbar-actions");
        const checkedCount = document.querySelectorAll('.checkbox-wrapper-mail input:checked').length;
        const activeList = document.getElementById(value);

        if (checkedCount >= 1) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }

        if (check) {
            activeList.classList.add("active");
        } else {
            activeList.classList.remove("active");
        }
    };

    // Collapse

    const items = [
        {
            key: '1',
            label: <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
                <div>
                    <img src={emailinfo.img || avatar1} alt="" style={{ height: "36px", width: "36px", borderRadius: "50%" }} />
                </div>
                <div style={{ overflow: "hidden" }}>
                    <h5 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: 0 }} className="text-truncate email-user-name">{emailinfo.name}</h5>
                    <Typography type="secondary" className="text-truncate fs-xs">to: me</Typography>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <Typography type="secondary">09 Jan 2022, 11:12 AM</Typography>
                </div>
            </div>,
            children: <div>
                <Typography type="secondary">Hi,</Typography>
                <Typography type="secondary">Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor.</Typography>
                <Typography type="secondary">Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices.</Typography>
                <Typography type="secondary">Sincerly,</Typography>

                <Space size="small" style={{ marginTop: '10px' }}>
                    <div>
                        <Image src={img2} alt="" style={{ height: "78px", width: "118px" }} />
                        <div className="text-center">
                            <Link to="">Download</Link>
                        </div>
                    </div>
                    <div>
                        <Image src={img6} alt="" style={{ height: "78px", width: "118px" }} />
                        <div className="text-center">
                            <Link to="#">Download</Link>
                        </div>
                    </div>
                </Space>
            </div>,
            showArrow: false,
        },
        {
            key: '2',
            label: <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
                <div>
                    <img src={avatar1} alt="" style={{ height: "36px", width: "36px", borderRadius: "50%" }} />
                </div>
                <div>
                    <h5 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: 0 }}>Richard Marshall</h5>
                    <Typography type="secondary" className="text-truncate fs-xs">to: jackdavis@email.com</Typography>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <Typography type="secondary" className="text-muted fs-xs">09 Jan 2022, 02:15 PM</Typography>
                </div>
            </div>,
            children: <div>
                <Typography type="secondary">Hi,</Typography>
                <Typography type="secondary">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</Typography>
                <Typography type="secondary" p>Thank you</Typography>
            </div>,
            showArrow: false,
        },
        {
            key: '3',
            label: <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
                <div>
                    <img src={emailinfo.img || avatar1} alt="" style={{ height: "36px", width: "36px", borderRadius: "50%" }} />
                </div>
                <div>
                    <h5 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: 0 }}>{emailinfo.name}</h5>
                    <Typography type="secondary" className="text-truncate fs-xs">to: me</Typography>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <Typography type="secondary" className="text-muted fs-xs">10 Jan 2022, 10:08 AM</Typography>
                </div>
            </div>,
            children: <div>
                <Typography type="secondary">Hi,</Typography>
                <Typography type="secondary">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar pronunciation.</Typography>
                <Typography type="secondary">Thank you</Typography>
            </div>,
            showArrow: false,
        },
    ];

    const onChange = (key) => {
        console.log(key);
    };


    // Delete Email
    const [deleteData, setDeleteData] = useState(false)

    const removeEmail = () => {
        const element = document.querySelectorAll(".message-list li");
        const ele = document.getElementById("email-topbar-actions");
        const checkall = document.getElementById("checkall");
        document.getElementsByTagName('body')[0].classList.remove("email-detail-show")

        if (deleteData) {
            document.getElementById(emailinfo.forId)?.classList.add("active")
        }

        element.forEach((element) => {
            const ele = element.querySelector(".ant-wave-target")
            if (ele.classList.contains('ant-checkbox-checked')) {
                var forId = element.querySelector('.ant-checkbox-input').value;

                if (displayCategory === "trash") {
                    dispatch(deleteMail(forId));
                } else {
                    dispatch(trashMail(forId));
                }
            }
            element.classList.remove("active");
            element.querySelector('.ant-wave-target').classList.remove("ant-checkbox-checked");
        });


        setTimeout(() => { toast.clearWaitingQueue(); }, 3000);
        checkall.closest("span").classList.remove("ant-checkbox-checked");
        ele.style.display = 'none';

        setDeleteData(false)
        setEmailinfo([])
    };

    // filter

    const filterMails = ({ category, type, label }) => {
        if (displayCategory === "all" && category === "trash") {
            return false;
        }
        return (
            (displayCategory === "all" || displayCategory === category) &&
            (displaytype === "all" || displaytype === type) &&
            (displaylabel === "all" || displaylabel === label)
        );
    }

    // Refresh Mails

    const [refreshLoader, setRefreshLoader] = useState(false)
    const refreshMails = () => {
        setRefreshLoader(true)
        setTimeout(() => {
            setRefreshLoader(false)
        }, 2000)
    }

    const filteredMails = mailList.filter(({ category, type, label }) => filterMails({ category, type, label }));


    // Search
    const searchContact = (e) => {
        let search = e.target.value.toLowerCase(); // Convert to lowercase here
        if (search) {
            setEmailinfo(emailinfo.filter((data) => data.name && data.name.toLowerCase().includes(search)));
        } else {
            setEmailinfo(emailinfo);
        }
    };

    return (
        <React.Fragment>

            <div className="email-content">
                <div>
                    <StyleBorderColor>

                        {/* Top */}

                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={10} style={{ display: 'flex' }}>
                                <div style={{ width: '100%', marginRight: '10px' }}>
                                    <div style={{ position: "relative", display: "flex", alignItems: "center", }}>
                                        <StyleTextMuted style={{ position: "absolute", top: '10px', zIndex: "1", marginLeft: "10px", }}>
                                            <Search size={15} />
                                        </StyleTextMuted>
                                        <Input placeholder="Search here..." style={{ paddingLeft: "30px", outline: 'none', boxShadow: 'none' }}
                                            onKeyUp={(e) => searchContact(e)}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} md={14} style={{ display: 'flex', justifyContent: 'end' }}>
                                <div style={{ display: "flex", alignItems: "center" }} className="email-topbar-link">
                                    <Button style={{ fontSize: "14px", border: 'none', fontWeight: "bold", color: customStyles.textMuted, margin: '0 6px' }} onClick={() => refreshMails()}>
                                        <StyleTextMuted>
                                            <UndoOutlined />
                                        </StyleTextMuted>
                                    </Button>
                                    <Dropdown
                                        menu={{
                                            items: dropdown1,
                                        }}
                                        trigger={["click"]}
                                    >
                                        <Link onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <MoreOutlined style={{ fontSize: "18px", fontWeight: "bold", color: customStyles.textMuted }} />
                                            </Space>
                                        </Link>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>

                        {/* onCkick checkbox show */}

                        <Row style={{ margin: '16px 0 8px 0' }}>
                            <Col>
                                <div id="mail-filter-navlist"></div>
                            </Col>
                            <Col xs={24} md={10} style={{ display: 'flex' }}>
                                <Space style={{ display: "flex", alignItems: "center", }} className="email-topbar-link">
                                    <div style={{ fontSize: "14px", fontWeight: "bold", color: customStyles.textMuted, padding: '8px' }}>
                                        <Checkbox type="checkbox" className="form-check-input" id="checkall" onChange={() => {
                                            checkedAll();
                                        }} />
                                        <label htmlFor="checkall"></label>
                                    </div>
                                    <div id="email-topbar-actions" style={{ display: "none", fontSize: "14px", fontWeight: "bold", color: customStyles.textMuted, padding: '0 4px' }}>
                                        <div style={{ flexWrap: "inherit", display: "flex", alignItems: "center" }}>
                                            <Button style={{ padding: "2px", border: 'none', color: customStyles.textMuted }} className="btn-ghost-secondary btn-icon btn-sm fs-lg">
                                                <StyleTextMuted style={{ backgroundColor: 'none' }}>
                                                    <Inbox size={18} style={{ backgroundColor: 'none' }} />
                                                </StyleTextMuted>
                                            </Button>
                                            <Button style={{ padding: "2px", margin: '0 8px', border: 'none', color: customStyles.textMuted }} className="btn-ghost-secondary btn-icon btn-sm fs-lg">
                                                <StyleTextMuted style={{ backgroundColor: 'transparent' }}>
                                                    <AlertTriangle size={18} style={{ backgroundColor: 'transparent' }} />
                                                </StyleTextMuted>
                                            </Button>
                                            <div data-bs-toggle="tooltip">

                                                <Button style={{ padding: "2px", color: customStyles.textMuted, border: 'none', }} className="btn-ghost-secondary btn-icon btn-sm fs-lg" onClick={() => { setDeleteData(true); }}>
                                                    <StyleTextMuted>
                                                        <Trash2 size={18} />
                                                    </StyleTextMuted>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vr align-self-center mx-2"></div>

                                    <Dropdown
                                        menu={{
                                            items: dropdown2,
                                        }}
                                        trigger={["click"]}
                                    >
                                        <Link onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <StyleTextMuted>
                                                    <TagOutlined style={{ fontSize: "18px", fontWeight: "bold", margin: '0 10px' }} />
                                                </StyleTextMuted>
                                            </Space>
                                        </Link>
                                    </Dropdown>
                                    <Dropdown
                                        menu={{
                                            items: dropdown3,
                                        }}
                                        trigger={["click"]}
                                    >
                                        <Link onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <StyleTextMuted>
                                                    <MoreOutlined style={{ fontSize: "18px", fontWeight: "bold", }} />
                                                </StyleTextMuted>
                                            </Space>
                                        </Link>
                                    </Dropdown>
                                </Space>
                            </Col>
                            <Col xs={24} md={14} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                                <StyleTextMuted style={{ fontSize: '13px', marginBottom: '0', }}>1-50 of 154</StyleTextMuted>
                            </Col>
                        </Row>

                    </StyleBorderColor>
                    {/* peter */}
                    <div className='h-100'>
                        <SimpleBar className="chat-room-list pt-3 email-sidebar" style={{ margin: "10px 0px 0px", display: emailSlider ? 'none' : 'block' }}>
                            <div className="mail-primary" style={{ overflowX: 'auto' }}>

                                {/* Mail */}

                                <div className="message-list-content show mx-n4 px-4 message-list-scroll" style={{paddingBottom: "20px"}} >
                                    {isLoading || refreshLoader
                                        ? <Spinners setLoading={setLoading} />
                                        :
                                        <ul style={{ listStyleType: "none", paddingLeft: '0' }} className="message-list" id="mail-list">
                                            {filteredMails.filter(({ category, type, label }) => displayCategory === category || (displayCategory === "all" && (displaytype === type || displaytype === 'all') && (displaylabel === label || displaylabel === 'all'))).map((item) => (
                                                <li className={item.unread ? "unread" : " "} key={item.id} id={item.forId} style={{ display: "flex" }}>
                                                    <Col xxl={4} style={{ display: "flex" }} className="col-mail col-mail-1">
                                                        <div style={{ marginRight: "10px", marginLeft: '0px' }} className="checkbox-wrapper-mail">
                                                            <Checkbox
                                                                onChange={(e) => {
                                                                    onChangeCheckBox(e.target.value, e.target.checked);
                                                                }}
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                value={item.forId}
                                                                id={item.forId}
                                                            />
                                                            <label htmlFor={item.forId}></label>
                                                        </div>
                                                        <Link to="#" type="button" style={{ color: customStyles.textMuted, marginLeft: "10px", marginRight: "10px" }}>
                                                            <StyleTextMuted>
                                                                <StarFilled />
                                                            </StyleTextMuted>
                                                        </Link>
                                                        <Link to="#" style={{ color: customStyles.colorText, whiteSpace: 'nowrap' }} className="title" onClick={(e) => { sidebarToggle(item); setEmailinfo(item); }}>
                                                            <StyleSubText>
                                                                {item.name} {" "} {item.number}
                                                            </StyleSubText>
                                                        </Link>
                                                    </Col>
                                                    <Col xxl={20} style={{ display: "flex", justifyContent: "space-between" }} className="col-mail col-mail-2" onClick={(e) => { sidebarToggle(item); setEmailinfo(item); }}>
                                                        <Link to="#" className="subject" style={{ color: customStyles.colorText, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: '16px' }}>
                                                            <StyleSubText style={{ textOverflow: 'ellipsis', display: 'flex', alignItems: 'center' }}>
                                                                {item.badge ? <Badge count={item.badge} style={{ backgroundColor: item.badgeClass, marginRight: '10px', fontWeight: '500' }}></Badge> : null}{" "}{" "}
                                                                {item.subject} -
                                                                <StyleTextMuted>{item.teaser}</StyleTextMuted>
                                                            </StyleSubText>
                                                        </Link>
                                                        <StyleSubText className="date" style={{
                                                            marginLeft: '10px', whiteSpace
                                                                : 'nowrap'
                                                        }}>{item.date}</StyleSubText>
                                                    </Col>
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                </div>
                            </div>
                        </SimpleBar>
                    </div>
                </div>
                <div className="email-detail-content" style={{ width: '100%', marginTop: "10px", display: emailSlider ? 'block' : 'none' }} >
                    <div>
                        <div>
                            <SimpleBar style={{ height: "100%" }} className='email-detail-content-scroll'>

                                <Row justify="space-between" align="middle" style={{ marginBottom: '10px' }}>
                                    <Col xs={24} xl={6} md={12} >
                                        <div>
                                            <Title level={5} style={{ fontWeight: "bold", fontSize: "15px", margin: 0 }}>{emailinfo.subject}</Title>
                                        </div>
                                    </Col>
                                    <Col xs={24} xl={{ span: 6, offset: 12 }} md={12}>
                                        <Space wrap style={{ justifyContent: 'end', display: 'flex' }} className="email-topbar-link">
                                            <Button className="btn-subtle-danger btn-icon btn-sm fs-lg close-btn-email" id="close-btn-email"
                                                onClick={() => setEmailSlider(false)}
                                            >
                                                <CloseOutlined />
                                            </Button>
                                            <Button className="btn-ghost-secondary btn-icon btn-sm fs-lg">
                                                <PrinterFilled />
                                            </Button>
                                            <Button className="btn-ghost-secondary btn-icon btn-sm fs-lg remove-mail" onClick={() => { setDeleteData(true); }}>
                                                <DeleteOutlined />
                                            </Button>
                                            <Dropdown menu={{ items: dropdown1, }} trigger={['click']}>
                                                <a onClick={(e) => e.preventDefault()} href="/#">
                                                    <Space>
                                                        <Button style={{ backgroundColor: 'rgba(153, 126, 233, 0.15)' }}>
                                                            <MoreOutlined />
                                                        </Button>
                                                    </Space>
                                                </a>
                                            </Dropdown>
                                        </Space>
                                    </Col>
                                </Row>

                                <Collapse defaultActiveKey={['3']} onChange={onChange} items={items} style={{ width: "100%" }} />
                            </SimpleBar>

                            <div style={{ marginTop: '15px' }}>
                                <form>
                                    <div>
                                        <Text type='secondary' htmlFor="exampleFormControlTextarea1" className="form-label" style={{ marginBottom: '15px', display: 'block', color: current }}>Reply :</Text>
                                        <TextArea placeholder="Enter message" />
                                        <div style={{ margin: '15px 0' }}>
                                            <Row>
                                                <Col xs={24} md={12} xl={6}>
                                                    <Space className="btn-group" role="group">
                                                        <Button className="btn-sm py-0 fs-lg btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Bold" data-bs-original-title="Bold">
                                                            <BoldOutlined />
                                                        </Button>
                                                        <Button className="btn-sm py-0 fs-lg btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Italic" data-bs-original-title="Italic">
                                                            <ItalicOutlined />
                                                        </Button>
                                                        <Button className="btn-sm py-0 fs-lg btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Link" data-bs-original-title="Link">
                                                            <LinkOutlined />
                                                        </Button>
                                                        <Button className="btn-sm py-0 fs-lg btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Image" data-bs-original-title="Image">
                                                            <PictureOutlined />
                                                        </Button>
                                                    </Space>
                                                </Col>
                                                <Col xs={24} xl={{ span: 6, offset: 12 }} md={12}>
                                                    <div style={{ textAlign: 'end' }}>
                                                        <Button type='primary'>
                                                            <SendOutlined />
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Email delete */}

            <DeleteModal show={deleteData} handleClose={() => { setDeleteData(false) }} deleteModalFunction={() => { removeEmail(); setDeleteData(false) }} />
            <ToastContainer limit={1} />
        </React.Fragment >
    )
}

export default Email