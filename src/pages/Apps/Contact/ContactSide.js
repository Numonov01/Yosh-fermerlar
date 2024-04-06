import { Button, Card, Col, Row, Table, Tag } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getContacts as onGetContacts, addNewContact as onAddNewContact, updateContact as onUpdateContact, deleteContact as onDeleteContact } from '../../../slices/thunk';
import { DeleteFilled, DeleteOutlined, EditFilled, EyeFilled, FolderOutlined, HistoryOutlined, PlusOutlined, StarOutlined, TagFilled, UsergroupAddOutlined } from '@ant-design/icons';
import usecustomStyles from '../../../Common/customStyles';
import Spinners from '../../../Common/Spinner';
import { DeleteModal } from '../../../Common/DeleteModal';
import DrawerFile from './DrawerFile';
import ContactModal from './ContactModal';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';


const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textLight};
`;
const TextLight = styled.div`
color: ${({ theme }) => theme.token.textLight};
`;
const ContactSide = ({ contacts, loading, contactList, setContactList }) => {

    const dispatch = useDispatch();

    // dispatch data

    useEffect(() => {
        dispatch(onGetContacts());
    }, [dispatch]);


    const [isLoading, setLoading] = useState(loading)

    const [activeList, setActiveList] = useState("all")

    const [isEdit, setIsEdit] = useState(false)

    const [info, setInfo] = useState({
        img: '',
        name: '',
        email: '',
        phone: '',
        country: '',
        label: '',
        tab: '',
    });
    const [isOffcanvas, setIsOffcanvas] = useState(false);

    const [contact, setContact] = useState([]);

    const [fieldValue, setFieldValue] = useState();

    const [deleteModal, setDeleteModal] = useState(false)

    const toggleDelete = () => {
        setDeleteModal(false);
        setContact(null)
    }

    // Delete Contact 
    const onClickDelete = (contact) => {
        setContact(contact);
        setDeleteModal(true);
    };

    const handleDeleteContact = () => {
        if (contact) {
            dispatch(onDeleteContact(contact.id));
            setDeleteModal(false);
            setContact(null)
        }
    };

    // Add && Update

    const [modalShow, setModalShow] = useState(false);

    const toggle = useCallback(() => {
        if (modalShow) {
            setModalShow(false)
            setIsEdit(false);
            setContact(null)
            setFieldValue(null)
        } else {
            setModalShow(true)
        }
    }, [modalShow])

    // Update Contact
    const handleUpdateContact = useCallback((ele) => {
        const contact = ele;
        setContact({
            id: contact.id,
            name: contact.name,
            img: contact.img,
            email: contact.email,
            phone: contact.phone,
            country: contact.country,
            label: contact.label,
        });
        setIsEdit(true);
        toggle();
    }, [toggle]);

    // Filter
    const labelFilter = (ele) => {
        let filterData
        if (ele === "all") {
            filterData = contacts.filter((item) => item)
        } else {
            filterData = contacts.filter((item) => item.tab === ele || item.label === ele)
        }
        setActiveList(ele)
        setContactList(filterData)
    }

    const columns = [
        {
            title: 'Name',
            // dataIndex: 'img',
            render: ({ img, name }) => {
                return (
                    <span>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img src={img} alt="" style={{ borderRadius: "50%", height: "32px", width: "32px", marginRight: "10px" }} />
                            </div>
                            <div>
                                <h6 style={{ fontSize: "13px" }}>{name}</h6>
                            </div>
                        </div>
                    </span>
                )
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Country',
            dataIndex: 'country',
        },
        {
            title: 'Label',
            dataIndex: 'label',
            render: (text) => (
                <Tag
                    color={
                        text === 'Business'
                            ? 'cyan'
                            : text === 'Friends'
                                ? 'purple'
                                : text === 'Family'
                                    ? 'success'
                                    : 'red'
                    }
                    style={{ border: "none" }}
                >
                    {text}
                </Tag>
            ),
        },
        {
            title: 'Action',
            render: (text) => (
                <span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div>
                            <Link href="#viewContactoffcanvas" style={{ color: customStyles.textMuted, marginRight: "10px" }}
                                onClick={() => { setInfo(text); setIsOffcanvas(true) }}
                                className="viewlist-btn">
                                <EyeFilled />
                            </Link>
                        </div>
                        <div>
                            <Link href="#addContactModal" style={{ color: customStyles.textMuted, marginRight: "10px" }}
                                onClick={() => handleUpdateContact(text)}>
                                <EditFilled />
                            </Link>
                        </div>
                        <div>
                            <Link href="#removeContactModal" style={{ color: customStyles.textMuted }}
                                onClick={() => {
                                    onClickDelete(text)
                                }}
                            >
                                <DeleteFilled />
                            </Link>
                        </div>
                    </div>
                </span>
            )
        }

    ]
    return (
        <React.Fragment>
            <Row gutter={[16]} style={{ marginTop: "-20px" }}>
                <Col xs={24} lg={5}>
                    <Card style={{ marginBottom: customStyles.margin }}>
                        <div>
                            <Button type='primary' style={{ width: "100%", boxShadow: 'none' }} className="w-100 addContact-modal"
                                onClick={() => toggle()}
                            ><PlusOutlined /> Add Contact</Button>
                            <div style={{ marginTop: "20px" }} className="mt-3 mx-n4 px-4 contact-sidebar-menu" data-simplebar>
                                <ul className="list-unstyled contact-menu-list">
                                    <li style={{ marginBottom: '10px' }}>
                                        <Link to="#!" className={activeList === "all" ? "active contactactive" : ""} onClick={() => labelFilter("all")}>
                                            <TextMuted className='contactactiveclass'><FolderOutlined />
                                                <span data-tab="all" style={{ marginLeft: '8px' }}>All Contacts</span> </TextMuted></Link>
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <Link to="#!" className={activeList === "frequently" ? "active contactactive" : ""} onClick={() => labelFilter("frequently")}>
                                            <TextMuted className='contactactiveclass'><HistoryOutlined /> <span style={{ marginLeft: '8px' }}>Frequently Contacted</span></TextMuted>
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <Link to="#!" className={activeList === "important" ? "active contactactive" : ""} onClick={() => labelFilter("important")}>
                                            <TextMuted className='contactactiveclass'><StarOutlined /> <span style={{ marginLeft: '8px' }}>Important</span></TextMuted>
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <Link to="#!" className={activeList === "groups" ? "active contactactive" : ""} onClick={() => labelFilter("groups")}>
                                            <TextMuted className='contactactiveclass'><UsergroupAddOutlined /> <span style={{ marginLeft: '8px' }}>Groups</span></TextMuted>
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <Link to="#!" className={activeList === "trash" ? "active contactactive" : ""} onClick={() => labelFilter("trash")}>
                                            <TextMuted className='contactactiveclass'> <DeleteOutlined /> <span style={{ marginLeft: '8px' }}>Deleted</span></TextMuted>
                                        </Link>
                                    </li>
                                </ul>

                                <TextLight style={{ paddingTop: "4px", paddingBottom: "16px", fontSize: '13px', fontWeight: '600', textTransform: 'uppercase' }}>Labels</TextLight>
                                <ul className="list-unstyled contact-menu-list">
                                    <li style={{ marginBottom: '12px' }}>
                                        <Link to="#!" className={activeList === "Friends" ? "active contactactive" : "text-body"} onClick={() => labelFilter("Friends")}>
                                            <div style={{ display: 'flex' }} className='contactactiveclass'>
                                                <TagFilled style={{ color: customStyles.colorSecondary }} />
                                                <TextMuted style={{ marginLeft: '8px' }} data-label="Friends">Friends</TextMuted>
                                            </div>
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Link to="#!" className={activeList === "Family" ? "active contactactive" : "text-body"} onClick={() => labelFilter("Family")}>
                                            <div style={{ display: 'flex' }} className='contactactiveclass'>
                                                <TagFilled style={{ color: customStyles.colorSuccess }} />
                                                <TextMuted style={{ marginLeft: '8px' }} data-label="Family">Family</TextMuted>
                                            </div>
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Link to="#!" className={activeList === "Business" ? "active contactactive" : "text-body"} onClick={() => labelFilter("Business")}>
                                            <div style={{ display: 'flex' }} className='contactactiveclass'>
                                                <TagFilled style={{ color: customStyles.colorInfo }} />
                                                <TextMuted style={{ marginLeft: '8px' }} data-label="Business">Business</TextMuted>
                                            </div>
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Link to="#!" className={activeList === "Imported" ? "active contactactive" : "text-body"} onClick={() => labelFilter("Imported")}>
                                            <div style={{ display: 'flex' }} className='contactactiveclass'>
                                                <TagFilled style={{ color: customStyles.colorDanger }} />
                                                <TextMuted style={{ marginLeft: '8px' }} data-label="Imported">Imported</TextMuted>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} lg={19}>
                    <div >
                        <div id="recomended-jobs" className="table-card">
                            {
                                isLoading ? <Spinners setLoading={setLoading} />
                                    :
                                    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                        <Table
                                            columns={(columns || [])}
                                            dataSource={(contactList || []).map((conlist, index) => ({
                                                ...conlist,
                                                key: index,
                                            }))}
                                            bordered
                                        />
                                    </div>
                            }
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Delete Modal */}
            <DeleteModal show={deleteModal} handleClose={toggleDelete} deleteModalFunction={handleDeleteContact} />
            <DrawerFile info={info} isOffcanvas={isOffcanvas} setIsOffcanvas={setIsOffcanvas} />
            <ContactModal modalShow={modalShow} toggle={toggle} contact={contact} onUpdateContact={onUpdateContact} onAddNewContact={onAddNewContact} fieldValue={fieldValue} isEdit={isEdit} dispatch={dispatch} />
            <ToastContainer />
        </React.Fragment >
    )
}

export default ContactSide;