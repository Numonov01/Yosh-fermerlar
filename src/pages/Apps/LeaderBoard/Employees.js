import { Card, Col, Dropdown, Space, Table, Typography } from 'antd'
import { ChevronDown, ListPlus } from 'lucide-react'
import { EyeFilled, EditFilled, DeleteFilled } from '@ant-design/icons'
import React from 'react'

// image
import avatar1 from "../../../assets/images/users/avatar-1.jpg"
import avatar3 from "../../../assets/images/users/avatar-3.jpg"
import avatar8 from "../../../assets/images/users/avatar-8.jpg"
import avatar9 from "../../../assets/images/users/avatar-9.jpg"
import avatar10 from "../../../assets/images/users/avatar-10.jpg"
import usecustomStyles from '../../../Common/customStyles'
import styled from 'styled-components';
const customStyles = usecustomStyles();
const BgPurple = styled.div`
      background-color: ${({ theme }) => theme.token.colorPurpleBg};
`;
const { Text } = Typography;

const Employees = () => {

    const item = [
        { label: 'Download Report', key: 1 },
        { label: 'Export', key: 2 },
        { label: 'Import', key: 3 },
    ];

    // table

    const employeesTableData = [
        { id: 1, employeesId: "#4", img: avatar1, name: "Edward Diana", designation: "Founder", totalWorkingTime: "12h 52m", accuracy: "452", aesthetic: "231", totalPoint: "5104", chartData: [5, 12, 30, 7, 25, 15] },
        { id: 2, employeesId: "#5", img: avatar3, name: "Melvin J. Oxford", designation: "Product Manager", totalWorkingTime: "10h 23m", accuracy: "652", aesthetic: "345", totalPoint: "4163", chartData: [22, 7, 18, 7, 17, 8] },
        { id: 3, employeesId: "#6", img: avatar8, name: "Marvin J. Veras", designation: "CEO", totalWorkingTime: "4h 12m", accuracy: "632", aesthetic: "412", totalPoint: "2361", chartData: [25, 32, 12, 25, 17, 25] },
        { id: 4, employeesId: "#7", img: avatar9, name: "Henry S. Carter", designation: "Developer", totalWorkingTime: "21h 41m", accuracy: "235", aesthetic: "124", totalPoint: "2341", chartData: [23, 25, 12, 23, 17, 5] },
        { id: 5, employeesId: "#8", img: avatar10, name: "Branded T-Shirts", designation: "Designer", totalWorkingTime: "32h 52m", accuracy: "632", aesthetic: "423", totalPoint: "3265", chartData: [23, 25, 12, 23, 17, 5] }
    ]

    // dropdown

    const items1 = [
        { label: <span><EyeFilled /> View</span>, key: 1 },
        { label: <span><EditFilled /> Edit</span>, key: 2 },
        { label: <span><DeleteFilled /> Delete</span>, key: 3 }
    ]

    const columns = [
        {
            dataIndex: 'employeesId',
        },
        {
            dataIndex: 'customerName',
        },
        {
            render: ({ img, name }) => {
                return (
                    <span>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img src={img} alt="" style={{ borderRadius: "50%", height: "32px", width: "32px", marginRight: "10px" }} />
                            </div>
                            <div>
                                <h6 style={{ fontSize: "13px" }}>{name}</h6>
                            </div>
                        </div>
                    </span>
                )
            }

        },
        {
            dataIndex: 'designation',
        },
        {
            render: ({ totalWorkingTime }) => {
                return (
                    <div>
                        <h6 style={{ fontSize: customStyles.h6 }}> {totalWorkingTime}</h6>
                        <Text type="secondary" style={{ fontSize: "13px" }}>Total Working Time</Text>
                    </div>
                )
            }
        },
        {
            dataIndex: 'accuracy',
        },
        {
            dataIndex: 'aesthetic',
        },
        {
            dataIndex: 'totalPoint',
        },
        {
            render: () => {
                return (
                    <Dropdown
                        menu={{ items: items1, }}
                        trigger={['click']}
                    >
                        <Space>
                            <BgPurple style={{ height: "30px", width: "30px", borderRadius: "5px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ListPlus style={{ padding: "4px", fontSize: '12px', color: customStyles.colorSecondary, }} />
                            </BgPurple>
                        </Space>
                    </Dropdown>
                )
            }
        }
    ]

    return (
        <React.Fragment>
            <Col xs={24} xl={18}>
                <Card>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h3>Employees</h3>
                        <div>
                            <Dropdown
                                menu={{ items: item, }}
                                trigger={['click']}
                            >
                                <a href='/#' onClick={(e) => e.preventDefault()} style={{ color: customStyles.colorText }}>
                                    <Space>
                                        <span style={{ color: customStyles.textMuted }}>Report<ChevronDown size={15} /></span>
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }} className='employeeTable'>
                        <Table
                            columns={(columns || [])}
                            dataSource={employeesTableData.map(item => ({ ...item, key: item.id }))}
                            pagination={false}
                        />
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default Employees