import { Avatar, Badge, Button, Card, Col, DatePicker, Dropdown, Input, Modal, Progress, Row, Select, Form, Tag, Tooltip, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AddTeamMember, headData } from '../../../Common/data'
import usecustomStyles from '../../../Common/customStyles';
import { MoreHorizontal, Search } from 'lucide-react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { useDispatch } from 'react-redux';

import SimpleBar from 'simplebar-react';

import { getTasks as onGetTasks, addCardData as onAddCardData, updateCardData as onUpdateCardData, deleteKanban as OnDeleteKanban } from '../../../slices/thunk';
import Spinners from '../../../Common/Spinner';
import { ClockCircleOutlined, DownOutlined, EyeOutlined, MessageOutlined, PaperClipOutlined } from '@ant-design/icons';

import { ToastContainer } from 'react-toastify';
import { DeleteModal } from '../../../Common/DeleteModal';
import moment from 'moment';
import { styled } from 'styled-components';


const customStyles = usecustomStyles();

const { Text } = Typography;
const SubText = styled.div`
    color: ${({ theme }) => theme.token.emailSubText};
`;
const StyleTextMuted = styled.div`
    color: ${({ theme }) => theme.token.textMute};
`;
const TextMuted = styled.div`
    color: ${({ theme }) => theme.token.textMute};
`;
const BorderTop = styled.div`
    border-top: 1px solid  ${({ theme }) => theme.token.borderGray};
`;
const StyleLink = styled.a`
    color: ${({ theme }) => theme.token.textMute};
    white-space: nowrap;
`
// const TabBg = styled.div`
//       backgroundColor:  ${({ theme }) => theme.token.colorInfoBg};
// `;
const { TextArea } = Input;

const Mainpage = () => {

    const [form] = Form.useForm();

    const dispatch = useDispatch();

    const selectKanbanState = (state) => state.Tasks;
    const TasksKanbanProperties = createSelector(
        selectKanbanState,
        (state) => ({
            tasks: state.tasks,
            loading: state.loading
        }))

    const { tasks, loading } = useSelector(TasksKanbanProperties)

    const [isLoading, setLoading] = useState(loading)

    useEffect(() => {
        dispatch(onGetTasks())
    }, [dispatch])

    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(tasks)
    }, [tasks])

    const handleDragEnd = (result) => {
        if (!result.destination) return // If dropped outside a valid drop area, do nothing

        const { source, destination } = result
        // Reorder cards within the same card line
        if (source.droppableId === destination.droppableId) {
            const line = cards.find((line) => line.id === source.droppableId)
            const reorderedCards = Array.from(line.cards)
            const [movedCard] = reorderedCards.splice(source.index, 1)
            reorderedCards.splice(destination.index, 0, movedCard)

            const updatedLines = cards.map((line) => {
                if (line.id === source.droppableId) {
                    return { ...line, cards: reorderedCards }
                }
                return line
            })

            setCards(updatedLines)
        } else {
            // Move card between different card lines
            const sourceLine = cards.find((line) => line.id === source.droppableId)
            const destinationLine = cards.find(
                (line) => line.id === destination.droppableId
            )
            const sourceCards = Array.from(sourceLine.cards)
            const destinationCards = Array.from(destinationLine.cards)
            const [movedCard] = sourceCards.splice(source.index, 1)
            destinationCards.splice(destination.index, 0, movedCard)

            const updatedLines = cards.map((line) => {
                if (line.id === source.droppableId) {
                    return { ...line, cards: sourceCards }
                } else if (line.id === destination.droppableId) {
                    return { ...line, cards: destinationCards }
                }
                return line
            })

            setCards(updatedLines)
        }
    }

    const drop1 = [{ label: 'Priority', key: '1' }, { label: 'Date Added', key: '2', }];

    // create Board Modal
    const [modall, setModall] = useState(false)

    const handleOpen = () => {
        setModall(!modall);
        setCardHead(null)
    }

    const [cardhead, setCardHead] = useState()

    useEffect(() => {
        if (cardhead) {
            form.setFieldsValue({
                id: cardhead.id || "",
                name: cardhead.name || "",
            });
        }
    }, [cardhead, form]);

    const onBoardSubmit = (values) => {
        const addBoard = {
            id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
            name: values["name"],
            cards: []
        };
        dispatch(onAddCardData(addBoard));

        form.resetFields();
        handleOpen()

    };

    // Add Modal
    const [modal, setModal] = useState(false)
    const [kanbanTasksCards, setKanbanTasksCards] = useState()

    const toggle = () => {
        if (modal) {
            setModal(false)
            setImages([])
            setCard(null)
        } else {
            setModal(true)
            // setAssignTag([]);
        }
    }

    // validation

    const [isEdit, setIsEdit] = useState(false)
    const [card, setCard] = useState()

    useEffect(() => {
        if (card) {
            form.setFieldsValue({
                id: card.id || "",
                title: card.title || "",
                text: card.text || "",
                badge1: card.badge1 || [],
                userImages: card.userImages || [],
                botId: card.botId ? moment(card.botId) : null,
                eye: card.eye || "",
                que: card.que || "",
                clip: card.clip || "",
            });
        }
    }, [card, form]);

    const handleOnSubmit = (values) => {
        if (isEdit) {
            const updatedCards = {
                id: card ? card.id : 0,
                kanId: kanbanTasksCards,
                title: values.title,
                text: values.text,
                badge1: Array.isArray(values.badge1) ? values.badge1 : [values.badge1],
                botId: values.botId ? values.botId.format('DD MMM, YYYY') : '',
                userImages: Array.isArray(values.userImages) ? values.userImages : [values.userImages],
                eye: values.eye,
                que: values.que,
                clip: values.clip,
            }

            // update Job
            dispatch(onUpdateCardData(updatedCards))
        } else {
            const newCardData = {
                id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                kanId: kanbanTasksCards,
                title: values["title"],
                text: values["text"],
                badge1: Array.isArray(values.badge1) ? values.badge1 : [values.badge1],
                botId: values.botId ? values.botId.format('DD MMM, YYYY') : '',
                userImages: Array.isArray(values.userImages) ? values.userImages : [values.userImages],
                eye: values['eye'],
                que: values["que"],
                clip: values["clip"],
            }


            dispatch(onAddCardData(newCardData))
        }
        form.resetFields();
        toggle()
    }

    // Edit
    const handleCardEdit = (arg, line) => {
        setModal(true)
        setCard(arg)

        let card = arg
        setCard({
            id: card.id,
            title: card.title,
            text: card.text,
            botId: card.botId,
            userImages: card.userImages,
            eye: card.eye,
            que: card.que,
            clip: card.clip,
            badge1: card.badge1
        })
        setIsEdit(true)

        toggle()
    }

    const handleAddNewCard = (line) => {
        setCard("")
        setIsEdit(false)
        toggle()
        setKanbanTasksCards(line.id)
    };

    //   Images
    const [images, setImages] = useState([])

    const handleImage = (image) => {
        const updatedImages = images.includes(image)
            ? images.filter((item) => item !== image)
            : [...images, image];

        setImages(updatedImages);

        form.setFieldValue("userImages", updatedImages)

    }
    useEffect(() => {
        if (card) {
            const updatedImages = Array.isArray(card.userImages) ? [...card.userImages] : [];

            setImages(updatedImages);
        }
    }, [card]);

    const [deletecard, setDeleteCard] = useState()


    const drop2 = [
        { label: 'View', key: '1', },
        { label: <Link href="/#" onClick={() => handleCardEdit(deletecard)}>Edit</Link>, key: '2', },
        { label: <Link href="/#" onClick={() => onClickDelete(deletecard)}>Delete</Link>, key: '3', },
    ]

    // Delete
    const [deleteModal, setDeleteModal] = useState(false);

    const toggleDelete = () => {
        setDeleteModal(false);
        setCard(null);
    }

    const onClickDelete = (card) => {
        setCard(card);
        setDeleteModal(true);
    };

    const handleDeleteCard = () => {
        if (card) {
            dispatch(OnDeleteKanban(card.id));
            setDeleteModal(false);
            setCard(null)
        }
    };


    return (
        <React.Fragment>

            <DeleteModal
                show={deleteModal}
                handleClose={toggleDelete}
                deleteModalFunction={handleDeleteCard}
            />

            {/* Topbar */}
            <Card>
                <div>
                    <Row gutter={[24, 16]}>
                        <Col xl={2} lg={3}>
                            <div>
                                <Button type="primary" data-bs-toggle="modal" style={{ boxShadow: 'none' }}
                                    onClick={handleOpen}
                                >+ Create Board</Button>
                            </div>
                        </Col>
                        <Col xl={19} lg={19}>
                            <div className="search-box" style={{ position: "relative", display: "flex", alignItems: "center", marginBottom: "0px", marginLeft: "20px" }}>
                                <StyleTextMuted style={{ position: "absolute", top: '8px', zIndex: "1", marginLeft: "10px" }}>
                                    <Search size={15} />
                                </StyleTextMuted>
                                <Input placeholder="Search for project, tasks..." style={{ paddingLeft: "30px", outline: 'none', boxShadow: 'none' }} id='search-task-options' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2}>
                            <div>
                                <Avatar.Group>
                                    {(headData || []).map((item, key) => (
                                        <Link href="#" key={key} aria-label={item.name} >
                                            <Tooltip title={item.name}>
                                                <Avatar src={item.picture} alt="" style={{ height: "32px", width: "32px", borderRadius: "50%", }} />
                                            </Tooltip>
                                        </Link>))}
                                    <Link to="#addmemberModal" data-bs-toggle="modal" >
                                        <div className="avatar-xs">
                                            <div style={{ height: "32px", width: "32px", borderRadius: "50%", backgroundColor: customStyles.colorInfoBg, color: customStyles.colorInfo, padding: "4px 0px 0px 11px", position: "absolute" }} >
                                                +
                                            </div>
                                        </div>
                                    </Link>
                                </Avatar.Group>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card>

            {/* Kanban Board */}
            <SimpleBar style={{ paddingBottom: '20px' }}>
                <div style={{ display: "flex" }} className="tasks-board" id="kanbanboard">
                    {
                        isLoading ? <Spinners setLoading={setLoading} /> :
                            <DragDropContext onDragEnd={handleDragEnd}>
                                {(cards || []).map((line) => {
                                    return (
                                        // header line
                                        <div className="tasks-list" key={line.id} >
                                            <div style={{ display: "flex", margin: "15px 0px", alignItems: 'center', justifyContent: "space-between" }}>
                                                <div>
                                                    <Text style={{ fontSize: "14px", textTransform: "uppercase", fontWeight: '500', display: 'flex' }}>{line.name}
                                                        <div style={{ marginLeft: '8px' }}>
                                                            <Badge count={line.badge} color={line.color} style={{ fontSize: '12px', fontWeight: '500', borderRadius: '50%' }}></Badge>
                                                        </div>
                                                    </Text>
                                                </div>
                                                <div>
                                                    <Dropdown menu={{ items: drop1, }} trigger={['click']} style={{ cursor: "pointer" }} >
                                                        <Button type="text" style={{ fontSize: "12px" }}>Priority <DownOutlined /></Button>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            {/* data */}
                                            <SimpleBar style={{ paddingBottom: "10px" }} className="tasks-wrapper">
                                                <div id="unassigned-task" className={line.cards === "object" ? "tasks" : "tasks noTask"}>
                                                    <Droppable droppableId={line.id} key={line.id}>
                                                        {(provided) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.droppableProps}
                                                            >
                                                                {line.cards.map((card, index) => {
                                                                    return (
                                                                        <Draggable
                                                                            key={card.id}
                                                                            draggableId={card.id}
                                                                            index={index}
                                                                        >
                                                                            {(provided) => (
                                                                                <div
                                                                                    ref={provided.innerRef}
                                                                                    {...provided.draggableProps}
                                                                                    {...provided.dragHandleProps}
                                                                                    className="task-list"
                                                                                    id={line.name + "-task"}
                                                                                >
                                                                                    <Card className="task-box" id="uptask-1"
                                                                                        style={{ margin: "10px 0px" }}
                                                                                    >
                                                                                        <div>
                                                                                            <Link to="#" style={{ fontSize: "12px", marginBottom: '4px' }}>{card.cardId}</Link>
                                                                                            <div style={{ float: "right" }}>
                                                                                                <Dropdown menu={{ items: drop2, }} trigger={['click']} placement='bottomRight' >
                                                                                                    <a href="/#" onClick={(e) => {
                                                                                                        setDeleteCard(card)
                                                                                                        setKanbanTasksCards(line.id)
                                                                                                        e.preventDefault()
                                                                                                    }}>
                                                                                                        <MoreHorizontal size={16} style={{ color: customStyles.textMuted }} />
                                                                                                    </a>
                                                                                                </Dropdown>
                                                                                            </div>

                                                                                            <div className="mb-3">

                                                                                                <h6 style={{ fontSize: "15px" }} className="text-truncate">
                                                                                                    <Link
                                                                                                        to="#"
                                                                                                        id="task-name"
                                                                                                    >
                                                                                                        <SubText>
                                                                                                            {card.title}
                                                                                                        </SubText>
                                                                                                    </Link>
                                                                                                </h6>
                                                                                            </div>
                                                                                            <TextMuted>
                                                                                                {card.text}
                                                                                            </TextMuted>

                                                                                            {card.picture ?
                                                                                                <div className="tasks-img mb-2" style={{ backgroundImage: `url(${card.picture})`, height: "135px" }}>
                                                                                                </div> : ""}

                                                                                            {/* progress */}
                                                                                            {card.prowidth ?
                                                                                                <div>
                                                                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                                                                        <div>
                                                                                                            <h6><Text style={{ color: customStyles.colorPrimary, fontSize: "12px" }}>{card.prowidth}</Text> of 100%</h6>
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <TextMuted>03 Jan, 2022</TextMuted>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <Progress percent={card.prowidth} showInfo={false} size="small" status={card.procolor} />
                                                                                                    </div>
                                                                                                </div>
                                                                                                : ""
                                                                                            }
                                                                                            {/* badge & image */}
                                                                                            {
                                                                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: '10px' }}>
                                                                                                    <div>
                                                                                                        {(Array.isArray(card.badge1) ? card.badge1 : []).map((badgeText, index) => (
                                                                                                            <Tag bordered={false} color={card.badgecolor || "blue"} style={{ margin: '4px' }} key={index}>
                                                                                                                {badgeText}
                                                                                                            </Tag>
                                                                                                        ))}
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <Avatar.Group>
                                                                                                            {(card.userImages || [])?.map((picturedata, idx) => (
                                                                                                                <Link to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Alexis" key={idx}>
                                                                                                                    <Avatar src={picturedata.img} alt=""
                                                                                                                        style={{ height: "24px", width: "24px", borderRadius: "50%" }} />
                                                                                                                </Link>
                                                                                                            ))}
                                                                                                        </Avatar.Group>
                                                                                                    </div>
                                                                                                </div>
                                                                                            }

                                                                                        </div>
                                                                                        {/* bottom */}
                                                                                        <BorderTop style={{ marginTop: '14px', paddingTop: "14px", paddingBottom: "0px" }} className="card-footer border-top-dashed">
                                                                                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                                                                                <div>
                                                                                                    <TextMuted style={{ whiteSpace: 'nowrap', fontSize: '12px' }}><ClockCircleOutlined style={{ marginRight: "5px", whiteSpace: 'nowrap', }} />{card.botId}</TextMuted>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <ul style={{ listStyleType: "none", display: "flex", marginBottom: '0', fontSize: '12px' }}>
                                                                                                        <li>
                                                                                                            <StyleLink to="#" style={{ marginRight: "2px" }}>
                                                                                                                <EyeOutlined /> {card.eye}</StyleLink>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <StyleLink to="#" style={{ marginRight: "2px", margin: '0 8px' }}><MessageOutlined /> {card.que}</StyleLink>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <StyleLink to="#" ><PaperClipOutlined /> {card.clip}</StyleLink>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </BorderTop>

                                                                                        {card.botpro ?
                                                                                            <div className="progress progress-sm">
                                                                                                <div className={`progress-bar bg-${card.botprocolor}`} role="progressbar" style={{ width: `${card.botpro}` }} ></div>
                                                                                            </div>
                                                                                            : ""
                                                                                        }

                                                                                    </Card>
                                                                                </div>
                                                                            )}
                                                                        </Draggable>
                                                                    )
                                                                })}
                                                            </div>
                                                        )}
                                                    </Droppable>
                                                </div>
                                            </SimpleBar>
                                            <div>
                                                <Button type='primary' style={{ backgroundColor: customStyles.colorInfoBg, color: customStyles.colorInfo, width: "100%", marginTop: "10px", boxShadow: 'none' }} data-bs-toggle="modal" data-bs-target="#creatertaskModal"
                                                    onClick={() => handleAddNewCard(line)}
                                                >Add More</Button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </DragDropContext>
                    }
                </div>
            </SimpleBar>


            {/* Create Board Modal */}
            <Modal title="Add Board" open={modall} onCancel={handleOpen} centered={true} footer={[]} >
                <div className="modal-content">
                    <Form form={form} onFinish={onBoardSubmit}>
                        <label style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }}>Board Name</label>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please Enter Your Board Name' }]}
                        >
                            <Input type="text" placeholder="Enter board name"
                                name="name"
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                        <div style={{ marginTop: "20px" }}>
                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                <Button type="link" danger style={{ marginRight: "10px" }}>Close</Button>
                                <Button htmlType="submit" type="primary" style={{ backgroundColor: customStyles.colorSuccessBg, color: customStyles.colorSuccess }}>Add Board</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal>

            {/* Add Kanban Board  */}
            <Modal Modal id="modalForm" title={!!isEdit ? "Update Task" : "Add New Task"} open={modal} onCancel={toggle} centered={true} size="lg" footer={[]} >
                <div>
                    <Form form={form} onFinish={handleOnSubmit} >
                        <div >
                            <label htmlFor="taskname" style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }} >
                                Task Name <span style={{ color: customStyles.colorDanger }}>*</span>
                            </label>
                            <Col lg={24}>
                                <Form.Item name="title" rules={[{ required: true, message: 'Title is required' }]}>
                                    <Input
                                        id="title"
                                        name="title"
                                        type="text"
                                        placeholder="Enter Task Name..."
                                    />
                                </Form.Item>
                            </Col>
                        </div>
                        <div >
                            <label htmlFor='text-field' style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }}>Task Description</label>
                            <Col lg={24}>
                                <Form.Item name="text" rules={[{ required: true, message: 'Please add description' }]}>
                                    <TextArea
                                        id="text-field"
                                        rows={2}
                                        name='text'
                                        placeholder="Enter Task Description"
                                    />
                                </Form.Item>
                            </Col>
                        </div>

                        <Form.Item name='userImages'>
                            <label style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }} >
                                Add Team Member <span style={{ color: customStyles.colorDanger }}>*</span>
                            </label>
                            <SimpleBar style={{ height: "130px" }}>
                                <ul
                                    className="user-list"
                                    id="taskassignee"
                                    style={{ listStyleType: "none" }}
                                >
                                    {(AddTeamMember || []).map((image, index) => {

                                        const isChecked = images.some((item) => {
                                            return item.id === image.id
                                        });
                                        return (
                                            <li key={index}>
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id={"member" + image.id}
                                                        name="userImages"
                                                        onChange={() => handleImage(image)}
                                                        checked={isChecked}
                                                    />
                                                    <label htmlFor={"member" + image.id}>
                                                        {image.name}
                                                    </label>
                                                    <img
                                                        src={image.img}
                                                        style={{ height: "32px", width: "32px", borderRadius: "50%" }}
                                                        alt=""
                                                    />
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </SimpleBar>
                        </Form.Item>

                        {/*  Date */}
                        <label>Date</label>
                        <Form.Item name="botId" rules={[{ required: true, message: 'Date is required' }]}>
                            <DatePicker name='botId' style={{ width: '100%' }}
                            />
                        </Form.Item>

                        {/* Bottom */}
                        <div>
                            <div >
                                <label style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }} htmlFor="eyefor" >
                                    View
                                </label>
                                <div>
                                    <Form.Item name="eye" rules={[{ required: true, message: 'Please add Value' }]}>
                                        <Input
                                            id="eyefor"
                                            name="eye"
                                            type="text"
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <div >
                                <label style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }} htmlFor="quefor" >
                                    Comment
                                </label>
                                <div>
                                    <Form.Item name="que" rules={[{ required: true, message: 'Please add Value' }]}>
                                        <Input
                                            id="quefor"
                                            name="que"
                                            type="text"
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <div >
                                <label style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }} htmlFor="clipfor" >
                                    Pinned
                                </label>
                                <div>
                                    <Form.Item name="clip" rules={[{ required: true, message: 'Please add Value' }]}>
                                        <Input
                                            id="clipfor"
                                            name="clip"
                                            type="text"
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }} >
                                Status <span style={{ color: customStyles.colorDanger }}>*</span>
                            </label>
                            <Col lg={24}>
                                <Form.Item name="badge1" rules={[{ required: true, message: 'Please Select Option.' }]}>
                                    <Select className="form-control"
                                        style={{ width: "100%", marginBottom: customStyles.marginXS, padding: "8px" }}
                                        name="badge1"
                                    >
                                        <Select.Option value="Admin">Admin</Select.Option>
                                        <Select.Option value="Layout">Layout</Select.Option>
                                        <Select.Option value="Dashboard">Dashboard</Select.Option>
                                        <Select.Option value="Website">Website</Select.Option>
                                        <Select.Option value="Marketing">Marketing</Select.Option>
                                        <Select.Option value="Business">Business</Select.Option>
                                        <Select.Option value="Logo">Logo</Select.Option>
                                        <Select.Option value="UI/UX">UI/UX</Select.Option>
                                        <Select.Option value="Analysis">Analysis</Select.Option>
                                        <Select.Option value="Product">Product</Select.Option>
                                        <Select.Option value="Ecommerce">Ecommerce</Select.Option>
                                        <Select.Option value="Graphic">Graphic</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </div>

                        <div style={{ textAlign: 'end', marginBottom: "0px" }}>
                            <Button type="primary" htmlType="submit"
                                id="updatetaskdetail" style={{ backgroundColor: customStyles.colorSecondary }}
                            >
                                {!!isEdit ? "Update Task" : "Create Task"}
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>

            <ToastContainer />
        </React.Fragment >
    )
}

export default Mainpage