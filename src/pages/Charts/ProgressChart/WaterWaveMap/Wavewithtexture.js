import { Liquid } from '@ant-design/plots'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';

import { Card } from 'antd'
const customStyles = usecustomStyles();

const Wavewithtexture = () => {

    const textureWave = {
        percent: 0.65,
        shape: 'diamond',
        outline: {
            border: 2,
            distance: 4,
        },
        wave: {
            length: 128,
        },
        pattern: {
            type: 'line',
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Water wave map with texture"
                style={{ marginBottom: customStyles.margin }}
            >
                <Liquid {...textureWave} height={300} />
            </Card>
        </React.Fragment>
    )
}

export default Wavewithtexture