import React from 'react';

function BottomNav() {
  return (
      <div className='bottom-nav' >
          <div className='nav-p'>
            <p>Showing 1 to 10 of 500 entries</p>
          </div>
          <div className='nav-buttons'>
            <button>Previous</button>
            <button className='active'>1</button>
            <button >2</button>
        <button>Next</button>
          </div>
      </div>
    )
}
export default BottomNav