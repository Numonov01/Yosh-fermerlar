import React, { useState } from 'react';
import { Avatar, Button, Card, Col, Divider, List, Popover, Row, Steps, Typography, message } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { themecolor } from '../../../config';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text, Link } = Typography;

//basic
const description = 'This is a description.';

//Switch Step
const steps = [
    {
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];

//Customized Dot Style
const customDot = (dot, { status, index }) => (
    <Popover
        content={
            <span>
                step {index} status: {status}
            </span>
        }
    >
        {dot}
    </Popover>
);
const descriptioncustomized = 'You can hover on the dot.';

//Inline Steps
const data = [
    {
        title: 'Ant Design Title 1',
        current: 0,
    },
    {
        title: 'Ant Design Title 2',
        current: 1,
        status: 'error',
    },
    {
        title: 'Ant Design Title 3',
        current: 2,
    },
    {
        title: 'Ant Design Title 4',
        current: 1,
    },
];
const items2 = [
    {
        title: 'Step 1',
        description: 'This is a Step 1.',
    },
    {
        title: 'Step 2',
        description: 'This is a Step 2.',
    },
    {
        title: 'Step 3',
        description: 'This is a Step 3.',
    },
];

const UiSteps = () => {
    // page title
    document.title = "Steps" + process.env.REACT_APP_PAGE_TITLE;
    
    //Switch Step
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: themecolor.token.colorTextTertiary,
        backgroundColor: themecolor.token.colorFillAlter,
        borderRadius: themecolor.token.borderRadiusLG,
        border: `1px dashed ${themecolor.token.colorBorder}`,
        marginTop: 16,
    };
    
    //Clickable
    const [currentClickable, setCurrentClickable] = useState(0);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrentClickable(value);
    };

    //Navigation steps.
    const [currentNavigation, setCurrentNavigation] = useState(0);
    const onChangeNavigation = (value) => {
        console.log('onChangeNavigation:', value);
        setCurrentNavigation(value);
    };
    
    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Navigation" pageTitle="Steps" />

            <Row gutter={[20]}>
                <Col span={24} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The most basic step bar.</Text></p>
                        <Steps
                            current={1}
                            items={[
                                {
                                    title: 'Finished',
                                    description,
                                },
                                {
                                    title: 'In Progress',
                                    description,
                                    subTitle: 'Left 00:00:08',
                                },
                                {
                                    title: 'Waiting',
                                    description,
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Mini Version" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">By setting like this: <Text type='secondary' code>&#10094;Steps size="small"&#10095;</Text>, you can get a mini version.</Text></p>
                        <Steps
                            size="small"
                            current={1}
                            items={[
                                {
                                    title: 'Finished',
                                },
                                {
                                    title: 'In Progress',
                                },
                                {
                                    title: 'Waiting',
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="With Icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can use your own custom icons by setting the property <Text type='secondary' code>icon</Text> for <Text type='secondary' code>items</Text>.</Text></p>
                        <Steps
                            items={[
                                {
                                    title: 'Login',
                                    status: 'finish',
                                    icon: <UserOutlined />,
                                },
                                {
                                    title: 'Verification',
                                    status: 'finish',
                                    icon: <SolutionOutlined />,
                                },
                                {
                                    title: 'Pay',
                                    status: 'process',
                                    icon: <LoadingOutlined />,
                                },
                                {
                                    title: 'Done',
                                    status: 'wait',
                                    icon: <SmileOutlined />,
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Switch Step" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Cooperate with the content and buttons, to represent the progress of a process.</Text></p>
                        <Steps current={current} items={items} />
                        <div style={contentStyle}>{steps[current].content}</div>
                        <div
                            style={{
                                marginTop: 24,
                            }}
                        >
                            {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => next()}>
                                    Next
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                    Done
                                </Button>
                            )}
                            {current > 0 && (
                                <Button
                                    style={{
                                        margin: '0 8px',
                                    }}
                                    onClick={() => prev()}
                                >
                                    Previous
                                </Button>
                            )}
                        </div>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Vertical" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A simple step bar in the vertical direction.</Text></p>
                        <Steps
                            direction="vertical"
                            current={1}
                            items={[
                                {
                                    title: 'Finished',
                                    description,
                                },
                                {
                                    title: 'In Progress',
                                    description,
                                },
                                {
                                    title: 'Waiting',
                                    description,
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Vertical Mini Version" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A simple step bar in the vertical direction.</Text></p>
                        <Steps
                            direction="vertical"
                            size="small"
                            current={1}
                            items={[
                                {
                                    title: 'Finished',
                                    description,
                                },
                                {
                                    title: 'In Progress',
                                    description,
                                },
                                {
                                    title: 'Waiting',
                                    description,
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Error Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">By using <Text type='secondary' code>status</Text> of <Text type='secondary' code>Steps</Text>, you can specify the state for current step.</Text></p>
                        <Steps
                            current={1}
                            status="error"
                            items={[
                                {
                                    title: 'Finished',
                                    description,
                                },
                                {
                                    title: 'In Process',
                                    description,
                                },
                                {
                                    title: 'Waiting',
                                    description,
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Dot Style" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Steps with progress dot style.</Text></p>
                        <Steps
                            progressDot
                            current={1}
                            items={[
                                {
                                    title: 'Finished',
                                    description: 'This is a description.',
                                },
                                {
                                    title: 'In Progress',
                                    description: 'This is a description.',
                                },
                                {
                                    title: 'Waiting',
                                    description: 'This is a description.',
                                },
                            ]}
                        />
                        <Divider />
                        <Steps
                            progressDot
                            current={1}
                            direction="vertical"
                            items={[
                                {
                                    title: 'Finished',
                                    description: 'This is a description. This is a description.',
                                },
                                {
                                    title: 'Finished',
                                    description: 'This is a description. This is a description.',
                                },
                                {
                                    title: 'In Progress',
                                    description: 'This is a description. This is a description.',
                                },
                                {
                                    title: 'Waiting',
                                    description: 'This is a description.',
                                },
                                {
                                    title: 'Waiting',
                                    description: 'This is a description.',
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Customized Dot Style" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can customize the display for Steps with progress dot style.</Text></p>
                        <Steps
                            current={1}
                            progressDot={customDot}
                            items={[
                                {
                                    title: 'Finished',
                                    descriptioncustomized,
                                },
                                {
                                    title: 'In Progress',
                                    descriptioncustomized,
                                },
                                {
                                    title: 'Waiting',
                                    descriptioncustomized,
                                },
                                {
                                    title: 'Waiting',
                                    descriptioncustomized,
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Clickable" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Setting <Text type='secondary' code>onChange</Text> makes Steps clickable.</Text></p>
                        <Steps
                            current={currentClickable}
                            onChange={onChange}
                            items={[
                                {
                                    title: 'Step 1',
                                    description,
                                },
                                {
                                    title: 'Step 2',
                                    description,
                                },
                                {
                                    title: 'Step 3',
                                    description,
                                },
                            ]}
                        />

                        <Divider />

                        <Steps
                            current={currentClickable}
                            onChange={onChange}
                            direction="vertical"
                            items={[
                                {
                                    title: 'Step 1',
                                    description,
                                },
                                {
                                    title: 'Step 2',
                                    description,
                                },
                                {
                                    title: 'Step 3',
                                    description,
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Navigation Steps" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Navigation steps.</Text></p>
                        <Steps
                            type="navigation"
                            size="small"
                            current={currentNavigation}
                            onChange={onChangeNavigation}
                            className="site-navigation-steps"
                            style={{ marginBottom: customStyles.margin }}
                            items={[
                                {
                                    title: 'Step 1',
                                    subTitle: '00:00:05',
                                    status: 'finish',
                                    description: 'This is a description.',
                                },
                                {
                                    title: 'Step 2',
                                    subTitle: '00:01:02',
                                    status: 'process',
                                    description: 'This is a description.',
                                },
                                {
                                    title: 'Step 3',
                                    subTitle: 'waiting for longlong time',
                                    status: 'wait',
                                    description: 'This is a description.',
                                },
                            ]}
                        />
                        <Steps
                            type="navigation"
                            current={currentNavigation}
                            onChange={onChangeNavigation}
                            className="site-navigation-steps"
                            style={{ marginBottom: customStyles.margin }}
                            items={[
                                {
                                    status: 'finish',
                                    title: 'Step 1',
                                },
                                {
                                    status: 'process',
                                    title: 'Step 2',
                                },
                                {
                                    status: 'wait',
                                    title: 'Step 3',
                                },
                                {
                                    status: 'wait',
                                    title: 'Step 4',
                                },
                            ]}
                        />
                        <Steps
                            type="navigation"
                            size="small"
                            current={currentNavigation}
                            onChange={onChangeNavigation}
                            className="site-navigation-steps"
                            items={[
                                {
                                    status: 'finish',
                                    title: 'finish 1',
                                },
                                {
                                    status: 'finish',
                                    title: 'finish 2',
                                },
                                {
                                    status: 'process',
                                    title: 'current process',
                                },
                                {
                                    status: 'wait',
                                    title: 'wait',
                                    disabled: true,
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Steps with Progress" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Steps with progress.</Text></p>
                        <Steps
                            current={1}
                            percent={60}
                            items={[
                                {
                                    title: 'Finished',
                                    description,
                                },
                                {
                                    title: 'In Progress',
                                    subTitle: 'Left 00:00:08',
                                    description,
                                },
                                {
                                    title: 'Waiting',
                                    description,
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Label Placement" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Set labelPlacement to <Text type='secondary' code>vertical</Text>.</Text></p>
                        <Steps current={1} labelPlacement="vertical" items={items} />
                        <br />
                        <Steps current={1} percent={60} labelPlacement="vertical" items={items} />
                        <br />
                        <Steps current={1} size="small" labelPlacement="vertical" items={items} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Inline Steps" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Inline type steps, suitable for displaying the process and current state of the object in the list content scene.</Text></p>
                        <div>
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                                            }
                                            title={<Link to="https://ant.design">{item.title}</Link>}
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                        />
                                        <Steps
                                            style={{
                                                marginTop: 8,
                                            }}
                                            type="inline"
                                            current={item.current}
                                            status={item.status}
                                            items={items2}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiSteps
