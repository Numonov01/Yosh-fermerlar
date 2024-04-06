import { Gauge } from '@ant-design/plots'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';

import { Card } from 'antd'
const customStyles = usecustomStyles();

const Monochrome = () => {

    const monochrome = {
        percent: 0.75,
        range: {
            color: 'l(0) 0:#B8E1FF 1:#3D76DD',
        },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        indicator: null,
        statistic: {
            title: {
                offsetY: -36,
                style: {
                    fontSize: '30px',
                    color: '#4B535E',
                },
                formatter: () => '70%',
            },
            content: {
                style: {
                    fontSize: '20px',
                    lineHeight: '44px',
                    color: '#4B535E',
                },
                formatter: () => 'loading progress',
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Dashboard (monochrome gradient)"
                style={{ marginBottom: customStyles.margin }}
            >
                <Gauge {...monochrome} height={250} />
            </Card>
        </React.Fragment>
    )
}

export default Monochrome