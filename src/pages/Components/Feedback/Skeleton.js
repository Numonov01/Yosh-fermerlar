import React, { useState } from 'react';
import { Avatar, Button, Card, Col, Divider, Form, List, Radio, Row, Skeleton, Space, Switch, Typography } from 'antd';
import { DotChartOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

//list
const listData = Array.from({
    length: 3,
}).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i + 1}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
    <>
        {React.createElement(icon, {
            style: {
                marginRight: 8,
            },
        })}
        {text}
    </>
);

const UiSkeleton = () => {
    // page title
    document.title = "Skeleton" + process.env.REACT_APP_PAGE_TITLE;

    const [active, setActive] = useState(false);
    const [block, setBlock] = useState(false);
    const [size, setSize] = useState('default');
    const [buttonShape, setButtonShape] = useState('default');
    const [avatarShape, setAvatarShape] = useState('circle');
    const handleActiveChange = (checked) => {
        setActive(checked);
    };
    const handleBlockChange = (checked) => {
        setBlock(checked);
    };
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };
    const handleShapeButton = (e) => {
        setButtonShape(e.target.value);
    };
    const handleAvatarShape = (e) => {
        setAvatarShape(e.target.value);
    };

    //Contains sub component
    const [loading, setLoading] = useState(false);
    const showSkeleton = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    //List
    const [loadingList, setLoadingList] = useState(true);
    const onChange = (checked) => {
        setLoadingList(!checked);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Feedback" pageTitle="Skeleton" />

            <Row gutter={[20]}>
                <Col xs={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Simplest Skeleton usage.</Text></p>
                        <Skeleton />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} xl={12} className="gutter-row">
                    <Card title="Complex Combination" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Complex combination with avatar and multiple paragraphs.</Text></p>
                        <Skeleton
                            avatar
                            paragraph={{
                                rows: 4,
                            }}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} xl={12} className="gutter-row">
                    <Card title="Active Animation" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Display active animation.</Text></p>
                        <Skeleton active />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} xl={12} className="gutter-row">
                    <Card title="Button/Avatar/Input/Image/Node" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Skeleton Button, Avatar, Input, Image and Node.</Text></p>
                        <Space style={{ marginBottom: customStyles.marginXS }}>
                            <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
                            <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
                            <Skeleton.Input active={active} size={size} />
                        </Space>
                        <br />
                        <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} style={{ marginBottom: customStyles.marginXS }} />
                        <br />
                        <Skeleton.Input active={active} size={size} block={block} style={{ marginBottom: customStyles.marginXS }} />
                        <br />
                        <Space style={{ marginBottom: customStyles.marginXS }}>
                            <Skeleton.Image active={active} />
                            <Skeleton.Node active={active}>
                                <DotChartOutlined
                                    style={{
                                        fontSize: 40,
                                        color: '#bfbfbf',
                                    }}
                                />
                            </Skeleton.Node>
                        </Space>
                        <Divider />
                        <Form
                            layout="inline"
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Space size={16} wrap>
                                <Form.Item label="Active">
                                    <Switch checked={active} onChange={handleActiveChange} />
                                </Form.Item>
                                <Form.Item label="Button and Input Block">
                                    <Switch checked={block} onChange={handleBlockChange} />
                                </Form.Item>
                                <Form.Item label="Size">
                                    <Radio.Group value={size} onChange={handleSizeChange}>
                                        <Radio.Button value="default">Default</Radio.Button>
                                        <Radio.Button value="large">Large</Radio.Button>
                                        <Radio.Button value="small">Small</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item label="Button Shape">
                                    <Radio.Group value={buttonShape} onChange={handleShapeButton}>
                                        <Radio.Button value="default">Default</Radio.Button>
                                        <Radio.Button value="square">Square</Radio.Button>
                                        <Radio.Button value="round">Round</Radio.Button>
                                        <Radio.Button value="circle">Circle</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item label="Avatar Shape">
                                    <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
                                        <Radio.Button value="square">Square</Radio.Button>
                                        <Radio.Button value="circle">Circle</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </Space>
                        </Form>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} xl={12} className="gutter-row">
                    <Card title="Contains Sub Component" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Skeleton contains sub component.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                            size={16}
                        >
                            <Skeleton loading={loading}>
                                <h4
                                    style={{
                                        marginBottom: 16,
                                    }}
                                >
                                    Ant Design, a design language
                                </h4>
                                <p>
                                    We supply a series of design principles, practical patterns and high quality design
                                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                                    and efficiently.
                                </p>
                            </Skeleton>
                            <Button onClick={showSkeleton} disabled={loading}>
                                Show Skeleton
                            </Button>
                        </Space>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} xl={12} className="gutter-row">
                    <Card title="List" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use skeleton in list component.</Text></p>
                        <Switch
                            checked={!loadingList}
                            onChange={onChange}
                            style={{
                                marginBottom: 16,
                            }}
                        />
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={listData}
                            renderItem={(item) => (
                                <List.Item
                                    key={item.title}
                                    actions={
                                        !loadingList
                                            ? [
                                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                            ]
                                            : undefined
                                    }
                                    extra={
                                        !loadingList && (
                                            <img
                                                width={272}
                                                alt="logo"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                            />
                                        )
                                    }
                                >
                                    <Skeleton loading={loadingList} active avatar>
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.avatar} />}
                                            title={<a href={item.href}>{item.title}</a>}
                                            description={item.description}
                                        />
                                        {item.content}
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiSkeleton
