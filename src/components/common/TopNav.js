import React from 'react';
import { IoIosSearch } from 'react-icons/io'
import { FiBell } from 'react-icons/fi'
import avatar from '../../static/images/avatar.png'
function TopNav() {
  return (
    <div className='top-nav' >
      <div className='logo'>
        <h2>TransMonitor</h2>
      </div>
      <div className='search-form'>
        <div>
          <button type='submit'><IoIosSearch /></button>
        </div>
        < div >
          <input type='text' placeholder='Seach...' />
        </div>
      </div>
      <div className='links'>
        <ul>
          <li> <a href='#/'>Support </a> </li>
          <li> <a href='#/'>FAQ </a> </li>
          <li className='notification'><div className='notify-count'>8</div><FiBell />   </li>
        </ul>
        <div className='profile'>
          <div className='profile-info'>
            <p className='greetings'>Hello</p>
            <h3>Oluwaleke Ojo</h3>
          </div>
          <div className='profile-avatar'>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
      </div>
    </ div>
  )

}
export default TopNav