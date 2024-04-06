import { Bullet } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import usecustomStyles from '../../../../Common/customStyles';
const customStyles = usecustomStyles();

const StackedBulletChart = () => {

    const dataStackedBulle = [
        {
          title: 'Four fitness',
          ranges: [40, 70, 100],
          measures: [30, 50],
          target: 85,
        },
      ];
      const StackedBulle = {
        data:dataStackedBulle,
        measureField: 'measures',
        rangeField: 'ranges',
        targetField: 'target',
        xField: 'title',
        color: {
          range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
          measure: ['#5B8FF9', '#61DDAA'],
          target: '#39a3f4',
        },
        label: {
          measure: {
            position: 'middle',
            style: {
              fill: '#fff',
            },
          },
        },
        xAxis: {
          line: null,
        },
        yAxis: false,
        tooltip: {
          showMarkers: false,
          shared: true,
        },
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
              value: 'the first season',
              name: 'the first season',
              marker: {
                symbol: 'square',
                style: {
                  fill: '#5B8FF9',
                  r: 5,
                },
              },
            },
            {
              value: 'second quarter',
              name: 'second quarter',
              marker: {
                symbol: 'square',
                style: {
                  fill: ' #61DDAA',
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
                title="Stacked Bullet Chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Bullet {...StackedBulle} />
            </Card>
        </React.Fragment>
    )
}

export default StackedBulletChart