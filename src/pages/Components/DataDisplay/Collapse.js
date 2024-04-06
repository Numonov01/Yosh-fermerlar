import React, { useState } from 'react';
import { Card, Col, Collapse, Divider, Row, Select, Space, Typography } from 'antd';
import { CaretRightOutlined, SettingOutlined, } from '@ant-design/icons';
import { themecolor } from '../../../config';

//Breadcrumb
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

const { Option } = Select;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const genExtra = () => (
    <SettingOutlined
        onClick={(event) => {
            // If you don't want click extra trigger collapse, you can prevent this:
            event.stopPropagation();
        }}
    />
);

const items = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
    },
];

//Nested panel
const itemsNest = [
    {
        key: '1',
        label: 'This is panel nest panel',
        children: <p>{text}</p>,
    },
];
const NestedItems = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <Collapse defaultActiveKey="1" items={itemsNest} />,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
    },
];

//Extra node
const extraItems = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
        extra: genExtra(),
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
        extra: genExtra(),
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
        extra: genExtra(),
    },
];


//Custom Panel
const panelStyle = {
    marginBottom: customStyles.margin,
    background: themecolor.token.colorFillAlter,
    borderRadius: themecolor.token.borderRadiusLG,
    border: 'none',
};
const getItems = (panelStyle) => [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
        style: panelStyle,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
        style: panelStyle,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
        style: panelStyle,
    },
];

// no arrow
const NoArrowItems = [
    {
        key: '1',
        label: 'This is panel header with arrow icon',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'This is panel header with no arrow icon',
        children: <p>{text}</p>,
        // showArrow: false,
    },
];

const UiCollapse = () => {
    // page title
    document.title = "Collapse & Accordion" + process.env.REACT_APP_PAGE_TITLE;

    const onChange = (key) => {
        console.log(key);
    };

    const [expandIconPosition, setExpandIconPosition] = useState('start');
    const onPositionChange = (newExpandIconPosition) => {
        setExpandIconPosition(newExpandIconPosition);
    };
    // const genExtra = () => (
    //     <SettingOutlined
    //         onClick={(event) => {
    //             // If you don't want click extra trigger collapse, you can prevent this:
    //             event.stopPropagation();
    //         }}
    //     />
    // );
    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Collapse" />
            <Row gutter={[16]}>
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Collapse" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">By default, any number of panels can be expanded at a time. The first panel is expanded in this example.</Text></p>

                        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Accordion" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">In accordion mode, only one panel can be expanded at a time.</Text></p>

                        <Collapse accordion items={items} />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Nested panel" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary"><Text code>Collapse</Text> is nested inside the <Text code>Collapse</Text>.</Text></p>

                        <Collapse onChange={onChange} items={NestedItems} />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Borderless" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A borderless style of Collapse.</Text></p>
                        <Collapse items={items} bordered={false} defaultActiveKey={['1']} />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Custom Panel" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Customize the background, border, margin styles and icon for each panel.</Text></p>
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            items={getItems(panelStyle)}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="No arrow" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can hide the arrow icon by passing <Text code>showArrow=&#10100;false&#10101;</Text> to <Text code>CollapsePanel</Text> component.</Text></p>

                        <Collapse defaultActiveKey={['1']} onChange={onChange} items={NoArrowItems} />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Extra node" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Render extra element in the top-right corner of each panel.</Text></p>
                        <Collapse
                            defaultActiveKey={['1']}
                            onChange={onChange}
                            expandIconPosition={expandIconPosition}
                            items={extraItems}
                        />
                        <br />
                        <span>Expand Icon Position: </span>
                        <Select
                            value={expandIconPosition}
                            style={{
                                margin: '0 8px',
                            }}
                            onChange={onPositionChange}
                        >
                            <Option value="start">start</Option>
                            <Option value="end">end</Option>
                        </Select>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Collapse Sizes" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Ant Design supports a default collapse size as well as a large and small size. If a large or small collapse is desired, set the <Text code>size</Text> property to either <Text code>large</Text> or <Text code>small</Text> respectively. Omit the <Text code>size</Text> property for a collapse with the default size.</Text></p>

                        <Divider orientation="left">Default Size</Divider>
                        <Collapse
                            items={[
                                {
                                    key: '1',
                                    label: 'This is default size panel header',
                                    children: <p>{text}</p>,
                                },
                            ]}
                        />
                        <Divider orientation="left">Small Size</Divider>
                        <Collapse
                            size="small"
                            items={[
                                {
                                    key: '1',
                                    label: 'This is small size panel header',
                                    children: <p>{text}</p>,
                                },
                            ]}
                        />
                        <Divider orientation="left">Large Size</Divider>
                        <Collapse
                            size="large"
                            items={[
                                {
                                    key: '1',
                                    label: 'This is large size panel header',
                                    children: <p>{text}</p>,
                                },
                            ]}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Ghost Collapse" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Making collapse's background to transparent.</Text></p>
                        <Collapse defaultActiveKey={['1']} ghost items={items} />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Collapsible" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Specify the trigger area of collapsible by <Text code>collapsible</Text>.</Text></p>
                        <Space direction="vertical" style={{width: '100%'}}>
                            <Collapse
                                collapsible="header"
                                defaultActiveKey={['1']}
                                items={[
                                    {
                                        key: '1',
                                        label: 'This panel can only be collapsed by clicking text',
                                        children: <p>{text}</p>,
                                    },
                                ]}
                            />
                            <Collapse
                                collapsible="icon"
                                defaultActiveKey={['1']}
                                items={[
                                    {
                                        key: '1',
                                        label: 'This panel can only be collapsed by clicking icon',
                                        children: <p>{text}</p>,
                                    },
                                ]}
                            />
                            <Collapse
                                collapsible="disabled"
                                items={[
                                    {
                                        key: '1',
                                        label: "This panel can't be collapsed",
                                        children: <p>{text}</p>,
                                    },
                                ]}
                            />
                        </Space>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiCollapse
