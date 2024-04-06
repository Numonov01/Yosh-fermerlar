import React, { useState } from 'react';
import { Button, Card, Cascader, Col, ConfigProvider, Divider, Empty, Image, List, Row, Select, Space, Switch, Table, Transfer, TreeSelect, Typography } from 'antd';
import {
    SmileOutlined,
    DownloadOutlined,
    RotateLeftOutlined,
    RotateRightOutlined,
    SwapOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';
import cardSmallImg from '../../../assets/images/small/img-1.jpg';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text, Title } = Typography;

const customizeRenderEmpty = () => (
    <div style={{ textAlign: 'center' }}>
        <SmileOutlined style={{ fontSize: 20 }} />
        <p>Data Not Found</p>
    </div>
);

const src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

const UiEmptyImages = () => {
    // page title
    document.title = "Empty & Images" + process.env.REACT_APP_PAGE_TITLE;

    const [customize, setCustomize] = useState(true);

    //Custom toolbar render
    const onDownload = () => {
        fetch(src)
            .then((response) => response.blob())
            .then((blob) => {
                const url = URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.download = 'image.png';
                document.body.appendChild(link);
                link.click();
                URL.revokeObjectURL(url);
                link.remove();
            });
    };

    //Progressive Loading
    const [random, setRandom] = useState();

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Empty & Images" />
            <Row gutter={[24]}>
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Basic Empty" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Simplest Usage.</Text></p>
                        <Empty />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={12} className="gutter-row">
                    <Card title="Choose image Empty" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can choose another style of <Text code>image</Text> by setting image to <Text code>Empty.PRESENTED_IMAGE_SIMPLE</Text>.</Text></p>
                        <Empty />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} className="gutter-row">
                    <Card title="Customize Empty" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Customize image source, image size, description and extra content.</Text></p>
                        <Empty
                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                            imageStyle={{ height: 60 }}
                            description={
                                <span>
                                    Customize <a href="#!">Description</a>
                                </span>
                            }
                        >
                            <Button type="primary">Create Now</Button>
                        </Empty>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} className="gutter-row">
                    <Card title="ConfigProvider" style={{ marginBottom: customStyles.margin }} extra={
                        <Switch
                            unCheckedChildren="default"
                            checkedChildren="customize"
                            checked={customize}
                            onChange={setCustomize}
                        />
                    }>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use ConfigProvider set global Empty style.</Text></p>
                        <Divider />
                        <ConfigProvider renderEmpty={customize ? customizeRenderEmpty : undefined}>
                            <Row gutter={[24]} style={{overflowX: 'auto'}}>
                                <Col span={5} className="gutter-row">
                                    <h4>Select</h4>
                                    <Select style={{ width: '100%' }} />
                                </Col>
                                <Col span={5} className="gutter-row">
                                    <h4>TreeSelect</h4>
                                    <TreeSelect style={{ width: '100%' }} treeData={[]} />
                                </Col>
                                <Col span={5} className="gutter-row">
                                    <h4>Cascader</h4>
                                    <Cascader style={{ width: '100%' }} options={[]} showSearch />
                                </Col>
                                <Col span={9} className="gutter-row">
                                    <h4>Transfer</h4>
                                    <Transfer />
                                </Col>
                            </Row>
                            <Space direction="vertical" style={{ width: '100%' }}>
                                <h4>Table</h4>
                                <Table
                                    style={{ marginTop: 8 }}
                                    columns={[
                                        { title: 'Name', dataIndex: 'name', key: 'name' },
                                        { title: 'Age', dataIndex: 'age', key: 'age' },
                                    ]}
                                />
                                <h4>List</h4>
                                <List />
                            </Space>
                        </ConfigProvider>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} className="gutter-row">
                    <Card title="No description" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Simplest Usage with no description.</Text></p>
                        <Empty description={false} />
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}

            <Title level={5} style={{ marginBottom: customStyles.margin }}>Images Examples</Title>

            <Row gutter={[24]}>
                <Col xs={24} lg={8} className="gutter-row">
                    <Card title="Basic Usage" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Click the image to zoom in.</Text></p>
                        <Image
                            style={{ maxWidth: '200px' }}
                            src={cardSmallImg}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={8} className="gutter-row">
                    <Card title="Fault tolerant" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Load failed to display image placeholder.</Text></p>
                        <Image
                            width={130}
                            height={130}
                            src={cardSmallImg}
                            fallback="data:image/png;base64,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"
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={8} className="gutter-row">
                    <Card title="Custom toolbar render" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can customize the toolbar and add a button for downloading the original image or downloading the flipped and rotated image.</Text></p>
                        <Image
                            style={{ maxWidth: '200px' }}
                            src={src}
                            preview={{
                                toolbarRender: (
                                    _,
                                    {
                                        transform: { scale },
                                        actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                                    },
                                ) => (
                                    <Space size={12} className="toolbar-wrapper">
                                        <DownloadOutlined onClick={onDownload} />
                                        <SwapOutlined rotate={90} onClick={onFlipY} />
                                        <SwapOutlined onClick={onFlipX} />
                                        <RotateLeftOutlined onClick={onRotateLeft} />
                                        <RotateRightOutlined onClick={onRotateRight} />
                                        <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                                        <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                                    </Space>
                                ),
                            }}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={8} className="gutter-row">
                    <Card title="Custom preview image" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can set different preview image.</Text></p>
                        <Image
                            style={{ maxWidth: '200px' }}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                            preview={{
                                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                            }}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} lg={8} className="gutter-row">
                    <Card title="Progressive Loading" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Progressive when large image loading.</Text></p>
                        <Space size={12}>
                            <Image
                                style={{ maxWidth: '200px' }}
                                src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
                                placeholder={
                                    <Image
                                        preview={false}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                        style={{ maxWidth: '200px' }}
                                    />
                                }
                            />
                            <Button
                                type="primary"
                                onClick={() => {
                                    setRandom(Date.now());
                                }}
                            >
                                Reload
                            </Button>
                        </Space>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiEmptyImages
