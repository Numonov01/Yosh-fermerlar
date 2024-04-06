import { Col, Row } from 'antd'
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import Piechart from './Piechart'
import PersonalizedLabel from './PersonalizedLabel'
import QuartleCircle from './QuartleCircle'
import ChartLegend from './ChartLegend'
import Texturedpiechart from './Texturedpiechart'

const PieCharts = () => {

    document.title = "Pie Chart" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Pie Charts" pageTitle="Pie Chart" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Piechart />
                    <QuartleCircle />
                    <Texturedpiechart />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <PersonalizedLabel />
                    <ChartLegend />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default PieCharts