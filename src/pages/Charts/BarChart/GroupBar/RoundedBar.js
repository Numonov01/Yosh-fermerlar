import React from 'react'
import { datagroupedbar } from './GroupChartData';
import { Bar } from '@ant-design/plots';
import { Card } from 'antd';
import usecustomStyles from '../../../../Common/customStyles';

const RoundedBar = () => {

    const customStyles = usecustomStyles();

    const roundedbar = {
        data: datagroupedbar,
        isGroup: true,
        xField: "value",
        yField: "label",
        seriesField: "type",
        marginRatio: 0,
        label: {
            position: "right",
            // 'left', 'middle', 'right'
            offset: 4,
        },
        barStyle: {
            radius: [2, 2, 0, 0],
        },
    };

    return (
        <React.Fragment>
            <Card
                title="rounded bar chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Bar {...roundedbar} />
            </Card>
        </React.Fragment>
    )
}

export default RoundedBar