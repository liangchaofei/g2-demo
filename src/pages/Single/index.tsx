import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';
import { Canvas, Line } from '@antv/g';
import { Renderer } from '@antv/g-canvas';

const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

const DualAxisLineChart = () => {

  // 创建 Canvas2D 渲染器
//   const canvasRenderer = new Renderer();

//   // 创建画布
//   const canvas = new Canvas({
//     container: "app",
//     width: 600,
//     height: 500,
//     renderer: canvasRenderer
//   });

//   // 创建边
// const edge = new Line({
//   style: {
//     x1: 200,
//     y1: 200,
//     x2: 400,
//     y2: 200,
//     stroke: "#1890FF",
//     lineWidth: 2
//   }
// });
// canvas.appendChild(edge);
  useEffect(() => {
 

    const chart = new Chart({
      container: 'chart-container',
      theme: 'classic',
      paddingLeft: 50,
    });
    
    chart
    .line()
    .data(data)
    .encode('x', 'year')
    .encode('y', 'value');


 
  chart.render();

  }, []);

  return <div id="chart-container"></div>;
};

export default DualAxisLineChart;

