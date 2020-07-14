import React from 'react';

function Table(props) {
  return (
      <div  className='table-items'>
        <div >
          <div className='type-cycle'>VW</div>
            {props.itemName}
          </div>
          <div>$ {props.price}</div>
          <div>{props.transactionID}</div>
        <div>12:00</div>
        <div> <button className={`small-cycle ${props.status}`}> {props.status}</button></div>
        <div>&#9660;</div>
    </div>
      )
}

export default Table