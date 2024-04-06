import { Button, Card, Dropdown, Input, Modal, Space, Table, Tag } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import { MoreHorizontal } from 'lucide-react';
import usecustomStyles from '../../../Common/customStyles';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { getAPIKey as onGetAPIKey, addNewAPIKey as onAddNewAPIKey, updateAPIKey as onUpdateAPIKey, deleteAPIKey as onDeleteAPIKey } from "../../../slices/thunk"
import Spinners from '../../../Common/Spinner';
import { DeleteModal } from '../../../Common/DeleteModal';
import { useFormik } from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const customStyles = usecustomStyles();
const BgPurple = styled.div`
      background-color: ${({ theme }) => theme.token.colorPurpleBg};
`;

const ApiTable = () => {

    const dispatch = useDispatch();

    const selectApiKeyData = createSelector(
        (state) => state.APIKey,
        (state) => ({
            apiKey: state.apiKey,
            loading: state.loading
        })
    );
    // Inside your component
    const { apiKey, loading } = useSelector(selectApiKeyData);
    const [isLoading, setLoading] = useState(loading)

    const [apiKeyList, setApiKeyList] = useState([])

    const [apikey, setApiKey] = useState()
    
    useEffect(() => {
        dispatch(onGetAPIKey());
    }, [dispatch]);
    
    
    const [isEdit, setIsEdit] = useState(false)
    
    // Delete
    const [deleteModal, setDeleteModal] = useState(false)
    
    const toggleDelete = () => {
        setDeleteModal(false);
        setApiKey(null);
    }
    
    const onClickDelete = (apikey) => {
        setApiKey(apikey);
        setDeleteModal(true);
    };
    
    const handleDeleteAPIKey = () => {
        if (apikey) {
            dispatch(onDeleteAPIKey(apikey));
            setDeleteModal(false);
            setApiKey(null)
        }
    };

    // Generate API Key

    const [issubmitBtn, setsubmitBtn] = useState(false)
    const [isRegenerateAPI, setIsRegenerateAPI] = useState(false)

    const [isGenerateAPIKey, setIisGenerateAPIKey] = useState()

    const [apiKeyName, setApiKeyName] = useState()

    const generateApiID = () => {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === 'function') {
            d += performance.now();
        }

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });

        return uuid;
    }

    // Modal

    const [modalShow, setModalShow] = useState(false)

    const toggle = useCallback(() => {
        if (modalShow) {
            setModalShow(false)
            setIsEdit(false);
            setsubmitBtn(false)
            setIsRegenerateAPI(false)
            setApiKey(null)
            setIisGenerateAPIKey(null)
            setApiKeyName(null)
        } else {
            setModalShow(true)
            // setApiKey(null)
        }
    }, [modalShow])

    // Rename API Key
    const handleRenameAPIKey = useCallback((ele) => {
        setsubmitBtn(true)
        const apiKey = ele;
        setApiKey({
            id: apiKey.id,
            createdBy: apiKey.createdBy,
            apiKey: apiKey.apiKey,
        });
        setIsEdit(true);
        toggle();
    }, [toggle]);

    // Regenerate API Key
    const handleRegenerateAPIKey = useCallback((ele) => {
        setsubmitBtn(true)
        setIsRegenerateAPI(true)
        setIisGenerateAPIKey(generateApiID())
        const apiKey = ele;
        setApiKey({
            id: apiKey.id,
            createdBy: apiKey.createdBy,
            apiKey: apiKey.apiKey,
        });
        setIsEdit(true);
        toggle();
    }, [toggle]);


    useEffect(() => {
        if (Array.isArray(apiKey)) {
            setApiKeyList(apiKey);
        }
    }, [dispatch, apiKey]);

    // Pagination

    const pagination = {
        pageSize: 8,  // Set the number of items per page
        total: apiKeyList.length,  // Total number of items in your data source
    };

    // Table
    const [deleteId, setDeleteId] = useState({});

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Created By',
            dataIndex: 'createdBy',
            sorter: (a, b) => a.createdBy.localeCompare(b.createdBy),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'API Key',
            dataIndex: 'apiKey',
            sorter: (a, b) => a.apiKey.localeCompare(b.apiKey),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (text) => (
                <Tag
                    color={
                        text === 'Active'
                            ? 'success'
                            : 'red'
                    }
                    style={{border:'none'}}
                >
                    {text}
                </Tag>
            ),
            sorter: (a, b) => a.status.localeCompare(b.status),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Create Date',
            dataIndex: 'createDate',
            sorter: (a, b) => a.createDate.localeCompare(b.createDate),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Expiry Date',
            dataIndex: 'expirydate',
            sorter: (a, b) => a.expirydate.localeCompare(b.expirydate),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Action',
            render: (text) => (
                <>
                    <Dropdown
                        menu={{ items }}
                        trigger={['click']}
                    >
                        <a href="/#" onClick={(e) => {
                            setDeleteId(text)
                            e.preventDefault()
                        }}>
                            <Space>
                                <BgPurple style={{height: "30px", width: "30px", borderRadius: "5px", display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <MoreHorizontal style={{ color: customStyles.colorSecondary,  padding: "8px",  }} /></BgPurple>
                            </Space>
                        </a>
                    </Dropdown>
                </>

            )
        },
    ];

    const items = [
        {
            label: (<Link to='#!' onClick={() => handleRenameAPIKey(deleteId)}>Rename</Link>),
            key: '0',
        },
        {
            label: (<Link to='#!' onClick={() => handleRegenerateAPIKey(deleteId)}>Regenerate Key</Link>),
            key: '1',
        },
        {
            label: "Enable",
            key: '2',
        },
        {
            label: (<Link to='#!' onClick={() => onClickDelete(deleteId.id)}>Delete</Link>),
            key: '3',
        },
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows, sorter, pageSize) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows, sorter, pageSize);
        },
    };

    // Api Modal

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            createdBy: (apikey && apikey.createdBy) || apiKeyName || '',
            apiKey: isGenerateAPIKey || (apikey && apikey.apiKey),
        },
        validationSchema: Yup.object({
            createdBy: Yup.string().required("Please enter a Name.")
        }),
        onSubmit: (values) => {
            if (isEdit) {
                const updateAPIKey = {
                    id: apikey ? apikey.id : 0,
                    createdBy: values.createdBy,
                    apiKey: isGenerateAPIKey || values.apiKey,
                };
                // update API Key
                dispatch(onUpdateAPIKey(updateAPIKey));
                validation.resetForm();
            } else {
                const newAPIKey = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20),
                    createdBy: values.createdBy,
                    apiKey: isGenerateAPIKey,
                    name: "StreamArt",
                    status: "Active",
                    createDate: moment(new Date()).format("D MMM YYYY"),
                    expirydate: moment(new Date(new Date().setMonth(new Date().getMonth() + 6))).format("D MMM YYYY")
                };
                // save new API Key
                dispatch(onAddNewAPIKey(newAPIKey));
                validation.resetForm();
            }
            toggle();
        },
    });

    // Create new API Key Button
    const createApibutton = (e) => {
        e.preventDefault();
        const inputElement = document.getElementById("api-key-name");

        if (inputElement) {
            const inputValue = inputElement.value;
            setApiKeyName(inputValue);

            if (inputValue) {
                setsubmitBtn(true);
                setIisGenerateAPIKey(generateApiID());
            } else {
                const errorMessage = document.getElementById("api-key-error-msg");
                if (errorMessage) {
                    errorMessage.classList.remove("d-none");
                    errorMessage.classList.add("d-block");
                    setTimeout(() => {
                        errorMessage.classList.remove("d-block");
                        errorMessage.classList.add("d-none");
                    }, 1000);
                }
            }
        }
    };


    return (
        <React.Fragment>

            {/* Delete */}
            <DeleteModal show={deleteModal} handleClose={toggleDelete} deleteModalFunction={handleDeleteAPIKey} />

            {/* Api */}
            <Card style={{ marginBottom: customStyles.margin }} className='ApiTable'>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: customStyles.margin }} >
                    <h4 style={{ fontSize: "16px", fontWeight:'500' }} >API Keys</h4>
                    <div style={{ display: "flex", flex: "wrap" }}>
                        <Button type="primary" style={{ backgroundColor: customStyles.colorSuccess, boxShadow:'none' }}
                            onClick={toggle}
                        ><PlusOutlined />Add API Key</Button>
                    </div>
                </div>
                {
                    isLoading ? <Spinners setLoading={setLoading} />
                        :
                        <>
                            {apiKeyList && apiKeyList.length > 0 ?
                                <div  style={{overflowX:'auto', whiteSpace:'nowrap'}}>
                                    <Table
                                        rowSelection={{
                                            ...rowSelection,
                                        }}
                                        columns={columns}
                                        dataSource={(apiKeyList || []).map((keylist, index) => ({
                                            ...keylist,
                                            key: index,
                                        }))}
                                        pagination={pagination}
                                    />
                                </div>
                                : ""}
                        </>
                }
            </Card>



            {/* Api Modal */}
            <Modal centered
                title={isEdit ? (isRegenerateAPI ? 'Regenerate API' : 'Rename API Name') : 'Add API Key'}
                // title={!!isEdit ? "Regenerate API" : "Add API Key"}
                open={modalShow}
                // onOk={handleSubmit}
                onCancel={toggle}
                footer={[

                ]}>
                <form onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>
                    {/* <div id="api-key-error-msg" className="alert alert-danger py-2 d-none">Please enter api key name</div> */}
                    {/* <input type="hidden" id="apikeyId" /> */}
                    <div style={{ marginBottom: customStyles.marginXS }}>
                        <label htmlFor="api-key-name" style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }}>API Key Name <span style={{ color: customStyles.colorDanger }}>*</span></label>
                        <Input
                            name="createdBy"
                            type="text"
                            id="api-key-name"
                            value={validation.values.createdBy || ''}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            onInvalid={validation.touched.createdBy && validation.errors.createdBy ? validation.touched.createdBy : undefined}
                            status={validation.touched.createdBy && validation.errors.createdBy ? "error" : true}
                        />
                        {validation.touched.createdBy && validation.errors.createdBy &&
                            <p style={{ color: customStyles.colorDanger }}>{validation.errors.createdBy}</p>}
                    </div>
                    {issubmitBtn &&
                        <div style={{ marginBottom: customStyles.marginXS }} id="apikey-element">
                            <label htmlFor="api-key" style={{ marginBottom: '10px', display: 'block', fontWeight: 500 }}>API Key</label>
                            <Input
                                name="apikey"
                                type="text"
                                id="api-key"
                                value={validation.values.apiKey || ''} />
                            {validation.touched.apiKey && validation.errors.apiKey &&
                                <p style={{ color: customStyles.colorDanger }}>{validation.errors.apiKey}</p>}
                        </div>
                    }

                    <div style={{ display:'flex', gap: '10px', justifyContent: "end", marginTop: customStyles.margin }}>
                        <Button type="link" danger onClick={() => toggle()}>Close</Button>
                        {issubmitBtn
                            ?
                            <Button type="primary" htmlType="submit" id="add-btn">{!!isEdit ? "Save Changes" : "Add"}</Button>
                            :
                            <Button type="primary" htmlType="submit" onClick={createApibutton}>Create API</Button>
                        }
                    </div>
                </form>
            </Modal>

            <ToastContainer />

        </React.Fragment>
    )
}

export default ApiTable