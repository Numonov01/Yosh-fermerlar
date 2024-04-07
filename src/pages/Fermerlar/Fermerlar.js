import React, { useEffect, useState } from "react";
import { Pie } from "@ant-design/plots";
import { Card } from "antd";
import axios from "axios";

function Fermerlar() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const config1 = {
    data: data1,
    angleField: "area",
    colorField: "name",
    paddingRight: 80,
    label: {
      text: "value",
      position: "outside",
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };
  const config2 = {
    data: data2,
    angleField: "count",
    colorField: "name",
    paddingRight: 80,
    label: {
      text: "value",
      position: "outside",
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };

  useEffect(() => {
    axios
      .get("http://84.54.115.14:8071/api/map/dehqon-pie?language=uz")
      .then(function (response) {
        setData1(response);
        console.log(response);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://84.54.115.14:8071/api/map/type-of-activity?language=uz", {
        headers: {
          authorization: "Bearer 64d0214016586ee4df96bf62197e2c728601a85e",
        },
      })
      .then(function (response) {
        setData2(response);
        console.log(response);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://84.54.115.14:8071/api/map/appeals?language=uz", {
        headers: {
          authorization: "Bearer 64d0214016586ee4df96bf62197e2c728601a85e",
        },
      })
      .then(function (response) {
        setData3(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  const config3 = {
    data: data3,
    angleField: "count",
    colorField: "name",
    paddingRight: 80,
    label: {
      text: "value",
      position: "outside",
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };

  return (
    <>
      <div className="son">
        <Card
          title={<span style={{ color: "green" }}>Yosh dehqonlar soni</span>}
          bordered={false}
        >
          <p>Card content</p>
        </Card>
        <Card
          title={
            <span style={{ color: "green" }}>
              Yosh dehqonlarga ajratilgan maydon
            </span>
          }
          bordered={false}
        >
          <p>Card content</p>
        </Card>
        <Card
          title={<span style={{ color: "green" }}>Yosh dehqonlar soni</span>}
          bordered={false}
        >
          <p>Card content</p>
        </Card>
        <Card
          title={
            <span style={{ color: "green" }}>
              Yosh dehqonlarga ajratilgan maydon
            </span>
          }
          bordered={false}
        >
          <p>Card content</p>
        </Card>
      </div>
      <div className="wrap">
        <div className="statistika">
          <h1>Hududiy ko'rsatgichlar</h1>
          <h3>Yosh dehqonlarga ajratilgan maydon</h3>
          <hr></hr>
          <Pie {...config1} className="pie1" />
        </div>
        <div className="statistika">
          <h1>Faoliyat turi</h1>
          <h3>Yosh dehqonlar soni</h3>
          <hr></hr>
          <Pie {...config2} className="pie2" />
        </div>
        <div className="statistika">
          <h1>Daromad</h1>
          <hr></hr>
        </div>
        <div className="statistika">
          <h1>Muammo va takliflar</h1>
          <hr></hr>
          <Pie {...config3} className="pie3" />
        </div>
      </div>
    </>
  );
}

export default Fermerlar;
