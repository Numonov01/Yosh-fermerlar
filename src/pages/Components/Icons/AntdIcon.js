import { ArrowLeftOutlined, ArrowRightOutlined, BackwardFilled, BorderBottomOutlined, CarryOutOutlined, CheckCircleFilled, ChromeFilled, ChromeOutlined, CloseCircleFilled, CommentOutlined, CopyFilled, DeleteFilled, DeleteOutlined, DoubleLeftOutlined, DoubleRightOutlined, DownOutlined, DownloadOutlined, EditFilled, EditOutlined, EllipsisOutlined, ExclamationCircleFilled, EyeFilled, EyeInvisibleFilled, EyeOutlined, FacebookFilled, FastBackwardOutlined, FastForwardOutlined, FileFilled, FileOutlined, InfoCircleFilled, LeftCircleFilled, LeftSquareFilled, LinkedinFilled, LoginOutlined, MailFilled, MessageFilled, MoreOutlined, PushpinFilled, RetweetOutlined, RightCircleFilled, RollbackOutlined, SettingFilled, ShopOutlined, ShrinkOutlined, StarFilled, StepBackwardFilled, StepForwardFilled, StepForwardOutlined, StopFilled, StrikethroughOutlined, SwapOutlined, SyncOutlined, ToolFilled, TwitterSquareFilled, UnderlineOutlined, UpCircleOutlined, UpOutlined, VerticalAlignTopOutlined, WarningFilled, WhatsAppOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import usecustomStyles from '../../../Common/customStyles';
import Breadcrumb from '../../../Common/Breadcrumb';

const customStyles = usecustomStyles();

const { Text } = Typography;

const AntdIcon = () => {

    document.title = "Antd Icon" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>

            {/* BreadCrumb */}
            <Breadcrumb mainTitle="Icons" pageTitle="Antd Icons" />

            <div>
                <Row gutter={[24]}>
                    <Col>
                        <div>
                            <h4 style={{ fontSize: customStyles.h5 }} className="card-title">Examples</h4>
                        </div>
                        <Card style={{ marginBottom: customStyles.margin }}>
                            <h3>Outlined Icon</h3>
                            <div style={{ marginBottom: customStyles.marginSM }}>
                                <Text className="text-muted mb-0">Use <code>&lt;StepBackwardOutlined /{'>'}</code></Text>
                            </div>
                            <Row gutter={[24]} className="icon-demo-content">
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><StepForwardOutlined style={{ marginRight: "10px" }} /> StepForwardOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><FastBackwardOutlined style={{ marginRight: "10px" }} /> FastBackwardOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><FastForwardOutlined style={{ marginRight: "10px" }} /> FastForwardOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><ShrinkOutlined style={{ marginRight: "10px" }} /> ShrinkOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><DownOutlined style={{ marginRight: "10px" }} /> DownOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><UpOutlined style={{ marginRight: "10px" }} /> UpOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><DoubleLeftOutlined style={{ marginRight: "10px" }} /> DoubleLeftOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><DoubleRightOutlined style={{ marginRight: "10px" }} /> DoubleRightOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><VerticalAlignTopOutlined style={{ marginRight: "10px" }} /> VerticalAlignTopOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><SwapOutlined style={{ marginRight: "10px" }} /> SwapOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><LoginOutlined style={{ marginRight: "10px" }} /> LoginOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><BorderBottomOutlined style={{ marginRight: "10px" }} /> BorderBottomOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><UnderlineOutlined style={{ marginRight: "10px" }} /> UnderlineOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><StrikethroughOutlined style={{ marginRight: "10px" }} /> StrikethroughOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><EditOutlined style={{ marginRight: "10px" }} /> EditOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><DeleteOutlined style={{ marginRight: "10px" }} /> DeleteOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><WhatsAppOutlined style={{ marginRight: "10px" }} /> WhatsAppOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><ChromeOutlined style={{ marginRight: "10px" }} /> ChromeOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><EllipsisOutlined style={{ marginRight: "10px" }} /> EllipsisOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><EyeOutlined style={{ marginRight: "10px" }} /> EyeOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><MoreOutlined style={{ marginRight: "10px" }} /> MoreOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><SyncOutlined style={{ marginRight: "10px" }} /> SyncOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><DownloadOutlined style={{ marginRight: "10px" }} /> DownloadOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><RollbackOutlined style={{ marginRight: "10px" }} /> RollbackOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><RetweetOutlined style={{ marginRight: "10px" }} /> RetweetOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><ArrowLeftOutlined style={{ marginRight: "10px" }} /> ArrowLeftOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><ArrowRightOutlined style={{ marginRight: "10px" }} /> ArrowRightOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><CarryOutOutlined style={{ marginRight: "10px" }} /> CarryOutOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><CommentOutlined style={{ marginRight: "10px" }} /> CommentOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><FileOutlined style={{ marginRight: "10px" }} /> FileOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><ShopOutlined style={{ marginRight: "10px" }} /> ShopOutlined</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><UpCircleOutlined style={{ marginRight: "10px" }} /> UpCircleOutlined</Text>
                                </Col>
                            </Row>
                        </Card>

                        {/* Filled ICon */}
                        <Card style={{ marginBottom: customStyles.margin }}>
                            <h3>Filled Icon</h3>
                            <div style={{ marginBottom: customStyles.marginSM }}>
                                <Text className="text-muted mb-0">Use <code>&lt;StepBackwardFilled /{'>'}</code></Text>
                            </div>
                            <Row gutter={[24]} className="icon-demo-content">
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><StepBackwardFilled style={{ marginRight: "10px" }} /> StepBackwardFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><StepForwardFilled style={{ marginRight: "10px" }} /> StepForwardFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><LeftCircleFilled style={{ marginRight: "10px" }} /> LeftCircleFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><RightCircleFilled style={{ marginRight: "10px" }} /> RightCircleFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><BackwardFilled style={{ marginRight: "10px" }} /> BackwardFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><LeftSquareFilled style={{ marginRight: "10px" }} /> LeftSquareFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><CheckCircleFilled style={{ marginRight: "10px" }} /> CheckCircleFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><CloseCircleFilled style={{ marginRight: "10px" }} /> CloseCircleFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><ExclamationCircleFilled style={{ marginRight: "10px" }} /> ExclamationCircleFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><InfoCircleFilled style={{ marginRight: "10px" }} /> InfoCircleFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}>
                                        <StopFilled style={{ marginRight: "10px" }} /> StopFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}>
                                        <WarningFilled style={{ marginRight: "10px" }} /> WarningFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><EditFilled style={{ marginRight: "10px" }} /> EditFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><CopyFilled style={{ marginRight: "10px" }} /> CopyFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}>
                                        <DeleteFilled style={{ marginRight: "10px" }} /> DeleteFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}>
                                        <ChromeFilled style={{ marginRight: "10px" }} /> ChromeFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><FacebookFilled style={{ marginRight: "10px" }} /> FacebookFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}>
                                        <LinkedinFilled style={{ marginRight: "10px" }} /> LinkedinFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}>
                                        <EyeFilled style={{ marginRight: "10px" }} /> EyeFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><EyeInvisibleFilled style={{ marginRight: "10px" }} /> EyeInvisibleFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}>
                                        <FileFilled style={{ marginRight: "10px" }} /> FileFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}>
                                        <MailFilled style={{ marginRight: "10px" }} /> MailFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}>
                                        <MessageFilled style={{ marginRight: "10px" }} /> MessageFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><PushpinFilled style={{ marginRight: "10px" }} /> PushpinFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><SettingFilled style={{ marginRight: "10px" }} /> SettingFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><StarFilled style={{ marginRight: "10px" }} /> StarFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><TwitterSquareFilled style={{ marginRight: "10px" }} /> TwitterSquareFilled</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><ToolFilled style={{ marginRight: "10px" }} /> ToolFilled</Text>
                                </Col>

                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default AntdIcon