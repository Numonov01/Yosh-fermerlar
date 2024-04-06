import React, { useState } from 'react';
import { Button, Card, Col, Progress, Row, Space, Tooltip, Typography } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { themecolor } from '../../../config';
import { red, green } from '@ant-design/colors';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

const UiProgress = () => {
    // page title
    document.title = "Progress" + process.env.REACT_APP_PAGE_TITLE;

    //Dynamic circular progress bar
    const [percent, setPercent] = useState(0);
    const increase = () => {
        setPercent((prevPercent) => {
            const newPercent = prevPercent + 10;
            if (newPercent > 100) {
                return 100;
            }
            return newPercent;
        });
    };
    const decline = () => {
        setPercent((prevPercent) => {
            const newPercent = prevPercent - 10;
            if (newPercent < 0) {
                return 0;
            }
            return newPercent;
        });
    };

    //Dynamic
    const [percentDynamic, setPercentDynamic] = useState(0);
    const increaseDynamic = () => {
        setPercentDynamic((prevPercent) => {
            const newPercent = prevPercent + 10;
            if (newPercent > 100) {
                return 100;
            }
            return newPercent;
        });
    };
    const declineDynamic = () => {
        setPercentDynamic((prevPercent) => {
            const newPercent = prevPercent - 10;
            if (newPercent < 0) {
                return 0;
            }
            return newPercent;
        });
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Feedback" pageTitle="Progress" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Progress Bar" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A standard progress bar.</Text></p>
                        <Progress percent={30} />
                        <Progress percent={50} status="active" />
                        <Progress percent={70} status="exception" />
                        <Progress percent={100} />
                        <Progress percent={50} showInfo={false} />
                    </Card>
                    <Card title="Mini size progress bar" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Appropriate for a narrow area.</Text></p>
                        <div
                            style={{
                                maxWidth: 170,
                            }}
                        >
                            <Progress percent={30} size="small" />
                            <Progress percent={50} size="small" status="active" />
                            <Progress percent={70} size="small" status="exception" />
                            <Progress percent={100} size="small" />
                        </div>
                    </Card>
                    <Card title="Responsive Circular Progress Bar" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Responsive circular progress bar. When <Text type="secondary" code>width</Text> is smaller than 20, progress information will be displayed in Tooltip.</Text></p>
                        <Progress
                            type="circle"
                            trailColor="#e6f4ff"
                            percent={60}
                            strokeWidth={20}
                            size={14}
                            format={(number) => `Progress ${number}%`}
                        />
                        <span
                            style={{
                                marginLeft: customStyles.marginXS,
                            }}
                        >
                            Progress Bar
                        </span>
                    </Card>
                    <Card title="Mini Size Circular Progress Bar" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A smaller circular progress bar.</Text></p>
                        <Space wrap>
                            <Progress type="circle" percent={30} size={80} />
                            <Progress type="circle" percent={70} size={80} status="exception" />
                            <Progress type="circle" percent={100} size={80} />
                        </Space>
                    </Card>
                    <Card title="Dynamic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A dynamic progress bar is better.</Text></p>
                        <Progress percent={percentDynamic} />
                        <Button.Group>
                            <Button onClick={declineDynamic} icon={<MinusOutlined />} />
                            <Button onClick={increaseDynamic} icon={<PlusOutlined />} />
                        </Button.Group>
                    </Card>
                    <Card title="Dashboard" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">By setting <Text type="secondary" code>type=dashboard</Text>, you can get a dashboard style of progress easily. Modify <Text type="secondary" code>gapDegree</Text> to set the degree of gap.</Text></p>
                        <Space wrap>
                            <Progress type="dashboard" percent={75} />
                            <Progress type="dashboard" percent={75} gapDegree={30} />
                        </Space>
                    </Card>
                    <Card title="Stroke Linecap" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">By setting <Text type="secondary" code>strokeLinecap="butt"</Text>, you can change the linecaps from <Text type="secondary" code>round</Text> to <Text type="secondary" code>butt</Text>, see stroke-linecap for more information.</Text></p>
                        <Progress strokeLinecap="butt" percent={75} />
                        <Space wrap>
                            <Progress strokeLinecap="butt" type="circle" percent={75} />
                            <Progress strokeLinecap="butt" type="dashboard" percent={75} />
                        </Space>
                    </Card>
                    <Card title="Progress bar with steps" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A progress bar with steps.</Text></p>
                        <Progress percent={50} steps={3} />
                        <br />
                        <Progress percent={30} steps={5} />
                        <br />
                        <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
                        <br />
                        <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Circular Progress Bar" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A circular progress bar.</Text></p>
                        <Space wrap>
                            <Progress type="circle" percent={75} />
                            <Progress type="circle" percent={70} status="exception" />
                            <Progress type="circle" percent={100} />
                        </Space>
                    </Card>
                    <Card title="Dynamic Circular Progress Bar" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A dynamic progress bar is better.</Text></p>
                        <Progress
                            type="circle"
                            percent={percent}
                            style={{
                                marginRight: 8,
                            }}
                        />
                        <Button.Group>
                            <Button onClick={decline} icon={<MinusOutlined />} />
                            <Button onClick={increase} icon={<PlusOutlined />} />
                        </Button.Group>
                    </Card>
                    <Card title="Custom Text Format" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can set a custom text by setting the format prop.</Text></p>
                        <Space wrap>
                            <Progress type="circle" percent={75} format={(percent) => `${percent} Days`} />
                            <Progress type="circle" percent={100} format={() => 'Done'} />
                        </Space>
                    </Card>
                    <Card title="Progress bar with success segment" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Show several parts of progress with different status.</Text></p>
                        <Tooltip title="3 done / 3 in progress / 4 to do">
                            <Progress
                                percent={60}
                                success={{
                                    percent: 30,
                                }}
                            />
                        </Tooltip>
                        <Space wrap>
                            <Tooltip title="3 done / 3 in progress / 4 to do">
                                <Progress
                                    percent={60}
                                    success={{
                                        percent: 30,
                                    }}
                                    type="circle"
                                />
                            </Tooltip>
                            <Tooltip title="3 done / 3 in progress / 4 to do">
                                <Progress
                                    percent={60}
                                    success={{
                                        percent: 30,
                                    }}
                                    type="dashboard"
                                />
                            </Tooltip>
                        </Space>
                    </Card>
                    <Card title="Custom line gradient" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A package of <Text type="secondary" code>linear-gradient</Text>. It is recommended to only pass two colors.</Text></p>
                        <Progress
                            percent={99.9}
                            strokeColor={{
                                '0%': themecolor.token.colorPrimary,
                                '100%': themecolor.token.colorSuccess,
                            }}
                        />
                        <Progress
                            percent={99.9}
                            status="active"
                            strokeColor={{
                                from: themecolor.token.colorPrimary,
                                to: themecolor.token.colorSuccess,
                            }}
                        />
                        <Space wrap>
                            <Progress
                                type="circle"
                                percent={90}
                                strokeColor={{
                                    '0%': themecolor.token.colorPrimary,
                                    '100%': themecolor.token.colorSuccess,
                                }}
                            />
                            <Progress
                                type="circle"
                                percent={100}
                                strokeColor={{
                                    '0%': themecolor.token.colorPrimary,
                                    '100%': themecolor.token.colorSuccess,
                                }}
                            />
                        </Space>
                    </Card>
                    <Card title="Progress size" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The size of progress.</Text></p>
                        <Space direction="vertical">
                            <Progress percent={50} />
                            <Progress percent={50} size="small" />
                            <Progress percent={50} size={[300, 20]} />
                        </Space>
                        <br />
                        <br />
                        <Space size={30}>
                            <Progress type="circle" percent={50} />
                            <Progress type="circle" percent={50} size="small" />
                            <Progress type="circle" percent={50} size={20} />
                        </Space>
                        <br />
                        <br />
                        <Space size={30}>
                            <Progress type="dashboard" percent={50} />
                            <Progress type="dashboard" percent={50} size="small" />
                            <Progress type="dashboard" percent={50} size={20} />
                        </Space>
                        <br />
                        <br />
                        <Space size={30} wrap>
                            <Progress steps={3} percent={50} />
                            <Progress steps={3} percent={50} size="small" />
                            <Progress steps={3} percent={50} size={20} />
                            <Progress steps={3} percent={50} size={[20, 30]} />
                        </Space>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiProgress
