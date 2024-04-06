import { Col, Row } from 'antd'
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import Pseudo3Dbubble from './Pseudo3Dbubble'
import FourQuadrants from './FourQuadrants'

const Bubblecharts = () => {

    document.title = "Bubble Chart" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Scatter Bubble Chart" pageTitle="Bubble Chart" />
            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <FourQuadrants />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <Pseudo3Dbubble />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Bubblecharts