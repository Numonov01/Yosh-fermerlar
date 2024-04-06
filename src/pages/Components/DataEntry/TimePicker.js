import React, { useState } from 'react';
import { Button, Card, Col, Row, Space, TimePicker, Typography } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text } = Typography;
const { RangePicker } = TimePicker;

const customStyles = usecustomStyles();

//basic
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
    console.log(time, timeString);
};

//Hour and minute
const format = 'HH:mm';

const UiTimePicker = () => {
    // page title
    document.title = "TimePicker" + process.env.REACT_APP_PAGE_TITLE;

    //Under Control
    const [value, setValue] = useState(null);
    const onChangeControl = (time) => {
        setValue(time);
    };

    //Addon
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Entry" pageTitle="TimePicker" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Click <Text type="secondary" code>TimePicker</Text>, and then we could select or input a time in panel.</Text></p>
                        <TimePicker onChange={onChange} defaultValue={dayjs('00:00:00', 'HH:mm:ss')} />
                    </Card>{/* end card */}
                    <Card title="Three Sizes" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The input box comes in three sizes. large is used in the form, while the medium size is the default.</Text></p>
                        <Space wrap>
                            <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
                            <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
                            <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="small" />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Hour and Minute" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">While part of <Text type="secondary" code>format</Text> is omitted, the corresponding column in panel will disappear, too.</Text></p>
                        <TimePicker defaultValue={dayjs('12:08', format)} format={format} />
                    </Card>{/* end card */}
                    <Card title="Addon" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Render addon contents to time picker panel's bottom.</Text></p>
                        <TimePicker
                            open={open}
                            onOpenChange={setOpen}
                            renderExtraFooter={() => (
                                <Button size="small" type="primary" onClick={() => setOpen(false)}>
                                    OK
                                </Button>
                            )}
                        />
                    </Card>{/* end card */}
                    <Card title="Status" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Add status to TimePicker with <Text type="secondary" code>status</Text>, which could be <Text type="secondary" code>error</Text> or <Text type="secondary" code>warning</Text>.</Text></p>
                        <Space direction="vertical">
                            <TimePicker status="error" />
                            <TimePicker status="warning" />
                            <TimePicker.RangePicker status="error" />
                            <TimePicker.RangePicker status="warning" />
                        </Space>
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Under Control" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary"><Text type="secondary" code>value</Text> and <Text type="secondary" code>onChange</Text> should be used together.</Text></p>
                        <TimePicker value={value} onChange={onChangeControl} />
                    </Card>{/* end card */}
                    <Card title="Disabled" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">A disabled state of the <Text type="secondary" code>TimePicker</Text>.</Text></p>
                        <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} disabled />
                    </Card>{/* end card */}
                    <Card title="Interval Option" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Show stepped options by <Text type="secondary" code>hourStep</Text> <Text type="secondary" code>minuteStep</Text> <Text type="secondary" code>secondStep</Text>.</Text></p>
                        <TimePicker minuteStep={15} secondStep={10} hourStep={1} />
                    </Card>{/* end card */}
                    <Card title="12 Hours" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">TimePicker of 12 hours format, with default format <Text type="secondary" code>h:mm:ss a</Text>.</Text></p>
                        <Space wrap>
                            <TimePicker use12Hours onChange={onChange} />
                            <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
                            <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                        </Space>
                    </Card>{/* end card */}
                    <Card title="Bordered-less" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Bordered-less style component.</Text></p>
                        <TimePicker bordered={false} />
                        <RangePicker bordered={false} />
                    </Card>{/* end card */}
                    <Card title="Time Range Picker" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use time range picker with <Text type="secondary" code>TimePicker.RangePicker</Text>.</Text></p>
                        <TimePicker.RangePicker />
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiTimePicker
