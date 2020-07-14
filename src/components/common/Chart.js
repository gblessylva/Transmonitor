import React from 'react';
import {
  Chart,
  Area,
  Line,
  Axis,
} from 'bizcharts';

function WidgetChart() {
  const data = [
    { year: '1991', value: 150 },
    { year: '1992', value: 90 },
    { year: '1993', value: 200 },
    { year: '1994', value: 400 },
    { year: '1993', value: 250 }
  ];

  const scale = {
    value: {
      min: 1,
      nice: false,
    },
    year: {
      range: [0, 1],
    },
  };

  return (
    <Chart scale={scale} height={50} data={data} autoFit >
      <Area position="year*value" />
      <Axis name="year" visible={false} />
      <Axis name="value" visible={false} />
      <Line position="year*value" />
    </Chart>
  );
}


export default WidgetChart