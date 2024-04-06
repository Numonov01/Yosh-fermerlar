import { Card } from 'antd'
import React from 'react'
import { Column } from '@ant-design/plots'
import { dataPercentageHisto } from './PercentData'
import usecustomStyles from '../../../../Common/customStyles'

const PercentHisto = () => {

  const customStyles = usecustomStyles();

    const PercentageHisto = {
        data: dataPercentageHisto,
        xField: "year",
        yField: "value",
        seriesField: "country",
        isPercent: true,
        isStack: true,
        label: {
          position: "middle",
          content: (item) => {
            return item.value.toFixed(2);
          },
          style: {
            fill: "#fff",
          },
        },
      };

  return (
    <React.Fragment>
        <Card
          title="Percentage histogram"
          style={{ marginBottom: customStyles.margin }}
        >
          <Column {...PercentageHisto} />
        </Card>
    </React.Fragment>
  )
}

export default PercentHisto