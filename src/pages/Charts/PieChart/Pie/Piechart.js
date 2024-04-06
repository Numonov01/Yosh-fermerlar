import { Pie } from '@ant-design/plots'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';

import { Card } from 'antd'
import { datapiechart } from './PieChartData'
const customStyles = usecustomStyles();

const Piechart = () => {

    const piechart = {
        appendPadding: 10,
        data: datapiechart,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };

    return (
        <React.Fragment>
            <Card
                title="pie chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Pie {...piechart} height={300} />
            </Card>
        </React.Fragment>
    )
}

export default Piechart