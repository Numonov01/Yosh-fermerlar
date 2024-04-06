import { Liquid } from '@ant-design/plots'
import React from 'react'
import usecustomStyles from '../../../../Common/customStyles';

import { Card } from 'antd'
const customStyles = usecustomStyles();

const StarDiagram = () => {

    const Customizeoutline = {
        percent: 0.55,
        shape: (x, y, width, height) => {
            const path = [];
            const w = Math.min(width, height);

            for (let i = 0; i < 5; i++) {
                path.push([
                    i === 0 ? 'M' : 'L',
                    (Math.cos(((18 + i * 72) * Math.PI) / 180) * w) / 2 + x,
                    (-Math.sin(((18 + i * 72) * Math.PI) / 180) * w) / 2 + y,
                ]);
                path.push([
                    'L',
                    (Math.cos(((54 + i * 72) * Math.PI) / 180) * w) / 4 + x,
                    (-Math.sin(((54 + i * 72) * Math.PI) / 180) * w) / 4 + y,
                ]);
            }

            path.push(['Z']);
            return path;
        },
        outline: {
            border: 2,
            distance: 4,
            style: {
                stroke: '#FFC100',
                strokeOpacity: 0.65,
            },
        },
        wave: {
            length: 128,
        },
        theme: {
            styleSheet: {
                brandColor: '#FAAD14',
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Basic Star Diagram"
                style={{ marginBottom: customStyles.margin }}
            >
                <Liquid {...Customizeoutline} height={300} />
            </Card>
        </React.Fragment>
    )
}

export default StarDiagram