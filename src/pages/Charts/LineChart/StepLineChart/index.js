import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import { Col, Row } from 'antd'
import StepsLine from './StepsLine'
import MultiStep from './MultiStep'

const StepLineChart = () => {

    // page title
    document.title = "Step Line" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Line Charts" pageTitle="Step Line" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <StepsLine />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <MultiStep />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default StepLineChart