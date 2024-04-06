import React from "react";
import { Pie } from "@ant-design/plots";
import { Card } from "antd";

function Fermerlar() {
  const config1 = {
    data: [
      { type: "Toshkent", value: 15.5 },
      { type: "Qashqadaryo", value: 5.3 },
      { type: "Sirdaryo", value: 6.7 },
      { type: "Jizzax", value: 1.5 },
      { type: "Samarqand", value: 2.9 },
      { type: "Farg'ona", value: 6.3 },
      { type: "Namangan", value: 4.6 },
      { type: "Andijon", value: 6.8 },
      { type: "Surxondaryo", value: 10.5 },
      { type: "Buxoro", value: 7.9 },
      { type: "Navoiy", value: 6.7 },
      { type: "Xorazm", value: 7.8 },
      { type: "Qoraqalpog'iston", value: 5 },
    ],
    angleField: "value",
    colorField: "type",
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
    data: [
      { type: "Toshkent", value: 80.5 },
      { type: "Qashqadaryo", value: 3.3 },
      { type: "Sirdaryo", value: 1.7 },
      { type: "Jizzax", value: 1.5 },
      { type: "Samarqand", value: 1.9 },
      { type: "Farg'ona", value: 1.3 },
      { type: "Namangan", value: 1.6 },
      { type: "Andijon", value: 0.8 },
      { type: "Surxondaryo", value: 1.5 },
      { type: "Buxoro", value: 1.4 },
      { type: "Navoiy", value: 1.7 },
      { type: "Xorazm", value: 1.8 },
      { type: "Qoraqalpog'iston", value: 1 },
    ],
    angleField: "value",
    colorField: "type",
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
    data: [
      { type: "Toshkent", value: 15.5 },
      { type: "Qashqadaryo", value: 5.3 },
      { type: "Sirdaryo", value: 6.7 },
      { type: "Jizzax", value: 1.5 },
      { type: "Samarqand", value: 2.9 },
      { type: "Farg'ona", value: 6.3 },
      { type: "Namangan", value: 4.6 },
      { type: "Andijon", value: 6.8 },
      { type: "Surxondaryo", value: 10.5 },
      { type: "Buxoro", value: 7.9 },
      { type: "Navoiy", value: 6.7 },
      { type: "Xorazm", value: 7.8 },
      { type: "Qoraqalpog'iston", value: 5 },
    ],
    angleField: "value",
    colorField: "type",
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
