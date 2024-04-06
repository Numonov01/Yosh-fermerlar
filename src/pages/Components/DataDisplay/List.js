import React, { useState } from 'react';
import { Avatar, Card, Col, Divider, List, Radio, Row, Space, Typography } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

//import images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
];

const basicData = [
    {
        title: 'Ant Design Title 1',
        userImg: avatar1
    },
    {
        title: 'Ant Design Title 2',
        userImg: avatar2
    },
    {
        title: 'Ant Design Title 3',
        userImg: avatar3
    },
    {
        title: 'Ant Design Title 4',
        userImg: avatar4
    },
];

const data2 = Array.from({
    length: 23,
}).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: avatar1,
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

//pagination position 
const positionOptions = ['top', 'bottom', 'both'];
const alignOptions = ['start', 'center', 'end'];

const UiList = () => {
    // page title
    document.title = "List" + process.env.REACT_APP_PAGE_TITLE;

    //pagination position 
    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="List" />

            <Row gutter={[24]}>
                <Col span={24} className="gutter-row">
                    <Card title="Simple List" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Ant Design supports a default list size as well as a large and small size. If a large or small list is desired, set the size property to either large or small respectively. Omit the size property for a list with the default size. Customizing the header and footer of list by setting <Text code>header</Text> and <Text code>footer</Text> property.</Text></p>
                        <Row gutter={[24]}>
                            <Col xs={24} lg={8} className="gutter-row">
                                <Divider orientation="left">Small Size</Divider>
                                <List
                                    size="small"
                                    header={<div>Header</div>}
                                    footer={<div>Footer</div>}
                                    bordered
                                    dataSource={data}
                                    renderItem={(item) => <List.Item>{item}</List.Item>}
                                />
                            </Col>{/* end col */}
                            <Col xs={24} lg={8} className="gutter-row">
                                <Divider orientation="left">Default Size</Divider>
                                <List
                                    header={<div>Header</div>}
                                    footer={<div>Footer</div>}
                                    bordered
                                    dataSource={data}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                                        </List.Item>
                                    )}
                                />
                            </Col>{/* end col */}
                            <Col xs={24} lg={8} className="gutter-row">
                                <Divider orientation="left">Large Size</Divider>
                                <List
                                    size="large"
                                    header={<div>Header</div>}
                                    footer={<div>Footer</div>}
                                    bordered
                                    dataSource={data}
                                    renderItem={(item) => <List.Item>{item}</List.Item>}
                                />
                            </Col>{/* end col */}
                        </Row>{/* end row */}
                    </Card>
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Basic List" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic list.</Text></p>
                        <List
                            itemLayout="horizontal"
                            dataSource={basicData}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.userImg} />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Vertical" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Set the <Text code>itemLayout</Text> property to <Text code>vertical</Text> to create a vertical list.</Text></p>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }}
                            dataSource={data2}
                            footer={
                                <div>
                                    <b>ant design</b> footer part
                                </div>
                            }
                            renderItem={(item) => (
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                    ]}
                                    extra={
                                        <img
                                            width={272}
                                            alt="logo"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Pagination Settings" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">List pagination can be used and set through the <Text code>pagination</Text> property.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                marginBottom: '20px',
                            }}
                            size="middle"
                        >
                            <Space>
                                <span>Pagination Position:</span>
                                <Radio.Group
                                    optionType="button"
                                    value={position}
                                    onChange={(e) => {
                                        setPosition(e.target.value);
                                    }}
                                >
                                    {positionOptions.map((item) => (
                                        <Radio.Button key={item} value={item}>
                                            {item}
                                        </Radio.Button>
                                    ))}
                                </Radio.Group>
                            </Space>
                            <Space>
                                <span>Pagination Align:</span>
                                <Radio.Group
                                    optionType="button"
                                    value={align}
                                    onChange={(e) => {
                                        setAlign(e.target.value);
                                    }}
                                >
                                    {alignOptions.map((item) => (
                                        <Radio.Button key={item} value={item}>
                                            {item}
                                        </Radio.Button>
                                    ))}
                                </Radio.Group>
                            </Space>
                        </Space>
                        <List
                            pagination={{
                                position,
                                align,
                            }}
                            dataSource={basicData}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar src={item.userImg} />
                                        }
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Responsive Grid List" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Responsive grid list. The size property the is as same as Layout Grid.</Text></p>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 4,
                                lg: 4,
                                xl: 6,
                                xxl: 3,
                            }}
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item>
                                    <Card title={item.title}>Card content</Card>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiList
