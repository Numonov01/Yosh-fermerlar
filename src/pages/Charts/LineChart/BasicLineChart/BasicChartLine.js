import { Line } from '@ant-design/plots'
import { Card } from 'antd'
import React from 'react'
import { basicline } from './LineChartData'
import usecustomStyles from '../../../../Common/customStyles'

const BasicChartLine = () => {

  const customStyles = usecustomStyles();  

    const configbasic1 = {
        data: basicline,
        // padding: "auto",
        xField: "Date",
        yField: "scales",
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
       
    };

    return (
        <React.Fragment>
            <Card
                title="Basic Line Chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Line {...configbasic1} />
            </Card>
        </React.Fragment>
    )
}

export default BasicChartLine