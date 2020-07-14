import React from 'react';
import { IoIosSearch } from 'react-icons/io'


function TableSection() {

  return (
    <div className='table-section-container'>
      <header>
        <h3>Payments</h3>
        <div className='header-details'>
          <p>
            Showing <span>20 </span> out of 500 Payments
            </p>
        <div className='search-form'>
        <div>
          <button type='submit'><IoIosSearch /></button>
        </div>
        < div >
          <input type='text' placeholder='Seach...' />
        </div>
      </div>
  <div class="select-box">
  <div class="select-box__current" tabindex="1">
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked"/>
      <p class="select-box__input-text">All</p>
    </div>
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="1" value="2" name="Ben" checked="checked"/>
      <p class="select-box__input-text">Reconciled</p>
    </div>
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="2" value="3" name="Ben" checked="checked"/>
      <p class="select-box__input-text">Unr-Reconciled</p>
    </div>
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="3" value="4" name="Ben" checked="checked"/>
      <p class="select-box__input-text">Settled</p>
    </div>
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="4" value="5" name="Ben" checked="checked"/>
      <p class="select-box__input-text">Unsettled</p>
    </div><img class="select-box__icon" src="https://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>
  </div>
  <ul class="select-box__list">
    <li>
      <label class="select-box__option" for="0" aria-hidden='true'>All</label>
    </li>
    <li>
      <label class="select-box__option" for="1" aria-hidden="true">Reconciled</label>
    </li>
    <li>
      <label class="select-box__option" for="2" aria-hidden="true">Un-Reconciled</label>
    </li>
    <li>
      <label class="select-box__option" for="3" aria-hidden="true">Settled</label>
    </li>
    <li>
      <label class="select-box__option" for="4" aria-hidden="true">Unsettled</label>
    </li>
  </ul>
</div>
</div>
 </header>
 <div className='table-main'>
   
 </div>
    </div>
  )

}
export default TableSection