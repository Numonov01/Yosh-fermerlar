import { Column } from '@ant-design/plots'
import { Card } from 'antd'
import React from 'react'
import { barthumbchart } from './Barchartdata';
import usecustomStyles from '../../../../Common/customStyles';

const ScrollHistogram = () => {

  const customStyles = usecustomStyles();

    const scrollbar = {
        data: barthumbchart,
        xField: "City",
        yField: "Sales",
        xAxis: {
            label: {
                autoRotate: false,
            },
        },
        scrollbar: {
            type: "horizontal",
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Histogram with scroll bar"
                style={{ marginBottom: customStyles.margin }}
            >
                <Column {...scrollbar} />
            </Card>
        </React.Fragment>
    )
}

export default ScrollHistogram