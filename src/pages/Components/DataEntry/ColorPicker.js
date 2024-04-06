import React, { useMemo, useState } from "react";
import {
  App,
  Button,
  Card,
  Col,
  ColorPicker,
  Divider,
  Row,
  Space,
  Typography,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { themecolor } from "../../../config";
import { message } from "antd";
//Breadcrumbs
import Breadcrumb from "../../../Common/Breadcrumb";
import usecustomStyles from "../../../Common/customStyles";

const { Text } = Typography;

const customStyles = usecustomStyles();

const UiColorPicker = () => {
  // page title
  document.title = "ColorPicker" + process.env.REACT_APP_PAGE_TITLE;

  //controlled mode
  const [color, setColor] = useState(themecolor.token.colorSuccess);

  //Color change completed

  const [value, setValue] = useState("#1677ff");

  //Rendering Trigger Text
  const [open, setOpen] = useState(false);

  //Custom Trigger
  const [colorCustom, setColorCustom] = useState(themecolor.token.colorPrimaryBg);
  const bgColor = useMemo(
    () =>
      typeof colorCustom === "string" ? colorCustom : colorCustom.toHexString(),
    [colorCustom]
  );
  const btnStyle = {
    backgroundColor: bgColor,
  };

  //Color Format
  const [colorHex, setColorHex] = useState("#1677ff");
  const [colorHsb, setColorHsb] = useState("hsb(215, 91%, 100%)");
  const [colorRgb, setColorRgb] = useState("rgb(22, 119, 255)");
  const [formatHex, setFormatHex] = useState("hex");
  const [formatHsb, setFormatHsb] = useState("hsb");
  const [formatRgb, setFormatRgb] = useState("rgb");
  const hexString = useMemo(
    () => (typeof colorHex === "string" ? colorHex : colorHex.toHexString()),
    [colorHex]
  );
  const hsbString = useMemo(
    () => (typeof colorHsb === "string" ? colorHsb : colorHsb.toHsbString()),
    [colorHsb]
  );
  const rgbString = useMemo(
    () => (typeof colorRgb === "string" ? colorRgb : colorRgb.toRgbString()),
    [colorRgb]
  );

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb mainTitle="Data Entry" pageTitle="ColorPicker" />

      <Row gutter={[20]}>
        <Col span={24} xl={12} className="gutter-row">
          <Card
            title="Basic Usage"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">Basic Usage.</Text>
            </p>
            <ColorPicker />
          </Card>
          {/* end card */}
          <Card
            title="Controlled Mode"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Set the component to controlled mode.
              </Text>
            </p>
            <ColorPicker value={color} onChange={setColor} />
          </Card>
          {/* end card */}
          <Card
            title="Rendering Trigger Text"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Renders the default text of the trigger, effective when{" "}
                <Text type="secondary" code>showText</Text> is <Text type="secondary" code>true</Text>. When
                customizing text, you can use <Text type="secondary" code>showText</Text> as a
                function to return custom text.
              </Text>
            </p>
            <Space direction="vertical">
              <ColorPicker showText />
              <ColorPicker
                showText={(color) => (
                  <span>Custom Text ({color.toHexString()})</span>
                )}
              />
              <ColorPicker
                open={open}
                onOpenChange={setOpen}
                showText={() => (
                  <DownOutlined
                    rotate={open ? 180 : 0}
                    style={{
                      color: "rgba(0, 0, 0, 0.25)",
                    }}
                  />
                )}
              />
            </Space>
          </Card>
          {/* end card */}
          <Card
            title="Clear Color"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">Clear Color.</Text>
            </p>
            <ColorPicker allowClear />
          </Card>
          {/* end card */}
          <Card
            title="Custom Trigger Event"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Triggers event for customizing color panels, provide options{" "}
                <Text type="secondary" code>click</Text> and <Text type="secondary" code>hover</Text>.
              </Text>
            </p>
            <ColorPicker trigger="hover" />
          </Card>
          {/* end card */}
          <Card
            title="Preset Colors"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Set the presets color of the color picker.
              </Text>
            </p>
            <ColorPicker
              presets={[
                {
                  label: "Recommended",
                  colors: [
                    "#000000",
                    "#000000E0",
                    "#000000A6",
                    "#00000073",
                    "#00000040",
                    "#00000026",
                    "#0000001A",
                    "#00000012",
                    "#0000000A",
                    "#00000005",
                    "#F5222D",
                    "#FA8C16",
                    "#FADB14",
                    "#8BBB11",
                    "#52C41A",
                    "#13A8A8",
                    "#1677FF",
                    "#2F54EB",
                    "#722ED1",
                    "#EB2F96",
                    "#F5222D4D",
                    "#FA8C164D",
                    "#FADB144D",
                    "#8BBB114D",
                    "#52C41A4D",
                    "#13A8A84D",
                    "#1677FF4D",
                    "#2F54EB4D",
                    "#722ED14D",
                    "#EB2F964D",
                  ],
                },
                {
                  label: "Recent",
                  colors: [],
                },
              ]}
            />
          </Card>
          {/* end card */}
        </Col>
        {/* end col */}
        <Col span={24} xl={12} className="gutter-row">
          <Card
            title="Trigger Size"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                The trigger has three sizes: large, medium and small. If size is
                not set, the size will be medium.
              </Text>
            </p>
            <Space>
              <Space wrap>
                <ColorPicker size="small" />
                <ColorPicker />
                <ColorPicker size="large" />
                <ColorPicker size="small" showText />
                <ColorPicker showText />
                <ColorPicker size="large" showText />
              </Space>
            </Space>
          </Card>
          {/* end card */}
          <Card
            title="Color Change Completed"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                The callback will be called only when the color selection is
                completed.
              </Text>
            </p>
            <App>
              <ColorPicker
                value={value}
                onChangeComplete={(color) => {
                  setValue(color);
                  message.success(
                    `The selected color is ${color.toHexString()}`
                  );
                }}
              />
            </App>
          </Card>
          {/* end card */}
          <Card
            title="Disable"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">Set to disabled state.</Text>
            </p>
            <ColorPicker showText disabled />
          </Card>
          {/* end card */}
          <Card
            title="Custom Trigger"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Triggers for customizing color panels.
              </Text>
            </p>
            <ColorPicker value={colorCustom} onChange={setColorCustom}>
              <Button type="primary" style={btnStyle}>
                open
              </Button>
            </ColorPicker>
          </Card>
          {/* end card */}
          <Card
            title="Color Format"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Encoding formats, support <Text type="secondary" code>HEX</Text>,{" "}
                <Text type="secondary" code>HSB</Text>, <Text type="secondary" code>RGB</Text>.
              </Text>
            </p>
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
              }}
            >
              <Row align="middle">
                <Space>
                  <Col>
                    <ColorPicker
                      format={formatHex}
                      value={colorHex}
                      onChange={setColorHex}
                      onFormatChange={setFormatHex}
                    />
                  </Col>
                  <Col>
                    HEX: <span>{hexString}</span>
                  </Col>
                </Space>
              </Row>
              <Row align="middle">
                <Space>
                  <Col>
                    <ColorPicker
                      format={formatHsb}
                      value={colorHsb}
                      onChange={setColorHsb}
                      onFormatChange={setFormatHsb}
                    />
                  </Col>
                  <Col>
                    HSB: <span>{hsbString}</span>
                  </Col>
                </Space>
              </Row>
              <Row align="middle">
                <Space>
                  <Col>
                    <ColorPicker
                      format={formatRgb}
                      value={colorRgb}
                      onChange={setColorRgb}
                      onFormatChange={setFormatRgb}
                    />
                  </Col>
                  <Col>
                    RGB: <span>{rgbString}</span>
                  </Col>
                </Space>
              </Row>
            </Space>
          </Card>
          {/* end card */}
          <Card
            title="Custom Render Panel"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Rendering of the free control panel via{" "}
                <Text type="secondary" code>panelRender</Text>.
              </Text>
            </p>
            <Space direction="vertical">
              <Row align="middle">
                <Space>
                  <span>Add title: </span>
                  <Col>
                    <ColorPicker
                      panelRender={(panel) => (
                        <div className="custom-panel">
                          <div
                            style={{
                              fontSize: 12,
                              color: "rgba(0, 0, 0, 0.88)",
                              lineHeight: "20px",
                              marginBottom: 8,
                            }}
                          >
                            Color Picker
                          </div>
                          {panel}
                        </div>
                      )}
                    />
                  </Col>
                </Space>
              </Row>
              <Row align="middle">
                <Space>
                  <span>Horizontal layout: </span>
                  <Col>
                    <ColorPicker
                      styles={{
                        popupOverlayInner: {
                          width: 468 + 24,
                        },
                      }}
                      presets={[
                        {
                          label: "Recommended",
                          colors: [
                            "#000000",
                            "#000000E0",
                            "#000000A6",
                            "#00000073",
                            "#00000040",
                            "#00000026",
                            "#0000001A",
                            "#00000012",
                            "#0000000A",
                            "#00000005",
                            "#F5222D",
                            "#FA8C16",
                            "#FADB14",
                            "#8BBB11",
                            "#52C41A",
                            "#13A8A8",
                            "#1677FF",
                            "#2F54EB",
                            "#722ED1",
                            "#EB2F96",
                            "#F5222D4D",
                            "#FA8C164D",
                            "#FADB144D",
                            "#8BBB114D",
                            "#52C41A4D",
                            "#13A8A84D",
                            "#1677FF4D",
                            "#2F54EB4D",
                            "#722ED14D",
                            "#EB2F964D",
                          ],
                        },
                        {
                          label: "Recent",
                          colors: [
                            "#F5222D4D",
                            "#FA8C164D",
                            "#FADB144D",
                            "#8BBB114D",
                            "#52C41A4D",
                            "#13A8A84D",
                          ],
                        },
                      ]}
                      panelRender={(_, { components: { Picker, Presets } }) => (
                        <div
                          className="custom-panel"
                          style={{
                            display: "flex",
                            width: 468,
                          }}
                        >
                          <div
                            style={{
                              flex: 1,
                            }}
                          >
                            <Presets />
                          </div>
                          <Divider
                            type="vertical"
                            style={{
                              height: "auto",
                            }}
                          />
                          <div
                            style={{
                              width: 234,
                            }}
                          >
                            <Picker />
                          </div>
                        </div>
                      )}
                    />
                  </Col>
                </Space>
              </Row>
            </Space>
          </Card>
          {/* end card */}
        </Col>
        {/* end col */}
      </Row>
      {/* end row */}
    </>
  );
};

export default UiColorPicker;
