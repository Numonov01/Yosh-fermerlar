import React from 'react'
import { Card } from 'antd'
import { Column } from '@ant-design/plots'
import { dataGroupedHistogram } from './GroupedColumnData'
import usecustomStyles from '../../../../Common/customStyles'

const Groupedhistochart = () => {

  const customStyles = usecustomStyles();

    const GroupedHistogram = {
        data: dataGroupedHistogram,
        isGroup: true,
        xField: "month",
        yField: "rainfall",
        seriesField: "name",
    
        //color: ['#1ca9e6', '#f88c24'],
    
        // marginRatio: 0.1,
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
         title="Grouped histogram"
         style={{ marginBottom: customStyles.margin }}
       > 
         <Column {...GroupedHistogram} />
       </Card>
    </React.Fragment>
  )
}

export default Groupedhistochart