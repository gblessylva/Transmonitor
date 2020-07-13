import React from 'react';
import { FiBell } from 'react-icons/fi'

function Sidebar() {
  return (
    < div className='sidebar' >
      <button>Generate Invoice</button>
      <div>
         <div className='sidebar-section'>
             <h4>Main</h4>
           <ul>
            <li className='active'> Overview</li>
          </ul>
          </div>
        < div className = 'sidebar-section' >
          <ul>
            <h4>Payments</h4>
            <li><FiBell /> All Payments</li>
            <li> <FiBell />Reconciled Payments</li>
            <li><FiBell /> Un-Reconciled Payments</li>
            <li> <FiBell />Manual Settlements</li>
          </ul>
        </div>
        < div className = 'sidebar-section' >
          <ul>
            <h4>Orders</h4>
            <li> <FiBell /> All Orders</li>
            <li> <FiBell /> Pending Orders</li>
            <li><FiBell /> Reconciled Orders</li>
          </ul>
        </div>
        < div className = 'sidebar-section' >
          <ul>
            <h4> <FiBell />Merchant's Profile</h4>
          </ul>
        </div>
     </div>
      </ div>
  )

}
export default Sidebar