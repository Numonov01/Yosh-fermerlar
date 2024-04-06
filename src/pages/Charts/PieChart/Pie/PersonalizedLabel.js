import { Card } from 'antd'
import React from 'react'
import { G2, Pie } from '@ant-design/plots'
import { dataPersonalizedLabel } from './PieChartData'
import usecustomStyles from '../../../../Common/customStyles'

const customStyles = usecustomStyles();

const PersonalizedLabel = () => {

    const G = G2.getEngine('canvas');

    const cfgpie = {
        appendPadding: 10,
        data: dataPersonalizedLabel,
        angleField: 'value',
        colorField: 'type',
        radius: 0.75,
        legend: false,
        label: {
            type: 'spider',
            labelHeight: 40,
            formatter: (data, mappingData) => {
                const group = new G.Group({});
                group.addShape({
                    type: 'circle',
                    attrs: {
                        x: 0,
                        y: 0,
                        width: 40,
                        height: 50,
                        r: 5,
                        fill: mappingData.color,
                    },
                });
                group.addShape({
                    type: 'text',
                    attrs: {
                        x: 10,
                        y: 8,
                        text: `${data.type}`,
                        fill: mappingData.color,
                    },
                });
                group.addShape({
                    type: 'text',
                    attrs: {
                        x: 0,
                        y: 25,
                        text: `${data.value}个 ${data.percent * 100}%`,
                        fill: 'rgba(0, 0, 0, 0.65)',
                        fontWeight: 700,
                    },
                });
                return group;
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
    };

    const PersonalizedLabel = cfgpie;

    return (
        <React.Fragment>
            <Card
                title="Pie Chart - Personalized Label"
                style={{ marginBottom: customStyles.margin }}
            >
                <Pie {...PersonalizedLabel} height={300} />
            </Card>
        </React.Fragment>
    )
}

export default PersonalizedLabel