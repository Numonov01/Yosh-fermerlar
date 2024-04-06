import { Col, Row } from 'antd'
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import BasicCircle from './BasicCircle'
import StatisticalIndex from './StatisticalIndex'

const RingDiagramChart = () => {

    document.title = "Ring Diagram" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Pie Charts" pageTitle="Ring Diagram" />
            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <BasicCircle />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <StatisticalIndex />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default RingDiagramChart