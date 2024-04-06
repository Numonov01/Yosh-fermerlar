import { Button, Card, Col, Row } from 'antd';
import React, { useState } from 'react'
import { themecolor } from '../../../config';
import QueueAnim from 'rc-queue-anim';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const Queue = () => {

    const [show, setShow] = useState(true);

    const onClick = () => {
        setShow(!show);
    };

    // Add Remove
    const [add, setAdd] = useState(true);
    const [items, setItems] = useState([
        <li key="0" style={{ backgroundColor: themecolor.token.colorWarning, height: "10px", width: "300px", marginBottom: customStyles.marginXXS }}></li>,
        <li key="1" style={{ backgroundColor: themecolor.token.colorWarning, height: "10px", width: "300px", marginBottom: customStyles.marginXXS }}></li>,
        <li key="2" style={{ backgroundColor: themecolor.token.colorWarning, height: "10px", width: "300px", marginBottom: customStyles.marginXXS }}></li>,
    ]);

    const onClicking = () => {
        setAdd(!add);
    };

    const onAdd = () => {
        const newItems = [...items, <li key={Date.now()} style={{ backgroundColor: themecolor.token.colorSuccess, height: "10px", width: "350px", marginBottom: customStyles.marginXXS }}></li>];
        setItems(newItems);
        setAdd(true);
    };

    const onRemove = () => {
        const newItems = [...items];
        newItems.pop();
        setItems(newItems);
        setAdd(true);
    };

    // Custom
    const [hide, setHide] = useState(true);

    const onclicked = () => {
        setHide(!hide);
    };

    const animConfig = [
        { opacity: [1, 0], translateY: [0, 50] },
        { opacity: [1, 0], translateY: [0, -50] },
    ];

    return (
        <React.Fragment>
            <Row gutter={[24]}>
                <Col xl={12} className="gutter-row">
                    <Card title="Simple Animation" style={{ marginBottom: customStyles.margin }}>
                        <QueueAnim delay={400} className="queue-simple">
                            <div key="a" style={{ marginBottom: customStyles.marginXXS }}>
                                <Button type='primary'> Queue Demo </Button>
                            </div>
                            <div key="b" style={{ marginBottom: customStyles.marginXXS }}>
                                <Button type='primary'> Queue Demo </Button>
                            </div>
                            <div key="c" style={{ marginBottom: customStyles.marginXXS }}>
                                <Button type='primary'> Queue Demo </Button>
                            </div>
                            <div key="d" style={{ marginBottom: customStyles.marginXXS }}>
                                <Button type='primary'> Queue Demo </Button>
                            </div>
                            <div key="e">
                                <Button type='primary'> Queue Demo </Button>
                            </div>
                        </QueueAnim>
                    </Card>
                </Col>

                {/* Custom Animation */}
                <Col xl={12} className="gutter-row">
                    <Card title="Custom Animation" style={{ marginBottom: customStyles.margin }}>
                        <div className="queue-demo">
                            <p className="buttons">
                                <Button type="primary" onClick={onclicked}>
                                    Switch
                                </Button>
                            </p>
                            <QueueAnim className="demo-content" animConfig={animConfig}>
                                {hide ? (
                                    [
                                        <div className="demo-thead" key="a">
                                            <ul style={{ listStyleType: "none" }}>
                                                <li style={{ backgroundColor: themecolor.token.colorInfo, height: "10px", width: "250px", marginBottom: customStyles.marginXXS }} />
                                                <li style={{ backgroundColor: themecolor.token.colorInfo, height: "10px", width: "250px", marginBottom: customStyles.marginXXS }} />
                                                <li style={{ backgroundColor: themecolor.token.colorInfo, height: "10px", width: "250px", marginBottom: customStyles.marginXXS }} />
                                            </ul>
                                        </div>,
                                        <div className="demo-tbody" key="b">
                                            <ul style={{ listStyleType: "none" }}>
                                                <li style={{ backgroundColor: themecolor.token.colorFill, height: "10px", width: "300px", marginBottom: customStyles.marginXXS }}></li>
                                                <li style={{ backgroundColor: themecolor.token.colorFill, height: "10px", width: "300px", marginBottom: customStyles.marginXXS }}></li>
                                                <li style={{ backgroundColor: themecolor.token.colorFill, height: "10px", width: "300px", marginBottom: customStyles.marginXXS }}></li>
                                            </ul>
                                        </div>,
                                    ]
                                ) : null}
                            </QueueAnim>
                        </div>
                    </Card>
                </Col>
                {/* Enter And Leave */}
                <Col xl={12} className="gutter-row">
                    <Card title="Enter And Leave Animation" style={{ marginBottom: customStyles.margin }}>
                        <div className="queue-demo">
                            <p className="buttons">
                                <Button type="primary" onClick={onClick}>
                                    Switch
                                </Button>
                            </p>
                            <QueueAnim className="demo-content">
                                {show ? (
                                    [
                                        <div className="demo-thead" key="a">
                                            <ul style={{ listStyleType: "none" }}>
                                                <li style={{ backgroundColor: themecolor.token.colorInfo, height: "10px", width: "250px", marginBottom: customStyles.marginXXS }} ></li>
                                                <li style={{ backgroundColor: themecolor.token.colorInfo, height: "10px", width: "250px", marginBottom: customStyles.marginXXS }} ></li>
                                                <li style={{ backgroundColor: themecolor.token.colorInfo, height: "10px", width: "250px", marginBottom: customStyles.marginXXS }} ></li>
                                            </ul>
                                        </div>,
                                        <div className="demo-tbody" key="b">
                                            <ul style={{ listStyleType: "none" }}>
                                                <li style={{ backgroundColor: themecolor.token.colorWarning, height: "10px", width: "250px", marginBottom: customStyles.marginXXS }} ></li>
                                                <li style={{ backgroundColor: themecolor.token.colorWarning, height: "10px", width: "250px", marginBottom: customStyles.marginXXS }} ></li>
                                                <li style={{ backgroundColor: themecolor.token.colorWarning, height: "10px", width: "250px", marginBottom: customStyles.marginXXS }} ></li>
                                            </ul>
                                        </div>,
                                    ]
                                ) : null}
                            </QueueAnim>
                        </div>
                    </Card>
                </Col>
                {/* Add and Remove */}
                <Col xl={12} className="gutter-row">
                    <Card title="Add and Remove" style={{ marginBottom: customStyles.margin }}>
                        <div className="queue-demo">
                            <p className="buttons">
                                <Button type="primary" onClick={onClicking}>
                                    Switch
                                </Button>
                                <Button onClick={onAdd} style={{ marginLeft: 10 }}>
                                    Add
                                </Button>
                                <Button onClick={onRemove} style={{ marginLeft: 10 }}>
                                    Remove
                                </Button>
                            </p>
                            <div className="demo-content">
                                <div className="demo-thead" key="a">
                                    <ul style={{ listStyleType: "none" }}>
                                        <li style={{ backgroundColor: themecolor.token.colorInfo, height: "10px", width: "250px", marginBottom: customStyles.marginXXS }} />
                                        <li style={{ backgroundColor: themecolor.token.colorInfo, height: "10px", width: "250px", marginBottom: customStyles.marginXXS }} />
                                        <li style={{ backgroundColor: themecolor.token.colorInfo, height: "10px", width: "250px", }} />
                                    </ul>
                                </div>
                                <div className="demo-tbody" key="b">
                                    <QueueAnim component="ul" type={['right', 'left']} leaveReverse style={{ listStyleType: "none" }}>
                                        {add ? items : null}
                                    </QueueAnim>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                

            </Row>
        </React.Fragment>
    )
}

export default Queue