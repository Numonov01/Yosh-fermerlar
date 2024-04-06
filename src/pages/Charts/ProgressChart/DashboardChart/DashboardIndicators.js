import { G2, Gauge } from '@ant-design/plots'
import React from 'react'
import { Card } from 'antd'
import usecustomStyles from '../../../../Common/customStyles';

const customStyles = usecustomStyles();

const DashboardIndicators = () => {

    const { registerShape, Util } = G2; 

    registerShape('point', 'custom-gauge-indicator', {
        draw(cfg, container) {
            const { indicator, defaultColor } = cfg.customInfo;
            const { pointer } = indicator;
            const group = container.addGroup(); 

            const center = this.parsePoint({
                x: 0,
                y: 0,
            }); 

            if (pointer) {
                const { startAngle, endAngle } = Util.getAngle(cfg, this.coordinate);
                const radius = this.coordinate.getRadius();
                const midAngle = (startAngle + endAngle) / 2;
                const { x: x1, y: y1 } = Util.polarToCartesian(center.x, center.y, radius / 15, midAngle + 1 / Math.PI);
                const { x: x2, y: y2 } = Util.polarToCartesian(center.x, center.y, radius / 15, midAngle - 1 / Math.PI);
                const { x, y } = Util.polarToCartesian(center.x, center.y, radius * 0.65, midAngle);
                const path = [['M', center.x, center.y], ['L', x1, y1], ['L', x, y], ['L', x2, y2], ['Z']]; // pointer

                group.addShape('path', {
                    name: 'pointer',
                    attrs: {
                        path,
                        fill: defaultColor,
                        ...pointer.style,
                    },
                });
            }

            return group;
        },
    });
    const DashboardIndicators = {
        percent: 0.78,
        range: {
            color: '#30BF78',
        },
        indicator: {
            shape: 'custom-gauge-indicator',
            pointer: {
                style: {
                    stroke: '#D0D0D0',
                    lineWidth: 1,
                    fill: '#D0D0D0',
                },
            },
        },
    };

    return (
        <React.Fragment>
            <Card
                title="Custom Dashboard Indicators"
                style={{ marginBottom: customStyles.margin }}
            >
                <Gauge {...DashboardIndicators} height={250} />
            </Card>
        </React.Fragment>
    )
}

export default DashboardIndicators