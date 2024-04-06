import { Card, Col, Dropdown, Space } from 'antd'
import React from 'react'
import usecustomStyles from '../../Common/customStyles';
import { ChevronDown } from 'lucide-react';
import { RadialBar } from '@ant-design/plots';

const customStyles = usecustomStyles();

const Salebycategory = () => {

    const dropdown = [
        { label: 'Download Report', key: 1 },
        { label: 'Export', key: 2 },
        { label: 'Import', key: 3 },
    ]

// Chart
    const saledata = [
        {
          "year": "1991",
          "value": 3,
          "type": "Lon"
        },
        {
          "year": "1992",
          "value": 4,
          "type": "Lon"
        },
        {
          "year": "1993",
          "value": 3.5,
          "type": "Lon"
        },
        {
          "year": "1994",
          "value": 5,
          "type": "Lon"
        },
        {
          "year": "1995",
          "value": 4.9,
          "type": "Lon"
        },
        {
          "year": "1996",
          "value": 6,
          "type": "Lon"
        },
        {
          "year": "1997",
          "value": 7,
          "type": "Lon"
        },
        {
          "year": "1998",
          "value": 9,
          "type": "Lon"
        },
        {
          "year": "1999",
          "value": 13,
          "type": "Lon"
        },
        {
          "year": "1991",
          "value": 3,
          "type": "Bor"
        },
        {
          "year": "1992",
          "value": 4,
          "type": "Bor"
        },
        {
          "year": "1993",
          "value": 3.5,
          "type": "Bor"
        },
        {
          "year": "1994",
          "value": 5,
          "type": "Bor"
        },
        {
          "year": "1995",
          "value": 4.9,
          "type": "Bor"
        },
        {
          "year": "1996",
          "value": 6,
          "type": "Bor"
        },
        {
          "year": "1997",
          "value": 7,
          "type": "Bor"
        },
        {
          "year": "1998",
          "value": 9,
          "type": "Bor"
        },
        {
          "year": "1999",
          "value": 13,
          "type": "Bor"
        }
      ]

      const config = {
        data : saledata,
        xField: 'year',
        yField: 'value',
        colorField: 'type',
        isStack: true,
        maxAngle: 270,
      };
    

    return (
        <React.Fragment>
            <Col xs={24} xl={8}>
                <Card className="card-height-100">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom:'10px'}}>
                        <h4 className=" mb-0 flex-grow-1" style={{marginBottom: '0', fontSize:'16px', fontWeight:'500'}}>Sales by Category</h4>
                        <div className="flex-shrink-0">
                            <Dropdown
                                menu={{
                                    dropdown,
                                }}
                                trigger={['click']}
                            >
                                <a href='/#' onClick={(e) => e.preventDefault()} style={{ color: customStyles.colorText }}>
                                    <Space>
                                        <span style={{ color: customStyles.textMuted }}>Report<ChevronDown size={15} /></span>
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>

                    <div>
                        <div id="multiple_radialbar" dir="ltr">
                            <RadialBar {...config} height={413} />
                        </div>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default Salebycategory