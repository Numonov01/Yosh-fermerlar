import { Card, Col, Row } from 'antd'
import React from 'react'
import Meta from 'antd/es/card/Meta';
import cardSmallImg1 from '../../../assets/images/small/img-1.jpg';
import cardSmallImg2 from '../../../assets/images/small/img-2.jpg';
import cardSmallImg3 from '../../../assets/images/small/img-3.jpg';
import cardSmallImg4 from '../../../assets/images/small/img-4.jpg';
import cardSmallImg5 from '../../../assets/images/small/img-5.jpg';
import cardSmallImg6 from '../../../assets/images/small/img-6.jpg';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const Cardloop = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="gutter-row" style={{ marginRight: customStyles.margin }}>
                    <Card 
                        style={{ width: 240, }}
                        cover={<img alt="example" src={cardSmallImg1} />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>

                </Col>
                <Col className="gutter-row" style={{ marginRight: customStyles.margin }}>
                    <Card
                        style={{ width: 240, }}
                        cover={<img alt="example" src={cardSmallImg2} />}
                    >
                        <Meta title="Moutains high" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col className="gutter-row" style={{ marginRight: customStyles.margin }}>
                    <Card
                        style={{ width: 240, }}
                        cover={<img alt="example" src={cardSmallImg3} />}
                    >
                        <Meta title="Flower Blossom" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col className="gutter-row" style={{ marginRight: customStyles.margin }}>
                    <Card    
                        style={{ width: 240, }}
                        cover={<img alt="example" src={cardSmallImg4} />}
                    >
                        <Meta title="Color springs" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col className="gutter-row" style={{ marginRight: customStyles.margin }}>
                    <Card         
                        style={{ width: 240, }}
                        cover={<img alt="example" src={cardSmallImg5} />}
                    >
                        <Meta title="Empty of doors" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col className="gutter-row" style={{ marginRight: customStyles.margin }}>
                    <Card  
                        style={{ width: 240, }}
                        cover={<img alt="example" src={cardSmallImg6} />}
                    >
                        <Meta title="Under Water Ocean" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default Cardloop