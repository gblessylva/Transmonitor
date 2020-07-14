import React from 'react';

 function Statistics(props) {
  return(
    <div className='stats-widget-container' >
      <p className="bold">{props.title}</p>
      <div className='widget-bar' >
        < div className='widget-bar-inner-big'>
        </ div>
        < div className='widget-bar-inner-small'>
        </ div>

      </div>
      <div className='legend-data'>
          <p>{props.dataSmall} : <span className='small'>   {props.smallValue}</span></p>
          <p>{props.dataBig} : <span className='big'>{props.bigValue} </span></p>
          <p>{props.total} : <span className='total'> {props.totalValue}</span></p>
        </div>
    </div>
  )
}
export default Statistics