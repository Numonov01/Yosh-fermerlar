import { MoreOutlined } from '@ant-design/icons';
import { Card, Col, Dropdown, Row, Space } from 'antd';
import React from 'react'
import IncomedetailChart from './WidgetsCharts/incomeDetail';
import usecustomStyles from '../../Common/customStyles';
import styled from 'styled-components';

const customStyles = usecustomStyles();
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const BorderRight = styled.div`
      border-right: 1px solid ${({ theme }) => theme.token.borderGray};
`;
const BorderTop = styled.div`
      border-top: 1px solid ${({ theme }) => theme.token.borderGray};
`;
const items = [
    { label: "View", key: '0', },
    { label: "Edit", key: '1', },
    { label: 'Delete', key: '2', },
];

const IncomeDetails = () => {

    return (
        <React.Fragment>
            <Col xs={24} xl={8} style={{marginBottom: customStyles.margin, width: '100%'}}>
                <Card>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h4 style={{ fontSize: "16px", fontWeight:'500' }}>Income Details</h4>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()} href="/#">
                                <Space>
                                    <MoreOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div style={{marginBottom: '24px'}}>
                        <h6 style={{ fontSize: "15px", fontWeight:'500' }}>$380.50</h6>
                        <p style={{ fontSize: "12px", fontWeight:'500' }}>Total Income</p>
                    </div>
                    <div>
                        <div id="area_chart_basic" dir="ltr">
                            <IncomedetailChart dataColors={customStyles.colorSuccess} />
                        </div>
                    </div>
                    <BorderTop style={{marginTop:'8px'}}>
                        <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                            <Col sm={12} lg={8}>
                                <BorderRight style={{  textAlign: 'center'}}>
                                    <h5 style={{ fontSize: "13px", fontWeight:'500' }}>$324.00</h5>
                                    <TextMuted style={{ fontSize: "12px"}}>Total Sales</TextMuted>
                                </BorderRight>
                            </Col>
                            <Col sm={12} lg={8}>
                                <BorderRight style={{textAlign: 'center'}}>
                                    <h5 style={{ fontSize: "13px", fontWeight:'500' }}>$250.00</h5>
                                    <TextMuted style={{ fontSize: "12px"}}>Spendings</TextMuted>
                                </BorderRight>
                            </Col>
                            <Col sm={12} lg={8}>
                                <div style={{  textAlign: 'center'}}>
                                    <h5 style={{ fontSize: "13px", fontWeight:'500' }}>$380.50</h5>
                                    <TextMuted style={{ fontSize: "12px"}}>Income</TextMuted>
                                </div>
                            </Col>
                        </Row>
                    </BorderTop>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default IncomeDetails