import React, { useMemo, useState } from 'react';
import { Button, Card, Col, Divider, Row, Segmented, Space, Tooltip, Typography } from 'antd';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

const text = <span>prompt text</span>;
const buttonWidth = 70;

const gap = 8;
const btnProps = {
    style: {
        width: buttonWidth,
    },
};

//Colorful Tooltip
const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
];
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

const UiTooltip = () => {
    // page title
    document.title = "Tooltip" + process.env.REACT_APP_PAGE_TITLE;

    //Arrow
    const options = ['Show', 'Hide', 'Center'];
    const [arrow, setArrow] = useState('Show');
    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
            return false;
        }
        if (arrow === 'Show') {
            return true;
        }
        return {
            pointAtCenter: true,
        };
    }, [arrow]);

    //Auto Shift
    React.useEffect(() => {
        document.documentElement.scrollTop = document.documentElement.clientHeight;
        document.documentElement.scrollLeft = document.documentElement.clientWidth;
    }, []);

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Tooltip" />

            <Row gutter={[24]}>
                <Col xs={24} xl={12} className="gutter-row">
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The simplest usage.</Text></p>
                        <Tooltip title="prompt text">
                            <span>Tooltip will show on mouse enter.</span>
                        </Tooltip>
                    </Card>
                    <Card title="Arrow" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Support show, hide or keep arrow in the center.</Text></p>
                        <div className="demo" style={{ overflowX: 'auto'}}>
                            <Segmented
                                value={arrow}
                                options={options}
                                onChange={(val) => {
                                    setArrow(val);
                                }}
                            />
                            <Divider orientation="center">Content</Divider>
                            <div
                                style={{
                                    marginLeft: buttonWidth,
                                    display: 'flex',
                                    flexWrap: 'nowrap',
                                    columnGap: gap,
                                   
                                }}
                            >
                                <Tooltip placement="topLeft" title={text} arrow={mergedArrow}>
                                    <Button {...btnProps}>TL</Button>
                                </Tooltip>
                                <Tooltip placement="top" title={text} arrow={mergedArrow}>
                                    <Button {...btnProps}>Top</Button>
                                </Tooltip>
                                <Tooltip placement="topRight" title={text} arrow={mergedArrow}>
                                    <Button {...btnProps}>TR</Button>
                                </Tooltip>
                            </div>
                            <div
                                style={{
                                    width: buttonWidth,
                                    float: 'left',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: gap,
                                }}
                            >
                                <Tooltip placement="leftTop" title={text} arrow={mergedArrow}>
                                    <Button>LT</Button>
                                </Tooltip>
                                <Tooltip placement="left" title={text} arrow={mergedArrow}>
                                    <Button>Left</Button>
                                </Tooltip>
                                <Tooltip placement="leftBottom" title={text} arrow={mergedArrow}>
                                    <Button>LB</Button>
                                </Tooltip>
                            </div>
                            <div
                                style={{
                                    width: buttonWidth,
                                    marginLeft: buttonWidth * 4 + 24,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: gap,
                                }}
                            >
                                <Tooltip placement="rightTop" title={text} arrow={mergedArrow}>
                                    <Button>RT</Button>
                                </Tooltip>
                                <Tooltip placement="right" title={text} arrow={mergedArrow}>
                                    <Button>Right</Button>
                                </Tooltip>
                                <Tooltip placement="rightBottom" title={text} arrow={mergedArrow}>
                                    <Button>RB</Button>
                                </Tooltip>
                            </div>
                            <div
                                style={{
                                    marginLeft: buttonWidth,
                                    clear: 'both',
                                    display: 'flex',
                                    flexWrap: 'nowrap',
                                    columnGap: gap,
                                }}
                            >
                                <Tooltip placement="bottomLeft" title={text} arrow={mergedArrow}>
                                    <Button {...btnProps}>BL</Button>
                                </Tooltip>
                                <Tooltip placement="bottom" title={text} arrow={mergedArrow}>
                                    <Button {...btnProps}>Bottom</Button>
                                </Tooltip>
                                <Tooltip placement="bottomRight" title={text} arrow={mergedArrow}>
                                    <Button {...btnProps}>BR</Button>
                                </Tooltip>
                            </div>
                        </div>
                    </Card>
                    <Card title="Auto Shift" style={{ marginBottom: customStyles.margin}}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Auto adjust Popup and arrow position when Tooltip is close to the edge of the screen. Will be out of screen when exceed limitation.</Text></p>
                        <div>
                            <Tooltip title="Thanks for using antd. Have a nice day!" trigger="click" defaultOpen>
                                <Button>Scroll The Window</Button>
                            </Tooltip>
                        </div>
                    </Card>
                </Col>{/* end col */}
                <Col xs={24} xl={12} className="gutter-row">
                    <Card title="Placement" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">There are 12 placement options available.</Text></p>
                        <div style={{overflowX:'scroll'}}>
                            <div
                                style={{
                                    marginLeft: buttonWidth * 1.15,
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    gap: '10px'
                                }}
                            >
                                <Tooltip placement="topLeft" title={text}>
                                    <Button>TL</Button>
                                </Tooltip>
                                <Tooltip placement="top" title={text}>
                                    <Button>Top</Button>
                                </Tooltip>
                                <Tooltip placement="topRight" title={text}>
                                    <Button>TR</Button>
                                </Tooltip>
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
                                <Tooltip placement="leftTop" title={text}>
                                    <Button>LT</Button>
                                </Tooltip>
                                <Tooltip placement="left" title={text}>
                                    <Button>Left</Button>
                                </Tooltip>
                                <Tooltip placement="leftBottom" title={text}>
                                    <Button>LB</Button>
                                </Tooltip>
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
                                <Tooltip placement="rightTop" title={text}>
                                    <Button>RT</Button>
                                </Tooltip>
                                <Tooltip placement="right" title={text}>
                                    <Button>Right</Button>
                                </Tooltip>
                                <Tooltip placement="rightBottom" title={text}>
                                    <Button>RB</Button>
                                </Tooltip>
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
                                <Tooltip placement="bottomLeft" title={text}>
                                    <Button>BL</Button>
                                </Tooltip>
                                <Tooltip placement="bottom" title={text}>
                                    <Button>Bottom</Button>
                                </Tooltip>
                                <Tooltip placement="bottomRight" title={text}>
                                    <Button>BR</Button>
                                </Tooltip>
                            </div>
                        </div>
                    </Card>
                    <Card title="Basic Example" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">We preset a series of colorful Tooltip styles for use in different situations.</Text></p>
                        <Divider orientation="left">Presets</Divider>
                        <Space wrap>
                            {colors.map((color) => (
                                <Tooltip title="prompt text" color={color} key={color}>
                                    <Button>{color}</Button>
                                </Tooltip>
                            ))}
                        </Space>
                        <Divider orientation="left">Custom</Divider>
                        <Space wrap>
                            {customColors.map((color) => (
                                <Tooltip title="prompt text" color={color} key={color}>
                                    <Button>{color}</Button>
                                </Tooltip>
                            ))}
                        </Space>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiTooltip
