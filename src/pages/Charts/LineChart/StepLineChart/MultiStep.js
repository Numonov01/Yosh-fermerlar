import { Line } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { dataMultulineStepline } from './StepLineData'
import usecustomStyles from '../../../../Common/customStyles'

const MultiStep = () => {

  const customStyles = usecustomStyles();

    const configMultulineStepline = {
        data: dataMultulineStepline,
        xField: "month",
        yField: "value",
        legend: false,
        seriesField: "key",
        stepType: "hvh",
      };

    return (
        <React.Fragment>
            <Card
                title="Multi-step line chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Line {...configMultulineStepline} height={370} />
            </Card>
        </React.Fragment>
    )
}

export default MultiStep