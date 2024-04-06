import React from 'react'
import Breadcrumb from '../../../Common/Breadcrumb';
import { Card, Col, Row, Typography } from 'antd';
import usecustomStyles from '../../../Common/customStyles';
import { Accessibility, Album, AlertCircle, AlertTriangle, AlignJustify, Archive, ArchiveRestore, ArrowDownLeft, ArrowDownRight, ArrowLeftCircle, ArrowRightCircle, ArrowUp, Bell, Bookmark, CheckCheck, CheckCircle2, Chrome, Database, Eye, EyeOff, File, Files, FolderOpen, Heart, Info, Layers, Moon, Pencil, Play, Power, RefreshCcw, RotateCcw, Settings, Share, ShoppingCart, Star, Store, Tag, Tags, Twitter, User2, Video, Wallet, Wrench } from 'lucide-react';


const customStyles = usecustomStyles();

const { Text } = Typography;

const LucideIcon = () => {

    document.title = "Lucide Icon" + process.env.REACT_APP_PAGE_TITLE;

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
                            <div style={{ marginBottom: customStyles.marginSM }}>
                                <Text className="text-muted mb-0">Use <code>&lt;Accessibility /{'>'}</code></Text>
                            </div>
                            <Row gutter={[24]} className="icon-demo-content">
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Accessibility style={{ marginRight: "10px" }} /> Accessibility</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Album style={{ marginRight: "10px" }} /> Album</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><AlertCircle style={{ marginRight: "10px" }} /> AlertCircle</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><AlertTriangle style={{ marginRight: "10px" }} /> AlertTriangle</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><AlignJustify style={{ marginRight: "10px" }} /> AlignJustify</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Archive style={{ marginRight: "10px" }} /> Archive</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><ArchiveRestore style={{ marginRight: "10px" }} /> ArchiveRestore</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><ArrowDownLeft style={{ marginRight: "10px" }} /> ArrowDownLeft</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><ArrowDownRight style={{ marginRight: "10px" }} /> ArrowDownRight</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><ArrowLeftCircle style={{ marginRight: "10px" }} /> ArrowLeftCircle</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}><ArrowRightCircle style={{ marginRight: "10px" }} /> ArrowRightCircle</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><ArrowUp style={{ marginRight: "10px" }} /> ArrowUp</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Bookmark style={{ marginRight: "10px" }} /> Bookmark</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Bell style={{ marginRight: "10px" }} /> Bell</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><CheckCheck style={{ marginRight: "10px" }} /> CheckCheck</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><CheckCircle2 style={{ marginRight: "10px" }} /> CheckCircle2</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Chrome style={{ marginRight: "10px" }} /> Chrome</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Database style={{ marginRight: "10px" }} /> Database</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><EyeOff style={{ marginRight: "10px" }} /> EyeOff</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Eye style={{ marginRight: "10px" }} /> Eye</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><File style={{ marginRight: "10px" }} /> File</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Files style={{ marginRight: "10px" }} /> Files</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><FolderOpen style={{ marginRight: "10px" }} /> FolderOpen</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Heart style={{ marginRight: "10px" }} /> Heart</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Info style={{ marginRight: "10px" }} /> Info</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Layers style={{ marginRight: "10px" }} /> Layers</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Moon style={{ marginRight: "10px" }} /> Moon</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Pencil style={{ marginRight: "10px" }} /> Pencil</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Play style={{ marginRight: "10px" }} /> Play</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Power style={{ marginRight: "10px" }} /> Power</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><RefreshCcw style={{ marginRight: "10px" }} /> RefreshCcw</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><RotateCcw style={{ marginRight: "10px" }} /> RotateCcw</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><ShoppingCart style={{ marginRight: "10px" }} /> ShoppingCart</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Star style={{ marginRight: "10px" }} /> Star</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Store style={{ marginRight: "10px" }} /> Store</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Tags style={{ marginRight: "10px" }} /> Tags</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Tag style={{ marginRight: "10px" }} /> Tag</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Twitter style={{ marginRight: "10px" }} /> Twitter</Text>
                                </Col>

                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><User2 style={{ marginRight: "10px" }} /> User2</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Wallet style={{ marginRight: "10px" }} /> Wallet</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Video style={{ marginRight: "10px" }} /> Video</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Wrench style={{ marginRight: "10px" }} /> Wrench</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Share style={{ marginRight: "10px" }} /> Share</Text>
                                </Col>
                                <Col xl={6} lg={8} sm={12} xs={24}>
                                    <Text type="secondary" style={{ display: "flex", marginBottom: customStyles.marginSM }}
                                    ><Settings style={{ marginRight: "10px" }} /> Settings</Text>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default LucideIcon