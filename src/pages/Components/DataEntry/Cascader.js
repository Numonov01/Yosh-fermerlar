import React, { useState } from 'react';
import { Card, Cascader, Col, Row, Typography } from 'antd';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text, Link } = Typography;

const customStyles = usecustomStyles();

//data options Basic
const options = [
    {
        value: 'Velzon',
        label: 'Velzon',
        children: [
            {
                value: 'Demos',
                label: 'Demos',
                children: [
                    {
                        value: 'Creative',
                        label: 'Creative',
                    },
                ],
            },
        ],
    },
    {
        value: 'Steex',
        label: 'Steex',
        children: [
            {
                value: 'Demos',
                label: 'Demos',
                children: [
                    {
                        value: 'Minimal',
                        label: 'Minimal',
                    },
                    {
                        value: 'Modern',
                        label: 'Modern',
                    },
                ],
            },
        ],
    },
];
const onChange = (value) => {
    console.log(value);
};

//Custom trigger
const optionsTrigger = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
            },
        ],
    },
];

// Just show the latest item.
const displayRender = (labels) => labels[labels.length - 1];

//Disabled option
const optionsDisabled = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        disabled: true,
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

const onChangeDisabled = (value) => {
    console.log(value);
};

//Change on Select
const optionsSelect = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hanzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
const onChangeSelect = (value) => {
    console.log(value);
};

//ShowCheckedStrategy
const optionsShowCheckedStrategy = [
    {
        label: 'Light',
        value: 'light',
        children: new Array(20).fill(null).map((_, index) => ({
            label: `Number ${index}`,
            value: index,
        })),
    },
    {
        label: 'Bamboo',
        value: 'bamboo',
        children: [
            {
                label: 'Little',
                value: 'little',
                children: [
                    {
                        label: 'Toy Fish',
                        value: 'fish',
                    },
                    {
                        label: 'Toy Cards',
                        value: 'cards',
                    },
                    {
                        label: 'Toy Bird',
                        value: 'bird',
                    },
                ],
            },
        ],
    },
];

//Multiple
const optionsMultiple = [
    {
        label: 'Light',
        value: 'light',
        children: new Array(20).fill(null).map((_, index) => ({
            label: `Number ${index}`,
            value: index,
        })),
    },
    {
        label: 'Bamboo',
        value: 'bamboo',
        children: [
            {
                label: 'Little',
                value: 'little',
                children: [
                    {
                        label: 'Toy Fish',
                        value: 'fish',
                        disableCheckbox: true,
                    },
                    {
                        label: 'Toy Cards',
                        value: 'cards',
                    },
                    {
                        label: 'Toy Bird',
                        value: 'bird',
                    },
                ],
            },
        ],
    },
];
const onChangeMultiple = (value) => {
    console.log(value);
};

const UiCascader = () => {
    // page title
    document.title = "Cascader" + process.env.REACT_APP_PAGE_TITLE;

    //Custom trigger
    const [text, setText] = useState('Unselect');
    const onChangeTrigger = (_, selectedOptions) => {
        setText(selectedOptions.map((o) => o.label).join(', '));
    };

    //ShowCheckedStrategy
    const onChangeShowCheckedStrategy = (value) => {
        console.log(value);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="Cascader" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Cascade selection box for selecting province/city/district.</Text></p>
                        <Cascader options={options} onChange={onChange} placeholder="Please select" />
                    </Card>{/* end card */}
                    <Card title="Custom Trigger" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Separate trigger button and result.</Text></p>
                        <span>
                            {text}
                            &nbsp;
                            <Cascader options={optionsTrigger} onChange={onChangeTrigger}>
                                <Link to="#">Change city</Link>
                            </Cascader>
                        </span>
                    </Card>{/* end card */}
                    <Card title="Disabled option" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Disable option by specifying the disabled property in options.</Text></p>
                        <Cascader options={optionsDisabled} onChange={onChangeDisabled} />
                    </Card>{/* end card */}
                    <Card title="Multiple" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Select multiple options. Disable the <Text type="secondary" code>checkbox</Text> by adding the <Text type="secondary" code>disableCheckbox</Text> property and selecting a specific item. The style of the disable can be modified by the className.</Text></p>
                        <Cascader
                            style={{
                                width: '100%',
                            }}
                            options={optionsMultiple}
                            onChange={onChangeMultiple}
                            multiple
                            maxTagCount="responsive"
                        />
                    </Card>{/* end card */}
                    <Card title="Size" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Cascade selection box of different sizes.</Text></p>
                        <Cascader size="large" options={options} onChange={onChange} />
                        <br />
                        <br />
                        <Cascader options={options} onChange={onChange} />
                        <br />
                        <br />
                        <Cascader size="small" options={options} onChange={onChange} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Default value" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Specifies default value by an array.</Text></p>
                        <Cascader defaultValue={['Steex', 'Demos', 'Minimal']} options={options} onChange={onChange} />
                    </Card>{/* end card */}
                    <Card title="Hover" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Hover to expand sub menu, click to select option.</Text></p>
                        <Cascader
                            options={options}
                            expandTrigger="hover"
                            displayRender={displayRender}
                            onChange={onChange}
                        />
                    </Card>{/* end card */}
                    <Card title="Change on select" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Allow only select parent options.</Text></p>
                        <Cascader options={optionsSelect} onChange={onChangeSelect} changeOnSelect />
                    </Card>{/* end card */}
                    <Card title="ShowCheckedStrategy" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The way show selected item in box using <Text type="secondary" code>ShowCheckedStrategy</Text>.</Text></p>
                        <Cascader
                            style={{
                                width: '100%',
                            }}
                            options={optionsShowCheckedStrategy}
                            onChange={onChangeShowCheckedStrategy}
                            multiple
                            maxTagCount="responsive"
                            // showCheckedStrategy={SHOW_CHILD}
                            defaultValue={[
                                ['bamboo', 'little', 'fish'],
                                ['bamboo', 'little', 'cards'],
                                ['bamboo', 'little', 'bird'],
                            ]}
                        />
                        <br />
                        <br />
                        <Cascader
                            style={{
                                width: '100%',
                            }}
                            options={optionsShowCheckedStrategy}
                            onChange={onChangeShowCheckedStrategy}
                            multiple
                            maxTagCount="responsive"
                            defaultValue={['bamboo']}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiCascader
