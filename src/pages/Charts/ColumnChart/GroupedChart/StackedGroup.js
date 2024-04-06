import { Column } from '@ant-design/plots'
import { Card } from 'antd'
import React from 'react'
import { stackgroupdata } from './GroupedColumnData'
import usecustomStyles from '../../../../Common/customStyles'

const StackedGroup = () => {
  const customStyles = usecustomStyles();

  const StackedGroupedColumn = {
    data: stackgroupdata,
    xField: "product_type",
    yField: "order_amt",
    isGroup: true,
    isStack: true,
    seriesField: "product_sub_type",
    groupField: "zender",
  };

    return (
        <React.Fragment>
            <Card
                title="Stacked Grouped Column Chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Column {...StackedGroupedColumn} />
            </Card>
        </React.Fragment>
    )
}

export default StackedGroup