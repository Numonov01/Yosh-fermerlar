import React from 'react'
import Breadcrumb from "../../../Common/Breadcrumb";
import { Card, Col, Row, } from "antd";
import { Line, } from "@ant-design/plots";
import { dataMultulineStepline, datastepLine } from '../ChartData';
import usecustomStyles from '../../../Common/customStyles';

export const ChartStepLine = () => {
  const customStyles = usecustomStyles();

  // page title
  document.title = "Step Line" + process.env.REACT_APP_PAGE_TITLE;

  //stepline chart/step Line Chart
  const configstepline = {
    data: datastepLine,
    xField: "year",
    yField: "value",
    stepType: "vh",
  };
  //sted line chart/multi Line
  const configMultulineStepline = {
    data: dataMultulineStepline,
    xField: "month",
    yField: "value",
    legend: false,
    seriesField: "key",
    stepType: "hvh",
  };
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb mainTitle="Line Charts" pageTitle="Step Line" />

      <Row gutter={[20]}>
        <Col span={24} xl={12} className="gutter-row">
          <Card
            title="step line chart"
            style={{ marginBottom: customStyles.margin }}
          >
            <Line {...configstepline} />
          </Card>
        </Col>
        <Col span={24} xl={12} className="gutter-row">
          <Card
            title="Multi-step line chart"
            style={{ marginBottom: customStyles.margin }}
          >
            <Line {...configMultulineStepline} />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ChartStepLine;