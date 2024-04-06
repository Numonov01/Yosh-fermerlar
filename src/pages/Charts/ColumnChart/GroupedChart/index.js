import { Col, Row } from 'antd'
import React from 'react'
import Groupedhistochart from './Groupedhistochart'
import RoundedHisto from './RoundedHisto'
import StackedGroup from './StackedGroup'
import PixelLevelchart from './PixelLevelchart'
import Breadcrumb from '../../../../Common/Breadcrumb'

const GroupedHistogram = () => {

  document.title = "Grouped Histogram" + process.env.REACT_APP_PAGE_TITLE;

  return (
    <React.Fragment>
      <Breadcrumb mainTitle="Column Charts" pageTitle="Grouped Histogram" />
      <Row gutter={[20]}>
        <Col span={24} xl={12} className="gutter-row">
          <Groupedhistochart />
          <RoundedHisto />
        </Col>
        <Col span={24} xl={12} className="gutter-row">
          <StackedGroup />
          <PixelLevelchart />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default GroupedHistogram