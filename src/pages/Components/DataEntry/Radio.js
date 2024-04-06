import React, { useState } from 'react';
import { Button, Card, Col, Input, Radio, Row, Space, Typography } from 'antd';
//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

//Radio.Group group - optional
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    {
        label: 'Apple',
        value: 'Apple',
    },
    {
        label: 'Pear',
        value: 'Pear',
    },
    {
        label: 'Orange',
        value: 'Orange',
    },
];
const optionsWithDisabled = [
    {
        label: 'Apple',
        value: 'Apple',
    },
    {
        label: 'Pear',
        value: 'Pear',
    },
    {
        label: 'Orange',
        value: 'Orange',
        disabled: true,
    },
];

//radio style
const onChangeRadio = (e) => {
    console.log(`radio checked:${e.target.value}`);
};

const UiRadio = () => {
    // page title
    document.title = "Radio" + process.env.REACT_APP_PAGE_TITLE;

    //Disabled
    const [disabled, setDisabled] = useState(true);
    const toggleDisabled = () => {
        setDisabled(!disabled);
    };

    //Radio Group
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    //Radio.Group group - optional
    const [value1, setValue1] = useState('Apple');
    const [value2, setValue2] = useState('Apple');
    const [value3, setValue3] = useState('Apple');
    const [value4, setValue4] = useState('Apple');
    const onChange1 = ({ target: { value } }) => {
        console.log('radio1 checked', value);
        setValue1(value);
    };
    const onChange2 = ({ target: { value } }) => {
        console.log('radio2 checked', value);
        setValue2(value);
    };
    const onChange3 = ({ target: { value } }) => {
        console.log('radio3 checked', value);
        setValue3(value);
    };
    const onChange4 = ({ target: { value } }) => {
        console.log('radio4 checked', value);
        setValue4(value);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="Radio" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The simplest use.</Text></p>
                        <Radio>Radio</Radio>
                    </Card>{/* end card */}
                    <Card title="Radio Group" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A group of radio components.</Text></p>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>A</Radio>
                            <Radio value={2}>B</Radio>
                            <Radio value={3}>C</Radio>
                            <Radio value={4}>D</Radio>
                        </Radio.Group>
                    </Card>{/* end card */}
                    <Card title="Radio.Group Group - Optional" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Render radios by configuring <Text type="secondary" code>options</Text>. Radio type can also be set through the <Text type="secondary" code>optionType</Text> parameter.</Text></p>
                        <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
                        <br />
                        <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
                        <br />
                        <br />
                        <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
                        <br />
                        <br />
                        <Radio.Group
                            options={optionsWithDisabled}
                            onChange={onChange4}
                            value={value4}
                            optionType="button"
                            buttonStyle="solid"
                        />
                    </Card>{/* end card */}
                    <Card title="Radio.Group with Name" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Passing the <Text type="secondary" code>name</Text> property to all <Text type="secondary" code>input[type="radio"]</Text> that are in the same Radio.Group. It is usually used to let the browser see your Radio.Group as a real "group" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same Radio.Group.</Text></p>
                        <Radio.Group name="radiogroup" defaultValue={1}>
                            <Radio value={1}>A</Radio>
                            <Radio value={2}>B</Radio>
                            <Radio value={3}>C</Radio>
                            <Radio value={4}>D</Radio>
                        </Radio.Group>
                    </Card>{/* end card */}
                    <Card title="Solid Radio Button" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Solid radio button style.</Text></p>
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                            <Radio.Button value="a">Hangzhou</Radio.Button>
                            <Radio.Button value="b">Shanghai</Radio.Button>
                            <Radio.Button value="c">Beijing</Radio.Button>
                            <Radio.Button value="d">Chengdu</Radio.Button>
                        </Radio.Group>
                        <Radio.Group
                            defaultValue="c"
                            buttonStyle="solid"
                            style={{
                                marginTop: 16,
                            }}
                        >
                            <Radio.Button value="a">Hangzhou</Radio.Button>
                            <Radio.Button value="b" disabled>
                                Shanghai
                            </Radio.Button>
                            <Radio.Button value="c">Beijing</Radio.Button>
                            <Radio.Button value="d">Chengdu</Radio.Button>
                        </Radio.Group>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Disabled" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Radio unavailable.</Text></p>
                        <Radio defaultChecked={false} disabled={disabled}>
                            Disabled
                        </Radio>
                        <Radio defaultChecked disabled={disabled}>
                            Disabled
                        </Radio>
                        <br />
                        <Button
                            type="primary"
                            onClick={toggleDisabled}
                            style={{
                                marginTop: 16,
                            }}
                        >
                            Toggle disabled
                        </Button>
                    </Card>{/* end card */}
                    <Card title="Vertical Radio.Group" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Vertical Radio.Group, with more radios.</Text></p>
                        <Radio.Group onChange={onChange} value={value}>
                            <Space direction="vertical">
                                <Radio value={1}>Option A</Radio>
                                <Radio value={2}>Option B</Radio>
                                <Radio value={3}>Option C</Radio>
                                <Radio value={4}>
                                    More...
                                    {value === 4 ? (
                                        <Input
                                            style={{
                                                width: 100,
                                                marginLeft: 10,
                                            }}
                                        />
                                    ) : null}
                                </Radio>
                            </Space>
                        </Radio.Group>
                    </Card>{/* end card */}
                    <Card title="Radio Style" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The combination of radio button style.</Text></p>
                        <Radio.Group onChange={onChangeRadio} defaultValue="a">
                            <Radio.Button value="a">Hangzhou</Radio.Button>
                            <Radio.Button value="b">Shanghai</Radio.Button>
                            <Radio.Button value="c">Beijing</Radio.Button>
                            <Radio.Button value="d">Chengdu</Radio.Button>
                        </Radio.Group>
                        <Radio.Group
                            onChange={onChangeRadio}
                            defaultValue="a"
                            style={{
                                marginTop: 16,
                            }}
                        >
                            <Radio.Button value="a">Hangzhou</Radio.Button>
                            <Radio.Button value="b" disabled>
                                Shanghai
                            </Radio.Button>
                            <Radio.Button value="c">Beijing</Radio.Button>
                            <Radio.Button value="d">Chengdu</Radio.Button>
                        </Radio.Group>
                        <Radio.Group
                            disabled
                            onChange={onChangeRadio}
                            defaultValue="a"
                            style={{
                                marginTop: 16,
                            }}
                        >
                            <Radio.Button value="a">Hangzhou</Radio.Button>
                            <Radio.Button value="b">Shanghai</Radio.Button>
                            <Radio.Button value="c">Beijing</Radio.Button>
                            <Radio.Button value="d">Chengdu</Radio.Button>
                        </Radio.Group>
                    </Card>{/* end card */}
                    <Card title="Size" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">There are three sizes available: large, medium, and small. It can coordinate with input box.</Text></p>
                        <Radio.Group defaultValue="a" size="large">
                            <Radio.Button value="a">Hangzhou</Radio.Button>
                            <Radio.Button value="b">Shanghai</Radio.Button>
                            <Radio.Button value="c">Beijing</Radio.Button>
                            <Radio.Button value="d">Chengdu</Radio.Button>
                        </Radio.Group>
                        <Radio.Group
                            defaultValue="a"
                            style={{
                                marginTop: 16,
                            }}
                        >
                            <Radio.Button value="a">Hangzhou</Radio.Button>
                            <Radio.Button value="b">Shanghai</Radio.Button>
                            <Radio.Button value="c">Beijing</Radio.Button>
                            <Radio.Button value="d">Chengdu</Radio.Button>
                        </Radio.Group>
                        <Radio.Group
                            defaultValue="a"
                            size="small"
                            style={{
                                marginTop: 16,
                            }}
                        >
                            <Radio.Button value="a">Hangzhou</Radio.Button>
                            <Radio.Button value="b">Shanghai</Radio.Button>
                            <Radio.Button value="c">Beijing</Radio.Button>
                            <Radio.Button value="d">Chengdu</Radio.Button>
                        </Radio.Group>
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiRadio
