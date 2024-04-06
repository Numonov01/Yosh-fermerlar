import React, { useState } from 'react';
import { Avatar, Button, Card, Col, DatePicker, Divider, Drawer, Form, Input, List, Radio, Row, Select, Space, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { themecolor } from '../../../config';
//avatar images
import Avatar1 from '../../../assets/images/users/avatar-1.jpg';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Option } = Select;

const customStyles = usecustomStyles();

const { Text, Link } = Typography;

//Preview drawer
const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

const UiDrawer = () => {
    // page title
    document.title = "Drawer" + process.env.REACT_APP_PAGE_TITLE;

    //basic
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    //Custom Placement
    const [open2, setOpen2] = useState(false);
    const [placement, setPlacement2] = useState('left');
    const showDrawer2 = () => {
        setOpen2(true);
    };
    const onClose2 = () => {
        setOpen2(false);
    };
    const onChange = (e) => {
        setPlacement2(e.target.value);
    };

    //Extra Actions
    const [open3, setOpen3] = useState(false);
    const [placement3, setPlacement3] = useState('right');
    const showDrawer3 = () => {
        setOpen3(true);
    };
    const onChange3 = (e) => {
        setPlacement3(e.target.value);
    };
    const onClose3 = () => {
        setOpen3(false);
    };

    //getContainer
    const [open4, setOpen4] = useState(false);
    const showDrawer4 = () => {
        setOpen4(true);
    };
    const onClose4 = () => {
        setOpen4(false);
    };
    const containerStyle = {
        position: 'relative',
        height: 200,
        padding: 48,
        overflow: 'hidden',
        textAlign: 'center',
        background: themecolor.token.colorFillAlter,
        border: `1px solid ${themecolor.token.colorBorderSecondary}`,
        borderRadius: themecolor.token.borderRadiusLG,
    };

    //Multi-level drawer
    const [open5, setOpen5] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const showDrawer5 = () => {
        setOpen5(true);
    };
    const onClose5 = () => {
        setOpen5(false);
    };
    const showChildrenDrawer = () => {
        setChildrenDrawer(true);
    };
    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };

    //Preset size
    const [openPreset, setOpenPreset] = useState(false);
    const [size, setSize] = useState();
    const showDefaultDrawer = () => {
        setSize('default');
        setOpenPreset(true);
    };
    const showLargeDrawer = () => {
        setSize('large');
        setOpenPreset(true);
    };
    const onClosePreset = () => {
        setOpenPreset(false);
    };

    //Preview drawer
    const [openPreview, setOpenPreview] = useState(false);
    const showDrawerPreview = () => {
        setOpenPreview(true);
    };
    const onClosePreview = () => {
        setOpenPreview(false);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Feedback" pageTitle="Drawer" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic drawer.</Text></p>
                        <Button type="primary" onClick={showDrawer}>
                            Open
                        </Button>
                        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </Card>
                    <Card title="Extra Actions" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Extra actions should be placed at corner of drawer in Ant Design, you can use <Text type="secondary" code>extra</Text> prop for that.</Text></p>
                        <Space>
                            <Radio.Group value={placement3} onChange={onChange3}>
                                <Radio value="top">top</Radio>
                                <Radio value="right">right</Radio>
                                <Radio value="bottom">bottom</Radio>
                                <Radio value="left">left</Radio>
                            </Radio.Group>
                            <Button type="primary" onClick={showDrawer3}>
                                Open
                            </Button>
                        </Space>
                        <Drawer
                            title="Drawer with extra actions"
                            placement={placement3}
                            width={500}
                            onClose={onClose3}
                            open={open3}
                            extra={
                                <Space>
                                    <Button onClick={onClose3}>Cancel</Button>
                                    <Button type="primary" onClick={onClose3}>
                                        OK
                                    </Button>
                                </Space>
                            }
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </Card>
                    <Card title="Submit Form in Drawer" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use a form in Drawer with a submit button.</Text></p>
                        <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                            New account
                        </Button>
                        <Drawer
                            title="Create a new account"
                            width={720}
                            onClose={onClose}
                            open={open}
                            bodyStyle={{
                                paddingBottom: 80,
                            }}
                            extra={
                                <Space>
                                    <Button onClick={onClose}>Cancel</Button>
                                    <Button onClick={onClose} type="primary">
                                        Submit
                                    </Button>
                                </Space>
                            }
                        >
                            <Form layout="vertical" hideRequiredMark>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="name"
                                            label="Name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter user name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Please enter user name" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="url"
                                            label="Url"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter url',
                                                },
                                            ]}
                                        >
                                            <Input
                                                style={{
                                                    width: '100%',
                                                }}
                                                addonBefore="http://"
                                                addonAfter=".com"
                                                placeholder="Please enter url"
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="owner"
                                            label="Owner"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select an owner',
                                                },
                                            ]}
                                        >
                                            <Select placeholder="Please select an owner">
                                                <Option value="xiao">Xiaoxiao Fu</Option>
                                                <Option value="mao">Maomao Zhou</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="type"
                                            label="Type"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please choose the type',
                                                },
                                            ]}
                                        >
                                            <Select placeholder="Please choose the type">
                                                <Option value="private">Private</Option>
                                                <Option value="public">Public</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="approver"
                                            label="Approver"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please choose the approver',
                                                },
                                            ]}
                                        >
                                            <Select placeholder="Please choose the approver">
                                                <Option value="jack">Jack Ma</Option>
                                                <Option value="tom">Tom Liu</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="dateTime"
                                            label="DateTime"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please choose the dateTime',
                                                },
                                            ]}
                                        >
                                            <DatePicker.RangePicker
                                                style={{
                                                    width: '100%',
                                                }}
                                                getPopupContainer={(trigger) => trigger.parentElement}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={24}>
                                        <Form.Item
                                            name="description"
                                            label="Description"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'please enter url description',
                                                },
                                            ]}
                                        >
                                            <Input.TextArea rows={4} placeholder="please enter url description" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </Drawer>
                    </Card>
                    <Card title="Multi-level drawer" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Open a new drawer on top of an existing drawer to handle multi branch tasks.</Text></p>
                        <Button type="primary" onClick={showDrawer5}>
                            Open drawer
                        </Button>
                        <Drawer title="Multi-level drawer" width={520} closable={false} onClose={onClose5} open={open5}>
                            <Button type="primary" onClick={showChildrenDrawer}>
                                Two-level drawer
                            </Button>
                            <Drawer
                                title="Two-level Drawer"
                                width={320}
                                closable={false}
                                onClose={onChildrenDrawerClose}
                                open={childrenDrawer}
                            >
                                This is two-level drawer
                            </Drawer>
                        </Drawer>
                    </Card>
                    <Card title="Preset size" style={{ marginBottom: customStyles.margin, overflowX:'scroll' }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The default width (or height) of Drawer is <Text type="secondary" code>378px</Text>, and there is a preset large size <Text type="secondary" code>736px</Text>.</Text></p>
                        <Space>
                            <Button type="primary" onClick={showDefaultDrawer}>
                                Open Default Size (378px)
                            </Button>
                            <Button type="primary" onClick={showLargeDrawer}>
                                Open Large Size (736px)
                            </Button>
                        </Space>
                        <Drawer
                            title={`${size} Drawer`}
                            placement="right"
                            size={size}
                            onClose={onClosePreset}
                            open={openPreset}
                            extra={
                                <Space>
                                    <Button onClick={onClosePreset}>Cancel</Button>
                                    <Button type="primary" onClick={onClosePreset}>
                                        OK
                                    </Button>
                                </Space>
                            }
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Custom Placement" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The Drawer can appear from any edge of the screen.</Text></p>
                        <Space>
                            <Radio.Group value={placement} onChange={onChange}>
                                <Radio value="top">top</Radio>
                                <Radio value="right">right</Radio>
                                <Radio value="bottom">bottom</Radio>
                                <Radio value="left">left</Radio>
                            </Radio.Group>
                            <Button type="primary" onClick={showDrawer2}>
                                Open
                            </Button>
                        </Space>
                        <Drawer
                            title="Basic Drawer"
                            placement={placement}
                            closable={false}
                            onClose={onClose2}
                            open={open2}
                            key={placement}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </Card>
                    <Card title="Render in current dom" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Render in current dom. custom container, check <Text type="secondary" code>getContainer</Text>.</Text></p>
                        <div style={containerStyle}>
                            Render in this
                            <div
                                style={{
                                    marginTop: 16,
                                }}
                            >
                                <Button type="primary" onClick={showDrawer4}>
                                    Open
                                </Button>
                            </div>
                            <Drawer
                                title="Basic Drawer"
                                placement="right"
                                closable={false}
                                onClose={onClose4}
                                open={open4}
                                getContainer={false}
                            >
                                <p>Some contents...</p>
                            </Drawer>
                        </div>
                    </Card>
                    <Card title="Preview drawer" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use Drawer to quickly preview details of an object, such as those in a list.</Text></p>
                        <List
                            dataSource={[
                                {
                                    id: 1,
                                    name: 'Stephen Bird',
                                },
                                {
                                    id: 2,
                                    name: 'Daniel Gonzalez',
                                },
                            ]}
                            bordered
                            renderItem={(item) => (
                                <List.Item
                                    key={item.id}
                                    actions={[
                                        <Link onClick={showDrawerPreview} key={`a-${item.id}`}>
                                            View Profile
                                        </Link>,
                                    ]}
                                >
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar src={Avatar1} />
                                        }
                                        title={<Link to="#!">{item.name}</Link>}
                                        description="Progresser XTech"
                                    />
                                </List.Item>
                            )}
                        />
                        <Drawer width={640} placement="right" closable={false} onClose={onClosePreview} open={openPreview}>
                            <p
                                className="site-description-item-profile-p"
                                style={{
                                    marginBottom: 24,
                                }}
                            >
                                User Profile
                            </p>
                            <p className="site-description-item-profile-p">Personal</p>
                            <Row>
                                <Col span={12}>
                                    <DescriptionItem title="Full Name" content="Lily" />
                                </Col>
                                <Col span={12}>
                                    <DescriptionItem title="Account" content="AntDesign@example.com" />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <DescriptionItem title="City" content="HangZhou" />
                                </Col>
                                <Col span={12}>
                                    <DescriptionItem title="Country" content="China🇨🇳" />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <DescriptionItem title="Birthday" content="February 2,1900" />
                                </Col>
                                <Col span={12}>
                                    <DescriptionItem title="Website" content="-" />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <DescriptionItem
                                        title="Message"
                                        content="Make things as simple as possible but no simpler."
                                    />
                                </Col>
                            </Row>
                            <Divider />
                            <p className="site-description-item-profile-p">Company</p>
                            <Row>
                                <Col span={12}>
                                    <DescriptionItem title="Position" content="Programmer" />
                                </Col>
                                <Col span={12}>
                                    <DescriptionItem title="Responsibilities" content="Coding" />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <DescriptionItem title="Department" content="XTech" />
                                </Col>
                                <Col span={12}>
                                    <DescriptionItem title="Supervisor" content={<Link>Lin</Link>} />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <DescriptionItem
                                        title="Skills"
                                        content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                                    />
                                </Col>
                            </Row>
                            <Divider />
                            <p className="site-description-item-profile-p">Contacts</p>
                            <Row>
                                <Col span={12}>
                                    <DescriptionItem title="Email" content="AntDesign@example.com" />
                                </Col>
                                <Col span={12}>
                                    <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <DescriptionItem
                                        title="Github"
                                        content={
                                            <Link to="http://github.com/ant-design/ant-design/">
                                                github.com/ant-design/ant-design/
                                            </Link>
                                        }
                                    />
                                </Col>
                            </Row>
                        </Drawer>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiDrawer
