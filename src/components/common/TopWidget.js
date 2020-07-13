import React from 'react';

 function TopWidget(props) {
  return(
    <div className='top-widget-container' >
      <div className='widget-details' >
        < div className='widget-title' >
          <p>{props.title}</p>
        </ div>
        <div className='widget-amount'>
              <h4> {props.amount}</h4>
        </div>
      </div>
      < div className='widget-graph' >
        {props.graph}
      </ div>
    </div>
  )
}
export default TopWidget