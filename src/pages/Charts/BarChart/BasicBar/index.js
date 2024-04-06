import { Col, Row } from 'antd'
import React from 'react'
import Breadcrumb from '../../../../Common/Breadcrumb'
import Basicbarchart from './Basicbarchart';
import CustomizeColorBar from './CustomizeColorBar';
import WidthScale from './WidthScale';

const BasicBarCharts = () => {

  // page title
  document.title = "Basic Bar" + process.env.REACT_APP_PAGE_TITLE;

  return (
    <React.Fragment>
      <Breadcrumb mainTitle="Bar Charts" pageTitle="Basic Bar" />

      <Row gutter={[20]}>
        <Col span={24} xl={12} className="gutter-row">
          <Basicbarchart />
          <WidthScale />
        </Col>
        <Col span={24} xl={12} className="gutter-row">
          <CustomizeColorBar />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default BasicBarCharts