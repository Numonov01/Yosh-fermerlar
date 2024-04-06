import React from 'react'
import Marquee from 'react-fast-marquee'
import Breadcrumb from '../../../Common/Breadcrumb'
import { Card, Col, Row } from 'antd'
import { themecolor } from '../../../config'
import Cardloop from './cardloop'
import Brandloop from './brandloop'
import usecustomStyles from '../../../Common/customStyles'

const customStyles = usecustomStyles();

const Textloop = () => {

    document.title = "Text Loop" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Plugins" pageTitle="Text Loop" />

            {/* Text */}
            <Row>
                <Card title="Text Loop" style={{ marginBottom: customStyles.margin, width: "100%" }}>
                    <Row>
                        <Col className="gutter-row" style={{ width: "100%" }}>
                            <Marquee>
                                <p style={{marginRight: "350px"}}>This long marquee with text has no gradient and is sliding to the right.</p>
                                <p>Marquee is all about scrolling object on the screen.</p>
                            </Marquee>
                        </Col>
                    </Row>
                </Card>
            </Row>

            {/* Direction rtl */}
            <Row>
                <Card title="Reverse Text with gradient effect Loop" style={{ marginBottom: customStyles.margin }} >
                    <Row>
                        <Col className="gutter-row">
                            <Marquee direction='rtl' gradient={true}>
                                <b style={{ fontSize: themecolor.token.fontSizeHeading3 }}>
                                    This long marquee with text has no gradient and is sliding to the right.
                                </b>
                            </Marquee>
                        </Col>
                    </Row>
                </Card>
            </Row>

            {/* Card */}
            <Row>
                <Card title="Card Loop" style={{ marginBottom: customStyles.margin }}>
                    <Marquee>
                        <Cardloop />
                    </Marquee>
                </Card>
            </Row>

            {/* brands */}
            <Row>
                <Card title="Fast speed Loop" >
                    <Marquee speed={150}>
                        <Brandloop />
                    </Marquee>
                </Card>
            </Row>
        </React.Fragment>
    )
}

export default Textloop