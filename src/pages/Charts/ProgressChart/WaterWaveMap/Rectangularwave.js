import { Liquid } from '@ant-design/plots'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';

import { Card } from 'antd'
const customStyles = usecustomStyles();

const Rectangularwave = () => {

    const configrectangular = {
        percent: 0.25,
        shape: 'rect',
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
                title="rectangular water wave chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Liquid {...configrectangular} height={300} />
            </Card>
        </React.Fragment>
    )
}

export default Rectangularwave