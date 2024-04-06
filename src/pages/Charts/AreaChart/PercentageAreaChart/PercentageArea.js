import React, { useEffect, useState } from 'react'
import Breadcrumb from "../../../../Common/Breadcrumb";
import { Card, Col, Row,  } from "antd";
import { Area,} from "@ant-design/plots";
import usecustomStyles from '../../../../Common/customStyles';

 const PercentageArea = () => {

  document.title = "Percentage Area" + process.env.REACT_APP_PAGE_TITLE;
    
  //percents Area/100%stacked area
  const [data100StackedArea, setdata100StackedArea] = useState([]);
  const customStyles = usecustomStyles();

  useEffect(() => {
    asyncFetc100StackedAreah();
  }, []);

  const asyncFetc100StackedAreah = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json"
    )
      .then((response) => response.json())
      .then((json) => setdata100StackedArea(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config100StackedArea = {
    data: data100StackedArea,
    xField: "year",
    yField: "value",
    seriesField: "country",
    color: ["#82d1de", "#cb302d", "#e3ca8c"],
    areaStyle: {
      fillOpacity: 0.7,
    },
    appendPadding: 10,
    isPercent: true,
    yAxis: {
      label: {
        formatter: (value) => {
          return value * 100;
        },
      },
    },
  };
  //percents chart/100% stacked area chart with map
  const [dataconfig100satackMap, setDataconfig100satackMap] = useState([]);

  useEffect(() => {
    asyncFetchconfig100satackMap();
  }, []);

  const asyncFetchconfig100satackMap = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json"
    )
      .then((response) => response.json())
      .then((json) => setDataconfig100satackMap(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config100satackMap = {
    data: dataconfig100satackMap,
    xField: "year",
    yField: "value",
    seriesField: "country",
    color: ["#82d1de", "#cb302d", "#e3ca8c"],
    areaStyle: {
      fillOpacity: 0.7,
    },
    appendPadding: 10,
    isPercent: true,
    yAxis: {
      label: {
        formatter: (value) => {
          return value * 100;
        },
      },
    },
    pattern: {
      type: "line",
    },
  };
  return (
    <>
     <Breadcrumb mainTitle="Area Charts" pageTitle="Percentage Area" />
    
    <Row gutter={[20]}>
      <Col span={24} xl={12} className="gutter-row">
        <Card
          title="100% Stacked Area Chart"
          style={{ marginBottom: customStyles.margin }}
        >
          <Area {...config100StackedArea} />
        </Card>
      </Col>
      <Col span={24} xl={12} className="gutter-row">
        <Card
          title="100% stacked area chart with map"
          style={{ marginBottom: customStyles.margin }}
        >
          <Area {...config100satackMap} />
        </Card>
      </Col>
    </Row>
    </>
  )
}
export default PercentageArea;
