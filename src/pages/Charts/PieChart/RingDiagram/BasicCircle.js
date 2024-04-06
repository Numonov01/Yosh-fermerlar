import { Pie } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { dataBasicCircleDiagram } from './RingData'
import usecustomStyles from '../../../../Common/customStyles'

const customStyles = usecustomStyles();

const BasicCircle = () => {

    const BasicCircleDiagram = {
        appendPadding: 10,
        data: dataBasicCircleDiagram,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: 'AntV\nG2Plot',
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Basic Circle Diagram"
                style={{ marginBottom: customStyles.margin }}
            >
                <Pie {...BasicCircleDiagram} height={300} />
            </Card>
        </React.Fragment>
    )
}

export default BasicCircle