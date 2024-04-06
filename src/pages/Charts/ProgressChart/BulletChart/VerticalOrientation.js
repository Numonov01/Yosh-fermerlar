import { Bullet } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import usecustomStyles from '../../../../Common/customStyles';

const customStyles = usecustomStyles();

const VerticalOrientation = () => {

    const dataVertical = [
        {
            title: 'satisfaction',
            ranges: [100],
            measures: [80],
            target: 85,
        },
    ]; 

    const VerticalOrientation = {
        data: dataVertical,
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
        yAxis: false,
        layout: 'vertical',
        label: {
            measure: {
                position: 'middle',
                style: {
                    fill: '#fff',
                },
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
                title="Basic Bullet Chart - Vertical Orientation"
                style={{ marginBottom: customStyles.margin }}
            >
                <Bullet {...VerticalOrientation} />
            </Card>
        </React.Fragment>
    )
}

export default VerticalOrientation