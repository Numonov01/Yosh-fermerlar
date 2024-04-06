import React from "react";
import {
    Button,
    Card,
    Col,
    Dropdown,
    Row,
    Space,
    Typography,
    message,
    Tooltip,
    theme,
} from "antd";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";

//Breadcrumbs
import Breadcrumb from "../../../Common/Breadcrumb";
import usecustomStyles from "../../../Common/customStyles";

const { Text, Link } = Typography;

const customStyles = usecustomStyles();

//Basic
const Basicitems = [
    {
        key: "1",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: "3",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: "4",
        danger: true,
        label: "a danger item",
    },
];
//Arraw
const Arrawitems = [
    {
        key: "1",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item
            </a>
        ),
    },
    {
        key: "3",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                3rd menu item
            </a>
        ),
    },
];
//Arrow pointing at the cente
const itemsArrawpointing = [
    {
        key: "1",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item
            </a>
        ),
    },
    {
        key: "3",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                3rd menu item
            </a>
        ),
    },
];
//Trigger mode
const itemsTrigger = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
    },
    {
        type: "divider",
    },
    {
        label: "3rd menu item",
        key: "3",
    },
];
//placement
const itemsplacement = [
    {
        key: "1",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item
            </a>
        ),
    },
    {
        key: "3",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                3rd menu item
            </a>
        ),
    },
];
//other elements
const otherelementsitems = [
    {
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
        key: "0",
    },
    {
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item
            </a>
        ),
        key: "1",
    },
    {
        type: "divider",
    },
    {
        label: "3rd menu item（disabled）",
        key: "3",
        disabled: true,
    },
];

//Button with Dropdown menu
const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
};
const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
};
const items2 = [
    {
        label: "1st menu item",
        key: "1",
        icon: <UserOutlined />,
    },
    {
        label: "2nd menu item",
        key: "2",
        icon: <UserOutlined />,
    },
    {
        label: "3rd menu item",
        key: "3",
        icon: <UserOutlined />,
        danger: true,
    },
    {
        label: "4rd menu item",
        key: "4",
        icon: <UserOutlined />,
        danger: true,
        disabled: true,
    },
];
const menuProps = {
    items: items2,
    onClick: handleMenuClick,
};
//Cascading menu
const itemsCascading = [
    {
        key: "1",
        type: "group",
        label: "Group title",
        children: [
            {
                key: "1-1",
                label: "1st menu item",
            },
            {
                key: "1-2",
                label: "2nd menu item",
            },
        ],
    },
    {
        key: "2",
        label: "sub menu",
        children: [
            {
                key: "2-1",
                label: "3rd menu item",
            },
            {
                key: "2-2",
                label: "4th menu item",
            },
        ],
    },
    {
        key: "3",
        label: "disabled sub menu",
        disabled: true,
        children: [
            {
                key: "3-1",
                label: "5d menu item",
            },
            {
                key: "3-2",
                label: "6th menu item",
            },
        ],
    },
];
//Context Menu
const itemsContext = [
    {
        label: "1st menu item",
        key: "1",
    },
    {
        label: "2nd menu item",
        key: "2",
    },
    {
        label: "3rd menu item",
        key: "3",
    },
];
//selectable menu
const itemsselectable = [
    {
        key: "1",
        label: "Item 1",
    },
    {
        key: "2",
        label: "Item 2",
    },
    {
        key: "3",
        label: "Item 3",
    },
];

const UiDropdown = () => {
    // page title
    document.title = "Dropdown" + process.env.REACT_APP_PAGE_TITLE;
    const {
        token: { colorBgLayout, colorTextTertiary },
    } = theme.useToken();

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Navigation" pageTitle="Dropdown" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}>
                            <Text type="secondary">The most basic dropdown menu.</Text>
                        </p>
                        <Dropdown
                            menu={{
                                items: Basicitems,
                            }}
                        >
                            <Link onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Hover me
                                    <DownOutlined />
                                </Space>
                            </Link>
                        </Dropdown>
                    </Card>
                    {/* end card */}
                    <Card title="Arrow" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}>
                            <Text type="secondary">You could display an arrow.</Text>
                        </p>
                        <Space direction="vertical">
                            <Space wrap>
                                <Dropdown
                                    menu={{
                                        items: Arrawitems,
                                    }}
                                    placement="bottomLeft"
                                    arrow
                                >
                                    <Button>bottomLeft</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: Arrawitems,
                                    }}
                                    placement="bottom"
                                    arrow
                                >
                                    <Button>bottom</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: Arrawitems,
                                    }}
                                    placement="bottomRight"
                                    arrow
                                >
                                    <Button>bottomRight</Button>
                                </Dropdown>
                            </Space>
                            <Space wrap>
                                <Dropdown
                                    menu={{
                                        items: Arrawitems,
                                    }}
                                    placement="topLeft"
                                    arrow
                                >
                                    <Button>topLeft</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: Arrawitems,
                                    }}
                                    placement="top"
                                    arrow
                                >
                                    <Button>top</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: Arrawitems,
                                    }}
                                    placement="topRight"
                                    arrow
                                >
                                    <Button>topRight</Button>
                                </Dropdown>
                            </Space>
                        </Space>
                    </Card>
                    {/* end card */}
                    <Card
                        title="Arrow Pointing at the Center"
                        style={{ marginBottom: customStyles.margin }}
                    >
                        <p style={{ marginBottom: customStyles.marginXS }}>
                            <Text type="secondary">
                                By specifying arrow prop with
                                <Text type="secondary" code>&#123; pointAtCenter: true &#125;</Text>, the arrow
                                will point to the center of the target element.
                            </Text>
                        </p>
                        <Space direction="vertical">
                            <Space wrap>
                                <Dropdown
                                    menu={{
                                        items: itemsArrawpointing,
                                    }}
                                    placement="bottomLeft"
                                    arrow={{
                                        pointAtCenter: true,
                                    }}
                                >
                                    <Button>bottomLeft</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: itemsArrawpointing,
                                    }}
                                    placement="bottom"
                                    arrow={{
                                        pointAtCenter: true,
                                    }}
                                >
                                    <Button>bottom</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: itemsArrawpointing,
                                    }}
                                    placement="bottomRight"
                                    arrow={{
                                        pointAtCenter: true,
                                    }}
                                >
                                    <Button>bottomRight</Button>
                                </Dropdown>
                            </Space>
                            <Space wrap>
                                <Dropdown
                                    menu={{
                                        items: itemsArrawpointing,
                                    }}
                                    placement="topLeft"
                                    arrow={{
                                        pointAtCenter: true,
                                    }}
                                >
                                    <Button>topLeft</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: itemsArrawpointing,
                                    }}
                                    placement="top"
                                    arrow={{
                                        pointAtCenter: true,
                                    }}
                                >
                                    <Button>top</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: itemsArrawpointing,
                                    }}
                                    placement="topRight"
                                    arrow={{
                                        pointAtCenter: true,
                                    }}
                                >
                                    <Button>topRight</Button>
                                </Dropdown>
                            </Space>
                        </Space>
                    </Card>
                    {/* end card */}
                    <Card
                        title="Click event"
                        style={{ marginBottom: customStyles.margin }}
                    >
                        <p style={{ marginBottom: customStyles.marginXS }}>
                            <Text type="secondary">
                                The default trigger mode is <Text type="secondary" code>hover</Text>, you can
                                change it to <Text type="secondary" code>click</Text>.
                            </Text>
                        </p>
                        <Dropdown
                            menu={{
                                items: itemsTrigger,
                            }}
                            trigger={["click"]}
                        >
                            <Link onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Click me
                                    <DownOutlined />
                                </Space>
                            </Link>
                        </Dropdown>
                    </Card>
                    {/* end card */}
                    <Card
                        title="Selectable Menu"
                        style={{ marginBottom: customStyles.margin }}
                    >
                        <p style={{ marginBottom: customStyles.marginXS }}>
                            Configure the
                            <Text type="secondary" code>
                                selectable
                            </Text>
                            property in{" "}
                            <Text type="secondary" code>
                                menu
                            </Text>{" "}
                            to enable selectable ability.
                        </p>
                        <Dropdown
                            menu={{
                                items: itemsselectable,
                                selectable: true,
                                defaultSelectedKeys: ["3"],
                            }}
                        >
                            <Typography.Link>
                                <Space>
                                    Selectable
                                    <DownOutlined />
                                </Space>
                            </Typography.Link>
                        </Dropdown>
                    </Card>{/* end card */}
                    <Card
                        title="Cascading menu"
                        style={{ marginBottom: customStyles.margin }}
                    >
                        <p style={{ marginBottom: customStyles.marginXS }}>
                            <Text type="secondary">The menu has multiple levels.</Text>
                        </p>
                        <Dropdown
                            menu={{
                                items: itemsCascading,
                            }}
                        >
                            <Link onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Cascading menu
                                    <DownOutlined />
                                </Space>
                            </Link>
                        </Dropdown>
                    </Card>{/* end card */}
                </Col>
                {/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card
                        title="Placement"
                        style={{ marginBottom: customStyles.margin }}
                    >
                        <p style={{ marginBottom: customStyles.marginXS }}>
                            <Text type="secondary">Support 6 placements.</Text>
                        </p>
                        <Space direction="vertical">
                            <Space wrap>
                                <Dropdown
                                    menu={{
                                        items: itemsplacement,
                                    }}
                                    placement="bottomLeft"
                                >
                                    <Button>bottomLeft</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: itemsplacement,
                                    }}
                                    placement="bottom"
                                >
                                    <Button>bottom</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: itemsplacement,
                                    }}
                                    placement="bottomRight"
                                >
                                    <Button>bottomRight</Button>
                                </Dropdown>
                            </Space>
                            <Space wrap>
                                <Dropdown
                                    menu={{
                                        items: itemsplacement,
                                    }}
                                    placement="topLeft"
                                >
                                    <Button>topLeft</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: itemsplacement,
                                    }}
                                    placement="top"
                                >
                                    <Button>top</Button>
                                </Dropdown>
                                <Dropdown
                                    menu={{
                                        items: itemsplacement,
                                    }}
                                    placement="topRight"
                                >
                                    <Button>topRight</Button>
                                </Dropdown>
                            </Space>
                        </Space>
                    </Card>
                    {/* end card */}
                    <Card
                        title="Other Elements"
                        style={{ marginBottom: customStyles.margin }}
                    >
                        <p style={{ marginBottom: customStyles.marginXS }}>
                            <Text type="secondary">Divider and disabled menu item.</Text>
                        </p>
                        <Dropdown
                            menu={{
                                items: otherelementsitems,
                            }}
                        >
                            <Link onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Hover me
                                    <DownOutlined />
                                </Space>
                            </Link>
                        </Dropdown>
                    </Card>
                    {/* end card */}
                    <Card
                        title="Trigger Mode"
                        style={{ marginBottom: customStyles.margin }}
                    >
                        <p style={{ marginBottom: customStyles.marginXS }}>
                            <Text type="secondary">
                                The default trigger mode is <Text type="secondary" code>hover</Text>, you can
                                change it to <Text type="secondary" code>click</Text>.
                            </Text>
                        </p>
                        <Dropdown
                            menu={{
                                items: itemsTrigger,
                            }}
                            trigger={["click"]}
                        >
                            <Link onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Click me
                                    <DownOutlined />
                                </Space>
                            </Link>
                        </Dropdown>
                    </Card>
                    {/* end card */}

                    <Card
                        title="Button with dropdown menu"
                        style={{ marginBottom: customStyles.margin }}
                    >
                        <p style={{ marginBottom: customStyles.marginXS }}>
                            <Text type="secondary">
                                A button is on the left, and a related functional menu is on the
                                right. You can set the icon property to modify the icon of
                                right.
                            </Text>
                        </p>
                        <Space
                            wrap
                            direction="horizontal"
                            style={{
                                display: "flex",
                            }}
                        >
                            <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                                Dropdown
                            </Dropdown.Button>
                            <Dropdown.Button
                                menu={menuProps}
                                placement="bottom"
                                icon={<UserOutlined />}
                            >
                                Dropdown
                            </Dropdown.Button>
                            <Dropdown.Button
                                menu={menuProps}
                                onClick={handleButtonClick}
                                disabled
                            >
                                Dropdown
                            </Dropdown.Button>
                            <Dropdown.Button
                                menu={menuProps}
                                buttonsRender={([leftButton, rightButton]) => [
                                    <Tooltip title="tooltip" key="leftButton">
                                        {leftButton}
                                    </Tooltip>,
                                    React.cloneElement(rightButton, {
                                        loading: true,
                                    }),
                                ]}
                            >
                                With Tooltip
                            </Dropdown.Button>
                            {/* <Dropdown menu={menuProps}>
                                <Button>
                                    <Space>
                                        Button
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                            <Dropdown.Button
                                menu={menuProps}
                                onClick={handleButtonClick}
                                danger
                            >
                                Danger
                            </Dropdown.Button>{" "} */}
                        </Space>
                    </Card>
                    <Card
                        title="Context Menu"
                        style={{ marginBottom: customStyles.margin }}
                    >
                        <p style={{ marginBottom: customStyles.marginXS }}>
                            The default trigger mode is ,
                            <Text type="secondary" code>
                                hover
                            </Text>
                            you can change it to .
                            <Text type="secondary" code>
                                contextMenu
                            </Text>
                        </p>
                        <Dropdown
                            menu={{
                                items: itemsContext,
                            }}
                            trigger={["contextMenu"]}
                        >
                            <div
                                style={{
                                    color: colorTextTertiary,
                                    background: colorBgLayout,
                                    height: 200,
                                    textAlign: "center",
                                    lineHeight: "200px",
                                }}
                            >
                                Right Click on here
                            </div>
                        </Dropdown>
                    </Card>
                    {/* cart end */}
                </Col>
                {/* end col */}
            </Row>
            {/* end row */}
        </>
    );
};

export default UiDropdown;
