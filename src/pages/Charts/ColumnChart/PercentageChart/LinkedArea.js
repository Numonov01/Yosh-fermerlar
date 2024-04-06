import { Card } from 'antd'
import React from 'react'
import { Column } from '@ant-design/plots'
import { linkedData } from './PercentData'
import usecustomStyles from '../../../../Common/customStyles'

const LinkedArea = () => {
    const customStyles = usecustomStyles();

    const linkedArea = {
        data: linkedData,
        xField: "year",
        yField: "value",
        seriesField: "type",
        isPercent: true,
        isStack: true,
        meta: {
            value: {
                min: 0,
                max: 1,
            },
        },
        label: {
            position: "middle",
            content: (item) => {
                return `${(item.value * 100).toFixed(2)}%`;
            },
            style: {
                fill: "#fff",
            },
        },
        tooltip: false,
        interactions: [
            {
                type: "element-highlight-by-color",
            },
            {
                type: "element-link",
            },
        ],
    };

    return (
        <React.Fragment>
            <Card
                title="Percentage histogram with linked area"
                style={{ marginBottom: customStyles.margin }}
            >
                <Column {...linkedArea} />
            </Card>
        </React.Fragment>
    )
}

export default LinkedArea