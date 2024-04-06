import React, { useState } from 'react';
import { Button, Card, Col, Radio, Row, Timeline, Typography } from 'antd';
import { ClockCircleOutlined, SmileOutlined } from '@ant-design/icons';
import { themecolor } from '../../../config';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

const UiTimeline = () => {
    // page title
    document.title = "Timeline" + process.env.REACT_APP_PAGE_TITLE;

    //Last node and Reversing
    const [reverse, setReverse] = useState(false);
    const handleClick = () => {
        setReverse(!reverse);
    };

    //label
    const [mode, setMode] = useState('left');
    const onChange = (e) => {
        setMode(e.target.value);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Timeline" />

            <Row gutter={[24]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic timeline.</Text></p>
                        <Timeline
                            items={[
                                {
                                    children: 'Create a services site 2015-09-01',
                                },
                                {
                                    children: 'Solve initial network problems 2015-09-01',
                                },
                                {
                                    children: 'Technical testing 2015-09-01',
                                },
                                {
                                    children: 'Network problems being solved 2015-09-01',
                                },
                            ]}
                        />
                    </Card>
                    <Card title="Last Node & Reversing" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">When the timeline is incomplete and ongoing, put a ghost node at last. Set <Text code>pending</Text> as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile, <Text code>pendingDot=&#10100;a React Element&#10101;</Text> is used to customize the dot of the pending item. <Text code>reverse=&#10100;true&#10101;</Text> is used for reversing nodes.</Text></p>
                        <div>
                            <Timeline
                                pending="Recording..."
                                reverse={reverse}
                                items={[
                                    {
                                        children: 'Create a services site 2015-09-01',
                                    },
                                    {
                                        children: 'Solve initial network problems 2015-09-01',
                                    },
                                    {
                                        children: 'Technical testing 2015-09-01',
                                    },
                                ]}
                            />
                            <Button
                                type="primary"
                                style={{
                                    marginTop: 16,
                                }}
                                onClick={handleClick}
                            >
                                Toggle Reverse
                            </Button>
                        </div>
                    </Card>
                    <Card title="Custom" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Set a node as an icon or other custom element.</Text></p>
                        <Timeline
                            items={[
                                {
                                    children: 'Create a services site 2015-09-01',
                                },
                                {
                                    children: 'Solve initial network problems 2015-09-01',
                                },
                                {
                                    dot: <ClockCircleOutlined className="timeline-clock-icon" />,
                                    color: 'red',
                                    children: 'Technical testing 2015-09-01',
                                },
                                {
                                    children: 'Network problems being solved 2015-09-01',
                                },
                            ]}
                        />
                    </Card>
                    <Card title="Label" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use <Text code>label</Text> show time alone.</Text></p>
                        <Radio.Group
                            onChange={onChange}
                            value={mode}
                            style={{
                                marginBottom: 20,
                            }}
                        >
                            <Radio value="left">Left</Radio>
                            <Radio value="right">Right</Radio>
                            <Radio value="alternate">Alternate</Radio>
                        </Radio.Group>
                        <Timeline
                            mode={mode}
                            items={[
                                {
                                    label: '2015-09-01',
                                    children: 'Create a services',
                                },
                                {
                                    label: '2015-09-01 09:12:11',
                                    children: 'Solve initial network problems',
                                },
                                {
                                    children: 'Technical testing',
                                },
                                {
                                    label: '2015-09-01 09:12:11',
                                    children: 'Network problems being solved',
                                },
                            ]}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Color" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Set the color of circles. <Text code>colorSuccess</Text> means completed or success status, <Text code>colorError</Text> means warning or error, and <Text code>colorInfo</Text> means ongoing or other default status, <Text code>colorTextDescription</Text> for unfinished or disabled status.</Text></p>
                        <Timeline
                            items={[
                                {
                                    color: themecolor.token.colorSuccess,
                                    children: 'Create a services site 2015-09-01',
                                },
                                {
                                    color: themecolor.token.colorSuccess,
                                    children: 'Create a services site 2015-09-01',
                                },
                                {
                                    color: themecolor.token.colorError,
                                    children: (
                                        <>
                                            <p>Solve initial network problems 1</p>
                                            <p>Solve initial network problems 2</p>
                                            <p>Solve initial network problems 3 2015-09-01</p>
                                        </>
                                    ),
                                },
                                {
                                    children: (
                                        <>
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </>
                                    ),
                                },
                                {
                                    color: themecolor.token.colorTextDescription,
                                    children: (
                                        <>
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </>
                                    ),
                                },
                                {
                                    color: themecolor.token.colorTextDescription,
                                    children: (
                                        <>
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </>
                                    ),
                                },
                                {
                                    color: themecolor.token.colorInfo,
                                    dot: <SmileOutlined />,
                                    children: <p>Custom color testing</p>,
                                },
                            ]}
                        />
                    </Card>
                    <Card title="Alternate" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Alternate timeline.</Text></p>
                        <Timeline
                            mode="alternate"
                            items={[
                                {
                                    children: 'Create a services site 2015-09-01',
                                },
                                {
                                    children: 'Solve initial network problems 2015-09-01',
                                    color: 'green',
                                },
                                {
                                    dot: (
                                        <ClockCircleOutlined
                                            style={{
                                                fontSize: '10px',
                                            }}
                                        />
                                    ),
                                    children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
                                },
                                {
                                    color: 'red',
                                    children: 'Network problems being solved 2015-09-01',
                                },
                                {
                                    children: 'Create a services site 2015-09-01',
                                },
                                {
                                    dot: (
                                        <ClockCircleOutlined
                                            style={{
                                                fontSize: '10px',
                                            }}
                                        />
                                    ),
                                    children: 'Technical testing 2015-09-01',
                                },
                            ]}
                        />
                    </Card>
                    <Card title="Right alternate" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Right alternate timeline.</Text></p>
                        <Timeline
                            mode="right"
                            items={[
                                {
                                    children: 'Create a services site 2015-09-01',
                                },
                                {
                                    children: 'Solve initial network problems 2015-09-01',
                                },
                                {
                                    dot: (
                                        <ClockCircleOutlined
                                            style={{
                                                fontSize: '16px',
                                            }}
                                        />
                                    ),
                                    color: 'red',
                                    children: 'Technical testing 2015-09-01',
                                },
                                {
                                    children: 'Network problems being solved 2015-09-01',
                                },
                            ]}
                        />
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiTimeline
