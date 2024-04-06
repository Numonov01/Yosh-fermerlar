import React, { useEffect, useState } from 'react'
import Breadcrumb from "../../Common/Breadcrumb";
import { Card, Col, Row,  } from "antd";
import { Column,} from "@ant-design/plots";
import usecustomStyles from '../../Common/customStyles';


 const StackedColumn = () => {
  const customStyles = usecustomStyles();
     
  //stacked column
  const [datastackedcolumn, setDatastackedcolumn] = useState([]);

  useEffect(() => {
    asyncFetchstackedcolumn();
  }, []);

  const asyncFetchstackedcolumn = () => {
    fetch(
      "https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json"
    )
      .then((response) => response.json())
      .then((json) => setDatastackedcolumn(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const stackedcolumn = {
    data: datastackedcolumn,
    isStack: true,
    xField: "year",
    yField: "value",
    seriesField: "type",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: "interval-adjust-position",
        }, // 数据标签防遮挡
        {
          type: "interval-hide-overlap",
        }, // 数据标签文颜色自动调整
        {
          type: "adjust-color",
        },
      ],
    },
  };
  //stacked column chart//custom unicom

  const [dataCustomUnicom, setDataCustomUnicom] = useState([]);

  useEffect(() => {
    asyncFetchCustomUnicom();
  }, []);

  const asyncFetchCustomUnicom = () => {
    fetch(
      "https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json"
    )
      .then((response) => response.json())
      .then((json) => setDataCustomUnicom(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const CustomUnicom = {
    data: dataCustomUnicom,
    isStack: true,
    xField: "year",
    yField: "value",
    seriesField: "type",
    label: {
      // 可手动配置 label 数据标签位置
      position: "bottom", // 'top', 'bottom', 'middle'
    },
    interactions: [
      {
        type: "active-region",
        enable: false,
      },
    ],
    connectedArea: {
      style: (oldStyle, element) => {
        return {
          fill: "red",
          stroke: oldStyle.fill,
          lineWidth: 0.5,
        };
      },
    },
  };
  //stacked column chart/set background color
  const [databackgroundcolor, setDatabackgroundcolor] = useState([]);

  useEffect(() => {
    asyncFetchbackgroundcolor();
  }, []);

  const asyncFetchbackgroundcolor = () => {
    fetch(
      "https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json"
    )
      .then((response) => response.json())
      .then((json) => setDatabackgroundcolor(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const backgroundcolor = {
    data: databackgroundcolor,
    isStack: true,
    xField: "year",
    yField: "value",
    seriesField: "type",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle", // 'top', 'bottom', 'middle'
    },
    interactions: [
      {
        type: "active-region",
        enable: false,
      },
    ],
    columnBackground: {
      style: {
        fill: "rgba(0,0,0,0.1)",
      },
    },
  };
  return (
    <> <Breadcrumb mainTitle="Components" pageTitle="Charts" />
   
    <Row gutter={[20]}>
      <Col span={24} xl={12} >
        <Card
          title="stacked column chart"
          style={{ marginBottom: customStyles.margin }}
        >
          <Column {...stackedcolumn} />
        </Card>
        <Card
          title="Set the background color of the histogram"
          style={{ marginBottom: customStyles.margin }}
        >
          <Column {...backgroundcolor} />
        </Card>
      </Col>
      <Col span={24} xl={12} >
        <Card
          title="Custom Unicom area style histogram"
          style={{ marginBottom: customStyles.margin }}
        >
          <Column {...CustomUnicom} />
        </Card>
      </Col>
    </Row>
    
    </>
  )
}
export default StackedColumn;
