import { Line } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { animationdata } from './MultiLineData'
import usecustomStyles from '../../../../Common/customStyles'

const AnimationChart = () => {

  const customStyles = usecustomStyles();

    const configAnimation = {
        data: animationdata,
        xField: "year",
        yField: "gdp",
        seriesField: "name",
        yAxis: {
            label: {
                formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
            },
        },
        legend: {
            position: "top",
        },
        smooth: true,
        animation: {
            appear: {
                animation: "path-in",
                duration: 5000,
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Multi-line animation"
                style={{ marginBottom: customStyles.margin }}
            >
                <Line {...configAnimation} />
            </Card>
        </React.Fragment>
    )
}

export default AnimationChart