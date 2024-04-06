import React, { useState } from 'react';
import { Card, Col, Rate, Row, Typography } from 'antd';
import { FrownOutlined, HeartOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

//Show copywriting
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

//Customize character
const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
};

const UiRate = () => {
    // page title
    document.title = "Rate" + process.env.REACT_APP_PAGE_TITLE;

    //Show copywriting
    const [value, setValue] = useState(3);

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="Rate" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The simplest usage.</Text></p>
                        <Rate />
                    </Card>{/* end card */}
                    <Card title="Show Copywriting" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add copywriting in rate components.</Text></p>
                        <span>
                            <Rate tooltips={desc} onChange={setValue} value={value} />
                            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                        </span>
                    </Card>{/* end card */}
                    <Card title="Clear Star" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Support set allow to clear star when click again.</Text></p>
                        <Rate defaultValue={3} />
                        <span className="ant-rate-text">allowClear: true</span>
                        <br />
                        <Rate allowClear={false} defaultValue={3} />
                        <span className="ant-rate-text">allowClear: false</span>
                    </Card>{/* end card */}
                    <Card title="Customize Character" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Can customize each character using <Text type="secondary" code>(RateProps) ={'>'} ReactNode</Text>.</Text></p>
                        <Rate defaultValue={2} character={({ index }) => index + 1} />
                        <br />
                        <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Half star" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Support select half star.</Text></p>
                        <Rate allowHalf defaultValue={2.5} />
                    </Card>{/* end card */}
                    <Card title="Read Only" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Read only, can't use mouse to interact.</Text></p>
                        <Rate disabled defaultValue={2} />
                    </Card>{/* end card */}
                    <Card title="Other Character" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.</Text></p>
                        <Rate character={<HeartOutlined />} allowHalf />
                        <br />
                        <Rate
                            character="A"
                            allowHalf
                            style={{
                                fontSize: 36,
                            }}
                        />
                        <br />
                        <Rate character="好" allowHalf />
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiRate
