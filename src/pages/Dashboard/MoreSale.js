import { Avatar, Button, Col, Row } from 'antd'
import React from 'react'
import { PlusCircle, Store } from 'lucide-react';
import styled from 'styled-components';

const BgInfo = styled.div`
      background-color: ${({ theme }) => theme.token.colorInfoBg};
`;

const TextInfo = styled.div`
      color: ${({ theme }) => theme.token.textInfo};
`;
const TextPrimary = styled.div`
      color: ${({ theme }) => theme.token.textDark};
`;

const MoreSale = () => {
    return (
        <React.Fragment>
            <Col xs={24}>
                    <BgInfo style={{ padding: '22px', borderRadius: '8px', marginTop: '24px', position:'relative' }}>
                        <Row style={{ display: "flex", justifyContent: "space-between" }} className="gy-5">
                            <Col className="col-sm">
                                <TextPrimary style={{ fontSize: "18px", marginBottom:'8px', fontWeight:'600' }}>Need More Sales?</TextPrimary>
                                <TextInfo className="mb-0">Upgrade to pro for added benefits.</TextInfo>
                            </Col>
                            <Col className="col-sm-auto ">
                                <Button type='primary' style={{ display:'flex', alignItems:'center', backgroundColor: "#4ab0c1", boxShadow: 'none', paddingLeft: "0px", height: "40px" }} shape='round'><Avatar size="large" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", marginTop: "0", marginRight: "6px" }} icon={<PlusCircle style={{ paddingTop: "7px" }} />} /> Upgrade Account</Button>
                            </Col>
                            <div style={{ position: "absolute", color:'#4ab0c1', marginLeft: "50%", opacity: "0.25", top:'16px'}} className="position-absolute start-50 mt-2 opacity-25">
                                <Store size={60} />
                            </div>
                        </Row>
                    </BgInfo>
            </Col>
        </React.Fragment>
    )
}

export default MoreSale