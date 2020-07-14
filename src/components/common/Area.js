import React from 'react';
import {
  Chart,
  Area,
  Line,
  Axis,
  AreaChart,
} from 'bizcharts';

function ChartBig() {
   const data = [
    { year: '1', value: 300 },
    { year: '2', value: 210 },
    { year: '3', value: 150 },
    { year: '4', value:100 },
    { year: '5', value: 120 },
    { year: '6', value: 250 },
    { year: '5', value: 200 },
    { year: '8', value: 900 },
     { year: '9', value: 300 },
    { year: '10', value: 400 },
    { year: '11', value: 120 },
    { year: '12', value: 150 },
    { year: '13', value:100 },
    { year: '14', value: 120 },
    { year: '15', value: 210 },
    { year: '16', value: 260 },
    { year: '17', value: 310 },
     { year: '18', value: 700 },
    { year: '19', value: 210 },
    { year: '20', value: 300 },
    { year: '21', value: 350 },
    { year: '22', value:500 },
    { year: '23', value: 430 },
    { year: '24', value: 1100 },
    { year: '25', value: 900 },
    { year: '26', value: 930 },
     { year: '27', value: 700 },
    { year: '28', value: 800 },
    { year: '29', value: 460 },
    { year: '30', value: 500 },
    { year: '31', value:600 },
    { year: '02', value: 500 },
    { year: '03', value: 250 },
    { year: '04', value: 830 },
    { year: '05', value: 910 },
    { year: '06', value: 1000 },

  ];

  const scale = {
    value: {
      min: 1,
      nice: true,
      tickInterval: 10,
      tickCount: 100,
      type: "linear",

    },
    year: {
      range: [0, 1],
    },
  };

  const grid = {
    align: 'center',
    type: 'line',
    line: {
      type: 'line',
      style: {
        stroke: '#CFE8FB',
        lineWidth: 2,
      }
    },
    alternateColor: '#fff' || ['#fff', '#CFE8FB'],
  }


  return (
    <Chart scale={scale} height={200} data={data} autoFit >
      <Area
          color = "l (90) 0:rgba(2, 148, 255, 0.97)   1: rgba(255, 255, 255, 0.95)"
        position="year*value"
        shape='polygon'

      />

      <Axis
        grid={grid}
        name="year" visible={false} />
      <Axis name="value" visible={false} />
      <Line
        color = "white"
        position="year*value" />
    </Chart>
  );
}


export default ChartBig