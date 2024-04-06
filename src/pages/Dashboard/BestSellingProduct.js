import React from 'react'
import { BestSellingProductsData } from '../../Common/data'
import { Link } from 'react-router-dom'
import { Card, Col, Tag, Typography } from 'antd'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import usecustomStyles from '../../Common/customStyles';
import { StarFilled } from '@ant-design/icons';
import SimpleBar from 'simplebar-react';

import productImg3 from "../../assets/images/products/img-3.png"
import productImg6 from "../../assets/images/products/img-6.png"
import productImg8 from "../../assets/images/products/img-8.png"
import productImg9 from "../../assets/images/products/img-9.png"

import styled from 'styled-components';

const { Text } = Typography;
const customStyles = usecustomStyles();
const TextMuted = styled.div`
color: ${({ theme }) => theme.token.textMute};
`;
const BgInfo = styled.div`
      background-color: ${({ theme }) => theme.token.emailSidebar};
`;
const BestSellingProduct = () => {
    return (
        <React.Fragment>
            <Col xs={24} xl={16}>
                <div className="d-flex pt-2 pb-4" style={{ marginBottom: '20px' }}>

                    <Text style={{ fontSize: "16px", fontWeight: '500' }}>Best Selling Products</Text>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="mySwiper selling-product pt-5">

                    <div className="swiper-wrapper pt-2">
                        {BestSellingProductsData.map((item, key) => (
                            <SwiperSlide style={{ maxWidth: "280px" }} key={key}>
                                <Card>
                                    <div>
                                        <div
                                            style={{ backgroundColor: item.className, borderRadius: "5px", padding: "10px 0px" }}
                                        >
                                            <img src={item.img} alt="" style={{ maxHeight: "215px", maxWidth: "100%" }} className="mx-auto d-block" />
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: '16px' }}>
                                            <h5 style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '600' }}>{item.price}</h5>
                                            <TextMuted className="float-end">{item.rating} <StarFilled style={{ color: customStyles.colorWarning }} /></TextMuted>
                                        </div>
                                        <TextMuted style={{ fontSize: '15px', cursor: 'pointer', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', fontWeight: '600' }} >{item.productName}</TextMuted>

                                    </div>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>
            </Col>

            {/* Product Delivery */}

            <Col xs={24} xl={8}>
                <Card>
                    <div style={{ display: "flex", justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ fontSize: 16, fontWeight: '500', }} >Product Delivery</h4>
                        <Link href="#!" className="flex-shrink-0">View All <i className="ri-arrow-right-line align-bottom ms-1"></i></Link>
                    </div>
                    <div>
                        <SimpleBar style={{ padding: "20px", margin: "-0 -16px", maxHeight: "310px" }}>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: '14px' }}>
                                    <BgInfo shape='square' className="avatar-sm bg-light rounded p-1" style={{ flexShrink: '0', height: "40px", width: "40px", borderRadius: '4px', padding: '4px' }}>
                                        <img src={productImg8} alt="" style={{ height: '100%', width: '100%' }} />
                                    </BgInfo>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '14px', flexGrow: '1' }} >
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h4 className="text-truncate mb-0" style={{ marginBottom: '0' }}>Men's Running Shoes Activ... </h4>
                                            <TextMuted style={{ fontSize: '12px', marginBottom: '0' }}>by: <span className="text-info">Aaron Bauer</span></TextMuted>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Tag color='warning' style={{ border: 'none' }}>Shipping</Tag>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: '14px' }}>
                                    <BgInfo shape='square' className="avatar-sm bg-light rounded p-1" style={{ flexShrink: '0', height: "40px", width: "40px", borderRadius: '4px', padding: '4px' }}>
                                        <img src={productImg9} alt="" style={{ height: '100%', width: '100%' }} />
                                    </BgInfo>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '14px', flexGrow: '1' }} >
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h4 className="text-truncate mb-0" style={{ marginBottom: '0' }}>Striped Baseball Cap </h4>
                                            <TextMuted style={{ fontSize: '12px', marginBottom: '0' }}>by: <span className="text-info">by: Jansh Brown</span></TextMuted>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Tag color='success' style={{ border: 'none' }}>Delivered</Tag>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: '14px' }}>
                                    <BgInfo shape='square' className="avatar-sm bg-light rounded p-1" style={{ flexShrink: '0', height: "40px", width: "40px", borderRadius: '4px', padding: '4px' }}>
                                        <img src={productImg3} alt="" style={{ height: '100%', width: '100%' }} />
                                    </BgInfo>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '14px', flexGrow: '1' }} >
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h4 className="text-truncate mb-0" style={{ marginBottom: '0' }}>350 ml Glass Groce... </h4>
                                            <TextMuted style={{ fontSize: '12px', marginBottom: '0' }}>by: <span className="text-info">Scott Wilson</span></TextMuted>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Tag color='error' style={{ border: 'none' }}>Out of Delivery</Tag>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: '14px' }}>
                                    <BgInfo shape='square' className="avatar-sm bg-light rounded p-1" style={{ flexShrink: '0', height: "40px", width: "40px", borderRadius: '4px', padding: '4px' }}>
                                        <img src={productImg6} alt="" style={{ height: '100%', width: '100%' }} />
                                    </BgInfo>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '14px', flexGrow: '1' }} >
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h4 className="text-truncate mb-0" style={{ marginBottom: '0' }}>Monte Carlo Sweaters</h4>
                                            <TextMuted style={{ fontSize: '12px', marginBottom: '0' }}> <span className="text-info">Daniel Gonzalez</span></TextMuted>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Tag color='success' style={{ border: 'none' }}>Delivered</Tag>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: '14px' }}>
                                    <BgInfo shape='square' className="avatar-sm bg-light rounded p-1" style={{ flexShrink: '0', height: "40px", width: "40px", borderRadius: '4px', padding: '4px' }}>
                                        <img src={productImg9} alt="" style={{ height: '100%', width: '100%' }} />
                                    </BgInfo>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '14px', flexGrow: '1' }} >
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h4 className="text-truncate mb-0" style={{ marginBottom: '0' }}>Ceramic Coffee Mug</h4>
                                            <TextMuted style={{ fontSize: '12px', marginBottom: '0' }}> <span className="text-info">Stephen Garrison</span></TextMuted>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Tag color='success' style={{ border: 'none' }}>Shipping</Tag>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: '14px' }}>
                                    <BgInfo shape='square' className="avatar-sm bg-light rounded p-1" style={{ flexShrink: '0', height: "40px", width: "40px", borderRadius: '4px', padding: '4px' }}>
                                        <img src={productImg3} alt="" style={{ height: '100%', width: '100%' }} />
                                    </BgInfo>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '14px', flexGrow: '1' }} >
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h4 className="text-truncate mb-0" style={{ marginBottom: '0' }}>350 ml Glass Groce... </h4>
                                            <TextMuted style={{ fontSize: '12px', marginBottom: '0' }}>by: <span className="text-info">Scott Wilson</span></TextMuted>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Tag color='error' style={{ border: 'none' }}>Out of Delivery</Tag>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: '14px' }}>
                                <BgInfo shape='square' className="avatar-sm bg-light rounded p-1" style={{flexShrink: '0', height: "40px", width: "40px", borderRadius:'4px', padding:'4px'}}>
                                            <img src={productImg6} alt="" style={{height:'100%', width:'100%' }} />
                                        </BgInfo>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '14px', flexGrow: '1' }} >
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h4 className="text-truncate mb-0" style={{ marginBottom: '0' }}>Monte Carlo Sweaters</h4>
                                            <TextMuted style={{ fontSize: '12px', marginBottom: '0' }}> <span className="text-info">Daniel Gonzalez</span></TextMuted>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Tag color='success' style={{ border: 'none' }}>Delivered</Tag>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                    </div>
                </Card>
            </Col>

        </React.Fragment>
    )
}

export default BestSellingProduct