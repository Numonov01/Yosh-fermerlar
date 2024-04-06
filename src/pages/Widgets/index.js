import React from 'react'
import Breadcrumb from '../../Common/Breadcrumb';
import { Col, Row, Typography } from 'antd';
import TileBox1 from './TileBox1';
import TileBox2 from './TileBox2';
import TileBox3 from './TileBox3';
import Otherwidgets from './Otherwidgets';
import usecustomStyles from '../../Common/customStyles';
import IncomeDetails from './IncomeDetails';
import IncomeBreackDown from './IncomeBreackDown';
import LatestSales from './LatestSales';
import UpcomingActivity from './UpcomingActivity';
import ConnenctionandStream from './ConnenctionandStream';

const { Text } = Typography;

const Widgets = () => {

    document.title = "Widgets" + process.env.REACT_APP_PAGE_TITLE;

    const customStyles = usecustomStyles();

    return (
        <React.Fragment>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Pages" pageTitle="Widgets" />

            <Row>
                <Col>
                    <Text style={{marginBottom: customStyles.marginSM, display: 'block', fontSize: "16px", fontWeight:'500' }}>Tile Boxs</Text>
                </Col>
            </Row>

            {/* TileBox-1 */}

            <TileBox1 />

            {/* TileBox-2 */}

            <TileBox2 />

            {/* TileBox-3 */}

            <TileBox3 />

            {/* OtherWidgets */}

            <Row>
                <Col>
                    <Text style={{ marginBottom: customStyles.marginSM, display: 'block', fontSize: "16px", fontWeight:'500' }}>Other Widgets</Text>
                </Col>
            </Row>

            <Otherwidgets />

            {/* Income */}
            <Row gutter={[24]}>
                <IncomeDetails />

                <IncomeBreackDown />

                <LatestSales />
            </Row>

            {/* Activities */}

            <Row gutter={[16]} style={{ marginBottom: customStyles.margin }}>
                <UpcomingActivity />

                <ConnenctionandStream />
            </Row>


        </React.Fragment>
    )
}

export default Widgets