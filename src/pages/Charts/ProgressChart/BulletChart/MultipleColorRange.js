import { Bullet } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import usecustomStyles from '../../../../Common/customStyles';

const customStyles = usecustomStyles();

const MultipleColorRange = () => {

  const datamultipleColor = [
    {
      title: 'satisfaction',
      ranges: [40, 70, 100],
      measures: [80],
      target: 85,
    },
  ];
  const multipleColor = {
    data: datamultipleColor,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
      measure: '#5B8FF9',
      target: '#39a3f4',
    },
    xAxis: {
      line: null,
    },
    yAxis: false,
    label: {
      target: true,
    },
    // customize legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: 'Difference',
          name: 'Difference',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFbcb8',
              r: 5,
            },
          },
        },
        {
          value: 'good',
          name: 'good',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFe0b0',
              r: 5,
            },
          },
        },
        {
          value: 'excellent',
          name: 'excellent',
          marker: {
            symbol: 'square',
            style: {
              fill: '#bfeec8',
              r: 5,
            },
          },
        },
        {
          value: 'actual value',
          name: 'actual value',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: 'target value',
          name: 'target value',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#39a3f4',
              r: 5,
            },
          },
        },
      ],
    },
  };

  return (
    <React.Fragment>
      <Card
        title="Basic bullet chart - with multiple color range intervals"
        style={{ marginBottom: customStyles.margin }}
      >
        <Bullet {...multipleColor} />
      </Card>
    </React.Fragment>
  )
}

export default MultipleColorRange