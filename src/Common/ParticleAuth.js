import React from 'react'

import logoLightFull from "../assets/images/logo-light.png";
import authEffect2 from "../assets/images/effect-pattern/auth-effect-2.png";
import authEffect from "../assets/images/effect-pattern/auth-effect.png";
import usecustomStyles from './customStyles';
import { HeartFilled } from '@ant-design/icons';
import { Col } from 'antd';

const customStyles = usecustomStyles();

const ParticleAuth = () => {
    return (
        <React.Fragment>
                <Col xs={24} lg={10} style={{ backgroundColor: customStyles.colorPrimary, color: customStyles.colorBgContainer, borderRadius: '6px' }}>
                    <div style={{ display: 'flex', flexDirection: "column", alignItems: "space-between", padding: "20px", justifyContent:'space-between', height:'100%' }}>
                        <div style={{ marginBottom: "30px" }}>
                            <img src={logoLightFull} alt="" height="30" />
                            <img src={authEffect2} alt="" style={{ position: "absolute", zIndex: "1", top: '0%', right: 0, transform: 'rotate(-45deg)' }} />
                            <img src={authEffect} alt="" style={{ top: "-15px", left: "-20px", position: "absolute", zIndex: "1", overflow: "hidden" }} />
                            <img src={authEffect} alt="" style={{ position: "absolute", zIndex: "1", bottom: "-15px", right: "-20px" }} />
                        </div>

                        <div>
                            <h3 style={{ fontSize: "22px", fontWeight: "bold" }}>Start your journey with us.</h3>
                            <p>It brings together your tasks, projects, timelines, files, and more</p>
                        </div>
                        <div className="text-center text-white-75">
                            <p style={{ marginBottom: "0px" }}>&copy; {new Date().getFullYear()} Lizant. Crafted with <HeartFilled style={{ color: customStyles.colorDanger }} /> by Themesbrand</p>
                        </div>
                    </div>
                </Col>
        </React.Fragment>
    )
}

export default ParticleAuth