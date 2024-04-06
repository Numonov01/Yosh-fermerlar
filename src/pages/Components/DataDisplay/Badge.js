import React, { useState } from 'react';
import { Avatar, Badge, Button, Card, Col, Divider, Row, Space, Switch, Typography } from 'antd';
import { ClockCircleOutlined, MinusOutlined, PlusOutlined, QuestionOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;
const ButtonGroup = Button.Group;

const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
];

const Badges = () => {
    // page title
    document.title = "Badge" + process.env.REACT_APP_PAGE_TITLE;

    const [show, setShow] = useState(true);

    //Dynamic Components
    const [showDot, setShowDot] = useState(true);
    const [count, setCount] = useState(5);
    const increase = () => {
        setCount(count + 1);
    };
    const decline = () => {
        let newCount = count - 1;
        if (newCount < 0) {
            newCount = 0;
        }
        setCount(newCount);
    };
    const random = () => {
        const newCount = Math.floor(Math.random() * 100);
        setCount(newCount);
    };
    const DynamicOnChange = (checked) => {
        setShowDot(checked);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Badge" />

            <Row gutter={[16, 24]}>
                <Col span={24} lg={12} className="gutter-row">
                    <Card title="Basic Examples" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Simplest Usage. Badge will be hidden when <Text code>count</Text> is <Text code>0</Text>, but we can use <Text code>showZero</Text> to show it.</Text></p>
                        <Space size="middle">
                            <Badge count={5}>
                                <Avatar shape="square" size="large" />
                            </Badge>
                            <Badge count={0} showZero>
                                <Avatar shape="square" size="large" />
                            </Badge>
                            <Badge
                                count={
                                    <ClockCircleOutlined
                                        style={{
                                            color: '#f5222d',
                                        }}
                                    />
                                }
                            >
                                <Avatar shape="square" size="large" />
                            </Badge>
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Dynamic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">The count will be animated as it changes.</Text></p>
                        <Row gutter={[16, 24]}>
                            <Col span={24} lg={12} className="gutter-row">
                                <Space size="large" wrap>
                                    <Badge count={count}>
                                        <Avatar shape="square" size="large" />
                                    </Badge>
                                    <ButtonGroup>
                                        <Button onClick={decline} icon={<MinusOutlined />} />
                                        <Button onClick={increase} icon={<PlusOutlined />} />
                                        <Button onClick={random} icon={<QuestionOutlined />} />
                                    </ButtonGroup>
                                </Space>
                            </Col>
                            <Col span={24} lg={12} className="gutter-row">
                                <Space size="large">
                                    <Badge dot={showDot}>
                                        <Avatar shape="square" size="large" />
                                    </Badge>
                                    <Switch onChange={DynamicOnChange} checked={showDot} />
                                </Space>
                            </Col>
                        </Row>
                    </Card>{/* end card */}
                    <Card title="Red badge" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">This will simply display a red badge, without a specific count. If count equals 0, it won't display the dot.</Text></p>
                        <Space>
                            <Badge dot>
                                <NotificationOutlined
                                    style={{
                                        fontSize: 16,
                                    }}
                                />
                            </Badge>
                            <Badge dot>
                                <Link to="#">Link something</Link>
                            </Badge>
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Clickable" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">The badge can be wrapped with <Text code>a</Text> tag to make it linkable.</Text></p>
                        <Badge count={5} offset={[10, 10]}>
                            <Avatar shape="square" size="large" />
                        </Badge>
                    </Card>{/* end card */}
                    <Card title="Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Standalone badge with status.</Text></p>
                        <Space style={{ marginBottom: customStyles.marginXS }}>
                            <Badge status="success" />
                            <Badge status="error" />
                            <Badge status="default" />
                            <Badge status="processing" />
                            <Badge status="warning" />
                        </Space>
                        <br />
                        <Space direction="vertical">
                            <Badge status="success" text="Success" />
                            <Badge status="error" text="Error" />
                            <Badge status="default" text="Default" />
                            <Badge status="processing" text="Processing" />
                            <Badge status="warning" text="Warning" />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Ribbon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Use ribbon badge.</Text></p>
                        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            <Badge.Ribbon text="Hippies">
                                <Card title="Pushes open the window" size="small">
                                    and raises the spyglass.
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="Hippies" color="pink">
                                <Card title="Pushes open the window" size="small">
                                    and raises the spyglass.
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="Hippies" color="red">
                                <Card title="Pushes open the window" size="small">
                                    and raises the spyglass.
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="Hippies" color="cyan">
                                <Card title="Pushes open the window" size="small">
                                    and raises the spyglass.
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="Hippies" color="green">
                                <Card title="Pushes open the window" size="small">
                                    and raises the spyglass.
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="Hippies" color="purple">
                                <Card title="Pushes open the window" size="small">
                                    and raises the spyglass.
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="Hippies" color="volcano">
                                <Card title="Pushes open the window" size="small">
                                    and raises the spyglass.
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="Hippies" color="magenta">
                                <Card title="Pushes open the window" size="small">
                                    and raises the spyglass.
                                </Card>
                            </Badge.Ribbon>
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}

                <Col span={24} lg={12} className="gutter-row">
                    <Card title="Overflow Count" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary"><Text code>$&#10100;overflowCount&#10101;</Text>+ is displayed when count is larger than <Text code>overflowCount</Text>. The default value of <Text code>overflowCount</Text> is <Text code>99</Text>.</Text></p>
                        <Space size="large">
                            <Badge count={99}>
                                <Avatar shape="square" size="large" />
                            </Badge>
                            <Badge count={100}>
                                <Avatar shape="square" size="large" />
                            </Badge>
                            <Badge count={99} overflowCount={10}>
                                <Avatar shape="square" size="large" />
                            </Badge>
                            <Badge count={1000} overflowCount={999}>
                                <Avatar shape="square" size="large" />
                            </Badge>
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Standalone" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Used in standalone when children is empty.</Text></p>
                        <Space>
                            <Switch checked={show} onChange={() => setShow(!show)} />
                            <Badge count={show ? 11 : 0} showZero color="#faad14" />
                            <Badge count={show ? 25 : 0} />
                            <Badge
                                count={
                                    show ? (
                                        <ClockCircleOutlined
                                            style={{
                                                color: '#f5222d',
                                            }}
                                        />
                                    ) : (
                                        0
                                    )
                                }
                            />
                            <Badge
                                className="site-badge-count-109"
                                count={show ? 109 : 0}
                                style={{
                                    backgroundColor: '#52c41a',
                                }}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Offset Badge" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Set offset of the badge dot, the format is <Text code>[left, top]</Text>, which represents the offset of the status dot from the left and top of the default position.</Text></p>
                        <Badge count={5} offset={[10, 10]}>
                            <Avatar shape="square" size="large" />
                        </Badge>
                    </Card>{/* end card */}
                    <Card title="Size Badge" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Set size of numeral Badge.</Text></p>
                        <Space size="middle">
                            <Badge size="default" count={5}>
                                <Avatar shape="square" size="large" />
                            </Badge>
                            <Badge size="small" count={5}>
                                <Avatar shape="square" size="large" />
                            </Badge>
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Colorful Badge" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.</Text></p>
                        <Divider orientation="left">Presets</Divider>
                        <Space direction="vertical">
                            {colors.map((color) => (
                                <Badge key={color} color={color} text={color} />
                            ))}
                        </Space>
                        <Divider orientation="left">Custom</Divider>
                        <Space direction="vertical">
                            <Badge color="#f50" text="#f50" />
                            <Badge color="rgb(45, 183, 245)" text="rgb(45, 183, 245)" />
                            <Badge color="hsl(102, 53%, 61%)" text="hsl(102, 53%, 61%)" />
                            <Badge color="hwb(205 6% 9%)" text="hwb(205 6% 9%)" />
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>

    )
}

export default Badges
