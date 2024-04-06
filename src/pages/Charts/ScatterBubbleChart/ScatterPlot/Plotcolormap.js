import { Scatter } from '@ant-design/plots'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';

import { Card } from 'antd'
import { plotdata } from './ScatterData'
const customStyles = usecustomStyles();

const Plotcolormap = () => {

    const Scatterplotcolormap = {
        appendPadding: 10,
        data: plotdata,
        xField: 'Revenue (Millions)',
        yField: 'Rating',
        shape: 'circle',
        colorField: 'Genre',
        size: 4,
        yAxis: {
            nice: true,
            line: {
                style: {
                    stroke: '#aaa',
                },
            },
        },
        xAxis: {
            min: -100,
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
    };

    return (
        <React.Fragment>
            <Card
                title="Scatter plot colormap"
                style={{ marginBottom: customStyles.margin }}
            >
                <Scatter {...Scatterplotcolormap} />
            </Card>
        </React.Fragment>
    )
}

export default Plotcolormap