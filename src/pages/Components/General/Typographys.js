import React, { useState, useMemo } from 'react';
import { Card, Col, Radio, Row, Slider, Space, Switch, Typography } from 'antd';
import { CheckOutlined, HighlightOutlined, SmileFilled, SmileOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text, Link, Paragraph } = Typography;

const EllipsisMiddle = ({ suffixCount, children }) => {
    const start = children.slice(0, children.length - suffixCount).trim();
    const suffix = children.slice(-suffixCount).trim();
    return (
        <Text
            style={{
                maxWidth: '100%',
            }}
            ellipsis={{
                suffix,
            }}
        >
            {start}
        </Text>
    );
};

const UiTypography = () => {
    // page title
    document.title = "Typography" + process.env.REACT_APP_PAGE_TITLE;

    const [editableStr, setEditableStr] = useState('This is an editable text.');
    const [editableStrWithSuffix, setEditableStrWithSuffix] = useState(
        'This is a loooooooooooooooooooooooooooooooong editable text with suffix.',
    );
    const [editableStrWithSuffixStartPart, editableStrWithSuffixSuffixPart] = useMemo(
        () => [editableStrWithSuffix.slice(0, -12), editableStrWithSuffix.slice(-12)],
        [editableStrWithSuffix],
    );
    const [customIconStr, setCustomIconStr] = useState('Custom Edit icon and replace tooltip text.');
    const [clickTriggerStr, setClickTriggerStr] = useState(
        'Text or icon as trigger - click to start editing.',
    );
    const [chooseTrigger, setChooseTrigger] = useState(['icon']);
    const [customEnterIconStr, setCustomEnterIconStr] = useState(
        'Editable text with a custom enter icon in edit field.',
    );
    const [noEnterIconStr, setNoEnterIconStr] = useState(
        'Editable text with no enter icon in edit field.',
    );
    const [hideTooltipStr, setHideTooltipStr] = useState('Hide Edit tooltip.');
    const [lengthLimitedStr, setLengthLimitedStr] = useState(
        'This is an editable text with limited length.',
    );
    const radioToState = (input) => {
        switch (input) {
            case 'text':
                return ['text'];
            case 'both':
                return ['icon', 'text'];
            case 'icon':
            default:
                return ['icon'];
        }
    };
    const stateToRadio = useMemo(() => {
        if (chooseTrigger.includes('text')) {
            return chooseTrigger.includes('icon') ? 'both' : 'text';
        }
        return 'icon';
    }, [chooseTrigger]);

    //ellipsis components
    const [ellipsis, setEllipsis] = useState(true);

    //suffix components
    const [rows, setRows] = useState(1);

    const article =
        "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";


    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="General" pageTitle="Typography" />

            <Row gutter={[20]}>
                <Col span={24} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Title Component">
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Display title in different level.</Text></p>
                        <div>
                            <Title>h1. Ant Design</Title>
                            <Title level={2}>h2. Ant Design</Title>
                            <Title level={3}>h3. Ant Design</Title>
                            <Title level={4}>h4. Ant Design</Title>
                            <Title level={5}>h5. Ant Design</Title>
                        </div>
                    </Card>
                </Col>
                <Col span={24} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Text and Link Component">
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Provides multiple types of text and link.</Text></p>
                        <Space direction="vertical">
                            <Text>Ant Design (default)</Text>
                            <Text type="secondary">Ant Design (secondary)</Text>
                            <Text type="success">Ant Design (success)</Text>
                            <Text type="warning">Ant Design (warning)</Text>
                            <Text type="danger">Ant Design (danger)</Text>
                            <Text disabled>Ant Design (disabled)</Text>
                            <Text mark>Ant Design (mark)</Text>
                            <Text code>Ant Design (code)</Text>
                            <Text keyboard>Ant Design (keyboard)</Text>
                            <Text underline>Ant Design (underline)</Text>
                            <Text delete>Ant Design (delete)</Text>
                            <Text strong>Ant Design (strong)</Text>
                            <Text italic>Ant Design (italic)</Text>
                            <Link href="https://ant.design" target="_blank">
                                Ant Design (Link)
                            </Link>
                        </Space>
                    </Card>
                </Col>
                <Col span={24} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Interactive">
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Provide additional interactive capacity of editable and copyable.</Text></p>
                        <div>
                            <Row gutter={[16, 24]}>
                                <Col span={24} lg={12} className="gutter-row">
                                    <Paragraph
                                        editable={{
                                            onChange: setEditableStr,
                                        }}
                                    >
                                        {editableStr}
                                    </Paragraph>
                                    <Paragraph
                                        editable={{
                                            onChange: setEditableStrWithSuffix,
                                            text: editableStrWithSuffix,
                                        }}
                                        ellipsis={{
                                            suffix: editableStrWithSuffixSuffixPart,
                                        }}
                                    >
                                        {editableStrWithSuffixStartPart}
                                    </Paragraph>
                                    <Paragraph
                                        editable={{
                                            icon: <HighlightOutlined />,
                                            tooltip: 'click to edit text',
                                            onChange: setCustomIconStr,
                                        }}
                                    >
                                        {customIconStr}
                                    </Paragraph>
                                    Trigger edit with:{' '}
                                    <Radio.Group
                                        onChange={(e) => setChooseTrigger(radioToState(e.target.value))}
                                        value={stateToRadio}
                                    >
                                        <Radio value="icon">icon</Radio>
                                        <Radio value="text">text</Radio>
                                        <Radio value="both">both</Radio>
                                    </Radio.Group>
                                    <Paragraph
                                        editable={{
                                            tooltip: 'click to edit text',
                                            onChange: setClickTriggerStr,
                                            triggerType: chooseTrigger,
                                        }}
                                    >
                                        {clickTriggerStr}
                                    </Paragraph>
                                    <Paragraph
                                        editable={{
                                            icon: <HighlightOutlined />,
                                            tooltip: 'click to edit text',
                                            onChange: setCustomEnterIconStr,
                                            enterIcon: <CheckOutlined />,
                                        }}
                                    >
                                        {customEnterIconStr}
                                    </Paragraph>
                                    <Paragraph
                                        editable={{
                                            icon: <HighlightOutlined />,
                                            tooltip: 'click to edit text',
                                            onChange: setNoEnterIconStr,
                                            enterIcon: null,
                                        }}
                                    >
                                        {noEnterIconStr}
                                    </Paragraph>
                                    <Paragraph
                                        editable={{
                                            tooltip: false,
                                            onChange: setHideTooltipStr,
                                        }}
                                    >
                                        {hideTooltipStr}
                                    </Paragraph>
                                    <Paragraph
                                        editable={{
                                            onChange: setLengthLimitedStr,
                                            maxLength: 50,
                                            autoSize: {
                                                maxRows: 5,
                                                minRows: 3,
                                            },
                                        }}
                                    >
                                        {lengthLimitedStr}
                                    </Paragraph>
                                    <Typography.Title
                                        editable
                                        level={1}
                                        style={{
                                            margin: 0,
                                        }}
                                    >
                                        h1. Ant Design
                                    </Typography.Title>
                                    <Typography.Title
                                        editable
                                        level={2}
                                        style={{
                                            margin: 0,
                                        }}
                                    >
                                        h2. Ant Design
                                    </Typography.Title>
                                    <Typography.Title
                                        editable
                                        level={3}
                                        style={{
                                            margin: 0,
                                        }}
                                    >
                                        h3. Ant Design
                                    </Typography.Title>
                                    <Typography.Title
                                        editable
                                        level={4}
                                        style={{
                                            margin: 0,
                                        }}
                                    >
                                        h4. Ant Design
                                    </Typography.Title>
                                    <Typography.Title
                                        editable
                                        level={5}
                                        style={{
                                            margin: 0,
                                        }}
                                    >
                                        h5. Ant Design
                                    </Typography.Title>
                                </Col>
                                <Col span={24} lg={12} className="gutter-row">
                                    <Paragraph copyable>This is a copyable text.</Paragraph>
                                    <Paragraph
                                        copyable={{
                                            text: 'Hello, Ant Design!',
                                        }}
                                    >
                                        Replace copy text.
                                    </Paragraph>
                                    <Paragraph
                                        copyable={{
                                            icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
                                            tooltips: ['click here', 'you clicked!!'],
                                        }}
                                    >
                                        Custom Copy icon and replace tooltips text.
                                    </Paragraph>
                                    <Paragraph
                                        copyable={{
                                            tooltips: false,
                                        }}
                                    >
                                        Hide Copy tooltips.
                                    </Paragraph>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col span={24} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Ellipsis"
                        extra={<Switch
                            checked={ellipsis}
                            onChange={() => {
                                setEllipsis(!ellipsis);
                            }}
                        />}
                    >
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Multiple line ellipsis support. You can use <Text type="secondary" code>tooltip</Text> to config ellipsis tooltip. Recommend <Text type="secondary" code>expandable</Text> when have lots of content.</Text></p>
                        <div>

                            <Paragraph ellipsis={ellipsis}>
                                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                Design, a design language for background applications, is refined by Ant UED Team. Ant
                                Design, a design language for background applications, is refined by Ant UED Team. Ant
                                Design, a design language for background applications, is refined by Ant UED Team. Ant
                                Design, a design language for background applications, is refined by Ant UED Team. Ant
                                Design, a design language for background applications, is refined by Ant UED Team.
                            </Paragraph>

                            <Paragraph
                                ellipsis={
                                    ellipsis
                                        ? {
                                            rows: 2,
                                            expandable: true,
                                            symbol: 'more',
                                        }
                                        : false
                                }
                            >
                                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                Design, a design language for background applications, is refined by Ant UED Team. Ant
                                Design, a design language for background applications, is refined by Ant UED Team. Ant
                                Design, a design language for background applications, is refined by Ant UED Team. Ant
                                Design, a design language for background applications, is refined by Ant UED Team. Ant
                                Design, a design language for background applications, is refined by Ant UED Team.
                            </Paragraph>

                            <Text
                                style={
                                    ellipsis
                                        ? {
                                            width: 100,
                                        }
                                        : undefined
                                }
                                ellipsis={
                                    ellipsis
                                        ? {
                                            tooltip: 'I am ellipsis now!',
                                        }
                                        : false
                                }
                            >
                                Ant Design, a design language for background applications, is refined by Ant UED Team.
                            </Text>
                        </div>
                    </Card>
                </Col>
                <Col span={24} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Ellipsis from middle">
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can ellipsis content from middle by customize ellipsis.</Text></p>
                        <div>
                            <EllipsisMiddle suffixCount={12}>
                                In the process of internal desktop applications development, many different design specs and
                                implementations would be involved, which might cause designers and developers difficulties and
                                duplication and reduce the efficiency of development.
                            </EllipsisMiddle>
                        </div>
                    </Card>
                </Col>
                <Col span={24} className="gutter-row" style={{ marginBottom: customStyles.margin }}>
                    <Card title="Suffix">
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can ellipsis content from middle by customize ellipsis.</Text></p>
                        <div>
                            <Slider value={rows} min={1} max={10} onChange={setRows} />
                            <Paragraph
                                ellipsis={{
                                    rows,
                                    expandable: true,
                                    suffix: '--William Shakespeare',
                                    onEllipsis: (ellipsis) => {
                                        // console.log('Ellipsis changed:', ellipsis);
                                    },
                                }}
                                title={`${article}--William Shakespeare`}
                            >
                                {article}
                            </Paragraph>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UiTypography
