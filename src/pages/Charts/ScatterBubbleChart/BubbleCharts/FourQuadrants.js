import { Scatter } from '@ant-design/plots'
import React, { useEffect, useState } from 'react'
import usecustomStyles from '../../../../Common/customStyles';

import { Card } from 'antd'
const customStyles = usecustomStyles();

const FourQuadrants = () => {

    const [dataFourQuadrants, setDataFourQuadrants] = useState([]);

    useEffect(() => {
        asyncFetchFourQuadrants();
    }, []);

    const asyncFetchFourQuadrants = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/0b37279d-1674-42b4-b285-29683747ad9a.json')
            .then((response) => response.json())
            .then((json) => setDataFourQuadrants(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const FourQuadrants = {
        appendPadding: 30,
        data: dataFourQuadrants,
        xField: 'change in female rate',
        yField: 'change in male rate',
        sizeField: 'pop',
        colorField: 'continent',
        color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
        size: [4, 30],
        shape: 'circle',
        pointStyle: {
            fillOpacity: 0.8,
            stroke: '#bbb',
        },
        xAxis: {
            min: -25,
            max: 5,
            grid: {
                line: {
                    style: {
                        stroke: '#eee',
                    },
                },
            },
            line: {
                style: {
                    stroke: '#aaa',
                },
            },
        },
        yAxis: {
            line: {
                style: {
                    stroke: '#aaa',
                },
            },
        },
        quadrant: {
            xBaseline: 0,
            yBaseline: 0,
            labels: [
                {
                    content: 'Male decrease,\nfemale increase',
                },
                {
                    content: 'Female decrease,\nmale increase',
                },
                {
                    content: 'Female & male decrease',
                },
                {
                    content: 'Female &\n male increase',
                },
            ],
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Bubble Chart - Four Quadrants"
                style={{ marginBottom: customStyles.margin }}
            >
                <Scatter {...FourQuadrants} />
            </Card>
        </React.Fragment>
    )
}

export default FourQuadrants