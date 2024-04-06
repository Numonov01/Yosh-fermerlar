import { MoreOutlined } from '@ant-design/icons';
import { Card, Col, Dropdown, Row, Space } from 'antd'
import React from 'react'
import usecustomStyles from '../../Common/customStyles';
import Breakdown from './WidgetsCharts/breakdown';
import { Disc2 } from 'lucide-react';
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

const IncomeBreackDown = () => {
    return (
        <React.Fragment>
            <Col xs={24} xl={8} style={{ marginBottom: customStyles.margin, width: '100%'}}>
                <Card>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h5 style={{ fontSize: "16px", fontWeight:'500' }}>Income Breakdown</h5>
                        <div >
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
                    </div>
                    <div>
                        <Breakdown dataColors={[customStyles.colorInfo, customStyles.colorDanger, customStyles.colorWarning, customStyles.colorSuccess]} />
                    </div>
                    <BorderTop style={{marginTop: "22px" }} >
                        <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
                            <Col xs={12}>
                                <BorderRight style={{ display: "flex"}}>
                                    <div style={{ color: customStyles.colorInfo, marginRight: "8px", marginTop:'4px' }}><Disc2 size={16} /></div>
                                    <div>
                                        <h5 style={{ fontSize: "13px", fontWeight:'500' }}>Marketing Channels</h5>
                                        <TextMuted style={{ fontSize: "12px", marginBottom: '0' }}>$22.0k</TextMuted>
                                    </div>
                                </BorderRight>
                            </Col>
                            <Col xs={12}>
                                <div style={{ display: "flex"}}>
                                    <div style={{ color: customStyles.colorWarning, marginRight: "8px", marginTop:'4px' }}><Disc2 size={16} /></div>
                                    <div>
                                        <h5 style={{ fontSize: "13px", fontWeight:'500' }}>Direct Sales</h5>
                                        <TextMuted style={{ fontSize: "12px", marginBottom: '0' }}>$8.4k</TextMuted>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <BorderRight style={{ display: "flex" }}>
                                    <div style={{ color: customStyles.colorDanger, marginRight: "8px", marginTop:'4px' }}><Disc2 size={16} /></div>
                                    <div>
                                        <h5 style={{ fontSize: "13px", fontWeight:'500' }}>Offline Channels</h5>
                                        <TextMuted style={{ fontSize: "11px", marginBottom: '0'}}>$18.6k</TextMuted>
                                    </div>

                                </BorderRight>
                            </Col>
                            <Col xs={12}>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: customStyles.colorSuccess, marginRight: "8px", marginTop:'4px' }}><Disc2 size={16} /></div>
                                    <div>
                                        <h5 style={{ fontSize: "13px" , fontWeight:'500'}}>Other Channels</h5>
                                        <TextMuted style={{ fontSize: "11px", marginBottom: '0' }}>$15.3k</TextMuted>
                                    </div>
                                </div>
                             </Col>
                        </Row>
                    </BorderTop>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default IncomeBreackDown