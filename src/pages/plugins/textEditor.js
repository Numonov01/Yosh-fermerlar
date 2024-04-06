import React, { useState } from 'react';
import { Card, Col, Row, Typography } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//Breadcrumbs
import Breadcrumb from '../../Common/Breadcrumb';
import usecustomStyles from '../../Common/customStyles';

const { Text } = Typography;

const customStyles = usecustomStyles();

const PluginTextEditor = () => {
    // page title
    document.title = "Text Editor" + process.env.REACT_APP_PAGE_TITLE;

    const [value, setValue] = useState('');

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Plugins" pageTitle="Text Editor" />

            <Row gutter={[20]} style={{width: "100%"}}>
                <Col span={24} xl={12} className="gutter-row">
                    <Card title="React Quill" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">This ReactQuill pluggin is used for Text Editor.</Text></p>
                        <ReactQuill theme="snow" value={value} onChange={setValue} />
                    </Card>{/* end card */}
                </Col>
            </Row>
        </>
    )
}

export default PluginTextEditor
