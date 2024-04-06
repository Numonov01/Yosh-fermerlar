import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
//Breadcrumbs
import { Breadcrumb as BreadcrumbItem } from "antd";
import Breadcrumb from "../../../Common/Breadcrumb";
import usecustomStyles from "../../../Common/customStyles";
const { Text, Link } = Typography;

const customStyles = usecustomStyles();

const UiBreadcrumb = () => {
  // page title
  document.title = "Breadcrumb" + process.env.REACT_APP_PAGE_TITLE;
  //Bread crumbs with drop down menu
  const menuItemscrumbs = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          General
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          Layout
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Navigation
        </a>
      ),
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb mainTitle="Navigation" pageTitle="Breadcrumb" />

      <Row gutter={[20]}>
        <Col span={24} xl={12} className="gutter-row">
          <Card
            title="Basic Usage"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              The simplest use.
              <Text type="secondary"></Text>
            </p>
            <BreadcrumbItem
              items={[
                {
                  title: "Home",
                },
                {
                  title: <Link to="">Application Center</Link>,
                },
                {
                  title: <Link to="">Application List</Link>,
                },
                {
                  title: "An Application",
                },
              ]}
            />
          </Card>
          {/* end card */}
          <Card
            title="Bread crumbs with drop down menu"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              Breadcrumbs support drop down menu.
              <Text type="secondary"></Text>
            </p>
            <BreadcrumbItem
              items={[
                {
                  title: "Ant Design",
                },
                {
                  title: <Link href="#">Component</Link>,
                },
                {
                  title: <Link href="#">General</Link>,
                  menu: {
                    items: menuItemscrumbs,
                  },
                },
                {
                  title: "Button",
                },
              ]}
            />
          </Card>
          {/* end card */}
          <Card
            title="Debug Routes"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              Origin
              <Text type="secondary" code>
                {" "}
                routes{" "}
              </Text>
              debug.
            </p>
            <BreadcrumbItem
              items={[
                {
                  path: "/home",
                  breadcrumbName: "Home",
                },
                {
                  path: "/user",
                  breadcrumbName: "User",
                  children: [
                    {
                      path: "/user1",
                      breadcrumbName: "User1",
                    },
                    {
                      path: "/user2",
                      breadcrumbName: "User2",
                    },
                  ],
                },
              ]}
            />
          </Card>
        </Col>
        {/* end col */}
        <Col span={24} xl={12} className="gutter-row">
          <Card
            title="With an Icon"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              The icon should be placed in front of the text.
              <Text type="secondary"></Text>
            </p>
            <BreadcrumbItem
              items={[
                {
                  href: "",
                  title: <HomeOutlined />,
                },
                {
                  href: "",
                  title: (
                    <>
                      <UserOutlined />
                      <span>Application List</span>
                    </>
                  ),
                },
                {
                  title: "Application",
                },
              ]}
            />
          </Card>
          <Card
            title="Configuring the Separator"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              The separator can be customized by setting the separator property:
              <Text type="secondary" code>
                `separator={">"}`
              </Text>
            </p>
            <BreadcrumbItem
              separator=">"
              items={[
                {
                  title: "Home",
                },
                {
                  title: "Application Center",
                  href: "",
                },
                {
                  title: "Application List",
                  href: "",
                },
                {
                  title: "An Application",
                },
              ]}
            />
          </Card>
          <Card
            title="Configuring the Separator Independently
            "
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              Customize separator for each other.
              <Text type="secondary" code>
                `separator={">"}`
              </Text>
            </p>
            <BreadcrumbItem
              separator=""
              items={[
                {
                  title: "Location",
                },
                {
                  type: "separator",
                  separator: ":",
                },
                {
                  href: "",
                  title: "Application Center",
                },
                {
                  type: "separator",
                },
                {
                  href: "",
                  title: "Application List",
                },
                {
                  type: "separator",
                },
                {
                  title: "An Application",
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
      {/* end row */}
    </>
  );
};

export default UiBreadcrumb;
