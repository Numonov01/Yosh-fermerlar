import React, { useState } from 'react';
import { AutoComplete, Card, Col, Row, Typography, Input, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { TextArea } = Input;

const { Text } = Typography;

const customStyles = usecustomStyles();

//basic
const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});

//Non-case- Sensitive AutoComplete
const optionsSensitive = [
    {
        value: 'Burns Bay Road',
    },
    {
        value: 'Downing Street',
    },
    {
        value: 'Wall Street',
    },
];

//Lookup-Patterns - Certain Category
const renderTitle = (title) => (
    <span>
        {title}
        <a
            style={{
                float: 'right',
            }}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
        >
            more
        </a>
    </span>
);
const renderItem = (title, count) => ({
    value: title,
    label: (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            {title}
            <span>
                <UserOutlined /> {count}
            </span>
        </div>
    ),
});
const optionsPatterns = [
    {
        label: renderTitle('Libraries'),
        options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
        label: renderTitle('Solutions'),
        options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
        label: renderTitle('Articles'),
        options: [renderItem('AntDesign design language', 100000)],
    },
];

//Lookup-Patterns - Uncertain Category
const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>
                            Found {query} on{' '}
                            <a
                                href={`https://s.taobao.com/search?q=${query}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {category}
                            </a>
                        </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });

//Status
const mockValStatus = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});

//Borderless
const mockValBorderless = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});

const UiAutoComplete = () => {
    // page title
    document.title = "AutoComplete" + process.env.REACT_APP_PAGE_TITLE;

    //basic
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const [anotherOptions, setAnotherOptions] = useState([]);
    const getPanelValue = (searchText) =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    const onSelect = (data) => {
        console.log('onSelect', data);
    };
    const onChange = (data) => {
        setValue(data);
    };

    //Customized
    const [optionsCustomized, setOptionsCustomized] = useState([]);
    const handleSearch = (value) => {
        let res = [];
        if (!value || value.indexOf('@') >= 0) {
            res = [];
        } else {
            res = ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
                value,
                label: `${value}@${domain}`,
            }));
        }
        setOptionsCustomized(res);
    };

    //Customize Input Component
    const [optionsCustomize, setOptionsCustomize] = useState([]);
    const handleSearchCustomize = (value) => {
        setOptionsCustomize(
            !value
                ? []
                : [
                    {
                        value,
                    },
                    {
                        value: value + value,
                    },
                    {
                        value: value + value + value,
                    },
                ],
        );
    };
    const onSelectCustomize = (value) => {
        console.log('onSelect', value);
    };

    //Lookup-Patterns - Uncertain Category
    const [optionsUncertain, setOptionsUncertain] = useState([]);
    const handleSearchUncertain = (value) => {
        setOptionsUncertain(value ? searchResult(value) : []);
    };
    const onSelectUncertain = (value) => {
        console.log('onSelectUncertain', value);
    };

    //Status
    const [optionsStatus, setOptionsStatus] = useState([]);
    const [anotherOptionsStatus, setAnotherOptionsStatus] = useState([]);
    const getPanelValueStatus = (searchText) =>
        !searchText ? [] : [mockValStatus(searchText), mockValStatus(searchText, 2), mockValStatus(searchText, 3)];

    //Borderless
    const [optionsBorderless, setOptionsBorderless] = useState([]);
    const getPanelValueBorderless = (searchText) =>
        !searchText ? [] : [mockValBorderless(searchText), mockValBorderless(searchText, 2), mockValBorderless(searchText, 3)];
    
    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="AutoComplete" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Usage" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic Usage, set data source of autocomplete with <Text type="secondary" code>options</Text> property.</Text></p>
                        <AutoComplete
                            options={options}
                            style={{ marginBottom: customStyles.marginXS, width: '100%', }}
                            onSelect={onSelect}
                            onSearch={(text) => setOptions(getPanelValue(text))}
                            placeholder="input here"
                        />
                        <AutoComplete
                            value={value}
                            options={anotherOptions}
                            style={{
                                width: '100%',
                            }}
                            onSelect={onSelect}
                            onSearch={(text) => setAnotherOptions(getPanelValue(text))}
                            onChange={onChange}
                            placeholder="control mode"
                        />
                    </Card>{/* end card */}
                    <Card title="Customized" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You could set custom <Text type="secondary" code>Option</Text> label</Text></p>
                        <AutoComplete
                            style={{
                                width: '100%',
                            }}
                            onSearch={handleSearch}
                            placeholder="input here"
                            options={optionsCustomized}
                        />
                    </Card>{/* end card */}
                    <Card title="Lookup-Patterns - Certain Category" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Demonstration of Lookup Patterns: Certain Category. Basic Usage, set options of autocomplete with <Text type="secondary" code>options</Text> property.</Text></p>
                        <AutoComplete
                            popupClassName="certain-category-search-dropdown"
                            style={{
                                width: '100%',
                            }}
                            options={optionsPatterns}
                        >
                            <Input.Search size="large" placeholder="input here" />
                        </AutoComplete>
                    </Card>{/* end card */}
                    <Card title="Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add status to AutoComplete with <Text type="secondary" code>status</Text>, which could be <Text type="secondary" code>error</Text> or <Text type="secondary" code>warning</Text>.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <AutoComplete
                                options={optionsStatus}
                                onSearch={(text) => setOptionsStatus(getPanelValueStatus(text))}
                                status="error"
                                style={{
                                    width: '100%',
                                }}
                            />
                            <AutoComplete
                                options={anotherOptionsStatus}
                                onSearch={(text) => setAnotherOptionsStatus(getPanelValueStatus(text))}
                                status="warning"
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Customize Input Component" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Customize Input Component</Text></p>
                        <AutoComplete
                            options={optionsCustomize}
                            style={{
                                width: '100%',
                            }}
                            onSelect={onSelectCustomize}
                            onSearch={handleSearchCustomize}
                        >
                            <TextArea
                                placeholder="input here"
                                className="custom"
                                style={{
                                    height: 55,
                                }}
                            />
                        </AutoComplete>
                    </Card>{/* end card */}
                    <Card title="Non-case-sensitive AutoComplete" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A non-case-sensitive AutoComplete</Text></p>
                        <AutoComplete
                            style={{
                                width: '100%',
                            }}
                            options={optionsSensitive}
                            placeholder="try to type `b`"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Card>{/* end card */}
                    <Card title="Lookup-Patterns - Uncertain Category" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Demonstration of Lookup Patterns: Uncertain Category.</Text></p>
                        <AutoComplete
                            style={{
                                width: '100%',
                            }}
                            options={optionsUncertain}
                            onSelect={onSelectUncertain}
                            onSearch={handleSearchUncertain}
                        >
                            <Input.Search size="large" placeholder="input here" enterButton />
                        </AutoComplete>
                    </Card>{/* end card */}
                    <Card title="Borderless" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">No border.</Text></p>
                        <AutoComplete
                            options={optionsBorderless}
                            style={{
                                width: 200,
                            }}
                            placeholder="Borderless"
                            onSearch={(text) => setOptionsBorderless(getPanelValueBorderless(text))}
                            bordered={false}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiAutoComplete
