import React, { useState } from 'react';
import { Card, Col, Radio, Row, Space, Switch, TreeSelect, Typography } from 'antd';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;
const { SHOW_PARENT } = TreeSelect;

const customStyles = usecustomStyles();

//basic 
const treeData = [
    {
        value: 'parent 1',
        title: 'parent 1',
        children: [
            {
                value: 'parent 1-0',
                title: 'parent 1-0',
                children: [
                    {
                        value: 'leaf1',
                        title: 'leaf1',
                    },
                    {
                        value: 'leaf2',
                        title: 'leaf2',
                    },
                ],
            },
            {
                value: 'parent 1-1',
                title: 'parent 1-1',
                children: [
                    {
                        value: 'leaf3',
                        title: (
                            <b
                                style={{
                                    color: '#08c',
                                }}
                            >
                                leaf3
                            </b>
                        ),
                    },
                ],
            },
        ],
    },
];

//Multiple selection usage.
const treeDataMultiple = [
    {
        value: 'parent 1',
        title: 'parent 1',
        children: [
            {
                value: 'parent 1-0',
                title: 'parent 1-0',
                children: [
                    {
                        value: 'leaf1',
                        title: 'my leaf',
                    },
                    {
                        value: 'leaf2',
                        title: 'your leaf',
                    },
                ],
            },
            {
                value: 'parent 1-1',
                title: 'parent 1-1',
                children: [
                    {
                        value: 'sss',
                        title: (
                            <b
                                style={{
                                    color: '#08c',
                                }}
                            >
                                sss
                            </b>
                        ),
                    },
                ],
            },
        ],
    },
];

//Generate from tree data
const treeDataGenerate = [
    {
        title: 'Node1',
        value: '0-0',
        children: [
            {
                title: 'Child Node1',
                value: '0-0-1',
            },
            {
                title: 'Child Node2',
                value: '0-0-2',
            },
        ],
    },
    {
        title: 'Node2',
        value: '0-1',
    },
];

const UiTreeSelect = () => {
    // page title
    document.title = "TreeSelect" + process.env.REACT_APP_PAGE_TITLE;

    //basic 
    const [value, setValue] = useState();
    const onChange = (newValue) => {
        setValue(newValue);
    };

    //Multiple selection usage.
    const [valueMultiple, setValueMultiple] = useState();
    const onChangeMultiple = (newValue) => {
        console.log(newValue);
        setValueMultiple(newValue);
    };

    //Generate from tree data
    const [valueGenerate, setValueGenerate] = useState();
    const onChangeGenerate = (newValue) => {
        console.log(newValue);
        setValueGenerate(newValue);
    };

    //Multiple and Checkable.
    const tProps = {
        treeData,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Please select',
        style: {
            width: '100%',
        },
    };

    //Asynchronous loading
    const [valueAsynchronous, setValueAsynchronous] = useState();
    const [treeDataAsynchronous, setTreeDataAsynchronous] = useState([
        {
            id: 1,
            pId: 0,
            value: '1',
            title: 'Expand to load',
        },
        {
            id: 2,
            pId: 0,
            value: '2',
            title: 'Expand to load',
        },
        {
            id: 3,
            pId: 0,
            value: '3',
            title: 'Tree Node',
            isLeaf: true,
        },
    ]);
    const genTreeNode = (parentId, isLeaf = false) => {
        const random = Math.random().toString(36).substring(2, 6);
        return {
            id: random,
            pId: parentId,
            value: random,
            title: isLeaf ? 'Tree Node' : 'Expand to load',
            isLeaf,
        };
    };
    const onLoadData = ({ id }) =>
        new Promise((resolve) => {
            setTimeout(() => {
                setTreeDataAsynchronous(
                    treeData.concat([genTreeNode(id, false), genTreeNode(id, true), genTreeNode(id, true)]),
                );
                resolve(undefined);
            }, 300);
        });
    const onChangeAsynchronous = (newValue) => {
        console.log(newValue);
        setValueAsynchronous(newValue);
    };

    //Show Tree Line
    const [treeLine, setTreeLine] = useState(true);
    const [showLeafIcon, setShowLeafIcon] = useState(false);

    //Placement
    const [placement, SetPlacement] = useState('topLeft');
    const placementChange = (e) => {
        SetPlacement(e.target.value);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="TreeSelect" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The most basic usage.</Text></p>
                        <TreeSelect
                            showSearch
                            style={{
                                width: '100%',
                            }}
                            value={value}
                            dropdownStyle={{
                                maxHeight: 400,
                                overflow: 'auto',
                            }}
                            placeholder="Please select"
                            allowClear
                            treeDefaultExpandAll
                            onChange={onChange}
                            treeData={treeData}
                        />
                    </Card>{/* end card */}
                    <Card title="Generate from Tree Data" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The tree structure can be populated using <Text type="secondary" code>treeData</Text> property. This is a quick and easy way to provide the tree content.</Text></p>
                        <TreeSelect
                            style={{
                                width: '100%',
                            }}
                            value={valueGenerate}
                            dropdownStyle={{
                                maxHeight: 400,
                                overflow: 'auto',
                            }}
                            treeData={treeDataGenerate}
                            placeholder="Please select"
                            treeDefaultExpandAll
                            onChange={onChangeGenerate}
                        />
                    </Card>{/* end card */}
                    <Card title="Asynchronous Loading" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Asynchronous loading tree node.</Text></p>
                        <TreeSelect
                            treeDataSimpleMode
                            style={{
                                width: '100%',
                            }}
                            value={valueAsynchronous}
                            dropdownStyle={{
                                maxHeight: 400,
                                overflow: 'auto',
                            }}
                            placeholder="Please select"
                            onChange={onChangeAsynchronous}
                            loadData={onLoadData}
                            treeData={treeDataAsynchronous} 
                        />
                    </Card>{/* end card */}
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

                        <TreeSelect
                            showSearch
                            dropdownStyle={{
                                maxHeight: 400,
                                overflow: 'auto',
                                minWidth: 300,
                            }}
                            placeholder="Please select"
                            placement={placement}
                            allowClear
                            treeDefaultExpandAll
                            treeData={treeData}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Multiple Selection" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Multiple selection usage.</Text></p>
                        <TreeSelect
                            showSearch
                            style={{
                                width: '100%',
                            }}
                            value={valueMultiple}
                            dropdownStyle={{
                                maxHeight: 400,
                                overflow: 'auto',
                            }}
                            placeholder="Please select"
                            allowClear
                            multiple
                            treeDefaultExpandAll
                            onChange={onChangeMultiple}
                            treeData={treeDataMultiple}
                        />
                    </Card>{/* end card */}
                    <Card title="Checkable" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Multiple and checkable.</Text></p>
                        <TreeSelect {...tProps} />
                    </Card>{/* end card */}
                    <Card title="Show Tree Line" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use <Text type="secondary" code>treeLine</Text> to show the line style.</Text></p>
                        <Space direction="vertical">
                            <Switch
                                checkedChildren="treeLine"
                                unCheckedChildren="treeLine"
                                checked={treeLine}
                                onChange={() => setTreeLine(!treeLine)}
                            />
                            <Switch
                                disabled={!treeLine}
                                checkedChildren="showLeafIcon"
                                unCheckedChildren="showLeafIcon"
                                checked={showLeafIcon}
                                onChange={() => setShowLeafIcon(!showLeafIcon)}
                            />
                            <TreeSelect
                                treeLine={
                                    treeLine && {
                                        showLeafIcon,
                                    }
                                }
                                style={{
                                    width: 300,
                                }}
                                treeData={treeData}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add status to TreeSelect with <Text type="secondary" code>status</Text>, which could be <Text type="secondary" code>error</Text>  or <Text type="secondary" code>warning</Text>.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <TreeSelect
                                status="error"
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Error"
                            />
                            <TreeSelect
                                status="warning"
                                style={{
                                    width: '100%',
                                }}
                                multiple
                                placeholder="Warning multiple"
                            />
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiTreeSelect
