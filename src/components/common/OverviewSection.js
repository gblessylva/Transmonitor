import React from 'react';
import Statistics from './Statistics';
import Area from './Area';

function Overview() {
const data = [
  {
    title: 'Orders',
    dataSmall: { name: 'Pending Orders', value: 20 },
    dataBig: { name: 'Reconciled Orders', value: 80 },
    total: { name: 'Total Orders', value: 100 }
  },
  {
    title: 'Payments',
    dataSmall: {
      name: 'Un-Reconciled Payments',
      value: 20
    },
    dataBig: {
      name: 'Reconciled Payments',
      value: 80
    },
    total: {
      name: 'Total Payments',
      value: 100
    }
  }
    ]
  return (

     < div className='overview-container' >
      <div className='overview-graph'>
        <Area />
      </div>
      <div className='overview-bar'>
      {data.map((key, index) => {
        const { title, dataSmall, dataBig, total } = key
        return (

          <Statistics
            title={title}
            dataBig={dataBig.name}
            dataSmall={dataSmall.name}
            total={total.name}
            smallValue={dataSmall.value}
            bigValue={dataBig.value}
            totalValue ={total.value}
          />
        )
      })}
  </div>
        </ div>
  )
}
export default Overview