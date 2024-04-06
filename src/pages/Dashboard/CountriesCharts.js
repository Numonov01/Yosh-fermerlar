import { Bar } from '@ant-design/plots'
import React from 'react'

const data = [
    {
        category: 'Canada',
        value: 120,
    },
    {
        category: 'US',
        value: 200,
    },
    {
        category: 'Greenland',
        value: 150,
    },
    {
        category: 'Russia',
        value: 80,
    },
    {
        category: 'Brazil',
        value: 70,
    },
    {
        category: 'Sydney',
        value: 110,
    },
    {
        category: 'Norway',
        value: 130,
    },
    {
        category: 'China',
        value: 100,
    }
];

const CountriesCharts = () => {

    const BasicBar = {
        data: data,
        xField: "value",
        yField: "category",
        meta: {
            type: {
                alias: "category",
            },
            value: {
                alias: "value",
            },
        },
    };


  return (
    <React.Fragment>
        <Bar {...BasicBar} width={300} />
    </React.Fragment>
  )
}

export default CountriesCharts