import { Chart } from '@antv/g2';
import { useEffect } from 'react';

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
  // 局部放大
  chart.interaction('brushFilter', true);
  chart.render();
  // // 处理鼠标滚动事件
  function handleMouseWheel(event) {
    // 阻止默认滚动行为，以防止页面滚动
    event.preventDefault();

    // 计算缩放比例
    const zoomScale = event.deltaY > 0 ? 1.1 : 0.9;

    // 获取当前图表的数据范围
    // const currentScale = chart.get('x')
    // // console.log('currentScale', currentScale)
    // const [min, max] = currentScale;
    const  min = 1991;
    const max = 1999;

    // 计算新的数据范围
    const newMin = min + (max - min) * (1 - zoomScale) / 2;
    const newMax = max - (max - min) * (1 - zoomScale) / 2;

    // 更新图表的数据范围
    chart.scale('year', {
      min: newMin,
      max: newMax,
    });

    // 重新渲染图表
    chart.render();
  }
    // 添加滚动事件监听
    const chartContainer :any= document.getElementById('chart-container');
    chartContainer.addEventListener('mousewheel', handleMouseWheel);

  

    // 组件卸载时移除事件监听
    return () => {
      chartContainer.removeEventListener('mousewheel', handleMouseWheel);
    };
 },[])

  return (
    <>
      <div id="container"></div>
      <div id="chart-container"></div>
    </>
  );
};

export default DualAxisLineChart;

