import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Divider, Input, Row, Space, Tag, Tooltip, Typography, theme } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, MinusCircleOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text, Link } = Typography;

const customStyles = usecustomStyles();

//basic
const log = (e) => {
    console.log(e);
};
const preventDefault = (e) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
};

//CheckableTag
const { CheckableTag } = Tag;
const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

const UiTag = () => {
    // page title
    document.title = "Tag" + process.env.REACT_APP_PAGE_TITLE;

    //Add & Remove Dynamically
    const { token } = theme.useToken();
    const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3']);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef(null);
    const editInputRef = useRef(null);
    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);
    useEffect(() => {
        editInputRef.current?.focus();
    }, [inputValue]);
    const handleClose = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
    };
    const showInput = () => {
        setInputVisible(true);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };
    const handleEditInputChange = (e) => {
        setEditInputValue(e.target.value);
    };
    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setInputValue('');
    };
    const tagInputStyle = {
        width: 78,
        verticalAlign: 'top',
    };
    const tagPlusStyle = {
        background: token.colorBgContainer,
        borderStyle: 'dashed',
    };

    //CheckableTag
    const [selectedTags, setSelectedTags] = useState(['Books']);
    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Tag" />

            <Row gutter={[24]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Usage of basic Tag, and it could be closable and customize close button by set <Text code>closeIcon</Text> property, will display default close button when <Text code>closeIcon</Text> is setting to <Text code>true</Text>. Closable Tag supports <Text code>onClose</Text> events.</Text></p>
                        <Space size={[0, 8]} wrap>
                            <Tag>Tag 1</Tag>
                            <Tag>
                                <Link to="#!">Link</Link>
                            </Tag>
                            <Tag closeIcon onClose={preventDefault}>
                                Prevent Default
                            </Tag>
                            <Tag closeIcon={<CloseCircleOutlined />} onClose={log}>
                                Tag 2
                            </Tag>
                        </Space>
                    </Card>
                    <Card title="Add & Remove Dynamically" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Generating a set of Tags by array, you can add and remove dynamically.</Text></p>
                        <Space size={[0, 8]} wrap>
                            <Space size={[0, 8]} wrap>
                                {tags.map((tag, index) => {
                                    if (editInputIndex === index) {
                                        return (
                                            <Input
                                                ref={editInputRef}
                                                key={tag}
                                                size="small"
                                                style={tagInputStyle}
                                                value={editInputValue}
                                                onChange={handleEditInputChange}
                                                onBlur={handleEditInputConfirm}
                                                onPressEnter={handleEditInputConfirm}
                                            />
                                        );
                                    }
                                    const isLongTag = tag.length > 20;
                                    const tagElem = (
                                        <Tag
                                            key={tag}
                                            closable={index !== 0}
                                            style={{
                                                userSelect: 'none',
                                            }}
                                            onClose={() => handleClose(tag)}
                                        >
                                            <span
                                                onDoubleClick={(e) => {
                                                    if (index !== 0) {
                                                        setEditInputIndex(index);
                                                        setEditInputValue(tag);
                                                        e.preventDefault();
                                                    }
                                                }}
                                            >
                                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                            </span>
                                        </Tag>
                                    );
                                    return isLongTag ? (
                                        <Tooltip title={tag} key={tag}>
                                            {tagElem}
                                        </Tooltip>
                                    ) : (
                                        tagElem
                                    );
                                })}
                            </Space>
                            {inputVisible ? (
                                <Input
                                    ref={inputRef}
                                    type="text"
                                    size="small"
                                    style={tagInputStyle}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleInputConfirm}
                                    onPressEnter={handleInputConfirm}
                                />
                            ) : (
                                <Tag style={tagPlusStyle} onClick={showInput}>
                                    <PlusOutlined /> New Tag
                                </Tag>
                            )}
                        </Space>
                    </Card>
                    <Card title="Status Tag" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">We preset five different colors, you can set color property such as <Text code>success</Text>, <Text code>processing</Text>, <Text code>error</Text>, <Text code>default</Text> and <Text code>warning</Text> to indicate specific status.</Text></p>
                        <Divider orientation="left">Without icon</Divider>
                        <Space size={[0, 8]} wrap>
                            <Tag color="success">success</Tag>
                            <Tag color="processing">processing</Tag>
                            <Tag color="error">error</Tag>
                            <Tag color="warning">warning</Tag>
                            <Tag color="default">default</Tag>
                        </Space>
                        <Divider orientation="left">With icon</Divider>
                        <Space size={[0, 8]} wrap>
                            <Tag icon={<CheckCircleOutlined />} color="success">
                                success
                            </Tag>
                            <Tag icon={<SyncOutlined spin />} color="processing">
                                processing
                            </Tag>
                            <Tag icon={<CloseCircleOutlined />} color="error">
                                error
                            </Tag>
                            <Tag icon={<ExclamationCircleOutlined />} color="warning">
                                warning
                            </Tag>
                            <Tag icon={<ClockCircleOutlined />} color="default">
                                waiting
                            </Tag>
                            <Tag icon={<MinusCircleOutlined />} color="default">
                                stop
                            </Tag>
                        </Space>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Colorful Tag" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">We preset a series of colorful tag styles for use in different situations. You can also set it to a hex color string for custom color.</Text></p>
                        <Divider orientation="left">Presets</Divider>
                        <Space size={[0, 8]} wrap>
                            <Tag color="magenta">magenta</Tag>
                            <Tag color="red">red</Tag>
                            <Tag color="volcano">volcano</Tag>
                            <Tag color="orange">orange</Tag>
                            <Tag color="gold">gold</Tag>
                            <Tag color="lime">lime</Tag>
                            <Tag color="green">green</Tag>
                            <Tag color="cyan">cyan</Tag>
                            <Tag color="blue">blue</Tag>
                            <Tag color="geekblue">geekblue</Tag>
                            <Tag color="purple">purple</Tag>
                        </Space>
                        <Divider orientation="left">Custom</Divider>
                        <Space size={[0, 8]} wrap>
                            <Tag color="#f50">#f50</Tag>
                            <Tag color="#2db7f5">#2db7f5</Tag>
                            <Tag color="#87d068">#87d068</Tag>
                            <Tag color="#108ee9">#108ee9</Tag>
                        </Space>
                    </Card>
                    <Card title="Checkable" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary"><Text code>CheckableTag</Text> works like Checkbox, click it to toggle checked state.</Text></p>
                        <span
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Categories:
                        </span>
                        <Space size={[0, 8]} wrap>
                            {tagsData.map((tag) => (
                                <CheckableTag
                                    key={tag}
                                    checked={selectedTags.includes(tag)}
                                    onChange={(checked) => handleChange(tag, checked)}
                                >
                                    {tag}
                                </CheckableTag>
                            ))}
                        </Space>
                    </Card>
                    <Card title="Borderless" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">borderless.</Text></p>
                        <Space size={[0, 'small']} wrap>
                            <Tag bordered={false}>Tag 1</Tag>
                            <Tag bordered={false}>Tag 2</Tag>
                            <Tag bordered={false} closable>
                                Tag 3
                            </Tag>
                            <Tag bordered={false} closable>
                                Tag 4
                            </Tag>
                        </Space>
                        <Divider />
                        <Space size={[0, 'small']} wrap>
                            <Tag bordered={false} color="processing">
                                processing
                            </Tag>
                            <Tag bordered={false} color="success">
                                success
                            </Tag>
                            <Tag bordered={false} color="error">
                                error
                            </Tag>
                            <Tag bordered={false} color="warning">
                                warning
                            </Tag>
                            <Tag bordered={false} color="magenta">
                                magenta
                            </Tag>
                            <Tag bordered={false} color="red">
                                red
                            </Tag>
                            <Tag bordered={false} color="volcano">
                                volcano
                            </Tag>
                            <Tag bordered={false} color="orange">
                                orange
                            </Tag>
                            <Tag bordered={false} color="gold">
                                gold
                            </Tag>
                            <Tag bordered={false} color="lime">
                                lime
                            </Tag>
                            <Tag bordered={false} color="green">
                                green
                            </Tag>
                            <Tag bordered={false} color="cyan">
                                cyan
                            </Tag>
                            <Tag bordered={false} color="blue">
                                blue
                            </Tag>
                            <Tag bordered={false} color="geekblue">
                                geekblue
                            </Tag>
                            <Tag bordered={false} color="purple">
                                purple
                            </Tag>
                        </Space>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiTag
