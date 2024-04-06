import { Button, Card, Col, Table, Tag } from 'antd'
import React from 'react'
import { FileText } from 'lucide-react';
import { stockReportData } from '../../Common/data';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

const StockReport = () => {

    const columns = [
        {
            title: 'Product ID',
            dataIndex: 'ProductId',
            render: (text) => {
                return <Link href="#!" >{text}</Link>
            }
        },
        {
            title: 'Product Name',
            // dataIndex: 'img',
            render: ({ productImg, productName }) => {
                return (
                    <span>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img src={productImg} alt="" style={{ borderRadius: "50%", height: "32px", width: "32px", marginRight: "10px" }} />
                            </div>
                            <div>
                                <h6 style={{ fontSize: "13px" }}>{productName}</h6>
                            </div>
                        </div>
                    </span>
                )
            }

        },
        {
            title: 'Updated Date',
            dataIndex: 'date',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
        },
        {
            title: 'Stock Status',
            dataIndex: 'status',
            render: (Text) => (
                <Tag
                    color={
                        Text === 'Low Stock'
                            ? 'warning'
                            : Text === 'In Stock'
                                ? 'success'
                                : 'red'
                    }
                    style={{ border: 'none' }}
                >
                    {Text}
                </Tag>
            ),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
    ]

    return (
        <React.Fragment>
            <Col xs={24} xl={16}>
                <Card>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: '16px' }}>
                        <h4 style={{ marginBottom: '0', fontSize: '16px', fontWeight: '500' }}>Stock Report</h4>
                        <div>
                            <Button style={{ backgroundColor: "#4ab0c1", boxShadow: 'none' }} type="primary">
                                <FileText size={13} /> Generate Report
                            </Button>
                        </div>
                    </div>

                    {/* Table */}
                    <SimpleBar style={{paddingBottom: "0px"}}>
                        <div style={{ whiteSpace: 'nowrap' }}>
                            <Table
                                columns={(columns || [])}
                                dataSource={(stockReportData || []).map((stock, index) => ({
                                    ...stock,
                                    key: index,
                                }))}
                                pagination={false}
                            />
                        </div>
                    </SimpleBar>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default StockReport