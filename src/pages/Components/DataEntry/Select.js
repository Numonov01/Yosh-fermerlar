import React, { useRef, useState } from 'react';
import { Button, Card, Col, Divider, Input, Radio, Row, Select, Space, Tag, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text, Title } = Typography;
const { Option } = Select;

const customStyles = usecustomStyles();

//basic
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

//Select with search field
const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

//Sizes
const optionsSizes = [];
for (let i = 10; i < 36; i++) {
    optionsSizes.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}
const handleChangeSizes = (value) => {
    console.log(`Selected: ${value}`);
};

//Multiple selection
const optionsMultiple = [];
for (let i = 10; i < 36; i++) {
    optionsMultiple.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i,
    });
}
const handleChangeMultiple = (value) => {
    console.log(`selected ${value}`);
};

//Tags
const optionsTags = [];
for (let i = 10; i < 36; i++) {
    optionsTags.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}
const handleChangeTags = (value) => {
    console.log(`selected ${value}`);
};

//coordinate
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

//Automatic tokenization
const optionsAutomatic = [];
for (let i = 10; i < 36; i++) {
    optionsAutomatic.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}
const handleChangeAutomatic = (value) => {
    console.log(`selected ${value}`);
};

//Custom dropdown
let index = 0;

//Hide Already Selected
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

//Custom Tag Render
const optionsCustom = [
    {
        value: 'gold',
    },
    {
        value: 'lime',
    },
    {
        value: 'green',
    },
    {
        value: 'cyan',
    },
];
const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{
                marginRight: 3,
            }}
        >
            {label}
        </Tag>
    );
};

//Responsive maxTagCount
const options = [];
for (let i = 10; i < 36; i++) {
    const value = i.toString(36) + i;
    options.push({
        label: `Long Label: ${value}`,
        value,
    });
}

//Big Data
const optionsBigData = [];
for (let i = 0; i < 100000; i++) {
    const value = `${i.toString(36)}${i}`;
    optionsBigData.push({
        label: value,
        value,
        disabled: i === 10,
    });
}
const handleChangeBigData = (value) => {
    console.log(`selected ${value}`);
};

const UiSelect = () => {
    // page title
    document.title = "Select" + process.env.REACT_APP_PAGE_TITLE;

    //Sizes
    const [size, setSize] = useState('middle');
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    //coordinate
    const [cities, setCities] = useState(cityData[provinceData[0]]);
    const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
    const handleProvinceChange = (value) => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
    };
    const onSecondCityChange = (value) => {
        setSecondCity(value);
    };

    //Custom dropdown
    const [items, setItems] = useState(['jack', 'lucy']);
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const addItem = (e) => {
        e.preventDefault();
        setItems([...items, name || `New item ${index++}`]);
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    //Hide Already Selected
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    //Responsive maxTagCount
    const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);
    const selectProps = {
        mode: 'multiple',
        style: {
            width: '100%',
        },
        value,
        options,
        onChange: (newValue) => {
            setValue(newValue);
        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };

    //Placement
    const [placement, SetPlacement] = useState('topLeft');
    const placementChange = (e) => {
        SetPlacement(e.target.value);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="Select" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Usage" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic Usage.</Text></p>
                        <Space wrap>
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                    },
                                    {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                    },
                                ]}
                            />
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 120,
                                }}
                                disabled
                                options={[
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                ]}
                            />
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 120,
                                }}
                                loading
                                options={[
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                ]}
                            />
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 120,
                                }}
                                allowClear
                                options={[
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                ]}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Multiple Selection" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Multiple selection, selecting from existing items.</Text></p>
                        <Space
                            style={{
                                width: '100%',
                            }}
                            direction="vertical"
                        >
                            <Select
                                mode="multiple"
                                allowClear
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Please select"
                                defaultValue={['a10', 'c12']}
                                onChange={handleChangeMultiple}
                                options={optionsMultiple}
                            />
                            <Select
                                mode="multiple"
                                disabled
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Please select"
                                defaultValue={['a10', 'c12']}
                                onChange={handleChangeMultiple}
                                options={optionsMultiple}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Custom Selection Render" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Specify the prop name of Option which will be rendered in select box.</Text></p>
                        <Select
                            mode="multiple"
                            style={{
                                width: '100%',
                            }}
                            placeholder="select one country"
                            defaultValue={['china']}
                            onChange={handleChange}
                            optionLabelProp="label"
                        >
                            <Option value="china" label="China">
                                <Space>
                                    <span role="img" aria-label="China">
                                        🇨🇳
                                    </span>
                                    China (中国)
                                </Space>
                            </Option>
                            <Option value="usa" label="USA">
                                <Space>
                                    <span role="img" aria-label="USA">
                                        🇺🇸
                                    </span>
                                    USA (美国)
                                </Space>
                            </Option>
                            <Option value="japan" label="Japan">
                                <Space>
                                    <span role="img" aria-label="Japan">
                                        🇯🇵
                                    </span>
                                    Japan (日本)
                                </Space>
                            </Option>
                            <Option value="korea" label="Korea">
                                <Space>
                                    <span role="img" aria-label="Korea">
                                        🇰🇷
                                    </span>
                                    Korea (韩国)
                                </Space>
                            </Option>
                        </Select>
                    </Card>{/* end card */}
                    <Card title="Tags" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Select with tags, transform input to tag (scroll the menu).</Text></p>
                        <Select
                            mode="tags"
                            style={{
                                width: '100%',
                            }}
                            placeholder="Tags Mode"
                            onChange={handleChangeTags}
                            options={optionsTags}
                        />
                    </Card>{/* end card */}
                    <Card title="Coordinate" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated. Using the Cascader component is strongly recommended instead as it is more flexible and capable.</Text></p>
                        <Space wrap>
                            <Select
                                defaultValue={provinceData[0]}
                                style={{
                                    width: 120,
                                }}
                                onChange={handleProvinceChange}
                                options={provinceData.map((province) => ({
                                    label: province,
                                    value: province,
                                }))}
                            />
                            <Select
                                style={{
                                    width: 120,
                                }}
                                value={secondCity}
                                onChange={onSecondCityChange}
                                options={cities.map((city) => ({
                                    label: city,
                                    value: city,
                                }))}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Automatic Tokenization" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Try to copy <Text type="secondary" code>Lucy,Jack</Text> and paste to the input. Only available in tags and multiple mode.</Text></p>
                        <Select
                            mode="tags"
                            style={{
                                width: '100%',
                            }}
                            onChange={handleChangeAutomatic}
                            tokenSeparators={[',']}
                            options={optionsAutomatic}
                        />
                    </Card>{/* end card */}
                    <Card title="Hide Already Selected" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Hide already selected options in the dropdown.</Text></p>
                        <Select
                            mode="multiple"
                            placeholder="Inserted are removed"
                            value={selectedItems}
                            onChange={setSelectedItems}
                            style={{
                                width: '100%',
                            }}
                            options={filteredOptions.map((item) => ({
                                value: item,
                                label: item,
                            }))}
                        />
                    </Card>{/* end card */}
                    <Card title="Responsive maxTagCount" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Auto collapse to tag with responsive case. Not recommend use in large form case since responsive calculation has a perf cost.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Select {...selectProps} />
                            <Select {...selectProps} disabled />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Big Data" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Select use virtual scroll which get better performance than 3.0.</Text></p>
                        <Title level={3}>Ant Design 4.0</Title>
                        <Title level={4}>{options.length} Items</Title>
                        <Select
                            mode="multiple"
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                            onChange={handleChangeBigData}
                            options={optionsBigData}
                        />

                        <Divider />

                        <Title level={3}>Ant Design 3.0</Title>
                        <iframe
                            title="Ant Design 3.0 Select demo"
                            src="https://codesandbox.io/embed/solitary-voice-m3vme?fontsize=14&hidenavigation=1&theme=dark&view=preview"
                            style={{
                                width: '100%',
                                height: 300,
                            }}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Select with Search Field" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Search the options while expanded.</Text></p>
                        <Select
                            showSearch
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'tom',
                                    label: 'Tom',
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                    <Card title="Sizes" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.</Text></p>
                        <Radio.Group value={size} onChange={handleSizeChange}>
                            <Radio.Button value="large">Large</Radio.Button>
                            <Radio.Button value="middle">Default</Radio.Button>
                            <Radio.Button value="small">Small</Radio.Button>
                        </Radio.Group>
                        <br />
                        <br />
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Select
                                size={size}
                                defaultValue="a1"
                                onChange={handleChangeSizes}
                                style={{
                                    width: 200,
                                }}
                                options={optionsSizes}
                            />
                            <Select
                                mode="multiple"
                                size={size}
                                placeholder="Please select"
                                defaultValue={['a10', 'c12']}
                                onChange={handleChangeSizes}
                                style={{
                                    width: '100%',
                                }}
                                options={optionsSizes}
                            />
                            <Select
                                mode="tags"
                                size={size}
                                placeholder="Please select"
                                defaultValue={['a10', 'c12']}
                                onChange={handleChangeSizes}
                                style={{
                                    width: '100%',
                                }}
                                options={optionsSizes}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Search with Sort" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Search the options with sorting.</Text></p>
                        <Select
                            showSearch
                            style={{
                                width: 200,
                            }}
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified',
                                },
                                {
                                    value: '2',
                                    label: 'Closed',
                                },
                                {
                                    value: '3',
                                    label: 'Communicated',
                                },
                                {
                                    value: '4',
                                    label: 'Identified',
                                },
                                {
                                    value: '5',
                                    label: 'Resolved',
                                },
                                {
                                    value: '6',
                                    label: 'Cancelled',
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                    <Card title="Option Group" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Using <Text type="secondary" code>OptGroup</Text> to group the options.</Text></p>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: 200,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    label: 'Manager',
                                    options: [
                                        {
                                            label: 'Jack',
                                            value: 'jack',
                                        },
                                        {
                                            label: 'Lucy',
                                            value: 'lucy',
                                        },
                                    ],
                                },
                                {
                                    label: 'Engineer',
                                    options: [
                                        {
                                            label: 'yiminghe',
                                            value: 'Yiminghe',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                    <Card title="Get Value of Selected Item" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">As a default behavior, the <Text type="secondary" code>onChange</Text> callback can only get the <Text type="secondary" code>value</Text> of the selected item. The <Text type="secondary" code>labelInValue</Text> prop can be used to get the <Text type="secondary" code>label</Text> property of the selected item. The <Text type="secondary" code>label</Text> of the selected item will be packed as an object for passing to the <Text type="secondary" code>onChange</Text> callback.</Text></p>
                        <Select
                            labelInValue
                            defaultValue={{
                                value: 'lucy',
                                label: 'Lucy (101)',
                            }}
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack (100)',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy (101)',
                                },
                            ]}
                        />
                    </Card>{/* end card */}
                    <Card title="Custom Dropdown" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Customize the dropdown menu via <Text type="secondary" code>dropdownRender</Text>. If you want to close the dropdown after clicking the custom content, you need to control <Text type="secondary" code>open</Text> prop, here is an codesandbox.</Text></p>
                        <Select
                            style={{
                                width: 300,
                            }}
                            placeholder="custom dropdown render"
                            dropdownRender={(menu) => (
                                <>
                                    {menu}
                                    <Divider
                                        style={{
                                            margin: '8px 0',
                                        }}
                                    />
                                    <Space
                                        style={{
                                            padding: '0 8px 4px',
                                        }}
                                    >
                                        <Input
                                            placeholder="Please enter item"
                                            ref={inputRef}
                                            value={name}
                                            onChange={onNameChange}
                                        />
                                        <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                            Add item
                                        </Button>
                                    </Space>
                                </>
                            )}
                            options={items.map((item) => ({
                                label: item,
                                value: item,
                            }))}
                        />
                    </Card>{/* end card */}
                    <Card title="Bordered-less" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Bordered-less style component.</Text></p>
                        <Space wrap>
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 120,
                                }}
                                bordered={false}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                    },
                                ]}
                            />
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 120,
                                }}
                                disabled
                                bordered={false}
                                options={[
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                ]}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Custom Tag Render" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Allows for custom rendering of tags.</Text></p>
                        <Select
                            mode="multiple"
                            tagRender={tagRender}
                            defaultValue={['gold', 'cyan']}
                            style={{
                                width: '100%',
                            }}
                            options={optionsCustom}
                        />
                    </Card>
                    {/* end card */}
                    <Card title="Placement" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can manually specify the position of the popup via <Text type="secondary" code>placement</Text>.</Text></p>
                        <Radio.Group value={placement} onChange={placementChange}>
                            <Radio.Button value="topLeft">topLeft</Radio.Button>
                            <Radio.Button value="topRight">topRight</Radio.Button>
                            <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
                            <Radio.Button value="bottomRight">bottomRight</Radio.Button>
                        </Radio.Group>
                        <br />
                        <br />
                        <Select
                            defaultValue="HangZhou"
                            style={{
                                width: 120,
                            }}
                            placement={placement}
                            options={[
                                {
                                    value: 'HangZhou',
                                    label: 'HangZhou #310000',
                                },
                                {
                                    value: 'NingBo',
                                    label: 'NingBo #315000',
                                },
                                {
                                    value: 'WenZhou',
                                    label: 'WenZhou #325000',
                                },
                            ]}
                        />
                    </Card>
                    {/* end card */}
                    <Card title="Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add status to Select with <Text type="secondary" code>status</Text>, which could be <Text type="secondary" code>error</Text> or <Text type="secondary" code>warning</Text>.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Select
                                status="error"
                                style={{
                                    width: '100%',
                                }}
                            />
                            <Select
                                status="warning"
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Space>
                    </Card>
                    {/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiSelect
