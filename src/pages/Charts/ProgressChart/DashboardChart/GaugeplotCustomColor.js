import { Gauge } from '@ant-design/plots'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';

import { Card } from 'antd'
const customStyles = usecustomStyles();

const GaugeplotCustomColor = () => {

    const configMulticolor = {
        percent: 0.75,
        range: {
            ticks: [0, 1 / 3, 2 / 3, 1],
            color: ['#F4664A', '#FAAD14', '#30BF78'],
        },
        indicator: {
            pointer: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
            pin: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
        },
        statistic: {
            content: {
                style: {
                    fontSize: '30px',
                    lineHeight: '36px',
                },
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Gauge plot with custom color"
                style={{ marginBottom: customStyles.margin }}
            >
                <Gauge {...configMulticolor} height={250} />
            </Card>
        </React.Fragment>
    )
}

export default GaugeplotCustomColor