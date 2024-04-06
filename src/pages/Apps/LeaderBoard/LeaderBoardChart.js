import { Card, Col, Dropdown, Row, Space, Typography } from 'antd';
import React from 'react'
import usecustomStyles from '../../../Common/customStyles';
import { ChevronDown, Circle } from 'lucide-react';
import { Column, RadialBar } from '@ant-design/plots';
const { Text } = Typography;

const customStyles = usecustomStyles();

const LeaderBoardChart = () => {

    const items = [
        { label: 'Today', key: '0' },
        { label: 'Yesterday', key: '1' },
        { label: 'Last 7 Days', key: '2' },
        { label: 'Last 30 Days', key: '3' },
        { label: 'This Month', key: '4' },
        { label: 'Last Month', key: '5' },
    ];

    // Hour Chart
    const hourdata = [
        { day: 'Mo', number: 7 },
        { day: 'Tu', number: 11 },
        { day: 'We', number: 15 },
        { day: 'Th', number: 20 },
        { day: 'Fr', number: 18 },
        { day: 'Sa', number: 20 },
        { day: 'Su', number: 23 },
        { day: 'M', number: 21 },
        { day: 'T', number: 19 },
        { day: 'W', number: 8 },
    ];

    const Barthumbnailaxis = {
        data: hourdata,
        xField: "day",
        yField: "number",
    };

    // Productivity
    const productivity = [
        {
            name: 'X6',
            star: 44,
        },
        {
            name: 'G',
            star: 55,
        },
        {
            name: 'AVA',
            star: 67,
        },
    ]

    const config = {
        data: productivity,
        xField: 'name',
        yField: 'star',
        maxAngle: 270,
        radius: 0.8,
        colorField: 'star',
        color: ({ star }) => {
            if (star > 60) {
                return '#6349ec';
            } else if (star > 50) {
                return '#ff9300';
            }

            return '#ff93a7';
        },
        barBackground: {},
        barStyle: {
            lineCap: 'round',
        },
    };

    return (
        <React.Fragment>
            <Col lg={8}>
                {/* Hour */}
                <Card className="h-100" style={{marginBottom : customStyles.margin}}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: '20px' }}>
                        <h3 style={{marginBottom:'0'}}>Hours Spent</h3>
                        <div className="flex-shrink-0">
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <a href='/#' onClick={(e) => e.preventDefault()} style={{ color: customStyles.colorText }}>
                                    <Space>
                                        <Text style={{ fontSize: "12px" }}>SORT BY: </Text><span style={{ color: customStyles.textMuted }}>Today<ChevronDown size={15} /></span>
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <div>
                            <Column {...Barthumbnailaxis} height={150} style={{ color: customStyles.colorInfo }} />
                        </div>
                    </div>
                </Card>

                {/* Product */}
                <Card>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h3 style={{marginBottom:'0'}}>Productivity Growth</h3>
                    </div>
                    <Row>
                        <Col xs={24} md={10} style={{display:'flex', justifyContent:'center', flexDirection:'column'}} >
                            <Text><Circle size={12} style={{marginRight:'4px', color: customStyles.colorDangerBg }} />  Productive : 44</Text><br />
                            <Text><Circle size={12} style={{marginRight:'4px', color: customStyles.colorWarning }} /> Neutral : 55</Text><br />
                            <Text><Circle size={12} style={{marginRight:'4px', color: customStyles.colorSecondary }} /> UnProductive : 67</Text>
                        </Col>
                        <Col xs={24} md={14}>
                            <RadialBar {...config} height={194} style={{paddingTop: "16px"}} />
                        </Col>
                    </Row>
                </Card>

            </Col>
        </React.Fragment>
    )
}

export default LeaderBoardChart