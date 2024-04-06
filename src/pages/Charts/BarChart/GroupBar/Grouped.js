import { Bar } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { datagroupedbar } from './GroupChartData'
import usecustomStyles from '../../../../Common/customStyles'

const Grouped = () => {

  const customStyles = usecustomStyles();

    const groupedbar = {
        data: datagroupedbar,
        isGroup: true,
        xField: "value",
        yField: "label",

        // color: ['#1383ab', '#c52125'],
        seriesField: "type",
        marginRatio: 0,
        label: {
            position: "middle",
            // 'left', 'middle', 'right'
            layout: [
                {
                    type: "interval-adjust-position",
                }, 
                {
                    type: "interval-hide-overlap",
                }, 
                {
                    type: "adjust-color",
                },
            ],
        },
    };

    return (
        <React.Fragment>
            <Card
                title="grouped bar chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Bar {...groupedbar} />
            </Card>
        </React.Fragment>
    )
}

export default Grouped