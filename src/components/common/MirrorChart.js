import React from 'react';
 import {Chart, Axis, Tooltip, Line, Point} from "bizcharts";

function Mirror() {
  const data ={"male": 0.5 }

  return (

<Chart height={400} data={data.male} forceFit>
  <Axis name="temperature" label={{formatter: val => `${val}°C`}} />
  <Line position="month*temperature" size={2} color={'city'} />
  <Point position="month*temperature" size={4} color={'city'} />
</Chart>
  )
}
export default Mirror