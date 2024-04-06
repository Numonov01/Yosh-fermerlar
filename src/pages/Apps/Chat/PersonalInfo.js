import { Badge, Button, Drawer, Dropdown, Row, Space, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import { attachements } from '../../../Common/data';
import Img9 from "../../../assets/images/small/img-6.jpg"
import dummyImage from "../../../assets/images/users/user-dummy-img.jpg"
import { Archive, Bookmark, FolderArchiveIcon, FolderOpen, Image, MessagesSquare, MicOff, MoreHorizontal, MoveRight, Phone, Share2, Star, Trash2 } from 'lucide-react';
import { DownloadOutlined, MoreOutlined, StarFilled } from '@ant-design/icons';
import usecustomStyles from '../../../Common/customStyles';

const { Text, Title } = Typography;

const customStyles = usecustomStyles();

const personaldrop = [
    {
        label: <span><Share2 size={14} />  Forward</span>,
        key: '1',
    },
    {
        label: <span><Bookmark size={14} />  Bookmark</span>,
        key: '2',
    },
    {
        label: <span><Trash2 size={14}
        // onClick={() => dispatch(onDeleteMessage(userChat.id))}
        />  Delete</span>,
        key: '3',
    },
]

function getIcons(iconName) {
    switch (iconName) {
        case 'FolderArchive':
            return <FolderArchiveIcon size={20} />;
        case 'FolderOpen':
            return <FolderOpen size={20} />;
        case 'Image':
            return <Image size={20} />;
        default:
            return null;
    }
}

const Attachements = (props) => {
    return (
        <div className="border rounded border-dashed p-2">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "15px" }}>
                <Space>
                    <div style={{ marginRight: "10px" }}>
                        <Link href="#" className="avatar-xs">
                            {getIcons(props.attachement.foldericon)}
                        </Link>
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                        <Title level={5} style={{ fontSize: "13px", marginBottom: '2px' }}>
                            <Link to="#">
                                <Text >
                                    {props.attachement.foldername}
                                </Text>
                            </Link>
                        </Title>
                        <Text type="secondary">{props.attachement.foldersize}</Text>
                    </div>
                </Space>
                <div className="flex-shrink-0">
                    <Space>
                        <Button
                            type="link"
                        >
                            <DownloadOutlined />
                        </Button>
                        <Dropdown menu={{ items: personaldrop, }}>
                            <MoreHorizontal />
                        </Dropdown>
                    </Space>
                </div>
            </div>
        </div>
    );
};

const PersonalInfo = ({ onCloseClick, show, cuurentiseImg, currentuser }) => {

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

    return (
        <React.Fragment>
            <Drawer title="Basic Drawer" placement="right" onClose={onCloseClick} open={show} style={{ padding: "0px" }}>
                <div className="team-cover">
                    <img src={Img9} alt="" style={{ height: "140px", width: "100%", objectFit: "cover", padding: "0px", borderRadius: "0.25rem" }} className="img-fluid" />
                </div>
                <div className="p-1 pb-4 pt-0">
                    <div className="team-settings">
                        <Row style={{ position: "absolute", marginTop: "-140px", marginLeft: "240px" }}>
                            <div className="col-auto">
                                <div style={{ display: "flex" }} className="user-chat-nav">
                                    <Button
                                        type="button"
                                        className="btn nav-btn favourite-btn active"
                                    >
                                        <StarFilled style={{ color: customStyles.colorWarning }} />
                                    </Button>
                                    <Dropdown menu={{ items: drop, }} trigger={['click']}>
                                        <MoreOutlined style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} />
                                    </Dropdown>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
                <div style={{ marginTop: '-55px'}}>
                    {currentuser ?

                        <img
                            src={currentuser}
                            alt=""
                            style={{ height: "96px", width: "96px", borderRadius: "50%", margin: '0 auto', display: 'block' }}
                        />
                        :
                        <img
                            src={dummyImage}
                            alt=""
                            style={{ height: "96px", width: "96px", borderRadius: "50%", margin: '0 auto', display: 'block' }} />
                    }
                    <div style={{marginTop: '10px', textAlign:'center'}}>
                        <Title level={5} style={{marginBottom: '3px'}}>
                            <Link to="#" className="link-primary username">
                                {cuurentiseImg}
                            </Link>
                        </Title>
                        <Text type="secondary" className="text-muted">
                            <Badge dot color='green' style={{ marginRight: "5px" }} />
                            Online
                        </Text>
                    </div>
                    <Space style={{ display: 'flex', justifyContent: 'center', margin: "15px 0" }}>
                        <Button
                            type="button"
                            className="btn avatar-xs p-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Message"
                        >
                            <span className="avatar-title rounded bg-light text-body">
                                <MessagesSquare size={14} />
                            </span>
                        </Button>

                        <Button
                            type="button"
                            className="btn avatar-xs p-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Favourite"
                        >
                            <span className="avatar-title rounded bg-light text-body">
                                <Star size={14} />
                            </span>
                        </Button>

                        <Button
                            type="button"
                            className="btn avatar-xs p-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Phone"
                        >
                            <span className="avatar-title rounded bg-light text-body">
                                <Phone size={14} />
                            </span>
                        </Button>

                        <Dropdown menu={{ items: drop, }} trigger={['click']}>
                            <MoreHorizontal size={14} />
                        </Dropdown>
                    </Space>
                </div>
                <div className="border-top border-top-dashed p-3">
                    <Title level={5} style={{ fontSize: "15px", marginBottom: '5px' }}>Personal Details</Title>
                    <div style={{ marginBottom: "10px" }}>
                        <Text type='secondary' style={{ textTransform: "uppercase", marginBottom: '5px', display: 'block' }}>
                            Number
                        </Text>
                        <Title level={5} style={{ fontSize: "14px" }}>+(256) 2451 8974</Title>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <Text type='secondary' style={{ textTransform: "uppercase", marginBottom: '5px', display: 'block' }}>
                            Email
                        </Text>
                        <Title level={5} style={{ fontSize: "14px" }}>lisaparker@gmail.com</Title>
                    </div>
                    <div>
                        <Text type='secondary' style={{ textTransform: "uppercase", marginBottom: '5px', display: 'block' }}>
                            Location
                        </Text>
                        <Title level={5} style={{ fontSize: "14px" }}>California, USA</Title>
                    </div>
                </div>

                <div className="border-top border-top-dashed p-3">
                    <Title level={5} style={{ fontSize: "15px", marginBottom: "5px", marginTop: "20px" }} className="fs-15 mb-3">Attached Files</Title>

                    <div>
                        {attachements.map((attachement, key) => (
                            <Attachements attachement={attachement} key={key} />
                        ))}

                        <div className="text-center mt-2">
                            <Button danger type="primary">
                                Load more{"  "} <MoveRight size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
    )
}

export default PersonalInfo