import React, { useEffect } from 'react';
import { Chart, ChartEvent } from '@antv/g2';

const DualAxisLineChart = () => {
  useEffect(() => {
    const chart = new Chart({
      container: 'chart-container',
      theme: 'classic',
      paddingLeft: 50,
    });
    
    chart
    .line()
    .data([
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ])
    .encode('x', 'year')
    .encode('y', 'value')

    
    // .interaction('brushHighlight', true)
    // .interaction('brushFilter', true);

  // 标尺
  chart.lineX().data(['1992']).style('stroke', 'blue').style('strokeWidth', 10).style('draggable', true).style('droppable', true);
 
  chart.on(`lineX:${ChartEvent.DRAG}`, (ev) => {
    console.log('linex1 pro', ev);
  });

  chart.render();
  }, []);

  return <div id="chart-container"></div>;
};

export default DualAxisLineChart;
