import React from 'react'
import { Pie } from '@ant-design/plots';

const Breakdown = () => {
    const dataBasicCircleDiagram = [
        {
            type: 'Category one',
            value: 27,
        },
        {
            type: 'Category two',
            value: 25,
        },
        {
            type: 'Category three',
            value: 18,
        },
        {
            type: 'Category four',
            value: 15,
        },
        {
            type: 'Category five',
            value: 10,
        },
        {
            type: 'other',
            value: 5,
        },
    ];

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
            },
        },
    };

    return (
        <React.Fragment>
             <Pie {...BasicCircleDiagram} height={270} />
        </React.Fragment>
    )
}

export default Breakdown