import React, { useEffect, useState } from "react";
import { Pie } from "@ant-design/plots";
import { Card } from "antd";
import axios from "axios";

function Fermerlar() {
  const [hudud, setHudud] = useState([]);
  const [faoliyat, setFaoliyat] = useState([]);
  const [muammo, setMuammo] = useState([]);
  const config1 = {
    data: hudud,
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
    data: faoliyat,
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
  const config3 = {
    data: muammo,
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
        setHudud(response);
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
        setFaoliyat(response);
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
        setMuammo(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="son">
        <Card
          title={<span style={{ color: "green" }}>Yosh dehqonlar soni</span>}
          bordered={false}
        >
          <h2>1596</h2>
        </Card>
        <Card
          title={
            <span style={{ color: "green" }}>
              Yosh dehqonlarga ajratilgan maydon
            </span>
          }
          bordered={false}
        >
          <h2>212,228 GA</h2>
        </Card>
        <Card
          title={<span style={{ color: "green" }}>Yosh dehqonlar soni</span>}
          bordered={false}
        >
          <h2>0</h2>
        </Card>
        <Card
          title={
            <span style={{ color: "green" }}>
              Yosh dehqonlarga ajratilgan maydon
            </span>
          }
          bordered={false}
        >
          <h2>0</h2>
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
