import React, { useState } from 'react';
import { Card, Col, DatePicker, Radio, Row, Select, Space, TimePicker, Typography } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

const { RangePicker } = DatePicker;
const { Option } = Select;

//basic
const onChange = (date, dateString) => {
    console.log(date, dateString);
};

//Switchable picker
const PickerWithType = ({ type, onChange }) => {
    if (type === 'time') return <TimePicker onChange={onChange} />;
    if (type === 'date') return <DatePicker onChange={onChange} />;
    return <DatePicker picker={type} onChange={onChange} />;
};

//Date Format
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
    `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
        .endOf('week')
        .format(weekFormat)}`;

//Choose Time
const onChangeChoose = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
};
const onOk = (value) => {
    console.log('onOk: ', value);
};

//Disabled
dayjs.extend(customParseFormat);
const dateFormatDisabled = 'YYYY-MM-DD';

//Disabled Date & Time
const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
});
const disabledRangeTime = (_, type) => {
    if (type === 'start') {
        return {
            disabledHours: () => range(0, 60).splice(4, 20),
            disabledMinutes: () => range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }
    return {
        disabledHours: () => range(0, 60).splice(20, 4),
        disabledMinutes: () => range(0, 31),
        disabledSeconds: () => [55, 56],
    };
};

//Preset Ranges
const onChangePreset = (date) => {
    if (date) {
        console.log('Date: ', date);
    } else {
        console.log('Clear');
    }
};
const onRangeChange = (dates, dateStrings) => {
    if (dates) {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    } else {
        console.log('Clear');
    }
};
const rangePresets = [
    {
        label: 'Last 7 Days',
        value: [dayjs().add(-7, 'd'), dayjs()],
    },
    {
        label: 'Last 14 Days',
        value: [dayjs().add(-14, 'd'), dayjs()],
    },
    {
        label: 'Last 30 Days',
        value: [dayjs().add(-30, 'd'), dayjs()],
    },
    {
        label: 'Last 90 Days',
        value: [dayjs().add(-90, 'd'), dayjs()],
    },
];

const UiDatePicker = () => {
    // page title
    document.title = "DatePicker" + process.env.REACT_APP_PAGE_TITLE;

    //Switchable picker
    const [type, setType] = useState('time');

    //Select range dates in 7 days
    const [dates, setDates] = useState(null);
    const [value, setValue] = useState(null);
    const disabledDateRange = (current) => {
        if (!dates) {
            return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
        return !!tooEarly || !!tooLate;
    };
    const onOpenChange = (open) => {
        if (open) {
            setDates([null, null]);
        } else {
            setDates(null);
        }
    };

    //Three Sizes
    const [size, setSize] = useState('middle');
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    //Placement
    const [placement, SetPlacement] = useState('topLeft');
    const placementChange = (e) => {
        SetPlacement(e.target.value);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="DatePicker" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic use case. Users can select or input a date in panel.</Text></p>
                        <Space direction="vertical">
                            <DatePicker onChange={onChange} />
                            <DatePicker onChange={onChange} picker="week" />
                            <DatePicker onChange={onChange} picker="month" />
                            <DatePicker onChange={onChange} picker="quarter" />
                            <DatePicker onChange={onChange} picker="year" />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Switchable picker" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Switch in different types of pickers by Select.</Text></p>
                        <Space>
                            <Select value={type} onChange={setType}>
                                <Option value="time">Time</Option>
                                <Option value="date">Date</Option>
                                <Option value="week">Week</Option>
                                <Option value="month">Month</Option>
                                <Option value="quarter">Quarter</Option>
                                <Option value="year">Year</Option>
                            </Select>
                            <PickerWithType type={type} onChange={(value) => console.log(value)} />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Choose Time" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">This property provide an additional time selection. When <Text type="secondary" code>showTime</Text> is an Object, its properties will be passed on to built-in <Text type="secondary" code>TimePicker</Text>.</Text></p>
                        <Space direction="vertical" size={12}>
                            <DatePicker showTime onChange={onChange} onOk={onOk} />
                            <RangePicker
                                showTime={{
                                    format: 'HH:mm',
                                }}
                                format="YYYY-MM-DD HH:mm"
                                onChange={onChangeChoose}
                                onOk={onOk}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Disabled Date & Time" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Disabled part of dates and time by <Text type="secondary" code>disabledDate</Text> and <Text type="secondary" code>disabledTime</Text> respectively, and <Text type="secondary" code>disabledTime</Text> only works with <Text type="secondary" code>showTime</Text>.</Text></p>
                        <Space direction="vertical" size={12}>
                            <DatePicker
                                format="YYYY-MM-DD HH:mm:ss"
                                disabledDate={disabledDate}
                                disabledTime={disabledDateTime}
                                showTime={{
                                    defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                                }}
                            />
                            <DatePicker picker="month" disabledDate={disabledDate} />
                            <RangePicker disabledDate={disabledDate} />
                            <RangePicker
                                disabledDate={disabledDate}
                                disabledTime={disabledRangeTime}
                                showTime={{
                                    hideDisabledOptions: true,
                                    defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
                                }}
                                format="YYYY-MM-DD HH:mm:ss"
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Extra Footer" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Render extra footer in panel for customized requirements.</Text></p>
                        <Space direction="vertical" size={12}>
                            <DatePicker renderExtraFooter={() => 'extra footer'} />
                            <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
                            <RangePicker renderExtraFooter={() => 'extra footer'} />
                            <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
                            <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Customized Cell Rendering" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">We can customize the rendering of the cells in the calendar by providing a <Text type="secondary" code>cellRender</Text> function to <Text type="secondary" code>DatePicker</Text>.</Text></p>
                        <Space direction="vertical" size={12}>
                            <DatePicker
                                cellRender={(current, info) => {
                                    if (info.type !== 'date') return info.originNode;
                                    const style = {};
                                    if (current.date() === 1) {
                                        style.border = '1px solid #1677ff';
                                        style.borderRadius = '50%';
                                    }
                                    return (
                                        <div className="ant-picker-cell-inner" style={style}>
                                            {current.date()}
                                        </div>
                                    );
                                }}
                            />
                            <RangePicker
                                cellRender={(current, info) => {
                                    if (info.type !== 'date') return info.originNode;
                                    const style = {};
                                    if (current.date() === 1) {
                                        style.border = '1px solid #1677ff';
                                        style.borderRadius = '50%';
                                    }
                                    return (
                                        <div className="ant-picker-cell-inner" style={style}>
                                            {current.date()}
                                        </div>
                                    );
                                }}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Three Sizes" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The input box comes in three sizes. <Text type="secondary" code>middle</Text> will be used if <Text type="secondary" code>size</Text> is omitted.</Text></p>
                        <Space direction="vertical" size={12}>
                            <Radio.Group value={size} onChange={handleSizeChange}>
                                <Radio.Button value="large">Large</Radio.Button>
                                <Radio.Button value="middle">middle</Radio.Button>
                                <Radio.Button value="small">Small</Radio.Button>
                            </Radio.Group>
                            <DatePicker size={size} />
                            <DatePicker size={size} picker="month" />
                            <RangePicker size={size} />
                            <DatePicker size={size} picker="week" />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add status to DatePicker with <Text type="secondary" code>status</Text>, which could be <Text type="secondary" code>error</Text> or <Text type="secondary" code>warning</Text>.</Text></p>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <DatePicker
                                status="error"
                                style={{
                                    width: '100%',
                                }}
                            />
                            <DatePicker
                                status="warning"
                                style={{
                                    width: '100%',
                                }}
                            />
                            <DatePicker.RangePicker
                                status="error"
                                style={{
                                    width: '100%',
                                }}
                            />
                            <DatePicker.RangePicker
                                status="warning"
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Range Picker" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Set range picker type by picker <Text type="secondary" code>prop</Text>.</Text></p>
                        <Space direction="vertical" size={12}>
                            <RangePicker />
                            <RangePicker showTime />
                            <RangePicker picker="week" />
                            <RangePicker picker="month" />
                            <RangePicker picker="quarter" />
                            <RangePicker picker="year" />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Date Format" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">We can set the date format by <Text type="secondary" code>format</Text>. When <Text type="secondary" code>format</Text> is an array, the input box can be entered in any of the valid formats of the array.</Text></p>
                        <Space direction="vertical" size={12}>
                            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
                            <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                            <DatePicker defaultValue={dayjs('2015/01', monthFormat)} format={monthFormat} picker="month" />
                            <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
                            <RangePicker
                                defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
                                format={dateFormat}
                            />
                            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={customFormat} />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Disabled" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A disabled state of the <Text type="secondary" code>DatePicker</Text>. You can also set as array to disable one of input.</Text></p>
                        <Space direction="vertical" size={12}>
                            <DatePicker defaultValue={dayjs('2015-06-06', dateFormatDisabled)} disabled />
                            <DatePicker picker="month" defaultValue={dayjs('2015-06', 'YYYY-MM')} disabled />
                            <RangePicker
                                defaultValue={[dayjs('2015-06-06', dateFormatDisabled), dayjs('2015-06-06', dateFormatDisabled)]}
                                disabled
                            />
                            <RangePicker
                                defaultValue={[dayjs('2019-09-03', dateFormatDisabled), dayjs('2019-11-22', dateFormatDisabled)]}
                                disabled={[false, true]}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Select range dates in 7 days" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Using <Text type="secondary" code>changeOnBlur</Text> work with <Text type="secondary" code>onCalendarChange</Text> and <Text type="secondary" code>disabledDate</Text> to limit date selection.</Text></p>
                        <RangePicker
                            value={dates || value}
                            disabledDate={disabledDateRange}
                            onCalendarChange={(val) => {
                                setDates(val);
                            }}
                            onChange={(val) => {
                                setValue(val);
                            }}
                            onOpenChange={onOpenChange}
                            changeOnBlur
                        />
                    </Card>{/* end card */}
                    <Card title="Preset Ranges" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">We can set preset ranges to RangePicker to improve user experience.</Text></p>
                        <Space direction="vertical" size={12}>
                            <DatePicker
                                presets={[
                                    {
                                        label: 'Yesterday',
                                        value: dayjs().add(-1, 'd'),
                                    },
                                    {
                                        label: 'Last Week',
                                        value: dayjs().add(-7, 'd'),
                                    },
                                    {
                                        label: 'Last Month',
                                        value: dayjs().add(-1, 'month'),
                                    },
                                ]}
                                onChange={onChangePreset}
                            />
                            <RangePicker presets={rangePresets} onChange={onRangeChange} />
                            <RangePicker
                                presets={rangePresets}
                                showTime
                                format="YYYY/MM/DD HH:mm:ss"
                                onChange={onRangeChange}
                            />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Bordered-less" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Bordered-less style component.</Text></p>
                        <Space direction="vertical" size={12}>
                            <DatePicker bordered={false} />
                            <DatePicker picker="week" bordered={false} />
                            <DatePicker picker="month" bordered={false} />
                            <DatePicker picker="year" bordered={false} />
                            <RangePicker bordered={false} />
                            <RangePicker picker="week" bordered={false} />
                            <RangePicker picker="month" bordered={false} />
                            <RangePicker picker="year" bordered={false} />
                        </Space>
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
                        <DatePicker placement={placement} />
                        <br />
                        <br />
                        <RangePicker placement={placement} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiDatePicker
