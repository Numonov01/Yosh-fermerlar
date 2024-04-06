import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createSelector } from 'reselect';
import {
    getTodoProjects as onGetTodoProjects,
    getTodoInsights as onGetTodoInsights,
    addToDoInsights as onAddToDoInsights,
    addToDoProjects as onAddToDoProjects,
} from '../../../slices/thunk';
import { Badge, Button, Col, Input, Modal } from 'antd';
import { BellOutlined, CloseOutlined, HomeOutlined, OrderedListOutlined, PlusOutlined } from '@ant-design/icons';
import { Boxes, FolderGit2, Gem, Puzzle } from 'lucide-react';
import usecustomStyles from '../../../Common/customStyles';

import styled from 'styled-components';

function getIcon(iconName) {
    switch (iconName) {
        case 'FolderGit2':
            return <FolderGit2 size={13} />;
        case 'Boxes':
            return <Boxes size={13} />;
        case 'Gem':
            return <Gem size={13} />;
        case 'Puzzle':
            return <Puzzle size={13} />;
        default:
            return null;
    }
}
const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.sidebarText};
`;
const BgBlue = styled.div`
      background-color: ${({ theme }) => theme.token.emailSidebar};
`;
const SidebarTodo = () => {

    const [todoType, setTodoType] = useState('');

    // Modal
    const [show, setIsShow] = useState(false);

    const handleClose = () => {
        setIsShow(!show);
    };

    const handleInsights = () => {
        setTodoType('Insights');
        handleClose();
    };

    const handleProjects = () => {
        setTodoType('Projects');
        handleClose();
    };

    const dispatch = useDispatch();

    const selectore = createSelector(
        (state) => state.Todo,
        (todoInsights) => todoInsights,
        (todoProject) => todoProject
    );

    const { todoInsights, todoProject } = useSelector(selectore);

    const [insightData, setInsightData] = useState([])

    useEffect(() => {
        setInsightData(todoInsights)
    }, [todoInsights])

    useEffect(() => {
        dispatch(onGetTodoInsights());
        dispatch(onGetTodoProjects());
    }, [dispatch]);


    // Validation
    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: (insightData && insightData.name) || '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Please provide a folder name.'),
        }),
        onSubmit: (values) => {
            if (todoType === 'Insights') {
                const newInsights = {
                    id: Math.floor(Math.random() * (30 - 20) + 20),
                    icon: 'FolderGit2',
                    name: values['name'],
                };
                dispatch(onAddToDoInsights(newInsights));
                validation.resetForm();

            } else {
                const newProject = {
                    id: Math.floor(Math.random() * (30 - 20) + 20),
                    icon: 'FolderGit2',
                    name: values['name'],
                };
                dispatch(onAddToDoProjects(newProject));
                validation.resetForm();
            }

            if (values === null) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        },
    });

    return (
        <React.Fragment>
            <Col xs={24} lg={6} className="todo-sidebar">
                <>
                    <BgBlue style={{ padding: '20px', borderRadius: '6px' }}>
                        <div>
                            <ul style={{ paddingLeft: '0px' }}>
                                <li style={{ marginBottom: '16px', listStyle: 'none' }}>
                                    <NavLink to="#!" className="active">
                                        <TextMuted> <HomeOutlined /><span style={{ marginLeft: '8px', }}>Home</span> </TextMuted>
                                    </NavLink>
                                </li>
                                <li style={{ marginBottom: '16px', listStyle: 'none' }}>
                                    <NavLink to="#!">
                                        <TextMuted>
                                            <OrderedListOutlined /> <span style={{ marginLeft: '8px', }}>My Task</span>
                                        </TextMuted>
                                    </NavLink>
                                </li>
                                <li style={{ listStyle: 'none' }}>
                                    <NavLink to="#!">
                                        <TextMuted style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <BellOutlined /> <span style={{ marginLeft: '8px', }}>Inbox</span> {' '}
                                            </div>
                                            <div style={{ float: "right" }}>
                                                <Badge count={5} color="rgb(67, 142, 255)"></Badge>
                                            </div>
                                        </TextMuted>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            {/* <hr style={{ borderColor: '#f0f0f033' }} /> */}
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "12px", justifyContent: "space-between" }}>
                                <TextMuted style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase' }}>Insights</TextMuted>
                                <div>
                                    <Button
                                        id="addcontact"
                                        name='Insights'
                                        className="btn btn-soft-success btn-sm shadow-none" style={{ fontSize: '11px', fontWeight: '500', width: '37px', padding: '0' }}
                                        onClick={handleInsights}
                                    >
                                        <PlusOutlined />
                                    </Button>
                                </div>
                            </div>
                            <ul style={{ paddingLeft: '0px' }}>
                                {insightData &&
                                    (insightData || []).map((item, index) => (
                                        <li key={index} style={{ marginBottom: '16px', listStyle: 'none' }}>
                                            <Link href="/#">
                                                <TextMuted>
                                                    {getIcon(item.icon)} <span style={{ marginLeft: '8px', }}>{item.name}</span>
                                                </TextMuted>
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                            {/* <hr style={{ borderColor: '#f0f0f033' }} /> */}

                            <div style={{ display: "flex", alignItems: "center", marginBottom: "12px", justifyContent: "space-between" }}>
                                <TextMuted style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase' }}>Projects</TextMuted>
                                <div>
                                    <Button
                                        id="addcontact"
                                        name='Projects'
                                        className="btn btn-soft-success btn-sm shadow-none" style={{ fontSize: '11px', fontWeight: '500', width: '37px', padding: '0' }}
                                        onClick={handleProjects}
                                    >
                                        <PlusOutlined />
                                    </Button>
                                </div>
                            </div>
                            <ul style={{ paddingLeft: '0px' }}>
                                {todoProject &&
                                    (todoProject || []).map((item, index) => (
                                        <li key={index} style={{ marginBottom: '16px', listStyle: 'none' }}>
                                            <Link href="/#">
                                                <TextMuted>
                                                    {getIcon(item.icon)} <span style={{ marginLeft: '8px', }}> {item.name}</span>
                                                </TextMuted>
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </BgBlue>
                </>
            </Col>

            <Modal open={show} onCancel={handleClose} title={'Insights' ? "Create Insights" : "Create Project"} centered
                footer={[]} >
                <div style={{ paddingBottom: "20px" }}>
                    <form autoComplete="off" onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}>
                        <div>
                            <label>Project Name</label>
                            <Input
                                name="name"
                                placeholder="Enter project name"
                                style={{ marginBottom: "10px", marginTop: "10px" }}
                                value={validation.values.name || ''}
                                onChange={validation.handleChange}
                                 />
                            {validation.touched.name && validation.errors.name &&
                                <p style={{ color: customStyles.colorDanger }}>{validation.errors.name}</p>}
                        </div>
                        <div style={{ marginTop: customStyles.marginXXS, float: "right" }}>
                            <Button type="primary" style={{ backgroundColor: customStyles.colorSuccessBg, color: customStyles.colorSuccess, marginRight: "10px" }} onClick={handleClose}>
                                <CloseOutlined /> Close
                            </Button>
                            <Button type="primary" htmlType='submit' style={{ backgroundColor: customStyles.colorPrimary }}>
                                Add Project
                            </Button>
                        </div>

                    </form>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default SidebarTodo