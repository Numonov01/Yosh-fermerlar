import { Col, Row } from 'antd'
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import BasicChart from './BasicChart'
import GradientArea from './GradientArea'
import ThumbnailChart from './ThumbnailChart'

const BasicAreachart = () => {

    document.title = "Basic Area" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Area Charts" pageTitle="Basic Area" />
            <Row gutter={[20]}>
                <Col xs={24} md={12} className="gutter-row">
                    <BasicChart />
                    <ThumbnailChart />
                </Col>
                <Col xs={24} md={12} className="gutter-row">
                    <GradientArea />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BasicAreachart