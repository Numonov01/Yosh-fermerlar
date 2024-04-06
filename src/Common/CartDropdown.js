import { Badge, Button, Col, Dropdown, Input, Row, Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { DeleteModal } from './DeleteModal';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';


// images
import image1 from "../assets/images/products/img-1.png"
import image5 from "../assets/images/products/img-5.png"
import image8 from "../assets/images/products/img-8.png"
import image10 from "../assets/images/products/img-10.png"
import image11 from "../assets/images/products/img-11.png"
import usecustomStyles from './customStyles';
import { ShoppingCart } from 'lucide-react';
import { CloseOutlined } from '@ant-design/icons';

const customStyles = usecustomStyles();

const CartDropdown = () => {

    const cartItemTotal = useRef();
    const emptyCart = useRef();

    const cartData = [
        { id: 1, img: image1, product: "Blive Printed Men Round Neck", type: "Fashion", num: 1, price: 32.00, Total: 32.00 },
        { id: 2, img: image5, product: "Willage Volleyball Ball", type: "Sportwear", num: 1, price: 18.01, Total: 18.01 },
        { id: 3, img: image10, product: "Cotton collar tshirts for men", type: "Fashion", num: 1, price: 250.09, Total: 250.09 },
        { id: 4, img: image11, product: "Jeans blue men boxer", type: "Fashion", num: 1, price: 1250.10, Total: 1250.10 },
        { id: 5, img: image8, product: "Full Sleeve Solid Men Sweatshirt", type: "Fashion", num: 1, price: 495.03, Total: 495.03 },
    ];

    const [cartDrop, setCartDrop] = useState(cartData)
    const [dis, setDis] = useState(0);
    const [tax, setTax] = useState(0);
    const [charge, setCharge] = useState(0);
    const [delet, setDelet] = useState(false);
    // const [deleteId, setDeleteId] = useState();

    //delete modal
    const handleDelete = (id) => {
        setDelet(true);
        setDelet(id)
        const updatedData = cartDrop.filter((item) => item.id !== id);
        setCartDrop(updatedData);
    }

    const handleClose = () => setDelet(false);

    const deleteModalFunction = () => {
        handleClose();
    }

    const assigned = cartDrop.map((item) => item.Total);
    let subTotal = 0;
    for (let i = 0; i < assigned.length; i++) {
        subTotal += Math.round(assigned[i]);
    }

    useEffect(() => {
        let dis = (0.15 * subTotal);
        let tax = (0.125 * subTotal);

        if (subTotal !== 0) {
            setCharge(65);
        } else {
            setCharge(0);
        }
        setTax(dis);
        setDis(tax);
    }, [subTotal]);

    const CountDown = (item) => {
        setCartDrop((cartDrop || []).map((count) => (count.id === item.id && count.num > 0) ? { ...count, num: item.num > 0 ? item.num - 1 : 0, Total: (item.num > 0 ? item.num - 1 : 0) * item.price } : count));
    }

    const CountUp = (item) => {
        setCartDrop((cartDrop || [])?.map((count) => count.id === item.id ? { ...count, num: item.num + 1, Total: (item.num + 1) * item.price } : count));
    }

    const dataSource = [
        {
            key: '1',
            name: <b>Sub Total :</b>,
            total: <span>${subTotal || ''}</span>,
        },
        {
            key: '2',
            name: <b>Discount <span style={{ color: customStyles.textMuted }}>(LIZANT15)</span>:</b>,
            total: <span>- ${dis || ''}</span>,
        },
        {
            key: '3',
            name: <b>Shipping Charge :</b>,
            total: <span>${charge || ''}.00</span>,
        },
        {
            key: '4',
            name: <b>Estimated Tax <span style={{ color: customStyles.textMuted }}>(12.5%)</span>:</b>,
            total: <span>${tax || ''}</span>,
        },
    ];

    const columns = [
        {
            title: '',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '',
            dataIndex: 'total',
            key: 'total',
        },
    ];

    // items
    const cartDropdownMenu = [
        {
            label: <div>
                <div >
                    <Row style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Col>
                            <h6 style={{ fontSize: customStyles.h6 }}> My Cart <Badge count={cartDrop.length} style={{ backgroundColor: customStyles.colorDark, color: customStyles.textMuted }}></Badge></h6>
                        </Col>
                        <Col>
                            <Link to="#" >View All</Link>
                        </Col>
                    </Row>
                </div>
                <SimpleBar style={{ maxHeight: "300px", width: "410px" }}>
                    <div >
                        <div className="text-center" ref={emptyCart} style={{ display: "none", borderBottom: "1px dashed lightgray" }}>
                            <div >
                                <ShoppingCart />
                            </div>
                            <h5 >Your Cart is Empty!</h5>
                            <Link to="/#">Shop Now</Link>
                        </div>
                        {(cartDrop || []).map((item, key) => (
                            <div key={key}>
                                <div style={{ display: "flex" }}>
                                    <div >
                                        <img src={item.img} alt="user-pic" style={{ height: "32px", marginRight: "20px" }} />
                                    </div>
                                    <div >
                                        <p >{item.type}</p>
                                        <h6 style={{ fontSize: "16px" }}>
                                            {item.product}
                                        </h6>
                                        {/* <div className="text-muted fw-medium d-none">$<span className="product-price">327.49</span></div> */}
                                        <div
                                            style={{ display: "flex", border: "1px solid lightgray", borderRadius: "4px" }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Button onClick={(e) => { e.stopPropagation(); CountDown(item); }}>–</Button>
                                            <Input type="number" value={item.num} min="0" max="100" readOnly />
                                            <Button onClick={(e) => { e.stopPropagation(); CountUp(item); }}>+</Button>
                                        </div>
                                    </div>
                                    <div vertical style={{ display: "block", justifyContent: "space-between", alignItems: "end", paddingLeft: "40%" }}>
                                        <Button onClick={() => handleDelete(item.id)} >
                                            <CloseOutlined />
                                        </Button>
                                        <h5>$<span >{(item.Total).toFixed(2)}</span></h5>
                                    </div>
                                </div>
                            </div>))}

                        <div id="count-table" style={{marginTop: customStyles.margin}}>
                            <Table dataSource={dataSource} columns={columns} pagination={false} />
                        </div>
                    </div>
                </SimpleBar>
                <div style={{ borderTop: "1px dashed lightgray", display: "grid" }} id="checkout-elem">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <h5 style={{ fontSize: customStyles.h5, color: customStyles.textMuted }}>Total:</h5>
                        <div className="px-2">
                            <h5 style={{ fontSize: customStyles.h5 }}>$ <span ref={cartItemTotal}>{(subTotal + charge + tax - dis).toFixed(2) || ''}</span></h5>
                        </div>
                    </div>

                    <Button to="/#" style={{ width: "100%", backgroundColor: customStyles.colorInfo, color: customStyles.colorInfoBg }} >
                        Checkout
                    </Button>
                </div>
            </div>,
            key: '1',
        }
    ]


    return (
        <React.Fragment>
            <Dropdown menu={{ items: cartDropdownMenu, }} trigger={['click']} placement="bottomRight">
                <div
                    type="text"
                    style={{ marginTop: "6px", marginRight: customStyles.marginXS }}
                >
                    <Badge count={cartDrop.length} style={{boxShadow: "none"}} size="small">
                        <ShoppingCart size={20} />
                    </Badge>
                </div>
            </Dropdown>
            <DeleteModal show={delet} handleClose={handleClose} deleteModalFunction={deleteModalFunction} />
        </React.Fragment>
    )
}

export default CartDropdown