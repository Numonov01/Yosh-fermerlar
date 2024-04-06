import React, { useState } from 'react';
import { Avatar, Card, Col, Row, Skeleton, Switch, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { themecolor } from '../../../config';
import Meta from 'antd/es/card/Meta';
import cardSmallImg from '../../../assets/images/small/img-1.jpg';
import userImg1 from '../../../assets/images/users/avatar-1.jpg';
import userImg2 from '../../../assets/images/users/avatar-3.jpg';
import { Link } from 'react-router-dom';

//Breadcrumb
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text, Title } = Typography;

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

// cards tabs 
const tabList = [
    {
        key: 'tab1',
        tab: 'tab1',
    },
    {
        key: 'tab2',
        tab: 'tab2',
    },
];
const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
};
const tabListNoTitle = [
    {
        key: 'article',
        label: 'article',
    },
    {
        key: 'app',
        label: 'app',
    },
    {
        key: 'project',
        label: 'project',
    },
];
const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
};

const Cards = () => {
    // page title
    document.title = "Cards" + process.env.REACT_APP_PAGE_TITLE;

    //tabs cards
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const [activeTabKey2, setActiveTabKey2] = useState('app');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };
    const onTab2Change = (key) => {
        setActiveTabKey2(key);
    };

    //card loading
    const [loading, setLoading] = useState(true);
    const onChange = (checked) => {
        setLoading(!checked);
    };
    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Cards" />

            <Row gutter={[24]}>
                <Col xs={24} className="gutter-row">
                    <Title level={5} style={{ marginBottom: customStyles.marginXXS }}>Basic Example</Title>
                    <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">A basic card containing a title, content and an extra corner content. Supports two sizes: <Text code>default</Text> and <Text code>small</Text>.</Text></p>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={8} className="gutter-row">
                            <Card
                                title="Default size card"
                                extra={<Link to="#">More</Link>}
                                style={{ marginBottom: customStyles.margin }}
                            >
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>{/* end col */}
                        <Col xs={24} md={8} className="gutter-row">
                            <Card
                                size="small"
                                title="Small size card"
                                extra={<Link to="#">More</Link>}
                                style={{ marginBottom: customStyles.margin }}
                            >
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>{/* end col */}
                        <Col xs={24} md={8} className="gutter-row">
                            <Card style={{ marginBottom: customStyles.margin }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>{/* end col */}
                    </Row>{/* end row */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Title level={5} style={{ marginBottom: customStyles.marginXXS }}>Basic Example</Title>
                    <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">A basic card containing a title, content and an extra corner content. Supports two sizes: <Text code>default</Text> and <Text code>small</Text>.</Text></p>
                    <div style={{ backgroundColor: themecolor.token.colorTextPlaceholder, padding: themecolor.token.paddingLG, borderRadius: themecolor.token.borderRadius }}>
                        <Row gutter={[16]}>
                            <Col span={12} className="gutter-row">
                                <Card title="Card title" bordered={false}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </Col>{/* end col */}
                        </Row>{/* end row */}
                    </div>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Title level={5} style={{ marginBottom: customStyles.marginXXS }}>Customized content</Title>
                    <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">You can use <Text code>Card.Meta</Text> to support more flexible content.</Text></p>
                    <Card
                        hoverable
                        style={{ marginBottom: customStyles.margin, width: 240, }}
                        cover={<img alt="example" src={cardSmallImg} />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Title level={5} style={{ marginBottom: customStyles.marginXXS }}>Grid card</Title>
                    <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Grid style card content.</Text></p>
                    <Card title="Card Title" style={{ marginBottom: customStyles.margin }}>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>
                            Content
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Title level={5} style={{ marginBottom: customStyles.marginXXS }}>Card in column</Title>
                    <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Cards usually cooperate with grid column layout in overview page.</Text></p>
                    <div>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={8}>
                                <Card title="Card title" style={{ marginBottom: customStyles.margin }}>
                                    Card content
                                </Card>
                            </Col>
                            <Col xs={24} md={8}>
                                <Card title="Card title" style={{ marginBottom: customStyles.margin }}>
                                    Card content
                                </Card>
                            </Col>
                            <Col xs={24} md={8}>
                                <Card title="Card title" style={{ marginBottom: customStyles.margin }}>
                                    Card content
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Title level={5} style={{ marginBottom: customStyles.marginXXS }}>Inner card</Title>
                    <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">It can be placed inside the ordinary card to display the information of the multilevel structure.</Text></p>
                    <Card title="Card title" style={{ marginBottom: customStyles.margin }}>
                        <Card type="inner" title="Inner Card title" extra={<Link to="#!">More</Link>} style={{ marginBottom: customStyles.margin }}>
                            Inner Card content
                        </Card>
                        <Card
                            type="inner"
                            title="Inner Card title"
                            extra={<a href="#!">More</a>}
                        >
                            Inner Card content
                        </Card>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Title level={5} style={{ marginBottom: customStyles.marginXXS }}>With tabs</Title>
                    <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">More content can be hosted.</Text></p>
                    <Card
                        style={{ marginBottom: customStyles.margin }}
                        title="Card title"
                        extra={<Link to="#">More</Link>}
                        tabList={tabList}
                        activeTabKey={activeTabKey1}
                        onTabChange={onTab1Change}
                    >
                        {contentList[activeTabKey1]}
                    </Card>
                    <Card
                        style={{ marginBottom: customStyles.margin }}
                        tabList={tabListNoTitle}
                        activeTabKey={activeTabKey2}
                        tabBarExtraContent={<Link to="#">More</Link>}
                        onTabChange={onTab2Change}
                    >
                        {contentListNoTitle[activeTabKey2]}
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Switch checked={!loading} onChange={onChange} style={{ float: 'right' }} />
                    <Title level={5} style={{ marginBottom: customStyles.marginXXS }}>Loading card</Title>
                    <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Shows a loading indicator while the contents of the card is being fetched.</Text></p>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={8}>
                            <Card
                                style={{ marginBottom: customStyles.margin }}
                                loading={loading}
                            >
                                <Meta
                                    avatar={<Avatar src={userImg1} />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Col>{/* end col */}
                        <Col xs={24} md={8}>
                            <Card
                                style={{ marginBottom: customStyles.margin }}
                                actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        avatar={<Avatar src={userImg2} />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Skeleton>
                            </Card>
                        </Col>{/* end col */}
                    </Row>{/* end row */}
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Title level={5} style={{ marginBottom: customStyles.marginXXS }}>Support more content configuration</Title>
                    <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">A Card that supports <Text code>cover</Text>, <Text code>avatar</Text>, <Text code>title</Text> and <Text code>description</Text>.</Text></p>
                    <Card
                        style={{ marginBottom: customStyles.margin, maxWidth: '300px' }}
                        cover={
                            <img
                                alt="example"
                                src={cardSmallImg}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={userImg1} />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
            </Row>{/* end row */}
        </>
    )
}

export default Cards