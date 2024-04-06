import { Bullet } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import usecustomStyles from '../../../../Common/customStyles';

const customStyles = usecustomStyles();

const HorizontalOrientation = () => {

    const data = [
        {
            title: 'Satisfaction 111',
            ranges: [100],
            measures: [80],
            target: 85,
        },
    ];
    const BasicBulletChart1 = {
        data,
        measureField: 'measures',
        rangeField: 'ranges',
        targetField: 'target',
        xField: 'title',
        color: {
            range: '#f0efff',
            measure: '#5B8FF9',
            target: '#3D76DD',
        },
        xAxis: {
            line: null,
        },
        yAxis: {
            tickMethod: ({ max }) => {
                const interval = Math.ceil(max / 5); 

                return [0, interval, interval * 2, interval * 3, interval * 4, max];
            },
        },
        legend: {
            custom: true,
            position: 'bottom',
            items: [
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
                            stroke: '#3D76DD',
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
                title="Basic Bullet Chart - Horizontal Orientation"
                style={{ marginBottom: customStyles.margin }}
            >
                <Bullet {...BasicBulletChart1} />
            </Card>
        </React.Fragment>
    )
}

export default HorizontalOrientation