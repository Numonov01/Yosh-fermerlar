import React from 'react'
import { Card } from 'antd';
import { Column } from '@ant-design/plots';
import { dataBasicHistodram } from './Barchartdata';
import usecustomStyles from '../../../../Common/customStyles';

const BasicHIstogramChart = () => {

  const customStyles = usecustomStyles();

    const BasicHistrogram = {
        data: dataBasicHistodram,
        xField: "type",
        yField: "sales",
        label: {
            position: "middle",
            // 'top', 'bottom', 'middle',
            style: {
                fill: "#FFFFFF",
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
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
                title="Basic histogram"
                style={{ marginBottom: customStyles.margin }}
            >
                <Column {...BasicHistrogram} />
            </Card>
        </React.Fragment>
    )
}

export default BasicHIstogramChart