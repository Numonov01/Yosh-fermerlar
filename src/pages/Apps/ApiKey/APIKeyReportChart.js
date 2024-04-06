import React from 'react'
import { Bar } from '@ant-design/plots';

const APIKeyReportChart = () => {

  const data = [
    { year: 'Mo', value: 7 },
    { year: 'Tu', value: 11 },
    { year: 'We', value: 15 },
    { year: 'Th', value: 20 },
  ];

  const config = {
    data,
    xField: 'value',
    yField: 'year',
    xAxis: { label: { autoRotate: true } },
    // meta: {
    //   year: { alias: 'Year' },
    //   value: { alias: 'Value' },
    // },
  };

  return (
    <React.Fragment>
      <Bar {...config} height={80} />
    </React.Fragment>
  )
}

export default APIKeyReportChart