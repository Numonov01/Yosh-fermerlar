import React, { useMemo, useState } from 'react';
import { Button, Card, Col, Divider, Popover, Row, Segmented, Space, Typography } from 'antd';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text, Link } = Typography;

const text = <span>Title</span>;
const basicPopoverContent = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

const buttonWidth = 70;

const UiPopover = () => {
    // page title
    document.title = "Popover" + process.env.REACT_APP_PAGE_TITLE;

    const [showArrow, setShowArrow] = useState(true);
    const [arrowAtCenter, setArrowAtCenter] = useState(false);
    const mergedArrow = useMemo(() => {
        if (arrowAtCenter)
            return {
                pointAtCenter: true,
            };
        return showArrow;
    }, [showArrow, arrowAtCenter]);

    //Controlling the close of the dialog
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    //Hover with click popover
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);
    
    const handleHoverChange = (open) => {
        setHovered(open);
        setClicked(false);
    };
    const handleClickChange = (open) => {
        setHovered(false);
        setClicked(open);
    };
    const hoverContent = <div>This is hover content.</div>;
    const clickContent = <div>This is click content.</div>;

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Popover" />

            <Row gutter={[24]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The most basic example. The size of the floating layer depends on the contents region.</Text></p>
                        <Popover content={basicPopoverContent} title="Title">
                            <Button type="primary">Hover me</Button>
                        </Popover>
                    </Card>
                    <Card title="Placement" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">There are 12 <Text code>placement</Text> options available.</Text></p>
                        <div>
                            <div
                                style={{
                                    width: buttonWidth,
                                    marginLeft: buttonWidth * 1.15,
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    gap: '10px'
                                }}
                            >
                                <Popover placement="topLeft" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>TL</Button>
                                </Popover>
                                <Popover placement="top" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>Top</Button>
                                </Popover>
                                <Popover placement="topRight" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>TR</Button>
                                </Popover>
                            </div>
                            <div
                                style={{
                                    width: buttonWidth,
                                    float: 'left',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <Popover placement="leftTop" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>LT</Button>
                                </Popover>
                                <Popover placement="left" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>Left</Button>
                                </Popover>
                                <Popover placement="leftBottom" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>LB</Button>
                                </Popover>
                            </div>
                            <div
                                style={{
                                    width: buttonWidth,
                                    marginLeft: buttonWidth * 3.8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <Popover placement="rightTop" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>RT</Button>
                                </Popover>
                                <Popover placement="right" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>Right</Button>
                                </Popover>
                                <Popover placement="rightBottom" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>RB</Button>
                                </Popover>
                            </div>
                            <div
                                style={{
                                    marginLeft: buttonWidth,
                                    clear: 'both',
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    gap: '10px'
                                }}
                            >
                                <Popover placement="bottomLeft" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>BL</Button>
                                </Popover>
                                <Popover placement="bottom" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>Bottom</Button>
                                </Popover>
                                <Popover placement="bottomRight" title={text} content={basicPopoverContent} trigger="click">
                                    <Button>BR</Button>
                                </Popover>
                            </div>
                        </div>
                    </Card>
                    <Card title="Controlling the close of the dialog" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use <Text code>open</Text> prop to control the display of the card.</Text></p>
                        <Popover
                            content={<Link onClick={hide}>Close</Link>}
                            title="Title"
                            trigger="click"
                            open={open}
                            onOpenChange={handleOpenChange}
                        >
                            <Button type="primary">Click me</Button>
                        </Popover>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Three ways to trigger" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Mouse to click, focus and move in.</Text></p>
                        <Space wrap>
                            <Popover content={basicPopoverContent} title="Title" trigger="hover">
                                <Button>Hover me</Button>
                            </Popover>
                            <Popover content={basicPopoverContent} title="Title" trigger="focus">
                                <Button>Focus me</Button>
                            </Popover>
                            <Popover content={basicPopoverContent} title="Title" trigger="click">
                                <Button>Click me</Button>
                            </Popover>
                        </Space>
                    </Card>
                    <Card title="Arrow" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Hide arrow by <Text code>arrow</Text>.</Text></p>
                        <div className="demo">
                            <Segmented
                                options={['Show', 'Hide', 'Center']}
                                onChange={(val) => {
                                    setShowArrow(val !== 'Hide');
                                    setArrowAtCenter(val === 'Center');
                                }}
                            />
                            <Divider orientation="center">Content</Divider>
                            <div
                                style={{
                                    marginLeft: buttonWidth * 1.15,
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    gap: '10px'
                                }}
                            >
                                <Popover placement="topLeft" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>TL</Button>
                                </Popover>
                                <Popover placement="top" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>Top</Button>
                                </Popover>
                                <Popover placement="topRight" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>TR</Button>
                                </Popover>
                            </div>
                            <div
                                style={{
                                    width: buttonWidth,
                                    float: 'left',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <Popover placement="leftTop" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>LT</Button>
                                </Popover>
                                <Popover placement="left" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>Left</Button>
                                </Popover>
                                <Popover placement="leftBottom" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>LB</Button>
                                </Popover>
                            </div>
                            <div
                                style={{
                                    width: buttonWidth,
                                    marginLeft: buttonWidth * 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <Popover placement="rightTop" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>RT</Button>
                                </Popover>
                                <Popover placement="right" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>Right</Button>
                                </Popover>
                                <Popover placement="rightBottom" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>RB</Button>
                                </Popover>
                            </div>
                            <div
                                style={{
                                    marginLeft: buttonWidth,
                                    clear: 'both',
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    gap: '10px'
                                }}
                            >
                                <Popover placement="bottomLeft" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>BL</Button>
                                </Popover>
                                <Popover placement="bottom" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>Bottom</Button>
                                </Popover>
                                <Popover placement="bottomRight" title={text} content={basicPopoverContent} arrow={mergedArrow}>
                                    <Button>BR</Button>
                                </Popover>
                            </div>
                        </div>
                    </Card>
                    <Card title="Hover with click popover" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The following example shows how to create a popover which can be hovered and clicked.</Text></p>
                        <Popover
                            style={{
                                width: 500,
                            }}
                            content={hoverContent}
                            title="Hover title"
                            trigger="hover"
                            open={hovered}
                            onOpenChange={handleHoverChange}
                        >
                            <Popover
                                content={
                                    <div>
                                        {clickContent}
                                        <Link onClick={hide}>Close</Link>
                                    </div>
                                }
                                title="Click title"
                                trigger="click"
                                open={clicked}
                                onOpenChange={handleClickChange}
                            >
                                <Button>Hover and click / 悬停并单击</Button>
                            </Popover>
                        </Popover>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiPopover
