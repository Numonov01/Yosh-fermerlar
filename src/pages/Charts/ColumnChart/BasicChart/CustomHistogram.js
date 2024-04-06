import React from 'react'
import { Card } from 'antd';
import { Column } from '@ant-design/plots';
import { dataCustomColorHistogram } from './Barchartdata';
import usecustomStyles from '../../../../Common/customStyles';

const CustomHistogram = () => {

  const customStyles = usecustomStyles();

    const paletteSemanticRed = "#F4664A";
    const brandColor = "#5B8FF9";
    const colorHistogramBasic = {
        data: dataCustomColorHistogram,
        xField: "type",
        yField: "value",
        seriesField: "",
        color: ({ type }) => {
            if (type === "10-30points" || type === "30+points") {
                return paletteSemanticRed;
            }

            return brandColor;
        },
        label: {
            content: (originData) => {
                const val = parseFloat(originData.value);

                if (val < 0.05) {
                    return (val * 100).toFixed(1) + "%";
                }
            },
            offset: 10,
        },
        legend: false,
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Custom histogram colors"
                style={{ marginBottom: customStyles.margin }}
            >
                <Column {...colorHistogramBasic} />
            </Card>
        </React.Fragment>
    )
}

export default CustomHistogram