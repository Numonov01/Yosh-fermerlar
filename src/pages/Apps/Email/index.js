import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '../../../Common/Breadcrumb';
import SidebarEmail from './SidebarEmail';
import Email from './Email';
import { Col, Row } from 'antd';

const EmailPage = () => {

    document.title = "Email" + process.env.REACT_APP_PAGE_TITLE;

    const [activeTabs, setActive] = useState("all");
    const [displayCategory, setCategory] = useState("all");
    const [displaytype, settype] = useState("all");
    const [displaylabel, setLabel] = useState("all");
    const [isLabelTab, setIsLabelTab] = useState("");
    const [isTypeTab, setIsTypeTab] = useState("primary");

    const toggleTab = (ncategory, ntype, nlabel) => {
        var element = document.getElementById("mail-filter-navlist");
        if (ncategory === "all" || ncategory === "inbox") {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
        if (activeTabs !== ncategory) {
            setActive(ncategory);
        }
        if (isLabelTab !== nlabel) {
            setIsLabelTab(nlabel);
        }
        if (isTypeTab !== ntype) {
            setIsTypeTab(ntype);
        }
        setCategory(ncategory);
        settype(ntype);
        setLabel(nlabel);
    };

    //mobile screen menu bar
    const [show, setShow] = useState(false);
    const menuBarRef = useRef(null);

    const handleToggleMenuBar = () => {
        setShow(!show);
    };

    const handleClickOutside = (event) => {
        if (menuBarRef.current && !menuBarRef.current.contains(event.target)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const element = document.getElementById('email-menu-sidebar');
        if (element) {
            if (show) {
                element.classList.add('menubar-show');
            } else {
                element.classList.remove('menubar-show');
            }
        }
    }, [show]);

    return (
        <React.Fragment>

            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Apps" pageTitle="Email" />

            <Row gutter={[24, 16]}>
                <Col xs={24} md={6} lg={4}>
                    <SidebarEmail toggleTab={toggleTab} activeTabs={activeTabs} isLabelTab={activeTabs} menuBarRef={menuBarRef} />
                </Col>
                <Col xs={24} md={18} lg={20} style={{overflowX: 'auto'}}>
                
                    <Email displayCategory={displayCategory} displaytype={displaytype} displaylabel={displaylabel} handleToggleMenuBar={handleToggleMenuBar} />
                    
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default EmailPage
