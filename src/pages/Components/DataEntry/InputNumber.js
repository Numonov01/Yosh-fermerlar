import React, { useState } from 'react';
import { Button, Card, Cascader, Checkbox, Col, InputNumber, Row, Select, Space, Typography } from 'antd';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import { ClockCircleOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

//basic
const onChange = (value) => {
    console.log('changed', value);
};

//Pre / Post tab
const { Option } = Select;

const selectBefore = (
    <Select
        defaultValue="add"
        style={{
            width: 60,
        }}
    >
        <Option value="add">+</Option>
        <Option value="minus">-</Option>
    </Select>
);
const selectAfter = (
    <Select
        defaultValue="USD"
        style={{
            width: 60,
        }}
    >
        <Option value="USD">$</Option>
        <Option value="EUR">€</Option>
        <Option value="GBP">£</Option>
        <Option value="CNY">¥</Option>
    </Select>
);

const UiInputNumber = () => {
    // page title
    document.title = "InputNumber" + process.env.REACT_APP_PAGE_TITLE;

    //Disabled
    const [disabled, setDisabled] = useState(true);
    const toggle = () => {
        setDisabled(!disabled);
    };

    //Keyboard
    const [keyboard, setKeyboard] = useState(true);

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="InputNumber" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Numeric-only input box.</Text></p>
                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                    </Card>{/* end card */}
                    <Card title="Pre / Post tab" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Using pre & post tabs example.</Text></p>
                        <Space direction="vertical">
                            <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
                            <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
                            <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
                            <InputNumber
                                addonBefore={
                                    <Cascader
                                        placeholder="cascader"
                                        style={{
                                            width: 150,
                                        }}
                                    />
                                }
                                defaultValue={100}
                            />
                            <InputNumber
                                addonBefore="+"
                                addonAfter={<SettingOutlined />}
                                defaultValue={100}
                                disabled
                                controls
                            />
                            <InputNumber
                                prefix="¥"
                                addonBefore="+"
                                addonAfter={<SettingOutlined />}
                                defaultValue={100}
                                disabled
                                controls
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="High Precision Decimals" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use <Text type="secondary" code>stringMode</Text> to support high precision decimals support. <Text type="secondary" code>onChange</Text> will return string value instead. You need polyfill of BigInt if browser not support.</Text></p>
                        <InputNumber
                            style={{
                                width: '100%',
                            }}
                            defaultValue="1"
                            min="0"
                            max="10"
                            step="0.00000000000001"
                            onChange={onChange}
                            stringMode
                        />
                    </Card>{/* end card */}
                    <Card title="Keyboard" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Control keyboard behavior by <Text type="secondary" code>keyboard</Text>.</Text></p>
                        <Space>
                            <InputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />
                            <Checkbox
                                onChange={() => {
                                    setKeyboard(!keyboard);
                                }}
                                checked={keyboard}
                            >
                                Toggle keyboard
                            </Checkbox>
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add status to InputNumber with <Text type="secondary" code>status</Text>, which could be <Text type="secondary" code>error</Text> or <Text type="secondary" code>warning</Text>.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <InputNumber
                                status="error"
                                style={{
                                    width: '100%',
                                }}
                            />
                            <InputNumber
                                status="warning"
                                style={{
                                    width: '100%',
                                }}
                            />
                            <InputNumber
                                status="error"
                                style={{
                                    width: '100%',
                                }}
                                prefix={<ClockCircleOutlined />}
                            />
                            <InputNumber
                                status="warning"
                                style={{
                                    width: '100%',
                                }}
                                prefix={<ClockCircleOutlined />}
                            />
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Sizes" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">There are three sizes available to a numeric input box. By default, the size is <Text type="secondary" code>32px</Text>. The two additional sizes are <Text type="secondary" code>large</Text> and <Text type="secondary" code>small</Text> which means <Text type="secondary" code>40px</Text> and <Text type="secondary" code>24px</Text>, respectively.</Text></p>
                        <Space>
                            <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
                            <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
                            <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Disabled" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Click the button to toggle between available and disabled states.</Text></p>
                        <InputNumber min={1} max={10} disabled={disabled} defaultValue={3} />
                        <div
                            style={{
                                marginTop: customStyles.marginXS
                            }}
                        >
                            <Button onClick={toggle} type="primary">
                                Toggle disabled
                            </Button>
                        </div>
                    </Card>{/* end card */}
                    <Card title="Formatter" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Display value within it's situation with <Text type="secondary" code>formatter</Text>, and we usually use <Text type="secondary" code>parser</Text> at the same time.</Text></p>
                        <Space>
                            <InputNumber
                                defaultValue={1000}
                                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChange}
                            />
                            <InputNumber
                                defaultValue={100}
                                min={0}
                                max={100}
                                formatter={(value) => `${value}%`}
                                parser={(value) => value.replace('%', '')}
                                onChange={onChange}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Borderless" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">No border.</Text></p>
                        <InputNumber min={1} max={10} defaultValue={3} bordered={false} />
                    </Card>{/* end card */}
                    <Card title="Prefix" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add a prefix inside input.</Text></p>
                        <InputNumber
                            prefix="￥"
                            style={{
                                width: '100%',
                            }}
                        />
                        <br />
                        <br />
                        <InputNumber
                            addonBefore={<UserOutlined />}
                            prefix="￥"
                            style={{
                                width: '100%',
                            }}
                        />
                        <br />
                        <br />
                        <InputNumber
                            prefix="￥"
                            disabled
                            style={{
                                width: '100%',
                            }}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end rowe */}

        </>
    )
}

export default UiInputNumber
