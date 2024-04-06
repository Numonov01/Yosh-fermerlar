import { Col, Row } from 'antd'
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import Stackedarea from './Stackedarea'
import Thumbnailstackarea from './Thumbnailstackarea'

const StackedArea = () => {

    document.title = "Stacked Area" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Area Charts" pageTitle="Stacked Area" />
            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Stackedarea />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <Thumbnailstackarea />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default StackedArea