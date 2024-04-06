import React from 'react'
import ReactPlayer from 'react-player'
import Breadcrumb from '../../../Common/Breadcrumb';
import { Card, Row } from 'antd';
import usecustomStyles from '../../../Common/customStyles';

const customStyles = usecustomStyles();

const Video = () => {

    document.title = "Video" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Plugins" pageTitle="Video" />

            {/* video */}
            <Row>
                <Card title="React Player" style={{ marginBottom: customStyles.margin }}>
                    <div>
                        <ReactPlayer url='https://www.youtube.com/watch?v=wcbxlzsEyp0' />
                    </div>
                </Card>
            </Row>
        </React.Fragment>
    )
}

export default Video