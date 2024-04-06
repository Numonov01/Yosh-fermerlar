import { Avatar, Button, Card, Col, Form, Input, Row, Select, Space, Table, Tag, Tooltip } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'

import avatar6 from "../../../assets/images/users/avatar-6.jpg"
import avatar7 from "../../../assets/images/users/avatar-7.jpg"
import avatar8 from "../../../assets/images/users/avatar-8.jpg"
import { Link } from 'react-router-dom'
import { AndroidOutlined, DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined, ShareAltOutlined } from '@ant-design/icons'
import usecustomStyles from '../../../Common/customStyles'
import { useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { useSelector } from 'react-redux'
import Spinners from '../../../Common/Spinner'

import { getToDoList as onGetToDoList, deleteToDo as onDeleteToDo } from '../../../slices/thunk'
import { DeleteModal } from '../../../Common/DeleteModal'
import { ToastContainer } from 'react-toastify'
import ToDoModal from './ToDoModal'
import styled from 'styled-components';

const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const BgSuccess = styled.div`
      background-color: ${({ theme }) => theme.token.colorSuccessBg};
`;

const Border = styled.div`
      border: ${({ theme }) => theme.token.borderGray};
`;
const provinceData = ['Sort', 'All Tasks']

const TodoTable = () => {

    const dispatch = useDispatch();
    const selectTodoListData = createSelector(
        (state) => state.Todo,
        (state) => ({
            todoList: state.todoList,
            loading: state.loading
        })
    );

    // Inside your component
    const { todoList, loading } = useSelector(selectTodoListData);
    const [isLoading, setLoading] = useState(loading)

    const [todo, setTodo] = useState();


    useEffect(() => {
        dispatch(onGetToDoList())
    }, [dispatch])


    // search

    const handleSearchData = ({ data, item, setState }) => {
        setState(
            data.filter((search) =>
                Object.values(search).some(
                    (field) =>
                        typeof field === 'string' &&
                        field.toLowerCase().includes(item?.toLowerCase()),
                )
            )
        )
    }

    const handleSearch = (ele) => {
        let item = ele.value;

        if (item === "All Tasks") {
            setTodo([...todo]);
        } else {
            handleSearchData({ data: todo, item: item, setState: setTodo })
        }
    }

    const handleSearchTaskList = (ele) => {
        let item = ele.value;
        handleSearchData({ data: todoList, item: item, setState: setTodo })
    }

    // sorting
    const handleSort = (option) => {
        if (option.value === 'By ID') {
            sortElementsById({ data: todoList, item: 'id', setState: setTodo });
        } else if (option.value === 'By Name') {
            SorttingData({ data: todoList, item: 'todo', setState: setTodo });
        } else {
            setTodo([...todoList]);
        }
    };

    const sortElementsById = ({ data, item, setState }) => {
        const manyTodos = [...data].sort((search1, search2) => {
            const item1 = parseInt(search1[item]);
            const item2 = parseInt(search2[item]);

            if (item1 > item2) {
                return -1;
            }
            if (item1 < item2) {
                return 1;
            }
            return 0;
        });
        setState(manyTodos);
    };

    const SorttingData = ({ data, item, setState }) => {
        const manyTodos = [...data].sort((search1, search2) => {
            const item1 = search1[item].toLowerCase();
            const item2 = search2[item].toLowerCase();

            if (item1 < item2) {
                return -1;
            }
            if (item1 > item2) {
                return 1;
            }
            return 0;
        });
        setState(manyTodos);
    };


    // Delete Modal

    const [delet, setDelet] = useState(false);
    const [deleteId, setDeleteId] = useState();

    const handleDeleteModal = useCallback((id) => {
        setDelet(!delet);
        setDeleteId(id);
    }, [delet])

    const handleDeleteId = () => {
        dispatch(onDeleteToDo(deleteId.id))
        setDelet(false)
    }

    useEffect(() => {
        setTodo(todoList)
    }, [todoList])

    //add modal state
    const [modal, setModal] = useState(false);
    const handleAddModal = useCallback(() => { setModal(!modal); setEditItem(null); }, [modal]);

    //edit modal state
    const [isEdit, setIsEdit] = useState(false);
    const [editItem, setEditItem] = useState([]);

    const handleEditModal = useCallback((item) => {
        setIsEdit(true);
        handleAddModal();
        setEditItem({
            id: item.id,
            todo: item.todo,
            assignedto: item.assignedto,
            status: item.status,
            priority: item.priority,
            dueDate: item.dueDate
        })
    }, [handleAddModal])


    // Table
    const columns = [
        {
            title: 'Task Name',
            dataIndex: 'todo',
            render: (todo) => {
                return (
                    <div style={{ display: "flex", alignItems: "start" }}>
                        <div>
                            <div style={{ padding: "0px 5px", borderRadius: "5px", marginRight: "10px" }} className="task-handle px-1 bg-light rounded">: :</div>
                        </div>
                        <div>
                            <p style={{ marginBottom: '0' }}>{todo}</p>
                        </div>
                    </div>
                )
            }
        },
        {
            title: 'Assigned',
            dataIndex: 'assignedto',
            render: (assignedto) => {
                const showImg = 3;
                const assignedElem = assignedto.slice(0, showImg);
                const elemLength = assignedto.length - showImg;
                return (
                    <>
                        <div style={{ display: "flex" }} >
                            {
                                assignedElem?.map((img) => (
                                    <Link to="#" key={img.id}>
                                        <Tooltip title={img.name}>
                                            <Avatar.Group>
                                                <img src={img.avatar.src} alt="" width="24px" height="24px" style={{ borderRadius: "50%", marginLeft: "-5px" }} />
                                            </Avatar.Group>
                                        </Tooltip>
                                    </Link>
                                ))
                            }
                            {
                                assignedto.length > showImg &&
                                <Link to="#">
                                    <Tooltip title={elemLength}>
                                        <div>
                                            <div style={{ backgroundColor: customStyles.colorSecondary, width: "24px", height: "24px", borderRadius: "50%", marginLeft: "-5px", paddingTop: "2px", color: "white", paddingLeft: "3px" }}>{elemLength}+</div>
                                        </div>
                                    </Tooltip>
                                </Link>
                            }
                        </div>
                    </>
                )
            }
        },
        {
            title: 'Due Date',
            dataIndex: 'dueDate',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (text) => (
                <Tag
                    color={
                        text === 'Pending'
                            ? 'warning'
                            : text === 'Completed'
                                ? 'success'
                                : text === 'Inprogress'
                                    ? 'blue'
                                    : 'cyan'
                    }
                    style={{ border: "none" }}
                >
                    {text}
                </Tag>
            ),
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            render: (text) => (
                <Tag
                    color={
                        text === 'Medium'
                            ? 'warning'
                            : text === 'Low'
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
                <Space>
                    <Button danger
                        onClick={() => {
                            handleDeleteModal(text)
                        }}
                    >
                        <DeleteOutlined style={{ color: customStyles.colorDanger, }} />
                    </Button>
                    <Button
                        onClick={() => {
                            handleEditModal(text)
                        }}
                    >
                        <EditOutlined style={{ color: customStyles.colorInfo, }} />
                    </Button>
                </Space>
            )
        }

    ]

    return (
        <React.Fragment>
            <Col xs={24} lg={18} style={{ marginBottom: customStyles.margin }}>
                <Card>
                    <Row gutter={[20, 20]}>
                        <Col xs={24} md={12}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: "10px" }}>
                                    <BgSuccess style={{ padding: '2px', width: '48px', height: '48px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {/* <DollarOutlined style={{ color: customStyles.colorSuccess }} /> */}
                                        <AndroidOutlined style={{ color: customStyles.colorSuccess, fontSize: '20px' }} />
                                    </BgSuccess>

                                </div>
                                <div style={{ marginLeft: '6px' }}>
                                    <h5 style={{ fontSize: customStyles.h6, marginBottom: '4px' }} >Lizant React</h5>
                                    <TextMuted style={{ marginBottom: "0px" }}>2023</TextMuted>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'end' }}>
                                <Avatar.Group style={{ marginRight: "10px" }}>
                                    <Tooltip title="Marian Angel">
                                        <Link to="#">
                                            <img src={avatar6} alt="" style={{ height: "28px", width: "28px", borderRadius: "50%" }} />
                                        </Link>
                                    </Tooltip>
                                    <Tooltip title="Johnnie Walton">
                                        <Link to="#">
                                            <img src={avatar7} alt="" style={{ height: "28px", width: "28px", borderRadius: "50%", marginLeft: "5px" }} />
                                        </Link>
                                    </Tooltip>
                                    <Tooltip title="Donna Weston">
                                        <Link to="#">
                                            <img src={avatar8} alt="" style={{ height: "28px", width: "28px", borderRadius: "50%", marginLeft: "5px" }} />
                                        </Link>
                                    </Tooltip>
                                </Avatar.Group>

                                <div style={{ marginLeft: '10px' }}>
                                    <Button type="dashed">
                                        Share <ShareAltOutlined />
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/*  */}
                    <div>
                        <Border style={{ borderRadius: "10px", marginTop: "20px" }}>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} xxl={4}>
                                    <Select style={{ width: "100%", outline: 'none', boxShadow: 'none', }}
                                        defaultValue={provinceData[0]}
                                        showSearch
                                        optionFilterProp="children"
                                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        onChange={(e) => handleSort(e)}
                                        options={[
                                            { value: 'Sort', label: 'Sort' },
                                            { value: 'By ID', label: 'By ID' },
                                            { value: 'By Name', label: 'By Name' },
                                        ]}
                                    >
                                    </Select>
                                </Col>
                                <Col xs={24} xxl={4}>
                                    <Select style={{ width: "100%", outline: 'none', boxShadow: 'none' }} showSearch
                                        defaultValue={provinceData[1]}
                                        optionFilterProp="children"
                                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        onChange={(e) => handleSearch(e)}
                                        options={[
                                            { value: 'All Tasks', label: 'All Tasks', },
                                            { value: 'Completed', label: 'Completed', },
                                            { value: 'Inprogress', label: 'Inprogress', },
                                            { value: 'Identified', label: 'Identified', },
                                            { value: 'Pending', label: 'Pending', },
                                            { value: 'New', label: 'New', },
                                        ]}
                                    >
                                    </Select>
                                </Col>
                                <Col xs={24} xxl={13}>
                                    <div className="search-box" style={{ position: "relative", marginBottom: '0' }}>
                                        <Form.Item type="text" style={{ marginBottom: '0' }} id="searchTaskList" className="search" placeholder="Search task name" onChange={(e) => handleSearchTaskList(e.target)} >
                                            <Input style={{ outline: 'none', boxShadow: 'none', paddingLeft: '28px' }} />
                                        </Form.Item>
                                        <SearchOutlined style={{ position: "absolute", left: "10px", top: "10px", }} />
                                    </div>
                                </Col>
                                <Col xs={24} xxl={3}>
                                    <Button type="primary"
                                        onClick={handleAddModal}
                                        style={{ backgroundColor: customStyles.colorPrimary, boxShadow: 'none' }}
                                    >
                                        <PlusOutlined /> Add Tasks
                                    </Button>
                                </Col>
                            </Row>
                        </Border>
                    </div>

                    {/* table */}
                    <div style={{ marginTop: customStyles.margin, overflowX: 'auto' }}>
                        {
                            isLoading ? <Spinners setLoading={setLoading} /> :
                                <div style={{ overflowX: 'auto' }}>
                                    <Table
                                        columns={(columns || [])}
                                        dataSource={(todo.map(item => ({ ...item, key: item.id })) || [])}
                                        style={{ marginBottom: "0px", whiteSpace: 'noWrap' }}
                                    />
                                </div>
                        }
                    </div>
                </Card>
            </Col>


            {/* Delete */}
            <DeleteModal show={delet} handleClose={handleDeleteModal} deleteModalFunction={handleDeleteId} />

            <ToDoModal show={modal} isEdit={isEdit} editItem={editItem} handleClose={handleAddModal} todoList={todoList} />
            <ToastContainer />
        </React.Fragment>
    )
}

export default TodoTable