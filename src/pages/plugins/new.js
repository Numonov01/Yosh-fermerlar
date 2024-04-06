import React from 'react';
import { Card, Col, Row, Typography } from 'antd';

//Breadcrumbs
import Breadcrumb from '../../Common/Breadcrumb';
import usecustomStyles from '../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

const UiAutoComplete = () => {
    // page title
    document.title = "AutoComplete" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Navigation" pageTitle="AutoComplete" />

            <Row gutter={[20]}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="Basic Alerts" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">The simplest usage for short messages. There are 4 types of Alert: <Text code>success</Text>, <Text code>info</Text>, <Text code>warning</Text>, <Text code>error</Text>.</Text></p>
                    </Card>{/* end card */}
                </Col>
            </Row>

        </>
    )
}

export default UiAutoComplete
