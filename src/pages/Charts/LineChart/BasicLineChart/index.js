import { Col, Row } from 'antd';
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb';
import BasicChartLine from './BasicChartLine';
import BasicCurve from './BasicCurve';
import CustomwithMark from './CustomwithMark';
import ConditionalLine from './ConditionalLine';

const BasicLineChart = () => {

    // page title
    document.title = "Basic Line" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>

            <Breadcrumb mainTitle="Line Charts" pageTitle="Basic Line" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <BasicChartLine />
                    <BasicCurve />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <ConditionalLine />
                    <CustomwithMark />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BasicLineChart