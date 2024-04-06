import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import { Col, Row } from 'antd'
import Sourcechart from './Sourcechart'
import AnimationChart from './Animation'
import GridFill from './GridFill'
import PolyLineChart from './PolyLineChart'

const MultiLineCharts = () => {

    document.title = "Multi Line" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Line Charts" pageTitle="Multi Line" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Sourcechart />
                    <GridFill />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <AnimationChart />
                    <PolyLineChart />
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default MultiLineCharts