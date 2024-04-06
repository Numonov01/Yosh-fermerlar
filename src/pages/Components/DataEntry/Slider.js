import React, { useState } from 'react';
import { Card, Col, InputNumber, Row, Slider, Space, Switch, Typography } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

const IconWrapperStyle = styled.div`
    position: relative;
    padding: 0px 30px;

    .anticon {
        position: absolute;
        top: -2px;
        width: 16px;
        height: 16px;
        color: rgba(0, 0, 0, 0.25);
        font-size: 16px;
        line-height: 1;
    }

    .icon-wrapper-active {
        color: rgba(0, 0, 0, 0.45);
    }
    .anticon:first-child {
        
        /* RTL Styles */
        ${({ theme }) =>
        theme.direction === 'rtl' &&
        css`
            right: 0;
        `}
        /* LTR Styles */
        ${({ theme }) =>
        theme.direction !== 'rtl' &&
        css`
            left: 0;
        `}
    }

    .anticon:last-child {
        /* RTL Styles */
        ${({ theme }) =>
        theme.direction === 'rtl' &&
        css`
            left: 0;
        `}
        /* LTR Styles */
        ${({ theme }) =>
        theme.direction !== 'rtl' &&
        css`
            right: 0;
        `}
    }
`;

const VerticalStyle = styled.div`
    display: inline-block;
    height: 300px;
    
    /* RTL Styles */
    ${({ theme }) =>
        theme.direction === 'rtl' &&
        css`
            margin-left: 70px;
        `}
      /* LTR Styles */
      ${({ theme }) =>
        theme.direction !== 'rtl' &&
        css`
            margin-left: 70px;
      `}
`;

//Slider with InputNumber
const IntegerStep = () => {
    const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
        setInputValue(newValue);
    };
    return (
        <Row>
            <Col span={20}>
                <Slider
                    min={1}
                    max={20}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={20}
                    style={{
                        margin: '0 16px',
                    }}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};
const DecimalStep = () => {
    const [inputValue, setInputValue] = useState(0);
    const onChange = (value) => {
        if (isNaN(value)) {
            return;
        }
        setInputValue(value);
    };
    return (
        <Row>
            <Col span={20}>
                <Slider
                    min={0}
                    max={1}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                    step={0.01}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={0}
                    max={1}
                    style={{
                        margin: '0 16px',
                    }}
                    step={0.01}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};

//Slider with icon
const IconSlider = (props) => {
    const { max, min } = props;
    const [value, setValue] = useState(0);
    const mid = Number(((max - min) / 2).toFixed(5));
    const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
    return (
        <IconWrapperStyle>
            <FrownOutlined className={preColorCls} />
            <Slider {...props} onChange={setValue} value={value} />
            <SmileOutlined className={nextColorCls} />
        </IconWrapperStyle>
    );
};

//Customize tooltip
const formatter = (value) => `${value}%`;

//Event
const onChangeEvent = (value) => {
    console.log('onChange: ', value);
};
const onAfterChange = (value) => {
    console.log('onAfterChange: ', value);
};

//Graduated slider
const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
        style: {
            color: '#f50',
        },
        label: <strong>100°C</strong>,
    },
};

//Vertical
const marksVertical = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
        style: {
            color: '#f50',
        },
        label: <strong>100°C</strong>,
    },
};

const UiSlider = () => {
    // page title
    document.title = "Slider" + process.env.REACT_APP_PAGE_TITLE;

    // basic
    const [disabled, setDisabled] = useState(false);
    const onChange = (checked) => {
        setDisabled(checked);
    };

    //Reverse
    const [reverse, setReverse] = useState(true);

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="Slider" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic slider. When <Text type="secondary" code>range</Text> is <Text type="secondary" code>true</Text>, display as dual thumb mode. When <Text type="secondary" code>disable</Text> is <Text type="secondary" code>true</Text>, the slider will not be interactable.</Text></p>
                        <Slider defaultValue={30} disabled={disabled} />
                        <Slider range defaultValue={[20, 50]} disabled={disabled} />
                        Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
                    </Card>{/* end card */}
                    <Card title="Slider with Icon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can add an icon beside the slider to make it meaningful.</Text></p>
                        <IconSlider min={0} max={20} />
                    </Card>{/* end card */}
                    <Card title="Event" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The <Text type="secondary" code>onChange</Text> callback function will fire when the user changes the slider's value. The <Text type="secondary" code>onAfterChange</Text> callback function will fire when <Text type="secondary" code>onmouseup</Text> fired.</Text></p>
                        <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
                        <Slider
                            range
                            step={10}
                            defaultValue={[20, 50]}
                            onChange={onChangeEvent}
                            onAfterChange={onAfterChange}
                        />
                    </Card>{/* end card */}
                    <Card title="Vertical" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The vertical Slider.</Text></p>
                        <VerticalStyle>
                            <Slider vertical defaultValue={30} />
                        </VerticalStyle>
                        <VerticalStyle>
                            <Slider vertical range step={10} defaultValue={[20, 50]} />
                        </VerticalStyle>
                        <VerticalStyle>
                            <Slider vertical range marks={marksVertical} defaultValue={[26, 37]} />
                        </VerticalStyle>
                    </Card>{/* end card */}
                    <Card title="Reverse" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Using <Text type="secondary" code>reverse</Text> to render slider reversely.</Text></p>
                        <Slider defaultValue={30} reverse={reverse} />
                        <Slider range defaultValue={[20, 50]} reverse={reverse} />
                        Reversed: <Switch size="small" checked={reverse} onChange={setReverse} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Slider with InputNumber" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Synchronize with InputNumber component.</Text></p>
                        <Space
                            style={{
                                width: '100%',
                            }}
                            direction="vertical"
                        >
                            <IntegerStep />
                            <DecimalStep />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Customize Tooltip" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use <Text type="secondary" code>tooltip.formatter</Text> to format content of <Text type="secondary" code>Tooltip</Text>. If <Text type="secondary" code>tooltip.formatter</Text> is null, hide it.</Text></p>
                        <Slider
                            tooltip={{
                                formatter,
                            }}
                        />
                        <Slider
                            tooltip={{
                                formatter: null,
                            }}
                        />
                    </Card>{/* end card */}
                    <Card title="Graduated slider" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Using <Text type="secondary" code>marks</Text> property to mark a graduated slider, use <Text type="secondary" code>value</Text> or <Text type="secondary" code>defaultValue</Text> to specify the position of thumb. When <Text type="secondary" code>included</Text> is false, means that different thumbs are coordinative. when <Text type="secondary" code>step</Text> is null, users can only slide the thumbs onto marks.</Text></p>
                        <h4>included=true</h4>
                        <Slider marks={marks} defaultValue={37} />
                        <Slider range marks={marks} defaultValue={[26, 37]} />

                        <h4>included=false</h4>
                        <Slider marks={marks} included={false} defaultValue={37} />

                        <h4>marks & step</h4>
                        <Slider marks={marks} step={10} defaultValue={37} />

                        <h4>step=null</h4>
                        <Slider marks={marks} step={null} defaultValue={37} />
                    </Card>{/* end card */}
                    <Card title="Control visible of ToolTip" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">When <Text type="secondary" code>tooltip.open</Text> is <Text type="secondary" code>true</Text>, ToolTip will always show, or ToolTip will not show anyway, even if dragging or hovering.</Text></p>
                        <Slider
                            defaultValue={30}
                            tooltip={{
                                open: true,
                            }}
                        />
                    </Card>{/* end card */}
                    <Card title="Draggable Track" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Make range track draggable when set <Text type="secondary" code>range.draggableTrack</Text>.</Text></p>
                        <Slider
                            range={{
                                draggableTrack: true,
                            }}
                            defaultValue={[20, 50]}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiSlider
