import React from 'react'
import { dataCustomizeColor } from './BasicBarData';
import { Bar } from '@ant-design/plots';    
import { Card } from 'antd';
import usecustomStyles from '../../../../Common/customStyles';

const WidthScale = () => {

  const customStyles = usecustomStyles();

    const Specifybar = {
        data: dataCustomizeColor,
        xField: "sales",
        yField: "type",
        barWidthRatio: 0.8,
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
                title="Specify the bar width scale"
                style={{ marginBottom: customStyles.margin }}
            >
                <Bar {...Specifybar} height={300} />
            </Card>
        </React.Fragment>
    )
}

export default WidthScale