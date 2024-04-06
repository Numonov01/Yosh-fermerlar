import { Card } from 'antd'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';
import { Gauge } from '@ant-design/plots'

const customStyles = usecustomStyles();

const Dashchart = () => {

    const configdashboard = {
        percent: .80,
        range: {
            color: '#30BF78',
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
        axis: {
            label: {
                formatter(v) {
                    return Number(v) * 100;
                },
            },
            subTickLine: {
                count: 3,
            },
        },
        statistic: {
            content: {
                formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
                style: {
                    color: customStyles.textMuted,
                    fontSize: 30,
                },
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Dash Board"
                style={{ marginBottom: customStyles.margin }}
            >
                <Gauge {...configdashboard} height={250} />
            </Card>
        </React.Fragment>
    )
}

export default Dashchart