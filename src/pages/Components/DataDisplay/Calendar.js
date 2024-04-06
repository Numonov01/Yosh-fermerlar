import React, { useState } from 'react';
import { Alert, Badge, Calendar, Card, Col, Radio, Row, Select, Typography } from 'antd';
import { themecolor } from '../../../config';
import dayjs from 'dayjs';

// Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

const getListData = (value) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                {
                    type: 'warning',
                    content: 'This is warning event.',
                },
                {
                    type: 'success',
                    content: 'This is usual event.',
                },
            ];
            break;
        case 10:
            listData = [
                {
                    type: 'warning',
                    content: 'This is warning event.',
                },
                {
                    type: 'success',
                    content: 'This is usual event.',
                },
                {
                    type: 'error',
                    content: 'This is error event.',
                },
            ];
            break;
        case 15:
            listData = [
                {
                    type: 'warning',
                    content: 'This is warning event',
                },
                {
                    type: 'success',
                    content: 'This is very long usual event。。....',
                },
                {
                    type: 'error',
                    content: 'This is error event 1.',
                },
                {
                    type: 'error',
                    content: 'This is error event 2.',
                },
                {
                    type: 'error',
                    content: 'This is error event 3.',
                },
                {
                    type: 'error',
                    content: 'This is error event 4.',
                },
            ];
            break;
        default:
    }
    return listData || [];
};
const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const Calender = () => {
    // page title
    document.title = "Calender" + process.env.REACT_APP_PAGE_TITLE;

    const MainChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    //Notice Calendar
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    //Selectable Calendar
    const [value, setValue] = useState(() => dayjs('2017-01-25'));
    const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };

    //card calendar
    const wrapperStyle = {
        width: '330px',
        border: '1px solid',
        borderColor: themecolor.token.colorBorder,
        borderRadius: themecolor.token.borderRadiusLG,
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Calender" />

            <Row>
                <Col span={24} className="gutter-row">
                    <Card title="Basic Examples" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">A basic calendar component with Year/Month switch.</Text></p>
                        <Calendar MainChange={MainChange} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Notice Calendar" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">This component can be rendered by using <Text code>dateCellRender</Text> and <Text code>monthCellRender</Text> with the data you need.</Text></p>
                        <Calendar cellRender={cellRender} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Selectable Calendar" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">A basic calendar component with Year/Month switch.</Text></p>
                        <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
                        <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Row gutter={[16]}>
                        <Col span={12} className="gutter-row">
                            <Card title="Card Calendar" style={{ marginBottom: customStyles.margin }}>
                                <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Nested inside a container element for rendering in limited space.</Text></p>
                                <div style={wrapperStyle}>
                                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                </div>
                            </Card>{/* end card */}
                        </Col>{/* end col */}
                        <Col span={12} className="gutter-row">
                            <Card title="Customize Header" style={{ marginBottom: customStyles.margin }}>
                                <p style={{ marginBottom: customStyles.margin }}><Text type="secondary">Customize Calendar header content.</Text></p>
                                <div style={wrapperStyle}>
                                    <Calendar
                                        fullscreen={false}
                                        headerRender={({ value, type, onChange, onTypeChange }) => {
                                            const start = 0;
                                            const end = 12;
                                            const monthOptions = [];

                                            let current = value.clone();
                                            const localeData = value.localeData();
                                            const months = [];
                                            for (let i = 0; i < 12; i++) {
                                                current = current.month(i);
                                                months.push(localeData.monthsShort(current));
                                            }

                                            for (let i = start; i < end; i++) {
                                                monthOptions.push(
                                                    <Select.Option key={i} value={i} className="month-item">
                                                        {months[i]}
                                                    </Select.Option>,
                                                );
                                            }

                                            const year = value.year();
                                            const month = value.month();
                                            const options = [];
                                            for (let i = year - 10; i < year + 10; i += 1) {
                                                options.push(
                                                    <Select.Option key={i} value={i} className="year-item">
                                                        {i}
                                                    </Select.Option>,
                                                );
                                            }
                                            return (
                                                <div style={{ padding: themecolor.token.paddingSM }}>
                                                    <Typography.Title level={5}>Custom header</Typography.Title>
                                                    <Row gutter={8}>
                                                        <Col>
                                                            <Radio.Group
                                                                size="small"
                                                                onChange={(e) => onTypeChange(e.target.value)}
                                                                value={type}
                                                            >
                                                                <Radio.Button value="month">Month</Radio.Button>
                                                                <Radio.Button value="year">Year</Radio.Button>
                                                            </Radio.Group>
                                                        </Col>
                                                        <Col>
                                                            <Select
                                                                size="small"
                                                                className="my-year-select"
                                                                value={year}
                                                                onChange={(newYear) => {
                                                                    const now = value.clone().year(newYear);
                                                                    onChange(now);
                                                                }}
                                                            >
                                                                {options}
                                                            </Select>
                                                        </Col>
                                                        <Col>
                                                            <Select
                                                                size="small"
                                                                value={month}
                                                                onChange={(newMonth) => {
                                                                    const now = value.clone().month(newMonth);
                                                                    onChange(now);
                                                                }}
                                                            >
                                                                {monthOptions}
                                                            </Select>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            );
                                        }}
                                        onPanelChange={onPanelChange}
                                    />
                                </div>
                            </Card>{/* end card */}
                        </Col>{/* end col */}
                    </Row>
                </Col>
            </Row>{/* end row */}
        </>
    )
}

export default Calender
