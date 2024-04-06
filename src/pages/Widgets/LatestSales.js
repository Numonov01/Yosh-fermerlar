import { Card, Col, Dropdown, Space, Table, Tag } from 'antd'
import React from 'react'
import { MoreOutlined } from '@ant-design/icons';
import usecustomStyles from '../../Common/customStyles';
import SimpleBar from 'simplebar-react';

const customStyles = usecustomStyles();

const items = [
  { label: "View", key: '0', },
  { label: "Edit", key: '1', },
  { label: 'Delete', key: '2', },
];

const data = [
  {
    key: '1',
    email: 'jordan.martino@lizant.com',
    price: '$1.95',
    tag: 'Paid',
  },
  {
    key: '2',
    email: 'nancy.martino@lizant.com',
    price: '$5.00',
    tag: 'Pending',
  },
  {
    key: '3',
    email: 'pieter.novitsky@lizant.com',
    price: '$2.05',
    tag: 'Paid',
  },
  {
    key: '4',
    email: 'Ashley@lizant.com',
    price: '$69.99',
    tag: 'Cancelled',
  },
  {
    key: '5',
    email: 'Heather@lizant.com',
    price: '$16.78',
    tag: 'Cancelled',
  },
  {
    key: '6',
    email: 'Jimenez@lizant.com',
    price: '$79.99',
    tag: 'Paid',
  },
  {
    key: '7',
    email: 'Daniel@lizant.com',
    price: '$87.00',
    tag: 'Pending',
  }
];

const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Tag',
    dataIndex: 'tag',
    key: 'tag',
    render: (text) => (
      <Tag
        color={
          text === 'Paid'
            ? 'success'
            : text === 'Pending'
              ? 'warning'
              : 'red'

        }
        style={{ border: 'none' }}
      >
        {text}
      </Tag>
    ),
  },
];

const LatestSales = () => {
  return (
    <React.Fragment>
      <Col xs={24} xl={8} style={{ marginBottom: customStyles.margin, width: '100%' }}>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5 style={{ fontSize: "16px", fontWeight: '500' }} >Latest Sales</h5>
            <div>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()} href="/#">
                  <Space>
                    <MoreOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <SimpleBar style={{ height: "412px" }}>
              <Table columns={columns} dataSource={data} pagination={true} bordered={false} size='small' style={{ paddingBottom: "0px" }} />
            </SimpleBar>
          </div>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default LatestSales