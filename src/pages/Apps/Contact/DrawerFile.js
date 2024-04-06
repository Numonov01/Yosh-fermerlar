import { EditOutlined, MoreOutlined, PushpinOutlined } from '@ant-design/icons'
import { Button, Drawer, Image, Space, Table, Typography } from 'antd'
import React from 'react'
import usecustomStyles from '../../../Common/customStyles';
import { Link } from 'react-router-dom';
import { StyleWarningButton } from '../../../Common/ButtonsStyle';

const { Text, Title } = Typography;

const customStyles = usecustomStyles();

const DrawerFile = ({ info, isOffcanvas, setIsOffcanvas }) => {

    return (
        <React.Fragment>
            <Drawer
                title={
                    <>
                        <Space size="large" style={{display: "flex", justifyContent: "end", listStyleType: "none"}} className='list-unstyled'>
                            <li>
                                <Link href="#!" style={{color: customStyles.colorInfo}}><PushpinOutlined /></Link>
                            </li>
                            <li>
                                <Link href="#!" style={{color: customStyles.colorSuccess}}><EditOutlined /></Link>
                            </li>
                            <li>
                                <Link href="#!" style={{color: customStyles.colorSecondary}}><MoreOutlined /></Link>
                            </li>
                        </Space>
                        {/* <button type="button" className="btn-close" onClick={() => setIsOffcanvas(false)}></button> */}
                    </>
                }
                placement="right"
                // closable={true}
                onClose={() => setIsOffcanvas(false)}
                open={isOffcanvas}
            >
                <div className="text-center">
                    <div style={{marginBottom: "20px"}}>
                        <Image src={info.img} alt="" style={{ height: "96px", width: "96px", borderRadius: "50%" }} />
                    </div>
                    <Title level={5} style={{marginBottom: '5px'}}>
                        {info.name}
                    </Title>
                    <Text type='secondary' className="overview-location">{info.country}</Text>
                </div>
                <Table
                    size="small"
                    style={{borderBottom: "none", marginBottom: customStyles.margin, marginTop: customStyles.margin}}
                    dataSource={[
                        { label: (<b>Name</b>), value: info.name },
                        { label: (<b>Phone Number</b>), value: info.phone },
                        { label: (<b>Email</b>), value: info.email },
                        { label: (<b>Birthday</b>), value: '19 Nov, 1999' },
                        { label: (<b>Gender</b>), value: 'Male' },
                        { label: (<b>Location</b>), value: info.country },
                        { label: (<b>Label</b>), value: info.label },
                        { label: (<b>Age</b>), value: '25' },
                    ]}
                    columns={[
                        {
                            title: 'Label',
                            dataIndex: 'label',
                            key: 'label',
                        },
                        {
                            title: 'Value',
                            dataIndex: 'value',
                            key: 'value',
                        },
                    ]}
                    showHeader={false}
                    pagination={false}
                />
                <div style={{display: 'flex', gap: '10px'}}>
                    <StyleWarningButton type="info" style={{width: "100%"}}>
                        Audio Call
                    </StyleWarningButton>
                    <Button type="primary" style={{ width: "100%" }}>
                        Video Call
                    </Button>
                </div>
            </Drawer>
        </React.Fragment>
    )
}

export default DrawerFile