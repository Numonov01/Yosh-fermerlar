import React from 'react'
import { Card } from 'antd';
import { Column } from '@ant-design/plots';
import { dataconversionrate } from './Barchartdata';
import usecustomStyles from '../../../../Common/customStyles';

const Conversionrate = () => {

  const customStyles = usecustomStyles();

    const conversionrate = {
        data: dataconversionrate,
        xField: "action",
        yField: "pv",
        conversionTag: {},
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
      };

  return (
    <React.Fragment>
         <Card
          title="Histogram with conversion rate"
          style={{ marginBottom: customStyles.margin }}
        >
          <Column {...conversionrate} />
        </Card>
    </React.Fragment>
  )
}

export default Conversionrate