import { Area } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { gradientdata } from './BasicAreaData'
import usecustomStyles from '../../../../Common/customStyles'

const GradientArea = () => {

  const customStyles = usecustomStyles();

    const configGradientColorArea = {
        data: gradientdata,
        xField: "Date",
        yField: "scales",
        xAxis: { 
            range: [0, 1],
            tickCount: 5,
        },
        areaStyle: () => {
            return {
                fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
            };
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Gradient color area chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Area {...configGradientColorArea} />
            </Card>
        </React.Fragment>
    )
}

export default GradientArea