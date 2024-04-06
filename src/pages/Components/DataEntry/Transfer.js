import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Space, Switch, Table, Tag, Transfer, Tree, Typography, theme } from 'antd';
import difference from 'lodash/difference';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

//basic
const mockData = Array.from({
    length: 20,
}).map((_, i) => ({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
}));
const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

//OneWay
const mockData2 = Array.from({
    length: 20,
}).map((_, i) => ({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
}));
const oriTargetKeys = mockData.filter((item) => Number(item.key) % 3 > 1).map((item) => item.key);

//Table Transfer
// Customize Table Transfer
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
    <Transfer {...restProps}>
        {({
            direction,
            filteredItems,
            onItemSelectAll,
            onItemSelect,
            selectedKeys: listSelectedKeys,
            disabled: listDisabled,
        }) => {
            const columns = direction === 'left' ? leftColumns : rightColumns;
            const rowSelection = {
                getCheckboxProps: (item) => ({
                    disabled: listDisabled || item.disabled,
                }),
                onSelectAll(selected, selectedRows) {
                    const treeSelectedKeys = selectedRows
                        .filter((item) => !item.disabled)
                        .map(({ key }) => key);
                    const diffKeys = selected
                        ? difference(treeSelectedKeys, listSelectedKeys)
                        : difference(listSelectedKeys, treeSelectedKeys);
                    onItemSelectAll(diffKeys, selected);
                },
                onSelect({ key }, selected) {
                    onItemSelect(key, selected);
                },
                selectedRowKeys: listSelectedKeys,
            };
            return (
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={filteredItems}
                    size="small"
                    style={{
                        pointerEvents: listDisabled ? 'none' : undefined,
                    }}
                    onRow={({ key, disabled: itemDisabled }) => ({
                        onClick: () => {
                            if (itemDisabled || listDisabled) return;
                            onItemSelect(key, !listSelectedKeys.includes(key));
                        },
                    })}
                />
            );
        }}
    </Transfer>
);
const mockTags = ['cat', 'dog', 'bird'];
const mockDataTransfer = Array.from({
    length: 20,
}).map((_, i) => ({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 4 === 0,
    tag: mockTags[i % 3],
}));
const originTargetKeys = mockDataTransfer
    .filter((item) => Number(item.key) % 3 > 1)
    .map((item) => item.key);
const leftTableColumns = [
    {
        dataIndex: 'title',
        title: 'Name',
    },
    {
        dataIndex: 'tag',
        title: 'Tag',
        render: (tag) => <Tag>{tag}</Tag>,
    },
    {
        dataIndex: 'description',
        title: 'Description',
    },
];
const rightTableColumns = [
    {
        dataIndex: 'title',
        title: 'Name',
    },
];

//Tree Transfer
const isChecked = (selectedKeys, eventkey) => selectedKeys.includes(eventkey);
const generateTree = (treeNodes = [], checkedKeys = []) =>
    treeNodes.map(({ children, ...props }) => ({
        ...props,
        disabled: checkedKeys.includes(props.key),
        children: generateTree(children, checkedKeys),
    }));
const TreeTransfer = ({ dataSource, targetKeys, ...restProps }) => {
    const { token } = theme.useToken();
    const transferDataSource = [];
    function flatten(list = []) {
        list.forEach((item) => {
            transferDataSource.push(item);
            flatten(item.children);
        });
    }
    flatten(dataSource);
    return (
        <Transfer
            {...restProps}
            targetKeys={targetKeys}
            dataSource={transferDataSource}
            className="tree-transfer"
            render={(item) => item.title}
            showSelectAll={false}
        >
            {({ direction, onItemSelect, selectedKeys }) => {
                if (direction === 'left') {
                    const checkedKeys = [...selectedKeys, ...targetKeys];
                    return (
                        <div
                            style={{
                                padding: token.paddingXS,
                            }}
                        >
                            <Tree
                                blockNode
                                checkable
                                checkStrictly
                                defaultExpandAll
                                checkedKeys={checkedKeys}
                                treeData={generateTree(dataSource, targetKeys)}
                                onCheck={(_, { node: { key } }) => {
                                    onItemSelect(key, !isChecked(checkedKeys, key));
                                }}
                                onSelect={(_, { node: { key } }) => {
                                    onItemSelect(key, !isChecked(checkedKeys, key));
                                }}
                            />
                        </div>
                    );
                }
            }}
        </Transfer>
    );
};
const treeData = [
    {
        key: '0-0',
        title: '0-0',
    },
    {
        key: '0-1',
        title: '0-1',
        children: [
            {
                key: '0-1-0',
                title: '0-1-0',
            },
            {
                key: '0-1-1',
                title: '0-1-1',
            },
        ],
    },
    {
        key: '0-2',
        title: '0-2',
    },
    {
        key: '0-3',
        title: '0-3',
    },
    {
        key: '0-4',
        title: '0-4',
    },
];

const UiTransfer = () => {
    // page title
    document.title = "Transfer" + process.env.REACT_APP_PAGE_TITLE;

    //basic
    const [targetKeysTransfer, setTargetKeysTransfer] = useState(initialTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const onChangeTransfer = (nextTargetKeys, direction, moveKeys) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setTargetKeysTransfer(nextTargetKeys);
    };
    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };
    const onScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };

    //OneWay
    const [targetKeysOneWay, setTargetKeysOneWay] = useState(oriTargetKeys);
    const [selectedKeysOneWay, setSelectedKeysOneWay] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const handleChange = (newTargetKeys, direction, moveKeys) => {
        setTargetKeysOneWay(newTargetKeys);
        console.log('targetKeys: ', newTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    };
    const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeysOneWay([...sourceSelectedKeys, ...targetSelectedKeys]);
        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    };
    const handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };
    const handleDisable = (checked) => {
        setDisabled(checked);
    };

    //Advanced
    const [mockData, setMockData] = useState([]);
    const [targetKeysAdvanced, setTargetKeysAdvanced] = useState([]);
    const getMock = () => {
        const tempTargetKeys = [];
        const tempMockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: i % 2 === 0,
            };
            if (data.chosen) {
                tempTargetKeys.push(data.key);
            }
            tempMockData.push(data);
        }
        setMockData(tempMockData);
        setTargetKeysAdvanced(tempTargetKeys);
    };
    useEffect(() => {
        getMock();
    }, []);
    const handleChangeAdvanced = (newTargetKeys) => {
        setTargetKeysAdvanced(newTargetKeys);
    };
    const renderFooter = (_, { direction }) => {
        if (direction === 'left') {
            return (
                <Button
                    size="small"
                    style={{
                        float: 'left',
                        margin: 5,
                    }}
                    onClick={getMock}
                >
                    Left button reload
                </Button>
            );
        }
        return (
            <Button
                size="small"
                style={{
                    float: 'right',
                    margin: 5,
                }}
                onClick={getMock}
            >
                Right button reload
            </Button>
        );
    };

    //Custom datasource
    const [mockDataCustom, setMockDataCustom] = useState([]);
    const [targetKeysCustom, setTargetKeysCustom] = useState([]);
    const getMockCustom = () => {
        const tempTargetKeys = [];
        const tempMockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: i % 2 === 0,
            };
            if (data.chosen) {
                tempTargetKeys.push(data.key);
            }
            tempMockData.push(data);
        }
        setMockDataCustom(tempMockData);
        setTargetKeysCustom(tempTargetKeys);
    };
    useEffect(() => {
        getMockCustom();
    }, []);
    const handleChangeCustom = (newTargetKeys, direction, moveKeys) => {
        console.log(newTargetKeys, direction, moveKeys);
        setTargetKeysCustom(newTargetKeys);
    };
    const renderItem = (item) => {
        const customLabel = (
            <span className="custom-item">
                {item.title} - {item.description}
            </span>
        );
        return {
            label: customLabel,
            // for displayed item
            value: item.title, // for title and filter matching
        };
    };

    //Pagination
    const [oneWay, setOneWay] = useState(false);
    const [mockDataPagination, setMockDataPagination] = useState([]);
    const [targetKeysPagination, setTargetKeysPagination] = useState([]);
    useEffect(() => {
        const newTargetKeys = [];
        const newMockData = [];
        for (let i = 0; i < 2000; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: i % 2 === 0,
            };
            if (data.chosen) {
                newTargetKeys.push(data.key);
            }
            newMockData.push(data);
        }
        setTargetKeysPagination(newTargetKeys);
        setMockDataPagination(newMockData);
    }, []);
    const onChangePagination = (newTargetKeys, direction, moveKeys) => {
        console.log(newTargetKeys, direction, moveKeys);
        setTargetKeysPagination(newTargetKeys);
    };

    //Table Transfer
    const [targetKeys, setTargetKeys] = useState(originTargetKeys);
    const [disabledTransfer, setDisabledTransfer] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const onChange = (nextTargetKeys) => {
        setTargetKeys(nextTargetKeys);
    };
    const triggerDisable = (checked) => {
        setDisabledTransfer(checked);
    };
    const triggerShowSearch = (checked) => {
        setShowSearch(checked);
    };

    //Tree Transfer
    const [targetKeysTree, setTargetKeysTree] = useState([]);
    const onChangeTree = (keys) => {
        setTargetKeysTree(keys);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="Transfer" />

            <Row gutter={[20]}>
                <Col span={24} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The most basic usage of <Text type="secondary" code>Transfer</Text> involves providing the source data and target keys arrays, plus the rendering and some callback functions.</Text></p>
                        <Transfer
                            dataSource={mockData}
                            titles={['Source', 'Target']}
                            targetKeys={targetKeys}
                            selectedKeys={selectedKeys}
                            onChange={onChange}
                            onSelectChange={onSelectChange}
                            onScroll={onScroll}
                            render={(item) => item.title}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Advanced" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Advanced Usage of Transfer. You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer.</Text></p>
                        <Transfer
                            dataSource={mockData}
                            showSearch
                            listStyle={{
                                width: 250,
                                height: 300,
                            }}
                            operations={['to right', 'to left']}
                            targetKeys={targetKeysAdvanced}
                            onChange={handleChangeAdvanced}
                            render={(item) => `${item.title}-${item.description}`}
                            footer={renderFooter}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="One Way" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use <Text type="secondary" code>oneWay</Text> to makes Transfer to one way style.</Text></p>
                        <Transfer
                            dataSource={mockData2}
                            titles={['Source', 'Target']}
                            targetKeys={targetKeysOneWay}
                            selectedKeys={selectedKeysOneWay}
                            onChange={handleChange}
                            onSelectChange={handleSelectChange}
                            onScroll={handleScroll}
                            render={(item) => item.title}
                            disabled={disabled}
                            oneWay
                            style={{
                                marginBottom: 16,
                            }}
                        />
                        <Switch
                            unCheckedChildren="disabled"
                            checkedChildren="disabled"
                            checked={disabled}
                            onChange={handleDisable}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Custom Datasource" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Custom each Transfer Item, and in this way you can render a complex datasource.</Text></p>
                        <Transfer
                            dataSource={mockDataCustom}
                            listStyle={{
                                width: 300,
                                height: 300,
                            }}
                            targetKeys={targetKeysCustom}
                            onChange={handleChangeCustom}
                            render={renderItem}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Pagination" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">large count of items with pagination.</Text></p>
                        <Transfer
                            dataSource={mockDataPagination}
                            targetKeys={targetKeysPagination}
                            onChange={onChangePagination}
                            render={(item) => item.title}
                            oneWay={oneWay}
                            pagination
                        />
                        <br />
                        <Switch
                            unCheckedChildren="one way"
                            checkedChildren="one way"
                            checked={oneWay}
                            onChange={setOneWay}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Table Transfer" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Customize render list with Table component.</Text></p>
                        <TableTransfer
                            dataSource={mockDataTransfer}
                            targetKeys={targetKeysTransfer}
                            disabled={disabledTransfer}
                            showSearch={showSearch}
                            onChange={onChangeTransfer}
                            filterOption={(inputValue, item) =>
                                item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
                            }
                            leftColumns={leftTableColumns}
                            rightColumns={rightTableColumns}
                        />
                        <Space
                            style={{
                                marginTop: 16,
                            }}
                        >
                            <Switch
                                unCheckedChildren="disabled"
                                checkedChildren="disabled"
                                checked={disabledTransfer}
                                onChange={triggerDisable}
                            />
                            <Switch
                                unCheckedChildren="showSearch"
                                checkedChildren="showSearch"
                                checked={showSearch}
                                onChange={triggerShowSearch}
                            />
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Tree Transfer" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Customize render list with Tree component.</Text></p>
                        <TreeTransfer dataSource={treeData} targetKeys={targetKeysTree} onChange={onChangeTree} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add status to Transfer with <Text type="secondary" code>status</Text>, which could be <Text type="secondary" code>error</Text> or <Text type="secondary" code>warning</Text>.</Text></p>
                        <Space direction="vertical">
                            <Transfer status="error" />
                            <Transfer status="warning" showSearch />
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiTransfer
