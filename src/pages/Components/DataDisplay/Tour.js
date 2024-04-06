import React, { useRef, useState } from 'react';
import { Button, Card, Col, Divider, Row, Space, Tour, Typography } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

//tour widgets images
import tourImg from '../../../assets/images/tour.png'

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

const UiTour = () => {
    // page title
    document.title = "Tour" + process.env.REACT_APP_PAGE_TITLE;

    //basic
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const [open, setOpen] = useState(false);
    const steps = [
        {
            title: 'Upload File',
            description: 'Put your files here.',
            cover: (
                <img
                    alt="tour.png"
                    src={tourImg}
                />
            ),
            target: () => ref1.current,
        },
        {
            title: 'Save',
            description: 'Save your changes.',
            target: () => ref2.current,
        },
        {
            title: 'Other Actions',
            description: 'Click to see other actions.',
            target: () => ref3.current,
        },
    ];

    //Placement
    const ref = useRef(null);
    const [open2, setOpen2] = useState(false);
    const steps2 = [
        {
            title: 'Center',
            description: 'Displayed in the center of screen.',
            target: null,
        },
        {
            title: 'Right',
            description: 'On the right of target.',
            placement: 'right',
            target: () => ref.current,
        },
        {
            title: 'Top',
            description: 'On the top of target.',
            placement: 'top',
            target: () => ref.current,
        },
    ];

    //Non Modal
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const [open3, setOpen3] = useState(false);
    const steps3 = [
        {
            title: 'Upload File',
            description: 'Put your files here.',
            cover: (
                <img
                    alt="tour.png"
                    src={tourImg}
                />
            ),
            target: () => ref4.current,
        },
        {
            title: 'Save',
            description: 'Save your changes.',
            target: () => ref5.current,
        },
        {
            title: 'Other Actions',
            description: 'Click to see other actions.',
            target: () => ref6.current,
        },
    ];

    //Custom mask style.
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    const ref9 = useRef(null);
    const [open4, setOpen4] = useState(false);
    const steps4 = [
        {
            title: 'Upload File',
            description: 'Put your files here.',
            cover: (
                <img
                    alt="tour.png"
                    src={tourImg}
                />
            ),
            target: () => ref7.current,
        },
        {
            title: 'Save',
            description: 'Save your changes.',
            target: () => ref8.current,
            mask: {
                style: {
                    boxShadow: 'inset 0 0 15px #fff',
                },
                color: 'rgba(40, 0, 255, .4)',
            },
        },
        {
            title: 'Other Actions',
            description: 'Click to see other actions.',
            target: () => ref9.current,
            mask: false,
        },
    ];

    //Custom indicator
    const ref10 = useRef(null);
    const ref11 = useRef(null);
    const ref12 = useRef(null);
    const [open5, setOpen5] = useState(false);
    const steps5 = [
        {
            title: 'Upload File',
            description: 'Put your files here.',
            target: () => ref10.current,
        },
        {
            title: 'Save',
            description: 'Save your changes.',
            target: () => ref11.current,
        },
        {
            title: 'Other Actions',
            description: 'Click to see other actions.',
            target: () => ref12.current,
        },
    ];

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Tour" />

            <Row gutter={[24]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The most basic usage.</Text></p>
                        <Button type="primary" onClick={() => setOpen(true)}>
                            Begin Tour
                        </Button>

                        <Divider />

                        <Space>
                            <Button ref={ref1}> Upload</Button>
                            <Button ref={ref2} type="primary">
                                Save
                            </Button>
                            <Button ref={ref3} icon={<EllipsisOutlined />} />
                        </Space>

                        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
                    </Card>
                    <Card title="Placement" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Change the placement of the guide relative to the target, there are 12 placements available. When <Text code>target=&#10100;null&#10101;</Text> the guide will show in the center.</Text></p>
                        <Button type="primary" onClick={() => setOpen2(true)} ref={ref}>
                            Begin Tour
                        </Button>

                        <Tour open={open2} onClose={() => setOpen2(false)} steps={steps2} />
                    </Card>
                    <Card title="Custom indicator" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Custom indicator.</Text></p>
                        <Button type="primary" onClick={() => setOpen5(true)}>
                            Begin Tour
                        </Button>
                        <Divider />
                        <Space>
                            <Button ref={ref10}>Upload</Button>
                            <Button ref={ref11} type="primary">
                                Save
                            </Button>
                            <Button ref={ref12} icon={<EllipsisOutlined />} />
                        </Space>
                        <Tour
                            open={open5}
                            onClose={() => setOpen5(false)}
                            steps={steps5}
                            indicatorsRender={(current, total) => (
                                <span>
                                    {current + 1} / {total}
                                </span>
                            )}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Non-modal" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use <Text code>mask=&#10100;false&#10101;</Text> to make Tour non-modal. At the meantime it is recommended to use with type="primary" to emphasize the guide itself.</Text></p>
                        <Button type="primary" onClick={() => setOpen3(true)}>
                            Begin non-modal Tour
                        </Button>

                        <Divider />

                        <Space>
                            <Button ref={ref4}> Upload</Button>
                            <Button ref={ref5} type="primary">
                                Save
                            </Button>
                            <Button ref={ref6} icon={<EllipsisOutlined />} />
                        </Space>

                        <Tour open={open3} onClose3={() => setOpen3(false)} mask={false} type="primary" steps={steps3} />
                    </Card>
                    <Card title="Custom mask style" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Custom mask style.</Text></p>
                        <Button type="primary" onClick={() => setOpen4(true)}>
                            Begin Tour
                        </Button>

                        <Divider />

                        <Space>
                            <Button ref={ref7}> Upload</Button>
                            <Button ref={ref8} type="primary">
                                Save
                            </Button>
                            <Button ref={ref9} icon={<EllipsisOutlined />} />
                        </Space>

                        <Tour
                            open={open4}
                            onClose={() => setOpen4(false)}
                            steps={steps4}
                            mask={{
                                style: {
                                    boxShadow: 'inset 0 0 15px #333',
                                },
                                color: 'rgba(80, 255, 255, .4)',
                            }}
                        />
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiTour
