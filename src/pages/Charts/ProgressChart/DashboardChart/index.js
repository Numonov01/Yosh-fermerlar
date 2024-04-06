import { Col, Row } from 'antd'
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import Dashchart from './Dashchart'
import AuxiliaryWidth from './AuxiliaryWidth'
import Monochrome from './Monochrome'
import GaugeplotCustomColor from './GaugeplotCustomColor'
import Metergauge from './Metergauge'
import DashboardIndicators from './DashboardIndicators'

const DashboardProgressChart = () => {

    document.title = "Dashboard Chart" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Charts" pageTitle="Dash Board" />
            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Dashchart />
                    <Monochrome />
                    <Metergauge />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <AuxiliaryWidth />
                    <GaugeplotCustomColor />
                    <DashboardIndicators />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DashboardProgressChart