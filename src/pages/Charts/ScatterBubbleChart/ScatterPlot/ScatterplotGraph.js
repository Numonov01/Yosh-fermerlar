import { Scatter } from '@ant-design/plots'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';

import { Card } from 'antd'
import { scatterplotdata } from './ScatterData'
const customStyles = usecustomStyles();

const ScatterplotGraph = () => {

    const GraphLabels = {
        appendPadding: 30,
        data: scatterplotdata,
        xField: 'xG conceded',
        yField: 'Shot conceded',
        colorField: 'Result',
        size: 5,
        shape: 'circle',
        pointStyle: {
            fillOpacity: 1,
        },
        yAxis: {
            nice: true,
            line: {
                style: {
                    stroke: '#aaa',
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
                    stroke: '#aaa',
                },
            },
        },
        label: {},
    };

    return (
        <React.Fragment>
            <Card
                title="Scatterplot Graph Labels"
                style={{ marginBottom: customStyles.margin }}
            >
                <Scatter {...GraphLabels} />
            </Card>
        </React.Fragment>
    )
}

export default ScatterplotGraph