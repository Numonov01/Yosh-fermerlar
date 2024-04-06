import { Col, Row, Breadcrumb as BreadcrumbItem, theme } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = ({mainTitle, pageTitle}) => {

    const { token } = theme.useToken();

  return (
    <React.Fragment>
        <Row align="middle" style={{ margin: '18px 0',color: token.colorText }}>
            <Col xs={24} md={12}>
                <h5 className='ant-font-size-16 ant-mb-0' style={{fontSize:'16px', fontWeight:'500'}}>{pageTitle}</h5>
            </Col>
            <Col xs={24} md={12}>
                 <BreadcrumbItem
                    items={[
                    {
                        title: mainTitle
                    },
                    {
                        title: <Link href="/#" style={{color: token.colorText}}>{pageTitle}</Link>
                    }
                    ]}
                />
            </Col>
        </Row>
    </React.Fragment>
  )
}

export default Breadcrumb;
