import { Card, Col, Dropdown, Space, Table, Tag, Typography } from 'antd'
import React from 'react'
import { recentOrders } from '../../Common/data'
import { ChevronDown } from 'lucide-react'
import usecustomStyles from '../../Common/customStyles';
import { Link } from 'react-router-dom';

const { Text } = Typography;

const customStyles = usecustomStyles();

const RecentOrder = () => {

    const columns = [
        {
            title: 'Purchase ID',
            dataIndex: 'purchaseID',
            sorter: (a, b) => a.purchaseID.localeCompare(b.purchaseID),
            sortDirections: ['ascend', 'descend'],
            render: (text) => {
                return <Link href="#!" >{text}</Link>
            }
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            sorter: (a, b) => a.customerName.localeCompare(b.customerName),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Product Name',
            // dataIndex: 'img',
            sorter: (a, b) => a.productName.localeCompare(b.productName),
            sortDirections: ['ascend', 'descend'],
            render: ({ productImage, productName }) => {
                return (
                    <span>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img src={productImage} alt="" style={{ borderRadius: "50%", height: "32px", width: "32px", marginRight: "10px" }} />
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
            title: 'Amount',
            dataIndex: 'amount',
            sorter: (a, b) => a.amount.localeCompare(b.amount),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Order Date',
            dataIndex: 'orderDate',
            sorter: (a, b) => a.orderDate.localeCompare(b.orderDate),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Vendor',
            dataIndex: 'vendor',
            sorter: (a, b) => a.vendor.localeCompare(b.vendor),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (Text) => (
                <Tag
                    color={
                        Text === 'Pending'
                            ? 'warning'
                            : Text === 'Paid'
                                ? 'success'
                                : 'error'
                    }
                    style={{border : "none"}}
                >
                    {Text}
                </Tag>
            ),
        },

    ]

    const pagination = {
        pageSize: 6,  // Set the number of items per page
        total: recentOrders.length,  // Total number of items in your data source
    };

    const items = [
        { label: 'Today', key: '0' },
        { label: 'Yesterday', key: '1' },
        { label: 'Last 7 Days', key: '2' },
        { label: 'Last 30 Days', key: '3' },
        { label: 'This Month', key: '4' },
        { label: 'Last Month', key: '5' },
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows, sorter, pageSize) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows, sorter, pageSize);
        },
    };

    return (
        <React.Fragment>
            <Col xs={24}>
                <Card className='recentCard'>
                    <div style={{ display: "flex", padding:'22px', alignItems: "center", justifyContent:'space-between'}}>
                        <h4 style={{marginBottom:'0', fontSize:'16px', fontWeight:'500'}}>Recent Orders</h4>
                        <div>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <a href='/#' onClick={(e) => e.preventDefault()} style={{ color: customStyles.colorText, }}>
                                    <Space>
                                        <Text style={{ fontSize: "12px", fontWeight:'500'  }}>SORT BY: </Text><span style={{fontWeight:'400', color: customStyles.textMuted, fontSize:'12px' }}>Today<ChevronDown size={15} /></span>
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>

                    {/* Table */}
                    <div style={{overflowX:'auto', whiteSpace:'nowrap'}}>
                        <Table
                            columns={(columns || [])}
                            dataSource={(recentOrders || []).map((order, index) => ({
                                ...order,
                                key: index,
                            }))}
                            pagination={pagination}
                            rowSelection={{
                                ...rowSelection,
                            }}
                        />
                    </div>
                </Card>
            </Col>

        </React.Fragment>
    )
}

export default RecentOrder