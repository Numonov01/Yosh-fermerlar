import { Gauge } from '@ant-design/plots'
import { Card } from 'antd'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';

const customStyles = usecustomStyles();

const AuxiliaryWidth = () => {

    const auxiliaryarcgauge = {
        percent: 0.75,
        radius: 0.75,
        range: {
            color: '#30BF78',
            width: 12,
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
                formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
            },
            style: {
                fontSize: 60,
            },
        },
        gaugeStyle: {
            lineCap: 'round',
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Set the auxiliary arc width of the gauge panel"
                style={{ marginBottom: customStyles.margin }}
            >
                <Gauge {...auxiliaryarcgauge} height={300} />
            </Card>
        </React.Fragment>
    )
}

export default AuxiliaryWidth