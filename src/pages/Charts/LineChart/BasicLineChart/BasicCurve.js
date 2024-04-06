import { Line } from '@ant-design/plots'
import { Card } from 'antd'
import React from 'react'
import { basicline } from './LineChartData'
import usecustomStyles from '../../../../Common/customStyles'

const BasicCurve = () => {

  const customStyles = usecustomStyles();

    const configcurve = {
        data: basicline,
        padding: "auto",
        xField: "Date",
        yField: "scales",
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
        smooth: true,
    };

    return (
        <React.Fragment>
            <Card
                title="Basic Curve"
                style={{ marginBottom: customStyles.margin }}
            >
                <Line {...configcurve} />
            </Card>
        </React.Fragment>
    )
}

export default BasicCurve