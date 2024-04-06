import React, { useState } from 'react';
import { Card, Col, Row, Typography, Carousel, Radio } from 'antd';
import carousalSmallImg1 from '../../../assets/images/small/img-1.jpg';
import carousalSmallImg2 from '../../../assets/images/small/img-4.jpg';
import carousalSmallImg3 from '../../../assets/images/small/img-6.jpg';
import carousalSmallImg4 from '../../../assets/images/small/img-12.jpg';

// breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const { Text } = Typography;

const onChange = (currentSlide) => {
    console.log(currentSlide);
};

const UiCarousel = () => {

    // page title
    document.title = "Carousel" + process.env.REACT_APP_PAGE_TITLE;

    //action position
    const [dotPosition, setDotPosition] = useState('top');
    const handlePositionChange = ({ target: { value } }) => {
        setDotPosition(value);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Data Display" pageTitle="Carousel" />

            <Row gutter={[16, 24]}>
                <Col span={24} xxl={12} className="gutter-row">
                    <Card title="Basic Examples" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic usage.</Text></p>
                        <Carousel afterChange={onChange}>
                            <div>
                                <img alt="example" src={carousalSmallImg1} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg2} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg3} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg4} />
                            </div>
                        </Carousel>
                    </Card>
                    <Card title="Scroll automatically" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Timing of scrolling to the next card/picture.</Text></p>
                        <Carousel autoplay>
                            <div>
                                <img alt="example" src={carousalSmallImg1} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg2} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg3} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg4} />
                            </div>
                        </Carousel>
                    </Card>
                </Col>{/* end col */}
                <Col span={24} xxl={12} className="gutter-row">
                    <Card title="Position" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">There are 4 position options available.</Text></p>
                        <Radio.Group
                            onChange={handlePositionChange}
                            value={dotPosition}
                            style={{
                                marginBottom: 8,
                            }}
                        >
                            <Radio.Button value="top">Top</Radio.Button>
                            <Radio.Button value="bottom">Bottom</Radio.Button>
                            <Radio.Button value="left">Left</Radio.Button>
                            <Radio.Button value="right">Right</Radio.Button>
                        </Radio.Group>
                        <Carousel dotPosition={dotPosition}>
                            <div>
                                <img alt="example" src={carousalSmallImg1} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg2} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg3} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg4} />
                            </div>
                        </Carousel>
                    </Card>
                    <Card title="Fade in" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Slides use fade for transition.</Text></p>
                        <Carousel effect="fade">
                            <div>
                                <img alt="example" src={carousalSmallImg1} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg2} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg3} />
                            </div>
                            <div>
                                <img alt="example" src={carousalSmallImg4} />
                            </div>
                        </Carousel>
                    </Card>
                </Col>{/* end col */}
            </Row>{/* end row */}
        </>
    )
}

export default UiCarousel
