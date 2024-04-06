import React from "react";
import Breadcrumb from "../../../../Common/Breadcrumb";
import { Col, Row } from "antd";
import CircleDiagram from "./CircleDiagram";
import Rectangularwave from "./Rectangularwave";
import StarDiagram from "./StarDiagram";
import Wavewithtexture from "./Wavewithtexture";

const WaterWaveCharts = () => {
  document.title = "Water Wave Map" + process.env.REACT_APP_PAGE_TITLE;

  return (
    <React.Fragment>
      <Breadcrumb mainTitle="Charts" pageTitle="water wave map" />
      <Row gutter={[20]}>
        <Col span={24} xl={12} className="gutter-row">
          <CircleDiagram />
          <StarDiagram />
        </Col>
        <Col span={24} xl={12} className="gutter-row">
          <Rectangularwave />
          <Wavewithtexture />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default WaterWaveCharts;
