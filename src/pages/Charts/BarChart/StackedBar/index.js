import { Bar } from '@ant-design/plots';
import React from 'react'
import { Card, Col, Row } from 'antd';
import Breadcrumb from '../../../../Common/Breadcrumb';
import { datastackedBarchart } from './StackedBarData';
import usecustomStyles from '../../../../Common/customStyles';

const StackedBarChart = () => {

    document.title = "Stacked Bar" + process.env.REACT_APP_PAGE_TITLE;

    const customStyles = usecustomStyles();

    const stackedBarchart = {
        data: datastackedBarchart.reverse(),
        isStack: true,
        xField: "value",
        yField: "year",
        seriesField: "type",
        label: {
            position: "middle",
            // 'left', 'middle', 'right'
            layout: [
                {
                    type: "interval-adjust-position",
                },
                {
                    type: "interval-hide-overlap",
                },
                {
                    type: "adjust-color",
                },
            ],
        },
    };
    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Bar Charts" pageTitle="Stacked Bar" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card
                        title="stacked bar chart"
                        style={{ marginBottom: customStyles.margin }}
                    >
                        <Bar {...stackedBarchart} />
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default StackedBarChart