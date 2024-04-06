import React, { useMemo, useRef, useState } from 'react';
import { Button, Checkbox, Card, Col, Divider, Radio, Row, Tabs, Typography, Space } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { themecolor } from '../../../config';
import StickyBox from 'react-sticky-box';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

const onChange = (key) => {
    console.log(key);
};


//Extra content
const CheckboxGroup = Checkbox.Group;
const operations = <Button>Extra Action</Button>;
const OperationsSlot = {
    left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
    right: <Button>Right Extra Action</Button>,
};
const options = ['left', 'right'];
const itemsExtra = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of tab ${id}`,
    };
});

//Card type tab
const onChangeCard = (key) => {
    console.log(key);
};

//Add & close tab
const initialItems = [
    {
        label: 'Tab 1',
        children: 'Content of Tab 1',
        key: '1',
    },
    {
        label: 'Tab 2',
        children: 'Content of Tab 2',
        key: '2',
    },
    {
        label: 'Tab 3',
        children: 'Content of Tab 3',
        key: '3',
        closable: false,
    },
];

//Customized bar of tab
const items2 = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of Tab Pane ${id}`,
        style:
            i === 0
                ? {
                    height: 200,
                }
                : undefined,
    };
});

const UiTabs = () => {
    // page title
    document.title = "Tabs" + process.env.REACT_APP_PAGE_TITLE;

    //Slide Tabs
    const [mode, setMode] = useState('top');
    const handleModeChange = (e) => {
        setMode(e.target.value);
    };

    //Extra content
    const [position, setPosition] = useState(['left', 'right']);
    const slot = useMemo(() => {
        if (position.length === 0) return null;
        return position.reduce(
            (acc, direction) => ({
                ...acc,
                [direction]: OperationsSlot[direction],
            }),
            {},
        );
    }, [position]);

    //Size
    const [size, setSize] = useState('small');
    const onChangeSize = (e) => {
        setSize(e.target.value);
    };

    //position
    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };

    //Add & close tab
    const [activeKey, setActiveKey] = useState(initialItems[0].key);
    const [items, setItems] = useState(initialItems);
    const newTabIndex = useRef(0);
    const onChangeAddClose = (newActiveKey) => {
        setActiveKey(newActiveKey);
    };
    const add = () => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        const newPanes = [...items];
        newPanes.push({
            label: 'New Tab',
            children: 'Content of new Tab',
            key: newActiveKey,
        });
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };
    const remove = (targetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        items.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = items.filter((item) => item.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };
    const onEdit = (targetKey, action) => {
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };

    //Customized bar of tab
    // const {
    //     token: { colorBgContainer },
    // } = theme.useToken();
    const renderTabBar = (props, DefaultTabBar) => (
        <StickyBox
            offsetTop={0}
            offsetBottom={20}
            style={{
                zIndex: 1,
            }}
        >
            <DefaultTabBar
                {...props}
                style={{
                    background: themecolor.token.colorBgContainer,
                }}
            />
        </StickyBox>
    );

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Tabs" />

            <Row gutter={[24]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Default activate first tab.</Text></p>
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Disabled" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Disabled a tab.</Text></p>
                        <Tabs
                            defaultActiveKey="1"
                            items={[
                                {
                                    label: 'Tab 1',
                                    key: '1',
                                    children: 'Tab 1',
                                },
                                {
                                    label: 'Tab 2',
                                    key: '2',
                                    children: 'Tab 2',
                                    disabled: true,
                                },
                                {
                                    label: 'Tab 3',
                                    key: '3',
                                    children: 'Tab 3',
                                },
                            ]}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Centered" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Centered tabs.</Text></p>
                        <Tabs
                            defaultActiveKey="1"
                            centered
                            items={new Array(3).fill(null).map((_, i) => {
                                const id = String(i + 1);
                                return {
                                    label: `Tab ${id}`,
                                    key: id,
                                    children: `Content of Tab Pane ${id}`,
                                };
                            })}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The Tab with Icon.</Text></p>
                        <Tabs
                            defaultActiveKey="2"
                            items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
                                const id = String(i + 1);
                                return {
                                    label: (
                                        <span>
                                            <Icon />
                                            Tab {id}
                                        </span>
                                    ),
                                    key: id,
                                    children: `Tab ${id}`,
                                };
                            })}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Slide" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">In order to fit in more tabs, they can slide left and right (or up and down).</Text></p>
                        <div>
                            <Radio.Group
                                onChange={handleModeChange}
                                value={mode}
                                style={{
                                    marginBottom: customStyles.marginXS,
                                }}
                            >
                                <Radio.Button value="top">Horizontal</Radio.Button>
                                <Radio.Button value="left">Vertical</Radio.Button>
                            </Radio.Group>
                            <Tabs
                                defaultActiveKey="1"
                                tabPosition={mode}
                                style={{
                                    height: 220,
                                }}
                                items={new Array(30).fill(null).map((_, i) => {
                                    const id = String(i);
                                    return {
                                        label: `Tab-${id}`,
                                        key: id,
                                        disabled: i === 28,
                                        children: `Content of tab ${id}`,
                                    };
                                })}
                            />
                        </div>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Extra Content" style={{ marginBottom: customStyles.margin, overflowX: 'auto' }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can add extra actions to the right or left or even both side of Tabs.</Text></p>
                        <Tabs tabBarExtraContent={operations} items={items} />
                        <div style={{ marginTop: customStyles.margin }}>You can also specify its direction or both side</div>
                        <Divider />
                        <CheckboxGroup
                            options={options}
                            value={position}
                            onChange={(value) => {
                                setPosition(value);
                            }}
                        />
                        <Tabs tabBarExtraContent={slot} items={itemsExtra} style={{ marginTop: customStyles.margin }} />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Size" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Large size tabs are usually used in page header, and small size could be used in Modal.</Text></p>
                        <div>
                            <Radio.Group
                                value={size}
                                onChange={onChangeSize}
                                style={{
                                    marginBottom: 16,
                                }}
                            >
                                <Radio.Button value="small">Small</Radio.Button>
                                <Radio.Button value="middle">Middle</Radio.Button>
                                <Radio.Button value="large">Large</Radio.Button>
                            </Radio.Group>
                            <Tabs
                                defaultActiveKey="1"
                                size={size}
                                style={{
                                    marginBottom: 32,
                                }}
                                items={new Array(3).fill(null).map((_, i) => {
                                    const id = String(i + 1);
                                    return {
                                        label: `Tab ${id}`,
                                        key: id,
                                        children: `Content of tab ${id}`,
                                    };
                                })}
                            />
                            <Tabs
                                defaultActiveKey="1"
                                type="card"
                                size={size}
                                items={new Array(3).fill(null).map((_, i) => {
                                    const id = String(i + 1);
                                    return {
                                        label: `Card Tab ${id}`,
                                        key: id,
                                        children: `Content of card tab ${id}`,
                                    };
                                })}
                            />
                        </div>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Position" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Tab's position: left, right, top or bottom. Will auto switch to <Text code>top</Text> in mobile.</Text></p>
                        <Space
                            style={{
                                marginBottom: 24,
                            }}
                        >
                            Tab position:
                            <Radio.Group value={tabPosition} onChange={changeTabPosition}>
                                <Radio.Button value="top">top</Radio.Button>
                                <Radio.Button value="bottom">bottom</Radio.Button>
                                <Radio.Button value="left">left</Radio.Button>
                                <Radio.Button value="right">right</Radio.Button>
                            </Radio.Group>
                        </Space>
                        <Tabs
                            tabPosition={tabPosition}
                            items={new Array(3).fill(null).map((_, i) => {
                                const id = String(i + 1);
                                return {
                                    label: `Tab ${id}`,
                                    key: id,
                                    children: `Content of Tab ${id}`,
                                };
                            })}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Card Type Tab" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Another type of Tabs, which doesn't support vertical mode.</Text></p>
                        <Tabs
                            onChange={onChangeCard}
                            type="card"
                            items={new Array(3).fill(null).map((_, i) => {
                                const id = String(i + 1);
                                return {
                                    label: `Tab ${id}`,
                                    key: id,
                                    children: `Content of Tab Pane ${id}`,
                                };
                            })}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Add & Close Tab" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Only card type Tabs support adding & closable. +Use <Text code>closable=&#10100;false&#10101;</Text> to disable close.</Text></p>
                        <Tabs
                            type="editable-card"
                            onChange={onChangeAddClose}
                            activeKey={activeKey}
                            onEdit={onEdit}
                            items={items}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Customized Bar of Tab" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use react-sticky-box and <Text code>renderTabBar</Text>.</Text></p>
                        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items2} />
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiTabs
