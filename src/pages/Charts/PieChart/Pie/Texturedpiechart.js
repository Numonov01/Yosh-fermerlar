import { Pie } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import { datatexturedpie } from './PieChartData'
import usecustomStyles from '../../../../Common/customStyles'

const customStyles = usecustomStyles();


const Texturedpiechart = () => {

    const texturedpie = {
        appendPadding: 10,
        data: datatexturedpie,
        angleField: 'sold',
        colorField: 'sex',
        radius: 0.8,
        legend: false,
        label: {
            type: 'inner',
            offset: '-50%',
            style: {
                fill: '#fff',
                fontSize: 18,
                textAlign: 'center',
            },
        },
        pieStyle: ({ zender }) => {
            if (zender === 'male') {
                return {
                    fill: 'p(a)https://gw.alipayobjects.com/zos/antfincdn/FioHMFgIld/pie-wenli1.png',
                };
            }

            return {
                fill: 'p(a)https://gw.alipayobjects.com/zos/antfincdn/Ye2DqRx%2627/pie-wenli2.png',
            };
        },
        tooltip: false,
        interactions: [
            {
                type: 'element-single-selected',
            },
        ],
    };

    return (
        <React.Fragment>
            <Card
                title="textured pie chart"
                style={{ marginBottom: customStyles.margin }}
            >
                <Pie {...texturedpie} height={350} />
            </Card>
        </React.Fragment>
    )
}

export default Texturedpiechart