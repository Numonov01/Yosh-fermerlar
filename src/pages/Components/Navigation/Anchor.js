import React from 'react';
import { Anchor, Card, Col, Row, Typography } from 'antd';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

const UiAnchor = () => {
    // page title
    document.title = "Anchor" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Navigation" pageTitle="Anchor" />

            <Row gutter={[20]}>
                <Col span={24} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The simplest usage.</Text></p>
                        <Row>
                            <Col span={16} style={{ height: '150px', overflow: 'hidden' }}>
                                <div
                                    id="part-1"
                                    style={{
                                        height: '150px',
                                        background: 'rgba(255,0,0,0.02)',
                                    }}
                                />
                                <div
                                    id="part-2"
                                    style={{
                                        height: '150px',
                                        background: 'rgba(0,255,0,0.02)',
                                    }}
                                />
                                <div
                                    id="part-3"
                                    style={{
                                        height: '150px',
                                        background: 'rgba(0,0,255,0.02)',
                                    }}
                                />
                            </Col>
                            <Col span={8}>
                                <Anchor
                                    items={[
                                        {
                                            key: 'part-1',
                                            href: '#part-1',
                                            title: 'Part 1',
                                        },
                                        {
                                            key: 'part-2',
                                            href: '#part-2',
                                            title: 'Part 2',
                                        },
                                        {
                                            key: 'part-3',
                                            href: '#part-3',
                                            title: 'Part 3',
                                        },
                                    ]}
                                />
                            </Col>
                        </Row>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Horizontal Anchor" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Horizontally Aligned Anchors</Text></p>
                        <div
                            style={{
                                padding: '20px',
                            }}
                        >
                            <Anchor
                                direction="horizontal"
                                items={[
                                    {
                                        key: 'part-4',
                                        href: '#part-4',
                                        title: 'Part 4',
                                    },
                                    {
                                        key: 'part-5',
                                        href: '#part-5',
                                        title: 'Part 5',
                                    },
                                    {
                                        key: 'part-6',
                                        href: '#part-6',
                                        title: 'Part 6',
                                    },
                                    {
                                        key: 'part-7',
                                        href: '#part-7',
                                        title: 'Part 7',
                                    },
                                    {
                                        key: 'part-8',
                                        href: '#part-8',
                                        title: 'Part 8',
                                    },
                                    {
                                        key: 'part-9',
                                        href: '#part-9',
                                        title: 'Part 9',
                                    },
                                ]}
                            />
                        </div>
                        <div style={{ height: '150px', overflow: 'hidden' }}>
                            <div
                                id="part-4"
                                style={{
                                    height: '150px',
                                    textAlign: 'center',
                                    background: 'rgba(0,255,0,0.02)',
                                }}
                            />
                            <div
                                id="part-5"
                                style={{
                                    height: '150px',
                                    textAlign: 'center',
                                    background: 'rgba(0,0,255,0.02)',
                                }}
                            />
                            <div
                                id="part-6"
                                style={{
                                    height: '150px',
                                    textAlign: 'center',
                                    background: '#FFFBE9',
                                }}
                            />
                            <div
                                id="part-7"
                                style={{
                                    height: '150px',
                                    textAlign: 'center',
                                    background: '#F4EAD5',
                                }}
                            />
                            <div
                                id="part-8"
                                style={{
                                    height: '150px',
                                    textAlign: 'center',
                                    background: '#DAE2B6',
                                }}
                            />
                            <div
                                id="part-9"
                                style={{
                                    height: '150px',
                                    textAlign: 'center',
                                    background: '#CCD6A6',
                                }}
                            />
                        </div>
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiAnchor
