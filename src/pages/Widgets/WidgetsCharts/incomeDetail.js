import React from 'react'
import { Area } from '@ant-design/plots';

const incomechartData = [
    { data: 8107.85, date: "13 Nov 2017" },
    { data: 8128.0, date: "14 Nov 2017" },
    { data: 8122.9, date: "15 Nov 2017" },
    { data: 8165.5, date: "16 Nov 2017" },
    { data: 8340.7, date: "17 Nov 2017" },
    { data: 8423.7, date: "18 Nov 2017" },
    { data: 8423.5, date: "19 Nov 2017" },
    { data: 8514.3, date: "20 Nov 2017" },
    { data: 8481.85, date: "21 Nov 2017" },
    { data: 8487.7, date: "22 Nov 2017" },
    { data: 8506.9, date: "23 Nov 2017" },
    { data: 8626.2, date: "24 Nov 2017" },
    { data: 8668.95, date: "25 Nov 2017" },
    { data: 8602.3, date: "26 Nov 2017" },
    { data: 8607.55, date: "27 Nov 2017" },
    { data: 8512.9, date: "28 Nov 2017" },
    { data: 8496.25, date: "29 Nov 2017" },
    { data: 8600.65, date: "30 Nov 2017" },
    { data: 8881.1, date: "1 Dec 2017" },
    { data: 9340.85, date: "4 Dec 2017" },
]

const IncomedetailChart = () => {


    const configGradientColorArea = {
        data: incomechartData,
        xField: "date",
        yField: "data",
        xAxis: { 
            // range: [0, 1],
            tickCount: 5,
        },
        areaStyle: () => {
            return {
                fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
            };
        },
    };

    return (
        <React.Fragment>
            <Area {...configGradientColorArea} height={267} />
        </React.Fragment>
    )
}

export default IncomedetailChart