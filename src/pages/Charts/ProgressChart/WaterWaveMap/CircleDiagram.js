import { Liquid } from '@ant-design/plots'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';

import { Card } from 'antd'
const customStyles = usecustomStyles();

const CircleDiagram = () => {

    const waterwave = {
        percent: 0.45,
        outline: {
          border: 2,
          distance: 4,
        },
        wave: {
          length: 128,
        },
      };

    return (
        <React.Fragment>
            <Card
                title="Basic Circle Diagram"
                style={{ marginBottom: customStyles.margin }}
            >
                <Liquid {...waterwave} height={300} />
            </Card>
        </React.Fragment>
    )
}

export default CircleDiagram