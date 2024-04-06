import React from 'react'
import Breadcrumb from '../../../Common/Breadcrumb';
import { Button, Card, Col, Dropdown, Input, Pagination, Progress, Row, Space, Tag, Typography } from 'antd';
import { themecolor } from '../../../config';
import { MoreHorizontal, Pen, Search, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { basicTeamData, teamtab } from '../../../Common/data';
import usecustomStyles from '../../../Common/customStyles';
import { styled } from 'styled-components';

const customStyles = usecustomStyles();

const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const { Text } = Typography;

const itemsTrigger = [
    { label: "1st menu item", key: "0", },
    { label: "2nd menu item", key: "1", },
    { label: "3rd menu item", key: "3", },
];
const drop = [
    { label: <span><Pen size={12} /> Edit</span>, key: "1", },
    { label: <span><Trash2 size={12} /> Remove</span>, key: "2" }
]

const TeamPage = () => {

    document.title = "Team" + process.env.REACT_APP_PAGE_TITLE;

    // const bookmark = (ele) => {
    //     let btn = ele.target.closest("button")
    //     if (btn.classList.contains("active")) {
    //         btn.classList.remove("active")
    //     } else {
    //         btn.classList.add("active")
    //     }
    // }

    return (
        <React.Fragment>

            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Pages" pageTitle="Team" />

            <Row gutter={[24]}>
                <Col lg={24} xl={24}>
                    <Card style={{ marginBottom: customStyles.margin }} >
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="search-box" style={{ position: "relative" }}>
                                <Input type="text" placeholder="Search for name or designation..." style={{ paddingLeft: "40px" }}
                                // onChange={(e) => searchTeamMember(e)}
                                />
                                <Search style={{ position: "absolute", left: "10px", top: "10px" }} size={14} />
                            </div>
                            <div>
                                <Button type='primary'>Add Member</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row gutter={[24]} style={{ display: "flex", justifyContent: "space-between" }}>
                {teamtab.map((item, key) => (
                    <Col xs={24} xl={6} key={key}>
                        <Card style={{ marginBottom: customStyles.margin, position:'relative'}} >
                            <>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Dropdown menu={{ items: itemsTrigger }} trigger={["click"]}>
                                        <Link onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <MoreHorizontal size={15} style={{ justifyContent: "flex-end" }} />
                                            </Space>
                                        </Link>
                                    </Dropdown>
                                </div>

                                <div style={{ display: "flex", justifyContent: "center" }}>

                                    <div>
                                        <img src={item.img} alt="" style={{ height: "72px", width: "72px", borderRadius: "5px", marginBottom: customStyles.margin }} />
                                    </div>
                                </div>
                                <div className="text-center" style={{ marginBottom: customStyles.margin }}>
                                    <Link>
                                        <div>
                                            <Text style={{ fontSize: "17px" }}>{item.name}</Text>
                                        </div>
                                        <div>
                                            <TextMuted>{item.userName}</TextMuted>
                                        </div>
                                    </Link>
                                    <Tag bordered={false} color="success" style={{ marginTop: customStyles.marginSM }}>
                                        {item.position}
                                    </Tag>
                                </div>
                                <div>
                                    <Progress percent={item.progress} size="small" showInfo={false} />
                                </div>
                                <Row style={{ marginTop: customStyles.marginSM, textAlign: "center", display: "flex", justifyContent: "space-around" }}>
                                    <Col style={{ borderRight: "1px dashed #eff2f7", borderRightStyle: "dashed", padding:'0 24px' }}>
                                        <Text style={{ marginBottom: customStyles.marginXXS, fontSize: customStyles.h4 }}>{item.projects}</Text>
                                        <p style={{ marginTop: '10px', marginBottom:'0', color: themecolor.token.textMuted }}>Projects</p>
                                    </Col>
                                    <Col style={{ borderRight: "1px dashed #eff2f7", borderRightStyle: "dashed",  padding:'0 24px' }}>
                                        <Text style={{ marginBottom: customStyles.marginXXS, fontSize: customStyles.h4 }}>{item.overdue}</Text>
                                        <p style={{ marginTop: '10px', marginBottom:'0', color: themecolor.token.textMuted }}>Overdue</p>
                                    </Col>
                                    <Col style={{ padding:'0 24px'}}>
                                        <Text style={{ marginBottom: customStyles.marginXXS, fontSize: customStyles.h4 }}>{item.tasks}</Text>
                                        <p style={{ marginTop: '10px', marginBottom:'0', color: themecolor.token.textMuted }}>Tasks</p>
                                    </Col>
                                </Row>
                            </>
                        </Card>
                    </Col>
                ))}

                <Col span={24}>
                    <Pagination defaultCurrent={1} total={50} style={{ marginBottom: customStyles.margin, float: "right" }} />
                </Col>
            </Row>

            {/* Basic Example */}
            <Row style={{ marginBottom: customStyles.margin }}>
                <Col lg={12}>
                    <Text style={{ fontSize: "16px" }}>Basic Example</Text>
                </Col>
            </Row>

            <Row style={{ display: "flex", justifyContent: "space-between", marginBottom: customStyles.margin }} gutter={[24]}>
                {basicTeamData.map((item, key) => (
                    <Col key={key} xs={24} sm={12} md={8} lg={6}>
                        <Card style={{position:'relative', marginBottom: customStyles.margin,}}>
                            <Row>
                                <div style={{ position:'absolute', top:'16px', right:'16px' }}>
                                    <Dropdown menu={{ items: drop }} trigger={["click"]}>
                                        <Link onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <MoreHorizontal size={15} style={{ justifyContent: "flex-end" }} />
                                            </Space>
                                        </Link>
                                    </Dropdown>
                                </div>

                            </Row>
                            <div className="text-center">
                                <img src={item.img} alt="" style={{ height: "72px", width: "72px", borderRadius: "5px", marginBottom: customStyles.margin }} />
                            </div>
                            <div className="text-center">
                                <Text style={{ fontSize: "17px" }}>{item.name}</Text>
                                <p style={{ color: themecolor.token.textMuted }}>{item.email}</p>
                            </div>
                        </Card>
                    </Col>))}
            </Row>

        </React.Fragment>
    )
}

export default TeamPage