import { Card } from 'antd'
import React from 'react'
import { Line } from '@ant-design/plots'
import { multicommon } from './MultiLineData'
import usecustomStyles from '../../../../Common/customStyles'

const GridFill = () => {

  const customStyles = usecustomStyles();

    const configGridFill = {
        data: multicommon
            .slice(multicommon.length - 90, multicommon.length)
            .filter(
                (item) =>
                    item.category === "Gas fuel" || item.category === "Cement production"
            ),
        xField: "year",
        yField: "value",
        seriesField: "category",
        xAxis: {
            nice: true,
            // tickCount: 8,
            label: {
                // autoRotate: false,
                rotate: Math.PI / 6,
                offset: 10,
                style: {
                    fill: "#aaa",
                    fontSize: 12,
                },
                formatter: (name) => name,
            },
            title: {
                text: "years",
                style: {
                    fontSize: 16,
                },
            },
            line: {
                style: {
                    stroke: "#aaa",
                },
            },
            tickLine: {
                style: {
                    lineWidth: 2,
                    stroke: "#aaa",
                },
                length: 5,
            },
            grid: {
                line: {
                    style: {
                        stroke: "#ddd",
                        lineDash: [4, 2],
                    },
                },
                alternateColor: "rgba(0,0,0,0.05)",
            },
        },
        yAxis: {
            // max: 3000,
            label: {
                autoRotate: false,
                style: {
                    fill: "#aaa",
                    fontSize: 12,
                },
                formatter: (v) =>
                    `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
            title: {
                text: "Yearly Count",
                style: {
                    fontSize: 16,
                },
            },
            line: {
                style: {
                    stroke: "#aaa",
                },
            },
            tickLine: {
                style: {
                    lineWidth: 2,
                    stroke: "#aaa",
                },
                length: 5,
            },
            grid: {
                line: {
                    style: {
                        stroke: "#ddd",
                        lineDash: [4, 2],
                    },
                },
                alternateColor: "rgba(0,0,0,0.05)",
            },
        },
        // label
        label: {
            layout: [
                {
                    type: "hide-overlap",
                },
            ],
            style: {
                textAlign: "right",
            },
            formatter: (item) => item.value,
        },
        // point
        point: {
            size: 5,
            style: {
                lineWidth: 1,
                fillOpacity: 1,
            },
            shape: (item) => {
                if (item.category === "Cement production") {
                    return "circle";
                }

                return "diamond";
            },
        },
        annotations: [
            {
                type: "line",
                start: ["0%", "10%"],
                end: ["100%", "10%"],
                top: true,
                style: {
                    stroke: "l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
                    lineWidth: 2,
                },
            },
            {
                type: "region",
                start: ["0%", "0%"],
                end: ["20%", "10%"],
                top: true,
                style: {
                    fill: "#1890ff",
                    fillOpacity: 1,
                    opacity: 1,
                },
            },
            {
                type: "text",
                position: ["10%", "5%"],
                content: "Yearly",
                style: {
                    fill: "#fff",
                    fontSize: 12,
                    textAlign: "center",
                    textBaseline: "middle",
                    shadowColor: "#fff",
                    shadowOffsetX: 12,
                    shadowOffsetY: 12,
                    shadowBlur: 2,
                },
            },
            {
                type: "line",
                start: ["min", "median"],
                end: ["max", "median"],
                style: {
                    stroke: "Turquoise",
                    lineDash: [4, 2],
                },
            },
        ],
        legend: {
            position: "top-right",
            itemName: {
                style: {
                    fill: "#000",
                },
                formatter: (name) => name,
            },
        },
        meta: {
            year: {
                range: [0, 1],
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="grid fill"
                style={{ marginBottom: customStyles.margin }}
            >
                <Line {...configGridFill} />
            </Card>
        </React.Fragment>
    )
}

export default GridFill