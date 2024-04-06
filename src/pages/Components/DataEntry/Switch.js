import React, { useState } from 'react';
import { Button, Card, Col, Row, Space, Switch, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

//Basic
const onChange = (checked) => {
    console.log(`switch to ${checked}`);
};

const UiSwitch = () => {
    // page title
    document.title = "Switch" + process.env.REACT_APP_PAGE_TITLE;

    //Disabled
    const [disabled, setDisabled] = useState(true);
    const toggle = () => {
        setDisabled(!disabled);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="Switch" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The most basic usage.</Text></p>
                        <Switch defaultChecked onChange={onChange} />
                    </Card>{/* end card */}
                    <Card title="Text & icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">With text and icon.</Text></p>
                        <Space direction="vertical">
                            <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
                            <Switch checkedChildren="1" unCheckedChildren="0" />
                            <Switch
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />}
                                defaultChecked
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Loading" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Mark a pending state of switch.</Text></p>
                        <Switch loading defaultChecked />
                        <br />
                        <Switch size="small" loading />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Disabled" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Disabled state of <Text type="secondary" code>Switch</Text>.</Text></p>
                        <Space direction="vertical">
                            <Switch disabled={disabled} defaultChecked style={{ marginBottom: customStyles.marginXXS }} />
                            <Button type="primary" onClick={toggle}>
                                Toggle disabled
                            </Button>
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Two Sizes" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary"><Text type="secondary" code>size="small"</Text> represents a small sized switch.</Text></p>
                        <Switch defaultChecked />
                        <br />
                        <Switch size="small" defaultChecked />
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiSwitch
