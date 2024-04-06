import { Area } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { columnstacked } from './StackedData'
import usecustomStyles from '../../../../Common/customStyles'

const Thumbnailstackarea = () => {

  const customStyles = usecustomStyles();

    const constackedthumbnailaxis = {
        data: columnstacked,
        xField: "date",
        yField: "value",
        seriesField: "country",
        slider: {
            start: 0.1,
            end: 0.9,
        },

    };

    return (
        <React.Fragment>
            <Card
                title="Stacked area chart with thumbnail axis"
                style={{ marginBottom: customStyles.margin }}
            >
                <Area {...constackedthumbnailaxis} />
            </Card>
        </React.Fragment>
    )
}

export default Thumbnailstackarea