import { Column } from '@ant-design/plots';
import { Card } from 'antd';
import React from 'react'
import { datapixellevelspacing } from './GroupedColumnData';
import usecustomStyles from '../../../../Common/customStyles';

const PixelLevelchart = () => {

  const customStyles = usecustomStyles();

    const pixellevelspacing = {
        data: datapixellevelspacing,
        isGroup: true,
        xField: "month",
        yField: "rainfall",
        seriesField: "name",
        dodgePadding: 2,
        intervalPadding: 20,
        label: {
            position: "middle",
            // 'top', 'middle', 'bottom'
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
                title="Grouped histogram pixel-level spacing between groups"
                style={{ marginBottom: customStyles.margin }}>
                <Column {...pixellevelspacing} />
            </Card>
        </React.Fragment>
    )
}

export default PixelLevelchart