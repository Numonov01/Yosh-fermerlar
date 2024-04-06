import { Button, DatePicker, Dropdown, Form, Input, Modal, Select, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { addToDo as onAddToDo, updateToDo as onUpdateToDo } from '../../../slices/thunk';
import { useDispatch } from 'react-redux';
import usecustomStyles from '../../../Common/customStyles';
import moment from 'moment';
import SimpleBar from 'simplebar-react';
import { todoimg } from '../../../Common/data';
import { Link } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';

const { Option } = Select;

const customStyles = usecustomStyles();

const ToDoModal = ({ isEdit, show, handleClose, editItem }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [droplist, setDroplist] = useState(false);
    const [imgStore, setImgStore] = useState();

    useEffect(() => {
        if (editItem) {
            form.setFieldsValue({
                id: editItem.id || '',
                todo: editItem.todo || '',
                assignedto: editItem?.assignedto,
                status: editItem.status || '',
                priority: editItem.priority || '',
                dueDate: editItem.dueDate ? moment(editItem.dueDate) : null,
            });
            setImgStore(editItem.assignedto || []);
        }
    }, [editItem, form]);

    const handleClick = (item) => {
        const newData = [...imgStore, item];
        setImgStore(newData);
        form.setFieldsValue({ assignedto: newData });
    };

    const handleSubmit = (values) => {
        if (isEdit) {
            const updateTodo = {
                id: editItem ? editItem.id : 0,
                todo: values.todo,
                assignedto: values.assignedto,
                status: values.status,
                priority: values.priority,
                dueDate: values.dueDate ? values.dueDate.format('DD MMM, YYYY') : '',
            };
            dispatch(onUpdateToDo(updateTodo));
        } else {
            const newTodo = {
                id: Math.floor(Math.random() * (30 - 20)) + 20,
                todo: values.todo,
                assignedto: values.assignedto,
                status: values.status,
                priority: values.priority,
                dueDate: values.dueDate ? values.dueDate.format('DD MMM, YYYY') : '',
            };
            dispatch(onAddToDo(newTodo));
        }

        form.resetFields();
        handleClose();
        setImgStore('');
    };

    const imagedrop = [
        {
            label: (
                <div className={`w-100 dropdown-menu ${droplist ? 'show' : ''}`}>
                    <SimpleBar style={{ maxHeight: '141px' }}>
                        <ul style={{ listStyleType: 'none', padding: '0px' }}>
                            {(todoimg || []).map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to="#"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: customStyles.marginXXS,
                                        }}
                                        onClick={() => handleClick(item)}
                                    >
                                        <div style={{ margin: '0px 10px' }}>
                                            <img
                                                src={item.avatar.src}
                                                alt=""
                                                style={{ height: '24px', width: '24px', borderRadius: '50%' }}
                                            />
                                        </div>
                                        <div style={{ color: customStyles.colorText }}>{item.name}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </SimpleBar>
                </div>
            ),
            key: '1',
        },
    ];

    return (
        <React.Fragment>
            <Modal
                centered
                open={show}
                title={!!isEdit ? 'Edit Task' : 'Create Task'}
                onCancel={handleClose}
                footer={[]}
            >
                <Form form={form} onFinish={handleSubmit} >
                    {/* Task Name */}
                    <label>Task Title</label>
                    <Form.Item
                        name="todo"
                        rules={[{ required: true, message: 'Please Enter Your Todo Name' }]}
                        style={{ marginTop: "10px" }}
                    >
                        <Input placeholder="Enter task title" name='todo' />
                    </Form.Item>

                    {/* Assigned To members */}
                    <label>Assigned To</label>
                    <Form.Item name="assignedto" style={{ marginTop: "10px" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }} id="assignee-member">
                            {imgStore &&
                                imgStore.map((imageUrl, index) => (
                                    <Link to="#" key={index}>
                                        <Tooltip title={imageUrl?.name}>
                                            <img
                                                src={imageUrl?.avatar?.src}
                                                width={36}
                                                height={36}
                                                alt=""
                                                style={{ height: '24px', width: '24px', borderRadius: '50%' }}
                                            />
                                        </Tooltip>
                                    </Link>
                                ))}
                        </div>
                        <div>
                            <Dropdown menu={{ items: imagedrop }} trigger={['click']} onOpenChange={() => setDroplist(!droplist)}>
                                <Button type="primary" style={{ width: '100%' }} className={`${droplist ? 'show' : ''}`}>
                                    <span>
                                        Assigned To<b id="total-assignee"> {imgStore?.length || 0} </b>Members
                                    </span>{' '}
                                    <i className="ti ti-chevron-down"></i>
                                </Button>
                            </Dropdown>
                        </div>
                    </Form.Item>

                    {/* Status */}
                    <label>Status</label>
                    <Form.Item name="status" rules={[{ required: true, message: 'Status is required' }]} style={{ marginTop: "10px" }}>
                        <Select style={{ width: '100%' }}>
                            <Option value="all">Status</Option>
                            <Option value="New">New</Option>
                            <Option value="Inprogress">Inprogress</Option>
                            <Option value="Pending">Pending</Option>
                            <Option value="Completed">Completed</Option>
                        </Select>
                    </Form.Item>

                    {/* Priority */}
                    <label>Priority</label>
                    <Form.Item name="priority" rules={[{ required: true, message: 'Priority is required' }]} style={{ marginTop: "10px" }}>
                        <Select style={{ width: '100%' }}>
                            <option value="all">Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </Select>
                    </Form.Item>

                    {/* Due Date */}
                    <label>Due Date</label>
                    <Form.Item name="dueDate" rules={[{ required: true, message: 'Due date is required' }]} style={{ marginTop: "10px" }}>
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item style={{ justifyContent: 'end', display: 'flex', gap: '5', marginTop: "10px" }}>
                        <Button type="link" danger onClick={handleClose}>
                            <CloseOutlined /> Close
                        </Button>
                        <Button type="primary" htmlType="submit" style={{ backgroundColor: customStyles.colorSecondary }}>
                            {!!isEdit ? 'Save' : 'Add Task'}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </React.Fragment>
    );
};

export default ToDoModal;
