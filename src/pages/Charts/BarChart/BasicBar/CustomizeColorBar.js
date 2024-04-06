import { Bar } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { dataCustomizeColor } from './BasicBarData'
import usecustomStyles from '../../../../Common/customStyles'

const CustomizeColorBar = () => {

  const customStyles = usecustomStyles();

    const CustomizeColor = {
        data: dataCustomizeColor,
        xField: "sales",
        yField: "type",
        seriesField: "type",
        color: ({ type }) => {
            return type === "Beauty care" ? "#FAAD14" : "#5B8FF9";
        },
        legend: false,
        meta: {
            type: {
                alias: "category",
            },
            sales: {
                alias: "sales",
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Customize bar color"
                style={{ marginBottom: customStyles.margin }}
            >
                <Bar {...CustomizeColor} height={300} />
            </Card>
        </React.Fragment>
    )
}

export default CustomizeColorBar