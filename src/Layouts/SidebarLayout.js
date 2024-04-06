import React, { useState } from "react";
import withRouter from "../Common/withRouter";
import BrandLogo from "../assets/images/logo-dark.png";
import BrandlightLogo from "../assets/images/logo-light.png";
import BrandSmLogo from "../assets/images/logo-sm.png";
import { Menu } from "antd";
import {
  AlertCircle,
  Archive,
  ArrowRightLeft,
  CandlestickChart,
  ChevronLeft,
  ChevronRight,
  Combine,
  Component,
  Crown,
  Gauge,
  Gavel,
  Gem,
  KeyRound,
  LayoutList,
  Mail,
  // Map,
  MessagesSquare,
  Radar,
  Rat,
  UserCircle2,
  UserSquare,
} from "lucide-react";
import { themecolor } from "../config.js";
import {
  StyleSimpleBar,
  StyledCollapsedButton,
  StyleBrandLogo,
  StyleSider,
} from "../Common/SidebarStyle";
import { Link, useLocation } from "react-router-dom";
// import Fermerlar from "./../pages/Fermerlar/Fermerlar";

const SidebarLayout = ({ theme }) => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem(
      "Menu",
      "Menu",
      null,
      [
        getItem(
          <Link to="/dashboard">Dashboard</Link>,
          "dashboard",
          <Gauge size={16} />
        ),
        getItem(
          <Link to="/fermerlar">Fermerlar</Link>,
          "fermerlar",
          <Gauge size={16} />
        ),
      ],
      "group"
    ),
    getItem(
      "Apps",
      "Apps",
      null,
      [
        getItem(
          <Link to="/app-email">Email</Link>,
          "app-email",
          <Mail size={16} />
        ),
        getItem(
          <Link to="/app-chat">Chat</Link>,
          "app-chat",
          <MessagesSquare size={16} />
        ),
        getItem(
          <Link to="/app-kanban">Kanban Board</Link>,
          "app-kanban",
          <ArrowRightLeft size={16} />
        ),
        getItem(
          <Link to="/app-contact">Contact</Link>,
          "app-contact",
          <UserSquare size={16} />
        ),
        getItem(
          <Link to="/app-apikey">ApiKey</Link>,
          "app-apikey",
          <KeyRound size={16} />
        ),
        getItem(
          <Link to="/app-leaderboard">LeaderBoard</Link>,
          "app-leaderboard",
          <Gem size={16} />
        ),
        getItem(
          <Link to="/app-todo">To-Do</Link>,
          "app-todo",
          <LayoutList size={16} />
        ),
      ],
      "group"
    ),
    getItem(
      "Authentication",
      "AuthenticationGroup",
      null,
      [
        getItem("Authentication", "Authentication", <UserCircle2 size={16} />, [
          getItem(<Link to="/auth-signin">Sign In</Link>, "auth-signin"),
          getItem(<Link to="/auth-signup">Sign Up</Link>, "auth-signup"),
          getItem(
            <Link to="/auth-pass-reset">Password Reset</Link>,
            "auth-pass-reset"
          ),
          getItem(
            <Link to="/auth-pass-create">Password Create</Link>,
            "auth-pass-create"
          ),
          getItem(
            <Link to="/auth-lockscreen">Lock Screen</Link>,
            "auth-lockscreen"
          ),
          getItem(
            <Link to="/auth-two-step">Two Step Verification</Link>,
            "auth-two-step"
          ),
          getItem(
            <Link to="/auth-success-msg">Success Message</Link>,
            "auth-success-msg"
          ),
        ]),
        getItem("Pages", "Pages", <Combine size={16} />, [
          getItem(
            <Link to="/pages-profile">User Profile</Link>,
            "pages-profile"
          ),
          getItem(<Link to="/pages-pricing">Pricing</Link>, "pages-pricing"),
          getItem(<Link to="/pages-faqs">FAQs</Link>, "pages-faqs"),
          getItem(<Link to="/pages-team">Team</Link>, "pages-team"),
          getItem(<Link to="/pages-timeline">Timeline</Link>, "pages-timeline"),
          getItem(
            <Link to="/pages-maintenance">Maintenance</Link>,
            "pages-maintenance"
          ),
        ]),
        getItem("Error Pages", "errorPages", <AlertCircle size={16} />, [
          getItem(<Link to="/error-404">404</Link>, "error-404"),
          getItem(<Link to="/error-500">500</Link>, "error-500"),
          getItem(<Link to="/error-404-alt">404Alt</Link>, "error-404-alt"),
          getItem(
            <Link to="/error-offline">OfflinePage</Link>,
            "error-offline"
          ),
        ]),
        getItem(
          <Link to="/widget">Widgets</Link>,
          "widget",
          <Archive size={16} />
        ),
      ],
      "group"
    ),
    getItem(
      "Components",
      "ComponentsGroup",
      null,
      [
        getItem("General", "General", <Gem size={16} />, [
          getItem(<Link to="/ui-buttons">Buttons</Link>, "ui-buttons"),
          getItem(<Link to="/ui-typography">Typography</Link>, "ui-typography"),
        ]),
        getItem("Navigation", "Navigation", <Radar size={16} />, [
          getItem(<Link to="/ui-anchor">Anchor</Link>, "ui-anchor"),
          getItem(<Link to="/ui-breadcrumb">Breadcrumb</Link>, "ui-breadcrumb"),
          getItem(<Link to="/ui-dropdown">Dropdown</Link>, "ui-dropdown"),
          getItem(<Link to="/ui-pagination">Pagination</Link>, "ui-pagination"),
          getItem(<Link to="/ui-steps">Steps</Link>, "ui-steps"),
        ]),
        getItem("Data Entry", "DataEntry", <Gavel size={16} />, [
          getItem(
            <Link to="/ui-autocomplete">AutoComplete</Link>,
            "ui-autocomplete"
          ),
          getItem(<Link to="/ui-cascader">Cascader</Link>, "ui-cascader"),
          getItem(<Link to="/ui-checkbox">Checkbox</Link>, "ui-checkbox"),
          getItem(
            <Link to="/ui-colorpicker">ColorPicker</Link>,
            "ui-colorpicke"
          ),
          getItem(<Link to="/ui-datePicker">DatePicker</Link>, "ui-datePicker"),
          getItem(<Link to="/ui-form">Form</Link>, "ui-form"),
          getItem(<Link to="/ui-input">Input</Link>, "ui-input"),
          getItem(
            <Link to="/ui-input-number">InputNumber</Link>,
            "ui-input-number"
          ),
          getItem(<Link to="/ui-mentions">Mentions</Link>, "ui-mentions"),
          getItem(<Link to="/ui-radio">Radio</Link>, "ui-radio"),
          getItem(<Link to="/ui-rate">Rate</Link>, "ui-rate"),
          getItem(<Link to="/ui-select">Select</Link>, "ui-select"),
          getItem(<Link to="/ui-slider">Slider</Link>, "ui-slider"),
          getItem(<Link to="/ui-switch">Switch</Link>, "ui-switch"),
          getItem(<Link to="/ui-timepicker">TimePicker</Link>, "ui-timepicker"),
          getItem(<Link to="/ui-transfer">Transfer</Link>, "ui-transfer"),
          getItem(
            <Link to="/ui-tree-select">TreeSelect</Link>,
            "ui-tree-select"
          ),
        ]),
        getItem("Data Display", "DataDisplay", <Crown size={16} />, [
          getItem(<Link to="/ui-avatar">Avatar</Link>, "ui-avatar"),
          getItem(<Link to="/ui-badge">Badge</Link>, "ui-badge"),
          getItem(<Link to="/ui-calender">Calender</Link>, "ui-calender"),
          getItem(<Link to="/ui-cards">Cards</Link>, "ui-cards"),
          getItem(<Link to="/ui-carousel">Carousel</Link>, "ui-carousel"),
          getItem(<Link to="/ui-collapse">Collapse</Link>, "ui-collapse"),
          getItem(
            <Link to="/ui-descriptions">Descriptions</Link>,
            "ui-descriptions"
          ),
          getItem(
            <Link to="/ui-empty-images">Empty & Images</Link>,
            "ui-empty-images"
          ),
          getItem(<Link to="/ui-list">List</Link>, "ui-list"),
          getItem(<Link to="/ui-popover">Popover</Link>, "ui-popover"),
          getItem(<Link to="/ui-qrcode">QRCode</Link>, "ui-qrcode"),
          getItem(<Link to="/ui-segmented">Segmented</Link>, "ui-segmented"),
          getItem(<Link to="/ui-statistic">Statistic</Link>, "ui-statistic"),
          getItem(<Link to="/ui-table">Table</Link>, "ui-table"),
          getItem(<Link to="/ui-tabs">Tabs</Link>, "ui-tabs"),
          getItem(<Link to="/ui-tag">Tag</Link>, "ui-tag"),
          getItem(<Link to="/ui-timeline">Timeline</Link>, "ui-timeline"),
          getItem(<Link to="/ui-tooltip">Tooltip</Link>, "ui-tooltip"),
          getItem(<Link to="/ui-tour">Tour</Link>, "ui-tour"),
          getItem(<Link to="/ui-tree">Tree</Link>, "ui-tree"),
        ]),
        getItem("Feedback", "Feedback", <Rat size={16} />, [
          getItem(<Link to="/ui-alerts">Alert</Link>, "ui-alerts"),
          getItem(<Link to="/ui-drawer">Drawer</Link>, "ui-drawer"),
          getItem(<Link to="/ui-message">Message</Link>, "ui-message"),
          getItem(<Link to="/ui-Modal">Modal</Link>, "ui-Modal"),
          getItem(
            <Link to="/ui-notification">Notification</Link>,
            "ui-notification"
          ),
          getItem(<Link to="/ui-popconfirm">Popconfirm</Link>, "ui-popconfirm"),
          getItem(<Link to="/ui-progress">Progress</Link>, "ui-progress"),
          getItem(<Link to="/ui-result">Result</Link>, "ui-result"),
          getItem(<Link to="/ui-skeleton">Skeleton</Link>, "ui-skeleton"),
          getItem(<Link to="/ui-spin">Spin</Link>, "ui-spin"),
        ]),
        getItem("Icons", "Icons", <Component size={16} />, [
          getItem(<Link to="/icon-antd">Antd Icon</Link>, "icon-antd"),
          getItem(<Link to="/icon-lucide">Lucide Icon</Link>, "icon-lucide"),
        ]),
        getItem("Charts", "Charts", <CandlestickChart size={16} />, [
          getItem("Line Charts", "Line Charts", null, [
            getItem(<Link to="/charts-basic">Basic Line</Link>, "charts-basic"),
            getItem(
              <Link to="/charts-multi-line">Multi Line </Link>,
              "charts-multi-line"
            ),
            getItem(
              <Link to="/charts-step-line">Step Line</Link>,
              "charts-step-line"
            ),
          ]),
          getItem("Area Charts", "Area Charts", null, [
            getItem(
              <Link to="/ui-Basic-Area">Basic Area</Link>,
              "ui-Basic-Area"
            ),
            getItem(
              <Link to="/ui-stacked-area">Stacked Area</Link>,
              "ui-stacked-area"
            ),
            getItem(
              <Link to="/ui-percentage-area">Percentage Area</Link>,
              "ui-percentage-area"
            ),
          ]),
          getItem("Column Charts", "Column Charts", null, [
            getItem(
              <Link to="/ui-Basic-histogram">Basic Histogram</Link>,
              "ui-Basic-histogram"
            ),
            getItem(
              <Link to="/ui-Grouped-histogram">Grouped Histogram</Link>,
              "ui-Grouped-histogram"
            ),
            getItem(
              <Link to="/ui-Percentage-histogram">Percentage Histogram</Link>,
              "ui-Percentage-histogram"
            ),
          ]),
          getItem("Bar Charts", "Bar Charts", null, [
            getItem(
              <Link to="/ui-Basic-bar-chart">Basic Bar</Link>,
              "ui-Basic-bar-char"
            ),
            getItem(
              <Link to="/ui-stacked-bar">Stacked Bar</Link>,
              "ui-stacked-bar"
            ),
            getItem(
              <Link to="/ui-grouped-bar">Grouped Bar</Link>,
              "ui-grouped-bar"
            ),
          ]),
          getItem("Pie Charts", "Pie Charts", null, [
            getItem(<Link to="/ui-pie-chart">Pie Chart</Link>, "ui-pie-chart"),
            getItem(
              <Link to="/ui-Ring-diagram">Ring Diagram</Link>,
              "ui-Ring-diagram"
            ),
          ]),
          getItem("Progress Chart", "Progress Charts", null, [
            getItem(
              <Link to="/ui-Dash-board">Dash Board</Link>,
              "ui-Dash-board"
            ),
            getItem(
              <Link to="/ui-water-wave-map">Water Wave Map</Link>,
              "ui-water-wave-map"
            ),
            getItem(
              <Link to="/ui-Basic-Bullet-Chart">Bullet Chart</Link>,
              "ui-Basic-Bullet-Chart"
            ),
          ]),
          getItem("Scatter Bubble Chart", "Scatter Bubble Chart", null, [
            getItem(
              <Link to="/ui-Scatterplot">Scatterplot</Link>,
              "ui-Scatterplot"
            ),
            getItem(
              <Link to="/ui-bubble-chart">Bubble Chart</Link>,
              "ui-bubble-chart"
            ),
          ]),
        ]),

        getItem("Plugins", "Plugins", <Rat size={16} />, [
          getItem(
            <Link to="/plugins-text-editor">Text Editor</Link>,
            "plugins-text-editor"
          ),
          getItem(<Link to="/plugins-forms">Forms</Link>, "plugins-forms"),
          getItem(
            <Link to="/plugins-clipboard">Clipboard</Link>,
            "plugins-clipboard"
          ),
          getItem(<Link to="/plugins-video">Video</Link>, "plugins-video"),
          getItem(
            <Link to="/plugins-text-loop">Text Loop</Link>,
            "plugins-text-loop"
          ),
          getItem(
            <Link to="/plugins-animation">Animation</Link>,
            "plugins-animation"
          ),
        ]),
      ],
      "group"
    ),
  ];

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    const antHeaderMain = document.getElementById("antHeaderMain");
    if (antHeaderMain) {
      antHeaderMain.style.left = !collapsed ? "100px" : "260px";
    }
    const antLayoutContent = document.getElementById("antLayoutContent");
    if (antLayoutContent) {
      antLayoutContent.style.marginLeft = !collapsed ? "100px" : "260px";
    }
    const antFooterLayout = document.getElementById("antFooterLayout");
    if (antFooterLayout) {
      antFooterLayout.style.marginLeft = !collapsed ? "100px" : "260px";
    }
  };

  const location = useLocation();
  const [activatedItem, setActivatedItem] = useState(() => {
    const currentPath = location.pathname.replace("/", "");
    return currentPath || "dashboard";
  });

  const toggleActivation = (key) => {
    setActivatedItem((prevActivatedItem) =>
      prevActivatedItem === key ? null : key
    );
  };

  return (
    <React.Fragment>
      <StyleSider
        id="sidebar-layout"
        width={themecolor.components.Menu.verticalSidebarWidth}
        collapsed={collapsed}
        collapsedWidth="100"
        breakpoint="lg"
      >
        <StyleBrandLogo className="demo-logo ant-mx-auto">
          <img
            alt="Brand logo"
            src={theme === "dark" ? BrandlightLogo : BrandLogo}
            height={30}
            style={{ lineHeight: "24px" }}
            className="brand-dark-logo ant-mx-auto"
          />
          <img
            alt="Brand sm logo"
            src={BrandSmLogo}
            height={24}
            style={{ lineHeight: "24px" }}
            className="brand-sm-logo ant-mx-auto"
          />
          <StyledCollapsedButton
            themecolor={themecolor}
            type="link"
            onClick={toggleCollapsed}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </StyledCollapsedButton>
        </StyleBrandLogo>
        <div>
          <StyleSimpleBar>
            <Menu
              selectedKeys={[activatedItem]}
              mode="inline"
              theme="light"
              items={items}
              collapsedWidth="100"
              onClick={({ key }) => toggleActivation(key)}
            ></Menu>
          </StyleSimpleBar>
        </div>
      </StyleSider>
    </React.Fragment>
  );
};

export default withRouter(SidebarLayout);
