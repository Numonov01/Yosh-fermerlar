import React, { useRef, useState } from 'react';
import { Button, Card, Col, Modal, Row, Space, Typography } from 'antd';
import { ExclamationCircleOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import Draggable from 'react-draggable';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

//Internationalization
const LocalizedModal = () => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const hideModal = () => {
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Modal
            </Button>
            <Modal
                title="Modal"
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                okText="Submit"
                cancelText="Cancel"
            >
                <p>Bla bla ...</p>
                <p>Bla bla ...</p>
                <p>Bla bla ...</p>
            </Modal>
        </>
    );
};

//destroy confirmation modal dialog
const { confirm } = Modal;
const destroyAll = () => {
    Modal.destroyAll();
};
const showConfirm2 = () => {
    for (let i = 0; i < 3; i += 1) {
        setTimeout(() => {
            confirm({
                icon: <ExclamationCircleOutlined />,
                content: <Button onClick={destroyAll}>Click to destroy all</Button>,
                onOk() {
                    console.log('OK');
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }, i * 500);
    }
};

//Static Method
const info = () => {
    Modal.info({
        title: 'This is a notification message',
        content: (
            <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
            </div>
        ),
        onOk() { },
    });
};
const success = () => {
    Modal.success({
        content: 'some messages...some messages...',
    });
};
const error = () => {
    Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
    });
};
const warning = () => {
    Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
    });
};

const UiModal = () => {
    // page title
    document.title = "Modal" + process.env.REACT_APP_PAGE_TITLE;

    //basic
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    //Asynchronously close
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModalAsynchronously = () => {
        setOpen(true);
    };
    const handleOkAsynchronously = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancelAsynchronously = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    //Customized Footer
    const [loading, setLoading] = useState(false);
    const [openCustomized, setOpenCustomized] = useState(false);
    const showModalCustomized = () => {
        setOpenCustomized(true);
    };
    const handleOkCustomized = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpenCustomized(false);
        }, 3000);
    };
    const handleCancelCustomized = () => {
        setOpenCustomized(false);
    };

    //Internationalization
    const [modal, contextHolder] = Modal.useModal();
    const confirm2 = () => {
        modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: 'Bla bla ...',
            okText: 'Confirm',
            cancelText: 'Cancel',
        });
    };

    //Confirmation modal dialog
    const { confirm } = Modal;
    const showConfirm = () => {
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const showPromiseConfirm = () => {
        confirm({
            title: 'Do you want to delete these items?',
            icon: <ExclamationCircleFilled />,
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() { },
        });
    };
    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const showPropsConfirm = () => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            okButtonProps: {
                disabled: true,
            },
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    //Manual to update destroy
    const [modalManual, contextHolderManual] = Modal.useModal();
    const countDown = () => {
        let secondsToGo = 5;
        const instance = modalManual.success({
            title: 'This is a notification message',
            content: `This modal will be destroyed after ${secondsToGo} second.`,
        });
        const timer = setInterval(() => {
            secondsToGo -= 1;
            instance.update({
                content: `This modal will be destroyed after ${secondsToGo} second.`,
            });
        }, 1000);
        setTimeout(() => {
            clearInterval(timer);
            instance.destroy();
        }, secondsToGo * 1000);
    };

    //To customize the position of modal
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);

    //Custom modal content render
    const [openDraggable, setOpenDraggable] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    });
    const draggleRef = useRef(null);
    const showModalDraggable = () => {
        setOpenDraggable(true);
    };
    const handleOkDraggable = (e) => {
        setOpenDraggable(false);
    };
    const handleCancelDraggable = (e) => {
        setOpenDraggable(false);
    };
    const onStart = (_event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };

    //To customize the width of modal
    const [openCustomWidth, setOpenCustomWidth] = useState(false);

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Feedback" pageTitle="Modal" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic modal.</Text></p>
                        <Button type="primary" onClick={showModal}>
                            Open Modal
                        </Button>
                        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    </Card>
                    <Card title="Customized Footer" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A more complex example which define a customized footer button bar. The dialog will change to loading state after clicking the submit button, and when the loading is done, the modal dialog will be closed. You could set <Text type="secondary" code>footer</Text> to <Text type="secondary" code>null</Text> if you don't need default footer buttons.</Text></p>
                        <Button type="primary" onClick={showModalCustomized}>
                            Open Modal with customized footer
                        </Button>
                        <Modal
                            open={openCustomized}
                            title="Title"
                            onOk={handleOkCustomized}
                            onCancel={handleCancelCustomized}
                            footer={[
                                <Button key="back" onClick={handleCancelCustomized}>
                                    Return
                                </Button>,
                                <Button key="submit" type="primary" loading={loading} onClick={handleOkCustomized}>
                                    Submit
                                </Button>,
                                <Button
                                    key="link"
                                    href="https://google.com"
                                    type="primary"
                                    loading={loading}
                                    onClick={handleOkCustomized}
                                >
                                    Search on Google
                                </Button>,
                            ]}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    </Card>
                    <Card title="Internationalization" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">To customize the text of the buttons, you need to set <Text type="secondary" code>okText</Text> and <Text type="secondary" code>cancelText</Text> props.</Text></p>
                        <Space>
                            <LocalizedModal />
                            <Button onClick={confirm2}>Confirm</Button>
                        </Space>
                        {contextHolder}
                    </Card>
                    <Card title="To Customize the Position of Modal" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can use <Text type="secondary" code>centered</Text>, <Text type="secondary" code>style.top</Text> or other styles to set position of modal dialog.</Text></p>
                        <Button type="primary" onClick={() => setModal1Open(true)}>
                            Display a modal dialog at 20px to Top
                        </Button>
                        <Modal
                            title="20px to Top"
                            style={{
                                top: 20,
                            }}
                            open={modal1Open}
                            onOk={() => setModal1Open(false)}
                            onCancel={() => setModal1Open(false)}
                        >
                            <p>some contents...</p>
                            <p>some contents...</p>
                            <p>some contents...</p>
                        </Modal>
                        <br />
                        <br />
                        <Button type="primary" onClick={() => setModal2Open(true)}>
                            Vertically centered modal dialog
                        </Button>
                        <Modal
                            title="Vertically centered modal dialog"
                            centered
                            open={modal2Open}
                            onOk={() => setModal2Open(false)}
                            onCancel={() => setModal2Open(false)}
                        >
                            <p>some contents...</p>
                            <p>some contents...</p>
                            <p>some contents...</p>
                        </Modal>
                    </Card>
                    <Card title="To Customize the Width of Modal" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use width to set the <Text type="secondary" code>width</Text> of the modal dialog.</Text></p>
                        <Button type="primary" onClick={() => setOpenCustomWidth(true)}>
                            Open Modal of 1000px width
                        </Button>
                        <Modal
                            title="Modal 1000px width"
                            centered
                            open={openCustomWidth}
                            onOk={() => setOpenCustomWidth(false)}
                            onCancel={() => setOpenCustomWidth(false)}
                            width={1000}
                        >
                            <p>some contents...</p>
                            <p>some contents...</p>
                            <p>some contents...</p>
                        </Modal>
                    </Card>
                    <Card title="Destroy Confirmation Modal Dialog" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary"><Text type="secondary" code>Modal.destroyAll()</Text> will destroy all confirmation modal dialogs. Usually, you can use it in router change event to destroy confirm modal dialog automatically.</Text></p>
                        <Button onClick={showConfirm2}>Confirm</Button>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Asynchronously close" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Asynchronously close a modal dialog when the OK button is pressed. For example, you can use this pattern when you submit a form.</Text></p>
                        <Button type="primary" onClick={showModalAsynchronously}>
                            Open Modal with async logic
                        </Button>
                        <Modal
                            title="Title"
                            open={open}
                            onOk={handleOkAsynchronously}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancelAsynchronously}
                        >
                            <p>{modalText}</p>
                        </Modal>
                    </Card>
                    <Card title="Confirmation Modal Dialog" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use <Text type="secondary" code>confirm()</Text> to show a confirmation modal dialog. Let onCancel/onOk function return a promise object to delay closing the dialog.</Text></p>
                        <Space wrap>
                            <Button onClick={showConfirm}>Confirm</Button>
                            <Button onClick={showPromiseConfirm}>With promise</Button>
                            <Button onClick={showDeleteConfirm} type="dashed">
                                Delete
                            </Button>
                            <Button onClick={showPropsConfirm} type="dashed">
                                With extra props
                            </Button>
                        </Space>
                    </Card>
                    <Card title="Manual to Update Destroy" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Manually updating and destroying a modal through instance.</Text></p>
                        <Button onClick={countDown}>Open modal to close in 5s</Button>
                        {contextHolderManual}
                    </Card>
                    <Card title="Custom modal content render" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Custom modal content render. use <Text type="secondary" code>react-draggable</Text> implements draggable.</Text></p>
                        <Button onClick={showModalDraggable}>Open Draggable Modal</Button>
                        <Modal
                            title={
                                <div
                                    style={{
                                        width: '100%',
                                        cursor: 'move',
                                    }}
                                    onMouseOver={() => {
                                        if (disabled) {
                                            setDisabled(false);
                                        }
                                    }}
                                    onMouseOut={() => {
                                        setDisabled(true);
                                    }}
                                    onFocus={() => { }}
                                    onBlur={() => { }}
                                // end
                                >
                                    Draggable Modal
                                </div>
                            }
                            open={openDraggable}
                            onOk={handleOkDraggable}
                            onCancel={handleCancelDraggable}
                            modalRender={(modal) => (
                                <Draggable
                                    disabled={disabled}
                                    bounds={bounds}
                                    nodeRef={draggleRef}
                                    onStart={(event, uiData) => onStart(event, uiData)}
                                >
                                    <div ref={draggleRef}>{modal}</div>
                                </Draggable>
                            )}
                        >
                            <p>
                                Just don&apos;t learn physics at school and your life will be full of magic and miracles.
                            </p>
                            <br />
                            <p>Day before yesterday I saw a rabbit, and yesterday a deer, and today, you.</p>
                        </Modal>
                    </Card>
                    <Card title="Static Method" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">In most case, you do not need static method. It can not consume context like dynamic theme. Please use hooks version or App provided instance first.</Text></p>
                        <Space wrap>
                            <Button onClick={info}>Info</Button>
                            <Button onClick={success}>Success</Button>
                            <Button onClick={error}>Error</Button>
                            <Button onClick={warning}>Warning</Button>
                        </Space>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiModal
