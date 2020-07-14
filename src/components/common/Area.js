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
    { year: '1', value: 100 },
    { year: '2', value: 120 },
    { year: '3', value: 150 },
    { year: '4', value:100 },
    { year: '5', value: 120 },
    { year: '6', value: 250 },
    { year: '5', value: 200 },
    { year: '8', value: 900 },
     { year: '9', value: 100 },
    { year: '10', value: 100 },
    { year: '11', value: 120 },
    { year: '12', value: 150 },
    { year: '13', value:100 },
    { year: '14', value: 120 },
    { year: '15', value: 210 },
    { year: '16', value: 260 },
    { year: '17', value: 310 },
     { year: '18', value: 1000 },
    { year: '19', value: 100 },
    { year: '20', value: 120 },
    { year: '21', value: 150 },
    { year: '22', value:100 },
    { year: '23', value: 120 },
    { year: '24', value: 1150 },
    { year: '25', value: 200 },
    { year: '26', value: 280 },
     { year: '27', value: 100 },
    { year: '28', value: 100 },
    { year: '29', value: 120 },
    { year: '30', value: 150 },
    { year: '31', value:100 },
    { year: '02', value: 120 },
    { year: '03', value: 250 },
    { year: '04', value: 300 },
    { year: '05', value: 310 },
    { year: '06', value: 100 },

  ];

  const scale = {
    value: {
      min: 50,
      nice: true,
    },
    year: {
      range: [0, 1],
    },
  };

  return (
    <Chart scale={scale} height={160} data={data} autoFit >
      <Area position="year*value" />
      <Axis name="year" visible={false} />
      <Axis name="value" visible={false} />
      <Line position="year*value" />
    </Chart>
  );
}


export default ChartBig