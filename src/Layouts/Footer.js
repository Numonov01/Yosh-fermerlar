import { Footer } from 'antd/es/layout/layout';
import React from 'react';
import { styled } from 'styled-components';
import { Row } from 'antd';
import { Link } from 'react-router-dom';
import usecustomStyles from '../Common/customStyles';
import { themecolor } from '../config';

const customStyles = usecustomStyles();

const StyleFooter = styled(Footer)`
  padding-inline: 24px;
  z-index: 9;
  color: ${customStyles.colorTextDisabled};
  margin-left: ${themecolor.components.Menu.verticalSidebarWidth}px;
  background-color: ${({ theme }) => theme.token.colorBgContainer};
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.token.colorBorder};
  
  @media screen and (max-width: 768px) {
    margin-left: 0; 
  }
`;


const FooterLayout = () => {
    return (
        <StyleFooter id='antFooterLayout'>
            <Row align="middle">
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', whiteSpace:'nowrap', zIndex:'9' }}>
                    <p style={{marginRight:'16px', marginBottom:'0'}}>2023 © Lizant.</p>
                    <p style={{marginBottom:'0'}}> Design & Develop by <Link to='https://themesbrand.com/' target='_blank'>Themesbrand</Link></p>
                </div>
            </Row>
        </StyleFooter>
    )
}

export default FooterLayout
