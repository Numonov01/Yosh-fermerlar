import { Col, Row } from 'antd'
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import PercentHisto from './PercentHisto'
import LinkedArea from './LinkedArea'

const PercentageHistogram = () => {

    document.title = "Percentage Histogram" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Column Charts" pageTitle="Percentage Histogram" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <PercentHisto />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <LinkedArea />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default PercentageHistogram