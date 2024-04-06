import { Col, Row } from 'antd'
import React from 'react'

// Images
import logo1 from "../../../assets/images/brands/chrome.png"
import logo2 from "../../../assets/images/brands/cloud-computing.png"
import logo3 from "../../../assets/images/brands/dropbox.png"
import logo4 from "../../../assets/images/brands/evernote.png"
import logo5 from "../../../assets/images/brands/firefox.png"
import logo6 from "../../../assets/images/brands/github.png"
import logo7 from "../../../assets/images/brands/google-drive.png"
import logo8 from "../../../assets/images/brands/microsoft.png"
import logo9 from "../../../assets/images/brands/opera.png"
import logo10 from "../../../assets/images/brands/slack.png"


const Brandloop = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="gutter-row" style={{ marginRight: "100px" }}>
                    <img src={ logo1 } alt="" style={{height: "50px", width: "50px"}} />
                </Col>
                <Col className="gutter-row" style={{ marginRight: "100px" }}>
                    <img src={ logo2 } alt="" style={{height: "50px", width: "50px"}} />
                </Col>
                <Col className="gutter-row" style={{ marginRight: "100px" }}>
                    <img src={ logo3 } alt="" style={{height: "50px", width: "50px"}} />
                </Col>
                <Col className="gutter-row" style={{ marginRight: "100px" }}>
                    <img src={ logo4 } alt="" style={{height: "50px", width: "50px"}} />
                </Col>
                <Col className="gutter-row" style={{ marginRight: "100px" }}>
                    <img src={ logo5 } alt="" style={{height: "50px", width: "50px"}} />
                </Col>
                <Col className="gutter-row" style={{ marginRight: "100px" }}>
                    <img src={ logo6 } alt="" style={{height: "50px", width: "50px"}} />
                </Col>
                <Col className="gutter-row" style={{ marginRight: "100px" }}>
                    <img src={ logo7 } alt="" style={{height: "50px", width: "50px"}} />
                </Col>
                <Col className="gutter-row" style={{ marginRight: "100px" }}>
                    <img src={ logo8 } alt="" style={{height: "50px", width: "50px"}} />
                </Col>
                <Col className="gutter-row" style={{ marginRight: "100px" }}>
                    <img src={ logo9 } alt="" style={{height: "50px", width: "50px"}} />
                </Col>
                <Col className="gutter-row" style={{ marginRight: "100px" }}>
                    <img src={ logo10 } alt="" style={{height: "50px", width: "50px"}} />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Brandloop