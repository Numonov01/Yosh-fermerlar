import React, { useState } from 'react';
import { Button, Card, Checkbox, Col, Divider, Row, Space, Typography } from 'antd';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

//basic checkbox
const onChangeBasic = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

//Checkbox Group
const onChangeGroup = (checkedValues) => {
    console.log('checked = ', checkedValues);
};
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
        disabled: false,
    },
];

//Check all
const CheckboxGroup = Checkbox.Group;
const plainOptionsCheckAll = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

//Use with Grid
const onChangeGrid = (checkedValues) => {
    console.log('checked = ', checkedValues);
};

const UiCheckbox = () => {
    // page title
    document.title = "Checkbox" + process.env.REACT_APP_PAGE_TITLE;

    //Controlled Checkbox
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const toggleChecked = () => {
        setChecked(!checked);
    };
    const toggleDisable = () => {
        setDisabled(!disabled);
    };
    const onChange = (e) => {
        console.log('checked = ', e.target.checked);
        setChecked(e.target.checked);
    };
    const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;

    //Check all
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const onChangeCheckAll = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptionsCheckAll.length);
        setCheckAll(list.length === plainOptionsCheckAll.length);
    };
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptionsCheckAll : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="Checkbox" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic usage of checkbox.</Text></p>
                        <Checkbox onChange={onChangeBasic}>Checkbox</Checkbox>
                    </Card>{/* end card */}
                    <Card title="Controlled Checkbox" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Communicated with other components.</Text></p>
                        <p
                            style={{
                                marginBottom: '20px',
                            }}
                        >
                            <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
                                {label}
                            </Checkbox>
                        </p>
                        <p>
                            <Button type="primary" size="small" onClick={toggleChecked}>
                                {!checked ? 'Check' : 'Uncheck'}
                            </Button>
                            <Button
                                style={{
                                    margin: '0 10px',
                                }}
                                type="primary"
                                size="small"
                                onClick={toggleDisable}
                            >
                                {!disabled ? 'Disable' : 'Enable'}
                            </Button>
                        </p>
                    </Card>{/* end card */}
                    <Card title="Check all" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The <Text type="secondary" code>indeterminate</Text> property can help you to achieve a 'check all' effect.</Text></p>
                        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                            Check all
                        </Checkbox>
                        <Divider />
                        <CheckboxGroup options={plainOptionsCheckAll} value={checkedList} onChange={onChangeCheckAll} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Disabled" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Disabled checkbox.</Text></p>
                        <Space wrap>
                            <Checkbox defaultChecked={false} disabled />
                            <Checkbox indeterminate disabled />
                            <Checkbox defaultChecked disabled />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Checkbox Group" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Generate a group of checkboxes from an array.</Text></p>
                        <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChangeGroup} style={{ marginBottom: customStyles.marginXS }} />
                        <br />
                        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChangeGroup} style={{ marginBottom: customStyles.marginXS }} />
                        <br />
                        <Checkbox.Group
                            options={optionsWithDisabled}
                            disabled
                            defaultValue={['Apple']}
                            onChange={onChangeGroup}
                        />
                    </Card>{/* end card */}
                    <Card title="Use with Grid" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">We can use Checkbox and Grid in Checkbox.Group, to implement complex layout.</Text></p>
                        <Checkbox.Group
                            style={{
                                width: '100%',
                            }}
                            onChange={onChangeGrid}
                        >
                            <Row>
                                <Col span={8}>
                                    <Checkbox value="A">A</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="B">B</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="C">C</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="D">D</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="E">E</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiCheckbox
