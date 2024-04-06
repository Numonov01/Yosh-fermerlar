import { Bar } from '@ant-design/plots';
import React from 'react'
import { Card } from 'antd';
import { dataBasicBar } from './BasicBarData';
import usecustomStyles from '../../../../Common/customStyles';

const Basicbarchart = () => {

  const customStyles = usecustomStyles();

    const BasicBar = {
        data: dataBasicBar,
        xField: "value",
        yField: "year",
        seriesField: "year",
        legend: {
            position: "top-left",
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Basic Bar Chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Bar {...BasicBar} />
            </Card>
        </React.Fragment>
    )
}

export default Basicbarchart