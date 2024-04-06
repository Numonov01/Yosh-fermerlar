import { Line } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { multicommon } from './MultiLineData'
import usecustomStyles from '../../../../Common/customStyles'

const PolyLineChart = () => {

  const customStyles = usecustomStyles();

    const configspecificColor = {
        data: multicommon,
        xField: "year",
        yField: "value",
        seriesField: "category",
        yAxis: {
            label: {
                formatter: (v) =>
                    `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
        },
        color: ["#1979C9", "#D62A0D", "#FAA219"],
    };

    return (
        <React.Fragment>
            <Card
                title="Specify polyline color"
                style={{ marginBottom: customStyles.margin }}
            >
                <Line {...configspecificColor} />
            </Card>
        </React.Fragment>
    )
}

export default PolyLineChart