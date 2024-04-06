import { Card } from 'antd'
import React from 'react'
import { Line } from '@ant-design/plots'
import { basicline } from './LineChartData'
import usecustomStyles from '../../../../Common/customStyles'

const ConditionalLine = () => {

  const customStyles = usecustomStyles() ;

    const configConditional = {
        data: basicline,
        padding: "auto",
        xField: "Date",
        yField: "scales",
        annotations: [
            {
                type: "regionFilter",
                start: ["min", "median"],
                end: ["max", "0"],
                color: "#F4664A",
            },
            {
                type: "text",
                position: ["min", "median"],
                // content: "median",
                offsetY: -4,
                style: {
                    textBaseline: "bottom",
                },
            },
            {
                type: "line",
                start: ["min", "median"],
                end: ["max", "median"],
                style: {
                    stroke: "#F4664A",
                    lineDash: [2, 2],
                },
            },
        ],
    };

    return (
        <React.Fragment>
            <Card
                title="Conditional Style Line Chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Line {...configConditional} />
            </Card>
        </React.Fragment>
    )
}

export default ConditionalLine