import React from 'react'
import { barthumbchart } from './Barchartdata';
import { Column } from '@ant-design/plots';
import { Card } from 'antd';
import usecustomStyles from '../../../../Common/customStyles';

const BarwithThumbnail = () => {

    const customStyles = usecustomStyles();

    const Barthumbnailaxis = {
        data: barthumbchart,
        xField: "City",
        yField: "Sales",
        xAxis: {
            label: {
                autoRotate: false,
            },
        },
        slider: {
            start: 0.1,
            end: 0.2,
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Bar chart with thumbnail axis"
                style={{ marginBottom: customStyles.margin }}
            >
                <Column {...Barthumbnailaxis} />
            </Card>
        </React.Fragment>
    )
}

export default BarwithThumbnail