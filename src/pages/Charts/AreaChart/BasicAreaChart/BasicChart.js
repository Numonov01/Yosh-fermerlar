import { Card } from 'antd'
import React from 'react'
import { Area } from '@ant-design/plots'
import { basicareadata } from './BasicAreaData'
import usecustomStyles from '../../../../Common/customStyles';


const BasicChart = () => {
    const customStyles = usecustomStyles();
 
    const configBasicArea = {
        data: basicareadata,
        xField: "timePeriod",
        yField: "value",
        xAxis: {
            range: [0, 1],
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Basic Area Chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Area {...configBasicArea} />
            </Card>
        </React.Fragment>
    )
}

export default BasicChart