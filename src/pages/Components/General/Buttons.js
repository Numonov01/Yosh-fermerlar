import React, { useState } from 'react';
import { Button, Card, Col, Divider, Dropdown, Radio, Row, Space, Tooltip, Typography } from 'antd';
import { DownloadOutlined, PoweroffOutlined, SearchOutlined } from '@ant-design/icons';
import { themecolor } from '../../../config';
import { StyleWarningButton, StyleSuccessButton } from '../../../Common/ButtonsStyle';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

//Dropdown buttons 
const onMenuClick = (e) => {
    console.log('click', e);
};
const items = [
    {
        key: '1',
        label: '1st item',
    },
    {
        key: '2',
        label: '2nd item',
    },
    {
        key: '3',
        label: '3rd item',
    },
];

const UiButtons = () => {
    // page title
    document.title = "Buttons" + process.env.REACT_APP_PAGE_TITLE;

    //buttons sizes
    const [size, setSize] = useState('large'); // default is 'middle'

    //Buttons loadings
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="General" pageTitle="Buttons" />

            <Row gutter={[24, 24]}>
                <Col span={24} className="gutter-row" >
                    <Card title="Buttons Type" style={{ marginBottom: customStyles.margin }}>
                        <p className='ant-mb-3'>There are <Text type="secondary" code>primary</Text> button, <Text type="secondary" code>default</Text> button, <Text type="secondary" code>dashed</Text> button, <Text type="secondary" code>text</Text> button and <Text type="secondary" code>link</Text> button in antd.</p>
                        <Space wrap >
                            <Button type="primary">Primary Button</Button>
                            <Button>Default Button</Button>
                            <Button type="dashed">Dashed Button</Button>
                            <Button type="text">Text Button</Button>
                            <Button type="link">Link Button</Button>
                        </Space>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Icon Buttons">
                        <p className='ant-mb-3'>If you want specific control over the positioning and placement of the <Text type="secondary" code>Icon</Text>, then that should be done by placing the <Text type="secondary" code>Icon</Text> component within the Button rather than using the <Text type="secondary" code>Icon</Text> property.</p>
                        <Row gutter={[16, 24]}>
                            <Col xs={24} md={12} xxl={8} className="gutter-row">
                                <Space wrap>
                                    <Tooltip title="search">
                                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                                    </Tooltip>
                                    <Button type="primary" shape="circle">
                                        A
                                    </Button>
                                    <Button type="primary" icon={<SearchOutlined />}>
                                        Search
                                    </Button>
                                    <Tooltip title="search">
                                        <Button shape="circle" icon={<SearchOutlined />} />
                                    </Tooltip>
                                    <Button icon={<SearchOutlined />}>Search</Button>
                                </Space>
                            </Col>{/* end col */}
                            <Col xs={24} md={12} xxl={8} className="gutter-row">
                                <Space wrap>
                                    <Tooltip title="search">
                                        <Button shape="circle" icon={<SearchOutlined />} />
                                    </Tooltip>
                                    <Button icon={<SearchOutlined />}>Search</Button>
                                    <Tooltip title="search">
                                        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                                    </Tooltip>
                                    <Button type="dashed" icon={<SearchOutlined />}>
                                        Search
                                    </Button>
                                    <Button icon={<SearchOutlined />} href="https://www.google.com" />
                                </Space>
                            </Col>{/* end col */}
                            <Col xs={24} md={12} xxl={8} className="gutter-row">
                                <Space wrap>
                                    <Tooltip title="search">
                                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                                    </Tooltip>
                                    <Button type="primary" shape="circle">
                                        A
                                    </Button>
                                    <Button type="primary" icon={<SearchOutlined />}>
                                        Search
                                    </Button>
                                    <Tooltip title="search">
                                        <Button shape="circle" icon={<SearchOutlined />} />
                                    </Tooltip>
                                    <Button icon={<SearchOutlined />}>Search</Button>
                                </Space>
                            </Col>{/* end col */}
                        </Row>
                    </Card>
                </Col>
                {/* end col */}
                <Col span={24} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Buttons Sizes">
                        <p className='ant-mb-3'>Ant Design supports a default button size as well as a large and small size. If a large or small button is desired, set the <Text type="secondary" code>size</Text> property to either <Text type="secondary" code>large</Text> or <Text type="secondary" code>small</Text> respectively. Omit the size property for a button with the default size.</p>
                        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                            <Radio.Button value="large">Large</Radio.Button>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="small">Small</Radio.Button>
                        </Radio.Group>
                        <Divider orientation="left" plain>
                            Preview
                        </Divider>
                        <Space direction="vertical">
                            <Space wrap>
                                <Button type="primary" size={size}>
                                    Primary
                                </Button>
                                <Button size={size}>Default</Button>
                                <Button type="dashed" size={size}>
                                    Dashed
                                </Button>
                                <Button type="link" size={size}>
                                    Link
                                </Button>
                                <Button type="primary" icon={<DownloadOutlined />} size={size} />
                                <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                                    Download
                                </Button>
                                <Button type="primary" icon={<DownloadOutlined />} size={size}>
                                    Download
                                </Button>
                            </Space>
                        </Space>
                    </Card>
                </Col>
                {/* end col */}
                <Col span={24} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Loading Buttons">
                        <p className='ant-mb-3'>A loading indicator can be added to a button by setting the <Text type="secondary" code>loading</Text> property on the <Text type="secondary" code>Button</Text>.</p>
                        <Row gutter={[16, 24]} a align='middle'>
                            {/* <Col span={12} className="gutter-row">
                                <Space wrap>
                                    <Button type="primary" loading={true}>
                                        Loading
                                    </Button>
                                    <Button type="primary" size="small" loading={true}>
                                        Loading
                                    </Button>
                                    <Button type="primary" icon={<PoweroffOutlined />} loading={true} />
                                </Space>
                            </Col> */}
                            <Col span={12} className="gutter-row">
                                <Space wrap>
                                    <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                                        Click me!
                                    </Button>
                                    <Button
                                        type="primary"
                                        icon={<PoweroffOutlined />}
                                        loading={loadings[1]}
                                        onClick={() => enterLoading(1)}
                                    >
                                        Click me!
                                    </Button>
                                    <Button
                                        type="primary"
                                        icon={<PoweroffOutlined />}
                                        loading={loadings[2]}
                                        onClick={() => enterLoading(2)}
                                    />
                                </Space>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                {/* end col */}
                <Col span={24} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Disabled Buttons">
                        <p className='ant-mb-3'>To mark a button as disabled, add the <Text type="secondary" code>disabled</Text> property to the <Text type="secondary" code>Button</Text>.</p>
                        <Space wrap>
                            <Button type="primary" disabled>
                                Primary(disabled)
                            </Button>
                            <Button disabled>Default(disabled)</Button>
                            <Button type="dashed" disabled>
                                Dashed(disabled)
                            </Button>
                            <Button type="text" disabled>
                                Text(disabled)
                            </Button>
                            <Button type="link" disabled>
                                Link(disabled)
                            </Button>
                            <Button type="primary" href="https://ant.design/index-cn" disabled>
                                Href Primary(disabled)
                            </Button>
                            <Button danger disabled>
                                Danger Default(disabled)
                            </Button>
                            <Button danger type="text" disabled>
                                Danger Text(disabled)
                            </Button>
                            <Button type="link" danger disabled>
                                Danger Link(disabled)
                            </Button>
                            <Button ghost disabled>
                                Ghost(disabled)
                            </Button>
                        </Space>
                    </Card>
                </Col>
                {/* end col */}
                <Col xl={12} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Ghost Buttons">
                        <p className='ant-mb-3'><Text type="secondary" code>ghost</Text> property will make button's background transparent, it is commonly used in colored background.</p>
                        <Space wrap style={{ backgroundColor: themecolor.token.colorTextDisabled, padding: '11px' }}>
                            <Button type="primary" ghost>
                                Primary
                            </Button>
                            <Button ghost>Default</Button>
                            <Button type="dashed" ghost>
                                Dashed
                            </Button>
                            <Button type="primary" danger ghost>
                                Danger
                            </Button>
                        </Space>
                    </Card>
                </Col>
                {/* end col */}
                <Col xl={12} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Multiple Buttons"> 
                        <p className='ant-mb-3'>If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into Dropdown.Button.</p>
                        <Space wrap>
                            <Button type="primary">primary</Button>
                            <Button>secondary</Button>
                            <Dropdown.Button menu={{ items, onClick: onMenuClick }}>Actions</Dropdown.Button>
                        </Space>
                    </Card>
                </Col>
                {/* end col */}
                <Col span={24} xl={12} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Block Button"> 
                        <p className='ant-mb-3'><Text type="secondary" code>block</Text> property will make the button fit to its parent width.</p>
                        <Space direction="vertical"
                            size={15}
                            style={{
                                width: '100%',
                            }}
                        >
                            <Button type="primary" block>
                                Primary
                            </Button>
                            <Button block>Default</Button>
                            <Button type="dashed" block>
                                Dashed
                            </Button>
                            <Button disabled block>
                                disabled
                            </Button>
                            <Button type="text" block>
                                text
                            </Button>
                            <Button type="link" block>
                                Link
                            </Button>
                        </Space>
                    </Card>
                </Col>
                {/* end col */}
                <Col xl={12} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Row gutter={[16, 24]}> 
                        <Col span={24} className="gutter-row">
                            <Card title="Danger Buttons">
                                <p className='ant-mb-3'><Text type="secondary" code>danger</Text> is a property of button after antd 4.0.</p>
                                <Space wrap>
                                    <Button type="primary" danger>
                                        Primary
                                    </Button>
                                    <Button danger>Default</Button>
                                    <Button type="dashed" danger>
                                        Dashed
                                    </Button>
                                    <Button type="text" danger>
                                        Text
                                    </Button>
                                    <Button type="link" danger>
                                        Link
                                    </Button>
                                </Space>
                            </Card>
                        </Col>
                        <Col span={24} className="gutter-row">
                            <Card title="Custom Buttons">
                                <p className='ant-mb-3'>Example of custom buttons.</p>
                                <Space wrap className='ant-mb-3'>
                                    <StyleSuccessButton type="success">
                                        Success
                                    </StyleSuccessButton>
                                    <StyleSuccessButton>Default</StyleSuccessButton>
                                    <StyleSuccessButton type="dashed">
                                        Dashed
                                    </StyleSuccessButton>
                                    <StyleSuccessButton type="text">
                                        Text
                                    </StyleSuccessButton>
                                    <StyleSuccessButton type="link">
                                        Link
                                    </StyleSuccessButton>
                                </Space>
                                <Space wrap>
                                    <StyleWarningButton type="info">
                                        Info
                                    </StyleWarningButton>
                                    <StyleWarningButton>Default</StyleWarningButton>
                                    <StyleWarningButton type="dashed">
                                        Dashed
                                    </StyleWarningButton>
                                    <StyleWarningButton type="text">
                                        Text
                                    </StyleWarningButton>
                                    <StyleWarningButton type="link">
                                        Link
                                    </StyleWarningButton>
                                </Space>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                {/* end col */}
            </Row>
        </>
    )
}

export default UiButtons
