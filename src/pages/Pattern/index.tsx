import { Chart } from '@antv/g2';
import { useEffect } from 'react';
import { tmpData } from './tmp'
import './index.less'

const DualAxisLineChart = () => {
  // y轴分开
 useEffect(() => {
  const chart = new Chart({
    container: 'container',
    paddingLeft: 50,
    autoFit: true
  });
  chart.options({
    type: 'repeatMatrix',
    theme: 'classic',
    paddingLeft: 80,
    paddingBottom: 60,
    data: tmpData,
    encode: {
      y: ['LngSpd_VUT', 'LngAcl_VUT'],
      x: 'time'
    },
    children: [
      {
        type: 'line',
        encode: {
          color: (data) => {
            if (data.hasOwnProperty('LngSpd_VUT')) {
              return 'LngSpd_VUT';
            }
            if (data.hasOwnProperty('LngAcl_VUT')) {
              return 'LngAcl_VUT';
            }
          }
        },
        interactions: [{ type: 'marker-active' }, { type: 'brush' }],
        scale: {
          x: {
          },
          y: { zero: true },
          color: {
            relations: [
              ['LngSpd_VUT', 'red'],
              ['LngAcl_VUT', 'blue']
            ]
          }
        }
      }
    ]
  })
  chart.render();
 },[])

 // y轴聚合
 useEffect(( ) => {
  const chart = new Chart({
    container: 'chart-container',
    theme: 'classic',
  });
  
  chart
    .interval()
    .data({
      type: 'fetch',
      value:
        'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
    })
    .encode('x', 'letter')
    .encode('y', 'frequency')
    .axis('y', { labelFormatter: '.0%' });
  
  chart
    .axisY()
    .attr('position', 'left')
    .scale('y', {
      type: 'linear',
      independent: true,
      domain: [0, 10],
      range: [1, 0],
    })
    .style('grid', false);
  
  chart.render();
 },[])

  return (
     <>
       <h1>Y轴分开</h1>
       <div id="container" />
       <h1>Y轴聚合</h1>
       <div id="chart-container" />
     </>
  );
};

export default DualAxisLineChart;

