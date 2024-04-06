import React from 'react'
import LeaderWidget from './LeaderWidget'
import Breadcrumb from '../../../Common/Breadcrumb'
import { Col, Row } from 'antd'
import LeaderBoardChart from './LeaderBoardChart'
import TopEmployees from './TopEmployees'
import Employees from './Employees'
import usecustomStyles from '../../../Common/customStyles'
import LatestNews from './LatestNews'

const customStyles = usecustomStyles();

const LeaderBoard = () => {
    
    document.title = "Leader Board" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>

            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Apps" pageTitle="LeaderBoard" />

            {/* Leader Widget */}
            <Row gutter={[24, 24]}>
                <Col xl={16}>
                    <LeaderWidget />
                    <TopEmployees />
                </Col>
                <LeaderBoardChart />
            </Row>

            <Row gutter={[24, 24]} style={{marginBottom: customStyles.margin,marginTop: customStyles.margin}}>
                <Employees />
                <LatestNews />
            </Row>

        </React.Fragment>
    )
}

export default LeaderBoard