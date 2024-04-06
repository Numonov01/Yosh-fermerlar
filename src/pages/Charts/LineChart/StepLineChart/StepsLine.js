import { Line } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { datastepLine } from './StepLineData'
import usecustomStyles from '../../../../Common/customStyles'

const StepsLine = () => {

  const customStyles = usecustomStyles();

    const configstepline = {
        data: datastepLine,
        xField: "year",
        yField: "value",
        stepType: "vh",
      };

    return (
        <React.Fragment>
            <Card
                title="step line chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Line {...configstepline} height={370} />
            </Card>
        </React.Fragment>
    )
}

export default StepsLine