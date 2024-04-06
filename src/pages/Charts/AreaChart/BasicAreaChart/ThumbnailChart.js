import { Area } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { thumbnaildata } from './BasicAreaData'
import usecustomStyles from '../../../../Common/customStyles'

const ThumbnailChart = () => {

  const customStyles = usecustomStyles();

    const configthumbnailaxis = {
        data: thumbnaildata,
        xField: "Date",
        yField: "scales",
        xAxis: {
            tickCount: 5,
        },
        animation: false,
        slider: {
            start: 0.1,
            end: 0.9,
            trendCfg: {
                isArea: true,
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Area chart with thumbnail axis"
                style={{ marginBottom: customStyles.margin }}
            >
                <Area {...configthumbnailaxis} />
            </Card>
        </React.Fragment>
    )
}

export default ThumbnailChart