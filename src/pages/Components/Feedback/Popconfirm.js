import React, { useState } from 'react';
import { Button, Card, Col, Popconfirm, Row, Switch, Typography, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

//basic example
const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
};
const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
};

//placement
const buttonWidth = 70;
const gap = 8;
const btnProps = {
    style: {
        width: buttonWidth,
    },
};
const text = 'Are you sure to delete this task?';
const description = 'Delete the task';
const confirmPlacement = () => {
    message.info('Clicked on Yes.');
};

const UiPopconfirm = () => {
    // page title
    document.title = "Popconfirm" + process.env.REACT_APP_PAGE_TITLE;

    //Conditional trigger
    const [open, setOpen] = useState(false);
    const [condition, setCondition] = useState(true);
    const changeCondition = (checked) => {
        setCondition(checked);
    };
    const confirmConditional = () => {
        setOpen(false);
        message.success('Next step.');
    };
    const cancelConditional = () => {
        setOpen(false);
        message.error('Click on cancel.');
    };
    const handleOpenChange = (newOpen) => {
        if (!newOpen) {
            setOpen(newOpen);
            return;
        }
        // Determining condition before show the popconfirm.
        console.log(condition);
        if (condition) {
            confirmConditional(); // next step
        } else {
            setOpen(newOpen);
        }
    };

    //Asynchronously close on Promise
    const confirmAsynchronously = () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(null), 3000);
        });

    //Asynchronously close
    const [openAsynchronouslyClose, setOpenAsynchronouslyClose] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showPopconfirm = () => {
        setOpenAsynchronouslyClose(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpenAsynchronouslyClose(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpenAsynchronouslyClose(false);
    };
    
    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Feedback" pageTitle="Popconfirm" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The basic example supports the title and description props of confirmation.</Text></p>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>Delete</Button>
                        </Popconfirm>
                    </Card>
                    <Card title="Placement" style={{ marginBottom: customStyles.margin, overflowX:'auto' }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">There are 12 <Text type="secondary" code>placement</Text> options available. Use <Text type="secondary" code>arrow: &#10100;pointAtCenter: true &#10101;</Text> if you want the arrow to point at the center of target.</Text></p>
                        <div
                            style={{
                                marginLeft: buttonWidth,
                                display: 'flex',
                                flexWrap: 'nowrap',
                                columnGap: gap,
                            }}
                        >
                            <Popconfirm
                                placement="topLeft"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button {...btnProps}>TL</Button>
                            </Popconfirm>
                            <Popconfirm
                                placement="top"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button {...btnProps}>Top</Button>
                            </Popconfirm>
                            <Popconfirm
                                placement="topRight"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button {...btnProps}>TR</Button>
                            </Popconfirm>
                        </div>
                        <div
                            style={{
                                width: buttonWidth,
                                float: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: gap,
                            }}
                        >
                            <Popconfirm
                                placement="leftTop"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button>LT</Button>
                            </Popconfirm>
                            <Popconfirm
                                placement="left"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button>Left</Button>
                            </Popconfirm>
                            <Popconfirm
                                placement="leftBottom"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button>LB</Button>
                            </Popconfirm>
                        </div>
                        <div
                            style={{
                                width: buttonWidth,
                                marginLeft: buttonWidth * 4 + 24,
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: gap,
                            }}
                        >
                            <Popconfirm
                                placement="rightTop"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button>RT</Button>
                            </Popconfirm>
                            <Popconfirm
                                placement="right"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button>Right</Button>
                            </Popconfirm>
                            <Popconfirm
                                placement="rightBottom"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button>RB</Button>
                            </Popconfirm>
                        </div>
                        <div
                            style={{
                                marginLeft: buttonWidth,
                                clear: 'both',
                                display: 'flex',
                                flexWrap: 'nowrap',
                                columnGap: gap,
                            }}
                        >
                            <Popconfirm
                                placement="bottomLeft"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button {...btnProps}>BL</Button>
                            </Popconfirm>
                            <Popconfirm
                                placement="bottom"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button {...btnProps}>Bottom</Button>
                            </Popconfirm>
                            <Popconfirm
                                placement="bottomRight"
                                title={text}
                                description={description}
                                onConfirm={confirmPlacement}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button {...btnProps}>BR</Button>
                            </Popconfirm>
                        </div>
                    </Card>
                    <Card title="Customize icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Set <Text type="secondary" code>icon</Text> props to customize the icon.</Text></p>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            icon={
                                <QuestionCircleOutlined
                                    style={{
                                        color: 'red',
                                    }}
                                />
                            }
                        >
                            <Button danger>Delete</Button>
                        </Popconfirm>
                    </Card>
                    <Card title="Asynchronously Close on Promise" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Asynchronously close a popconfirm when the OK button is pressed. For example, you can use this pattern when you submit a form.</Text></p>
                        <Popconfirm
                            title="Title"
                            description="Open Popconfirm with Promise"
                            onConfirm={confirmAsynchronously}
                            onOpenChange={() => console.log('open change')}
                        >
                            <Button type="primary">Open Popconfirm with Promise</Button>
                        </Popconfirm>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Locale text" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Set <Text type="secondary" code>okText</Text> and <Text type="secondary" code>cancelText</Text> props to customize the button's labels.</Text></p>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>Delete</Button>
                        </Popconfirm>
                    </Card>
                    <Card title="Conditional trigger" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Make it pop up under some conditions.</Text></p>
                        <div>
                            <Popconfirm
                                title="Delete the task"
                                description="Are you sure to delete this task?"
                                open={open}
                                onOpenChange={handleOpenChange}
                                onConfirm={confirmConditional}
                                onCancel={cancelConditional}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button danger>Delete a task</Button>
                            </Popconfirm>
                            <br />
                            <br />
                            Whether directly execute：
                            <Switch defaultChecked onChange={changeCondition} />
                        </div>
                    </Card>
                    <Card title="Asynchronously Close" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Asynchronously close a popconfirm when a the OK button is pressed. For example, you can use this pattern when you submit a form.</Text></p>
                        <Popconfirm
                            title="Title"
                            description="Open Popconfirm with async logic"
                            open={openAsynchronouslyClose}
                            onConfirm={handleOk}
                            okButtonProps={{
                                loading: confirmLoading,
                            }}
                            onCancel={handleCancel}
                        >
                            <Button type="primary" onClick={showPopconfirm}>
                                Open Popconfirm with async logic
                            </Button>
                        </Popconfirm>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiPopconfirm
