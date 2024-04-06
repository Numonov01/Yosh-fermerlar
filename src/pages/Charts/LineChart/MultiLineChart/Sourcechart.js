import { Card } from 'antd'
import React from 'react'
import { Line } from '@ant-design/plots'
import { multicommon } from './MultiLineData'
import usecustomStyles from '../../../../Common/customStyles'

const Sourcechart = () => {

  const customStyles = usecustomStyles();

    const configCO2Emissions = {
        data: multicommon,
        xField: "year",
        yField: "value",
        seriesField: "category",
        theme: "dark",
        xAxis: {
            type: "time",
        },
        yAxis: {
            label: {
                formatter: (v) =>
                    `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Sources of CO2 Emissions"
                style={{ marginBottom: customStyles.margin }}
            >
                <Line {...configCO2Emissions} />
            </Card>
        </React.Fragment>
    )
}

export default Sourcechart