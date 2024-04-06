import { Col, Row } from 'antd'
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import HorizontalOrientation from './HorizontalOrientation'
import MultipleColorRange from './MultipleColorRange'
import VerticalOrientation from './VerticalOrientation'
import StackedBulletChart from './StackedBulletChart'
import GroupedBulletChart from './GroupedBulletChart'

const BulletCharts = () => {

    document.title = "Bullet Chart" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Progress Charts" pageTitle="Bullet Chart" />
            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <HorizontalOrientation />
                    <VerticalOrientation />
                    <GroupedBulletChart />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <MultipleColorRange />
                    <StackedBulletChart />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BulletCharts