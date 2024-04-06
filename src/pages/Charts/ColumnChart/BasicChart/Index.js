import React from 'react'
import BasicHIstogramChart from './BasicHIstogram'
import Breadcrumb from '../../../../Common/Breadcrumb'
import CustomHistogram from './CustomHistogram'
import BarwithThumbnail from './BarwithThumbnail'
import ScrollHistogram from './ScrollHistogram'
import Conversionrate from './Conversionrate'
import { Col, Row } from 'antd'

const BasicHistogram = () => {
    
    document.title = "Basic Histogram" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            <Breadcrumb mainTitle="Column Charts" pageTitle="Basic Histogram" />


            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <BasicHIstogramChart />
                    <BarwithThumbnail />
                    <Conversionrate />
                </Col>
                <Col span={24} xl={12} className="gutter-row">
                    <CustomHistogram />
                    <ScrollHistogram />
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default BasicHistogram