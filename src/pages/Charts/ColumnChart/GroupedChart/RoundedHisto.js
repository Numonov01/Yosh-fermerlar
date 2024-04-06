import { Column } from '@ant-design/plots'
import { Card } from 'antd'
import React from 'react'
import { roundedcolumnchart } from './GroupedColumnData';
import usecustomStyles from '../../../../Common/customStyles';

const RoundedHisto = () => {

  const customStyles = usecustomStyles();

    const RoundedHistogram = {
        data: roundedcolumnchart,
        xField: "city",
        yField: "value",
        seriesField: "type",
        isGroup: true,
        columnStyle: {
            radius: [20, 20, 0, 0],
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Rounded histogram"
                style={{ marginBottom: customStyles.margin }}
            >
                <Column {...RoundedHistogram} />
            </Card>
        </React.Fragment>
    )
}

export default RoundedHisto