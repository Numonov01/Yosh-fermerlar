import { Pie } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { datapiechart } from './PieChartData'
import usecustomStyles from '../../../../Common/customStyles'

const ChartLegend = () => {

  const customStyles = usecustomStyles();

    const ChartLegend = {
        appendPadding: 10,
        data: datapiechart,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
            type: 'outer',
            content: '{name} {percentage}',
        },
        interactions: [
            {
                type: 'pie-legend-active',
            },
            {
                type: 'element-active',
            },
        ],
    };

    return (
        <React.Fragment>
            <Card
                title="Pie Chart-Legend Interaction"
                style={{ marginBottom: customStyles.margin }}
            >
                <Pie {...ChartLegend} height={320} />
            </Card>
        </React.Fragment>
    )
}

export default ChartLegend