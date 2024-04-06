import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../Common/Breadcrumb';
import { Col, Input, Row } from 'antd';
import { Search } from 'lucide-react';
import usecustomStyles from '../../../Common/customStyles';
import ContactSide from './ContactSide';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const customStyles = usecustomStyles();
const BgInfo = styled.div`
      background-color: ${({ theme }) => theme.token.contactBg};
`;
const TextLight = styled.div`
      color: ${({ theme }) => theme.token.textLight};
`;
const StyleTextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const ContactPage = () => {

    document.title = "Contact" + process.env.REACT_APP_PAGE_TITLE;

    const selectDashboardData = createSelector(
        (state) => state.Contacts,
        (state) => ({
            contacts: state.contacts,
            loading: state.loading
        })
    );
    // Inside your component
    const { contacts, loading } = useSelector(selectDashboardData);

    const [contactList, setContactList] = useState([])

    const searchContact = (e) => {
        let search = e.target.value.toLowerCase(); // Convert to lowercase here
        if (search) {
            setContactList(contacts.filter((data) => data.name && data.name.toLowerCase().includes(search)));
        } else {
            setContactList(contacts);
        }
    };

    useEffect(() => {
        setContactList(contacts)
    }, [contacts]);

    return (
        <React.Fragment>

            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Apps" pageTitle="Contact" />

            <Row gutter={[16]}>
                <Col xs={24}>
                    <BgInfo style={{borderRadius: "0px", marginLeft: "-20px", marginRight: "-20px", padding: "40px 22px"}} >
                        <div>
                            <Row style={{justifyContent: "space-between", alignItems: "center"}} gutter={[20, 20]}>
                                <Col xs={24} lg={8}>
                                    <TextLight style={{fontSize: customStyles.h4, fontWeight:'600'}}>Contacts</TextLight>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <div style={{position: "relative", display: "flex", alignItems: "center", }}>
                                    <StyleTextMuted style={{ position: "absolute", top: '10px', zIndex: "1", marginLeft: "10px", }}>
                                            <Search size={15} />
                                        </StyleTextMuted>
                                        {/* <Search size={15} style={{ color: customStyles.textMuted, position: "absolute", zIndex: "1", marginLeft: "10px" }} /> */}
                                        <Input placeholder="Search for name or number..." style={{paddingLeft: "30px", outline:'none', boxShadow:'none'}}

                                        onKeyUp={(e) => searchContact(e)}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </BgInfo>
                </Col>
            </Row>

            {/* Side */}
            <ContactSide setContactList={setContactList} contactList={contactList} contacts={contacts} loading={loading} />

        </React.Fragment>
    )
}

export default ContactPage