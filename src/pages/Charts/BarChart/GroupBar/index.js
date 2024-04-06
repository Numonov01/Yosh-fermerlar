import { Col, Row } from 'antd'
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import Grouped from './Grouped'
import RoundedBar from './RoundedBar'

const GroupBarChart = () => {

    document.title = "Grouped Bar" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Bar Charts" pageTitle="Grouped Bar" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Grouped />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <RoundedBar />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default GroupBarChart