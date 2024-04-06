import React, { useRef, useState } from 'react';
import { Button, Card, Cascader, Col, Input, Row, Select, Space, Switch, Tooltip, Typography } from 'antd';
import { AudioOutlined, ClockCircleOutlined, EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, SearchOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';


//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;
const { Search, TextArea } = Input;

const customStyles = usecustomStyles();

//Pre / Post tab
const { Option } = Select;
const selectBefore = (
    <Select defaultValue="http://">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
    </Select>
);
const selectAfter = (
    <Select defaultValue=".com">
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
);

//Compact Style
const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
    },
];

//Search box
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);
const onSearch = (value) => console.log(value);

//Format Tooltip Input
const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
    const { value, onChange } = props;
    const handleChange = (e) => {
        const { value: inputValue } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
            onChange(inputValue);
        }
    };

    // '.' at the end or only '-' in the input box.
    const handleBlur = () => {
        let valueTemp = value;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            valueTemp = value.slice(0, -1);
        }
        onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    };
    const title = value ? (
        <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
    ) : (
        'Input a number'
    );
    return (
        <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
            <Input
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Input a number"
                maxLength={16}
            />
        </Tooltip>
    );
};

const onChange = (e) => {
    console.log(e);
};

const UiInput = () => {
    // page title
    document.title = "Input" + process.env.REACT_APP_PAGE_TITLE;

    //Autosizing the height to fit the content
    const [value, setValue] = useState('');

    //Format Tooltip Input
    const [valueTooltip, setValueTooltip] = useState('');

    //Password box
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    //Focus
    const inputRef = useRef(null);
    const [input, setInput] = useState(true);
    const sharedProps = {
        style: {
            width: '100%',
        },
        defaultValue: 'Ant Design love you!',
        ref: inputRef,
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="Input" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Usage" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic usage example.</Text></p>
                        <Input placeholder="Basic usage" />
                    </Card>{/* end card */}
                    <Card title="Pre / Post Tab" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Using pre & post tabs example.</Text></p>
                        <Input placeholder="Basic usage" />
                    </Card>{/* end card */}
                    <Card title="Compact Style" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use  create compact style, See the <Text code>Space.Compact</Text> documentation for more.</Text></p>
                        <Space direction="vertical" size="middle">
                            <Space.Compact>
                                <Input defaultValue="26888888" />
                            </Space.Compact>
                            <Space.Compact>
                                <Input
                                    style={{
                                        width: '20%',
                                    }}
                                    defaultValue="0571"
                                />
                                <Input
                                    style={{
                                        width: '80%',
                                    }}
                                    defaultValue="26888888"
                                />
                            </Space.Compact>
                            <Space.Compact>
                                <Search addonBefore="https://" placeholder="input search text" allowClear />
                            </Space.Compact>
                            <Space.Compact
                                style={{
                                    width: '100%',
                                }}
                            >
                                <Input defaultValue="Combine input and button" />
                                <Button type="primary">Submit</Button>
                            </Space.Compact>
                            <Space.Compact>
                                <Select defaultValue="Zhejiang" options={options} />
                                <Input defaultValue="Xihu District, Hangzhou" />
                            </Space.Compact>
                            <Space.Compact size="large">
                                <Input addonBefore={<SearchOutlined />} placeholder="large size" />
                                <Input placeholder="another input" />
                            </Space.Compact>
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Search box with Loading" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Search loading when onSearch.</Text></p>
                        <Search placeholder="input search loading default" loading />
                        <br />
                        <br />
                        <Search placeholder="input search loading with enterButton" loading enterButton />
                        <br />
                        <br />
                        <Search placeholder="input search text" enterButton="Search" size="large" loading />
                    </Card>{/* end card */}
                    <Card title="TextArea" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">For multi-line input.</Text></p>
                        <TextArea rows={4} />
                        <br />
                        <br />
                        <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
                    </Card>{/* end card */}
                    <Card title="Format Tooltip Input" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can use the Input in conjunction with Tooltip component to create a Numeric Input, which can provide a good experience for extra-long content display.</Text></p>
                        <NumericInput
                            style={{
                                width: 120,
                            }}
                            value={valueTooltip}
                            onChange={setValueTooltip}
                        />
                    </Card>{/* end card */}
                    <Card title="Password box" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Input type of password.</Text></p>
                        <Space direction="vertical">
                            <Input.Password placeholder="input password" />
                            <Input.Password
                                placeholder="input password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                            <Space direction="horizontal">
                                <Input.Password
                                    placeholder="input password"
                                    visibilityToggle={{
                                        visible: passwordVisible,
                                        onVisibleChange: setPasswordVisible,
                                    }}
                                />
                                <Button
                                    style={{
                                        width: 80,
                                    }}
                                    onClick={() => setPasswordVisible((prevState) => !prevState)}
                                >
                                    {passwordVisible ? 'Hide' : 'Show'}
                                </Button>
                            </Space>
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add status to Input with <Text type="secondary" code>status</Text>, which could be <Text type="secondary" code>error</Text> or <Text type="secondary" code>warning</Text>.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Input status="error" placeholder="Error" />
                            <Input status="warning" placeholder="Warning" />
                            <Input status="error" prefix={<ClockCircleOutlined />} placeholder="Error with prefix" />
                            <Input status="warning" prefix={<ClockCircleOutlined />} placeholder="Warning with prefix" />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Focus" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Focus with additional option.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Space wrap>
                                <Button
                                    onClick={() => {
                                        inputRef.current.focus({
                                            cursor: 'start',
                                        });
                                    }}
                                >
                                    Focus at first
                                </Button>
                                <Button
                                    onClick={() => {
                                        inputRef.current.focus({
                                            cursor: 'end',
                                        });
                                    }}
                                >
                                    Focus at last
                                </Button>
                                <Button
                                    onClick={() => {
                                        inputRef.current.focus({
                                            cursor: 'all',
                                        });
                                    }}
                                >
                                    Focus to select all
                                </Button>
                                <Button
                                    onClick={() => {
                                        inputRef.current.focus({
                                            preventScroll: true,
                                        });
                                    }}
                                >
                                    Focus prevent scroll
                                </Button>
                                <Switch
                                    checked={input}
                                    checkedChildren="Input"
                                    unCheckedChildren="TextArea"
                                    onChange={() => {
                                        setInput(!input);
                                    }}
                                />
                            </Space>
                            <br />
                            {input ? <Input {...sharedProps} /> : <Input.TextArea {...sharedProps} />}
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Three Sizes of Input" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">There are three sizes of an Input box: <Text type="secondary" code>large</Text> (40px), <Text type="secondary" code>default</Text> (32px) and <Text type="secondary" code>small</Text> (24px).</Text></p>
                        <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
                        <br />
                        <br />
                        <Input placeholder="default size" prefix={<UserOutlined />} />
                        <br />
                        <br />
                        <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
                    </Card>{/* end card */}
                    <Card title="Pre / Post tab" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Using pre & post tabs example.</Text></p>
                        <Space direction="vertical">
                            <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
                            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
                            <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
                            <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
                            <Input
                                addonBefore={
                                    <Cascader
                                        placeholder="cascader"
                                        style={{
                                            width: 150,
                                        }}
                                    />
                                }
                                defaultValue="mysite"
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Search box" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Example of creating a search box by grouping a standard input with a search button.</Text></p>
                        <Space direction="vertical">
                            <Search
                                placeholder="input search text"
                                onSearch={onSearch}
                                style={{
                                    width: 200,
                                }}
                            />
                            <Search
                                placeholder="input search text"
                                allowClear
                                onSearch={onSearch}
                                style={{
                                    width: 200,
                                }}
                            />
                            <Search
                                addonBefore="https://"
                                placeholder="input search text"
                                allowClear
                                onSearch={onSearch}
                                style={{
                                    width: 304,
                                }}
                            />
                            <Search placeholder="input search text" onSearch={onSearch} enterButton />
                            <Search
                                placeholder="input search text"
                                allowClear
                                enterButton="Search"
                                size="large"
                                onSearch={onSearch}
                            />
                            <Search
                                placeholder="input search text"
                                enterButton="Search"
                                size="large"
                                suffix={suffix}
                                onSearch={onSearch}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Autosizing the height to fit the content" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary"><Text code>autoSize</Text> prop for a <Text type="secondary" code>textarea</Text> type of <Text type="secondary" code>Input</Text> makes the height to automatically adjust based on the content. An option object can be provided to <Text type="secondary" code>autoSize</Text> to specify the minimum and maximum number of lines the textarea will automatically adjust.</Text></p>
                        <TextArea placeholder="Autosize height based on content lines" autoSize />
                        <div
                            style={{
                                margin: '24px 0',
                            }}
                        />
                        <TextArea
                            placeholder="Autosize height with minimum and maximum number of lines"
                            autoSize={{
                                minRows: 2,
                                maxRows: 6,
                            }}
                        />
                        <div
                            style={{
                                margin: '24px 0',
                            }}
                        />
                        <TextArea
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Controlled autosize"
                            autoSize={{
                                minRows: 3,
                                maxRows: 5,
                            }}
                        />
                    </Card>{/* end card */}
                    <Card title="Prefix and Suffix" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add a prefix or suffix icons inside input.</Text></p>
                        <Input
                            placeholder="Enter your username"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            suffix={
                                <Tooltip title="Extra information">
                                    <InfoCircleOutlined
                                        style={{
                                            color: 'rgba(0,0,0,.45)',
                                        }}
                                    />
                                </Tooltip>
                            }
                        />
                        <br />
                        <br />
                        <Input prefix="￥" suffix="RMB" />
                        <br />
                        <br />
                        <Input prefix="￥" suffix="RMB" disabled />
                    </Card>{/* end card */}
                    <Card title="With Clear Icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Input box with the remove icon, click the icon to delete everything.</Text></p>
                        <Input placeholder="input with clear icon" allowClear onChange={onChange} />
                        <br />
                        <br />
                        <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
                    </Card>{/* end card */}
                    <Card title="Textarea with character counting" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Show character counting.</Text></p>
                        <TextArea
                            showCount
                            maxLength={100}
                            style={{
                                height: 120,
                                marginBottom: 24,
                            }}
                            onChange={onChange}
                            placeholder="can resize"
                        />
                        <TextArea
                            showCount
                            maxLength={100}
                            style={{
                                height: 120,
                                resize: 'none',
                            }}
                            onChange={onChange}
                            placeholder="disable resize"
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiInput
