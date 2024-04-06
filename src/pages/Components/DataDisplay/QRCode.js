import React, { useState } from 'react';
import { Button, Card, Col, Input, Popover, QRCode, Row, Segmented, Space, Typography } from 'antd';
import { themecolor } from '../../../config';
import BrandSmLogo from '../../../assets/images/logo-sm.png';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

//Download QRCode
const downloadQRCode = () => {
    const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
    if (canvas) {
        const url = canvas.toDataURL();
        const a = document.createElement('a');
        a.download = 'QRCode.png';
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
};

const src = BrandSmLogo;

const UiQRCode = () => {
    // page title
    document.title = "QRCode" + process.env.REACT_APP_PAGE_TITLE;

    //basic
    const [text, setText] = React.useState('https://themesbrand.com');

    //Error Level
    const [level, setLevel] = useState('L');

    //Custom Size.
    const [size, setSize] = useState(160);
    const increase = () => {
        setSize((prevSize) => {
            const newSize = prevSize + 10;
            if (newSize > 300) {
                return 300;
            }
            return newSize;
        });
    };
    const decline = () => {
        setSize((prevSize) => {
            const newSize = prevSize - 10;
            if (newSize < 48) {
                return 48;
            }
            return newSize;
        });
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="QRCode" />

            <Row gutter={[24]}>
                <Col span={24} xl={6} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic Usage.</Text></p>
                        <Space direction="vertical" align="center">
                            <QRCode value={text || '-'} />
                            <Input
                                placeholder="-"
                                maxLength={60}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </Space>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={6} className="gutter-row">
                    <Card title="Download QRCode" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A way to download QRCode.</Text></p>
                        <div id="myqrcode" style={{textAlign: 'center'}}>
                            <QRCode
                                value="https://themesbrand/lizant"
                                bgColor="#fff"
                                style={{
                                    marginBottom: 16,
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }}
                            />
                            <Button type="primary" onClick={downloadQRCode}>
                                Download
                            </Button>
                        </div>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={6} className="gutter-row">
                    <Card title="Error Level" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">set Error Level.</Text></p>
                        <QRCode
                            style={{
                                marginBottom: 16,
                            }}
                            errorLevel={level}
                            value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        />
                        <Segmented options={['L', 'M', 'Q', 'H']} value={level} onChange={setLevel} />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={6} className="gutter-row">
                    <Card title="Custom Size" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Custom Size.</Text></p>
                        <Button.Group
                            style={{
                                marginBottom: 16,
                            }}
                        >
                            <Button onClick={decline} disabled={size <= 48} icon={<MinusOutlined />}>
                                Smaller
                            </Button>
                            <Button onClick={increase} disabled={size >= 300} icon={<PlusOutlined />}>
                                Larger
                            </Button>
                        </Button.Group>
                        <QRCode
                            errorLevel="H"
                            size={size}
                            iconSize={size / 4}
                            value="https://themesbrand.com"
                            icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={8} className="gutter-row">
                    <Card title="Other Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The status can be controlled by the value <Text code>status</Text>.</Text></p>
                        <Space wrap>
                            <QRCode value="https://themesbrand.com" status="loading" />
                            <QRCode value="https://themesbrand.com" status="expired" onRefresh={() => console.log('refresh')} />
                        </Space>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={8} className="gutter-row">
                    <Card title="Custom Color" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Custom Color.</Text></p>
                        <Space>
                            <QRCode value="https://themesbrand.com" color={themecolor.token.colorSuccess} />
                            <QRCode
                                value="https://themesbrand.com"
                                color={themecolor.token.colorPrimary}
                                bgColor={themecolor.token.colorBgLayout}
                            />
                        </Space>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={8} className="gutter-row">
                    <Card title="Custom Render Type" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Customize the rendering results by <Text code>type</Text>, provide options <Text code>canvas</Text> and <Text code>svg</Text>.</Text></p>
                        <Space>
                            <QRCode type="canvas" value="https://themesbrand.com" />
                            <QRCode type="svg" value="https://themesbrand.com" />
                        </Space>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={6} className="gutter-row">
                    <Card title="With Icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">QRCode with Icon.</Text></p>
                        <QRCode
                            errorLevel="H"
                            value="https://themesbrand/lizant"
                            icon={BrandSmLogo}
                            style={{
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}
                        />
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={6} className="gutter-row">
                    <Card title="Advanced Usage" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">With Popover.</Text></p>
                        <Popover
                            overlayInnerStyle={{
                                padding: 0,
                            }}
                            content={<QRCode value='https://themesbrand.com' bordered={false} />}
                        >
                            <img width={100} height={100} src={src} alt="icon" />
                        </Popover>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiQRCode
