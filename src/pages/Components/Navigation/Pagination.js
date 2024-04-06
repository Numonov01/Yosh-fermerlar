import React, { useState } from 'react';
import { Card, Col, Pagination, Row, Typography } from 'antd';

//Breadcrumbs
import Breadcrumb from '../../../Common/Breadcrumb';
import usecustomStyles from '../../../Common/customStyles';

const { Text, Link } = Typography;

const customStyles = usecustomStyles();

//Changer pagination
const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
};

//Jumper
const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
};

//Mini size
const showTotal = (total) => `Total ${total} items`;

//Prev and next
const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
        return <Link>Previous</Link>;
    }
    if (type === 'next') {
        return <Link>Next</Link>;
    }
    return originalElement;
};

const UiPagination = () => {
    // page title
    document.title = "Pagination" + process.env.REACT_APP_PAGE_TITLE;

    //Controlled
    const [current, setCurrent] = useState(3);
    const onChangeControlled = (page) => {
        console.log(page);
        setCurrent(page);
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Navigation" pageTitle="Pagination" />

            <Row gutter={[20]}>
                <Col span={24} className="gutter-row">
                    <Card title="Basic" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Basic pagination.</Text></p>
                        <Pagination defaultCurrent={1} total={50} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Changer" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Change <Text type="secondary" code>pageSize</Text>.</Text></p>
                        <Pagination
                            showSizeChanger
                            onShowSizeChange={onShowSizeChange}
                            defaultCurrent={3}
                            total={500}
                        />
                        <br />
                        <Pagination
                            showSizeChanger
                            onShowSizeChange={onShowSizeChange}
                            defaultCurrent={3}
                            total={500}
                            disabled
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="More" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">More pages.</Text></p>
                        <Pagination defaultCurrent={6} total={500} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Jumper" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Jump to a page directly.</Text></p>
                        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                        <br />
                        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Mini Size" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Mini size pagination.</Text></p>
                        <Pagination size="small" total={50} style={{ marginBottom: customStyles.marginXS }} />
                        <Pagination size="small" total={50} showSizeChanger showQuickJumper style={{ marginBottom: customStyles.marginXS }} />
                        <Pagination size="small" total={50} showTotal={showTotal} style={{ marginBottom: customStyles.marginXS }} />
                        <Pagination
                            size="small"
                            total={50}
                            disabled
                            showTotal={showTotal}
                            showSizeChanger
                            showQuickJumper
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Simple Mode" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Simple mode.</Text></p>
                        <Pagination simple defaultCurrent={2} total={50} />
                        <br />
                        <Pagination disabled simple defaultCurrent={2} total={50} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Controlled" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Controlled page number.</Text></p>
                        <Pagination defaultCurrent={current} onChange={onChangeControlled} total={50} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Total Number" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">You can show the total number of data by setting <Text type="secondary" code>showTotal</Text>.</Text></p>
                        <Pagination
                            total={85}
                            showTotal={(total) => `Total ${total} items`}
                            defaultPageSize={20}
                            defaultCurrent={1}
                        />
                        <br />
                        <Pagination
                            total={85}
                            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                            defaultPageSize={20}
                            defaultCurrent={1}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Show All" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Show all configured prop.</Text></p>
                        <Pagination
                            total={85}
                            showSizeChanger
                            showQuickJumper
                            showTotal={(total) => `Total ${total} items`}
                        />
                    </Card>{/* end card */}
                </Col>{/* end col */}
                <Col span={24} className="gutter-row">
                    <Card title="Prev and Next" style={{ marginBottom: customStyles.margin }}>
                        <p style={{ marginBottom: customStyles.marginXS }}><Text type="secondary">Use text link for prev and next button.</Text></p>
                        <Pagination total={500} itemRender={itemRender} />
                    </Card>{/* end card */}
                </Col>{/* end col */}
            </Row>{/* end row */}

        </>
    )
}

export default UiPagination
