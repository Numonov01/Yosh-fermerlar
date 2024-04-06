import { Col, Row } from 'antd'
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import Plotcolormap from './Plotcolormap'
import ScatterplotGraph from './ScatterplotGraph'

const ScatterPlotcharts = () => {

    document.title = "Scatter Plot" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Scatter Bubble Chart" pageTitle="Scatterplot" />
            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Plotcolormap />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <ScatterplotGraph />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ScatterPlotcharts