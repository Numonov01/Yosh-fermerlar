import React from 'react';
import { Col, Row } from 'antd';

//Breadcrumb
// import Breadcrumb from '../../Common/Breadcrumb';
import usecustomStyles from '../../Common/customStyles';
import Widget from './Widget';
import MoreSale from './MoreSale';
import RecentOrder from './RecentOrder';
import BestSellingProduct from './BestSellingProduct';
import StockReport from './StockReport';
import TopRetailShop from './TopRetailShop';
import RecentChat from './RecentChat';
import Revenue from './Revenue';
import Salebycategory from './Salebycategory';

const customStyles = usecustomStyles();
// const { Text } = Typography;

const Dashboard = () => {
  document.title = "Dashboard" + process.env.REACT_APP_PAGE_TITLE;

  return (
    <>
      {/* <Breadcrumb mainTitle="Lizant" pageTitle="Dashboard" /> */}

      <div>
        <Row gutter={[24, 24]}>
            <Col xs={24} xxl={19}>
              <div>
                <Row gutter={[24, 24]} style={{ marginTop: customStyles.margin }}>
                  <Widget />
                  <Revenue />
                </Row>

                <Row gutter={[16, 16]}>
                  <MoreSale />
                </Row>

                <Row gutter={[16, 16]} style={{ marginTop: customStyles.margin }}>
                  <RecentOrder />
                </Row>

                <Row gutter={[24, 16]} style={{ marginTop: customStyles.margin }}>
                  <BestSellingProduct />
                </Row>

                <Row gutter={[24]} style={{ marginTop: customStyles.margin }}>
                  <Salebycategory />
                  <StockReport />
                </Row>

                <Row style={{ marginTop: customStyles.margin }}>
                  <TopRetailShop />
                </Row>

              </div>
            </Col>
            <RecentChat />
          </Row>

    </div >
    </>
  )
}

export default Dashboard;
