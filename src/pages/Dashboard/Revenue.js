import { Button, Card, Col, Row } from 'antd'
import React from 'react'
import CountUp from 'react-countup'
import usecustomStyles from '../../Common/customStyles';
import { Column } from '@ant-design/plots';

import { styled } from 'styled-components';

const customStyles = usecustomStyles();

const StyleBorder = styled.div`
      border: 1px solid;
      padding: 12px 0px;
      border-color: ${({ theme }) => theme.token.colorBorder};
`;
const TextMuted = styled.div`
      color: ${({ theme }) => theme.token.textMute};
`;
const Revenue = () => {

  const data = [
    {
      type: 'one',
      values: [76, 100],
    },
    {
      type: 'two',
      values: [56, 108],
    },
    {
      type: 'three',
      values: [38, 129],
    },
    {
      type: 'four',
      values: [58, 155],
    },
    {
      type: 'five',
      values: [45, 120],
    },
    {
      type: 'six',
      values: [23, 99],
    },
    {
      type: 'seven',
      values: [18, 56],
    },
    {
      type: 'eight',
      values: [10, 44],
    },
    {
      type: 'nine',
      values: [22, 66],
    },
    {
      type: 'ten',
      values: [5, 37],
    },
    {
      type: 'eleven',
      values: [11, 64],
    },
    {
      type: 'twelve',
      values: [18, 34],
    },
  ];

  const StackedGroupedColumn = {
    data,
    xField: 'type',
    yField: 'values',
    isRange: true,
  };

  return (
    <React.Fragment>
      <Col xs={24} xl={16}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h4  style={{fontSize:'16px', fontWeight:'500', marginBottom:'0'}}>Revenue</h4>
            <div>
              <Button style={{ fontSize: '12px', marginRight: '6px', width:'40px', height:'30px', padding:'0' }}>
                ALL
              </Button>
              <Button size='sm' style={{ fontSize: '12px', marginRight: '6px', width:'34px', height:'30px', padding:'0' }} >
                1M
              </Button>
              <Button size='sm' style={{ fontSize: '12px', marginRight: '6px', width:'38px', height:'30px', padding:'0' }} >
                6M
              </Button>
              <Button size='sm' style={{ fontSize: '12px', marginRight: '6px', width:'40px', height:'30px', padding:'0' }}>
                1Y
              </Button>
            </div>
          </div>
          <div className="p-0 border-0 bg-light-subtle card-header">
            <Row className="g-0 text-center row">
              <Col xs={12} sm={6}>

                <StyleBorder style={{borderRight:'0'}}>
                  <h5 style={{ fontSize: customStyles.h5, marginBottom:'4px' }}>
                    <span>
                      <CountUp start={0} end={7585} duration={5} />
                    </span>
                  </h5>
                  <TextMuted>Orders</TextMuted>
                </StyleBorder>

              </Col>

              <Col xs={12} sm={6}>
                <StyleBorder style={{borderRight:'0'}}>
                  <div >
                    <h5 style={{ fontSize: customStyles.h5,  marginBottom:'4px' }}>$
                      <span>
                        <CountUp start={0} end={22.89} duration={5} decimal='.' decimals={2} />
                      </span>
                      k
                    </h5>
                    <TextMuted>Earnings</TextMuted>
                  </div>
                </StyleBorder>
              </Col>

              <Col xs={12} sm={6}>
                <StyleBorder style={{borderRight:'0'}}>
                  <h5 style={{ fontSize: customStyles.h5,  marginBottom:'4px' }}>
                    <span>
                      <CountUp start={0} end={367} duration={5} />
                    </span>
                  </h5>
                  <TextMuted>Refunds</TextMuted>
                </StyleBorder>
              </Col>

              <Col xs={12} sm={6}>
                <StyleBorder >
                  <h5 style={{ color: customStyles.colorSuccess, fontSize: customStyles.h5,  marginBottom:'4px' }}>
                    <span>
                      <CountUp start={0} end={18.92} duration={5} decimal='.' decimals={2} />
                    </span>
                    %</h5>
                  <TextMuted>Conversation Ratio</TextMuted>
                </StyleBorder>
              </Col>
            </Row>
          </div>
          <div style={{ marginTop: customStyles.margin }}>
            <div className="w-100">
              <div id="revenue-chart" dir="ltr">
                {/* chart */}
                <Column {...StackedGroupedColumn} height={293} />
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default Revenue