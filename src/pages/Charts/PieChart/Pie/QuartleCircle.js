import React from 'react'
import { datapiechart } from './PieChartData';
import { Card } from 'antd';
import { Pie } from '@ant-design/plots';
import usecustomStyles from '../../../../Common/customStyles';

const customStyles = usecustomStyles();

const QuartleCircle = () => {

    const quartercircle = {
        appendPadding: 10,
        data: datapiechart,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        startAngle: Math.PI,
        endAngle: Math.PI * 1.5,
        label: {
            type: 'inner',
            offset: '-8%',
            content: '{name}',
            style: {
                fontSize: 18,
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
        pieStyle: {
            lineWidth: 0,
        },
    };

    return (
        <React.Fragment>
            <Card
                title="quarter circle"
                style={{ marginBottom: customStyles.margin }}
            >
                <Pie {...quartercircle} height={270} />
            </Card>
        </React.Fragment>
    )
}

export default QuartleCircle