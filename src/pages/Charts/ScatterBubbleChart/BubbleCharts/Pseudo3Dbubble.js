import { Scatter } from '@ant-design/plots'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';

import { Card } from 'antd'
import { pseudobubble } from './BubbleData'
const customStyles = usecustomStyles();

const Pseudo3Dbubble = () => {

    const PseudoDbubble = {
        appendPadding: 30,
        data: pseudobubble,
        xField: 'x',
        yField: 'y',
        colorField: 'genre',
        color: ['r(0.4, 0.3, 0.7) 0:rgba(255,255,255,0.5) 1:#5B8FF9', 'r(0.4, 0.4, 0.7) 0:rgba(255,255,255,0.5) 1:#61DDAA'],
        sizeField: 'size',
        size: [5, 20],
        shape: 'circle',
        yAxis: {
            nice: true,
            line: {
                style: {
                    stroke: '#eee',
                },
            },
        },
        xAxis: {
            grid: {
                line: {
                    style: {
                        stroke: '#eee',
                    },
                },
            },
            line: {
                style: {
                    stroke: '#eee',
                },
            },
        },
    };
    return (
        <React.Fragment>
            <Card
                title="Pseudo 3D bubble chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Scatter {...PseudoDbubble} />
            </Card>
        </React.Fragment>
    )
}

export default Pseudo3Dbubble