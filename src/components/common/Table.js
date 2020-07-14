import React from 'react';

function Table(props) {
  return (
      <tr>
        <td>
          <div className='type-cycle'>VW</div>
            {props.itemName}
          </td>
          <td>$ {props.price}</td>
          <td>{props.transactionID}</td>
        <td>12:00</td>
        <td> <button className={`small-cycle ${props.status}`}> {props.status}</button></td>
        <td>&#9660;</td>
    </tr>
      )
}

export default Table