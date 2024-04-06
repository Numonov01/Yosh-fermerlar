import { Card } from 'antd'
import React from 'react'
import { Area } from '@ant-design/plots'
import { columnstacked } from './StackedData'
import usecustomStyles from '../../../../Common/customStyles'

const Stackedarea = () => {

  const customStyles = usecustomStyles();

    const configstackedArea = {
        data: columnstacked,
        xField: "date",
        yField: "value",
        seriesField: "country",
        // theme: {
        //   colors10: ['#FF6B3B', '#626681', '#FFC100', '#9FB40F', '#76523B', '#DAD5B5', '#0E8E89', '#E19348', '#F383A2', '#247FEA'],
        //   styleSheet: {
        //     // backgroundColor: customStyles.colorSuccess,
        //     color: customStyles.colorSuccess,
        //   }
        // },
        xAxis: {
          text: {
            style: {
              fill: '#9FB40F',
              fontSize: 8,
            },
          },
        },
        pageNavigator: {
          marker: {
            style: {
              inactiveFill: '#000',
              inactiveOpacity: 0.45,
              fill: '#000',
              opacity: 0.8,
              size: 12,
            },
          },
          text: {
            style: {
              fill: '#ccc',
              fontSize: 8,
            },
          },
        },
    }
    return (
        <React.Fragment>
            <Card
                title="stacked area chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Area {...configstackedArea} />
            </Card>
        </React.Fragment>
    )
}

export default Stackedarea