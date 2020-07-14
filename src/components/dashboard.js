import React, { Component } from 'react';
import Sidebar from './Sidebar'
import MainContents from './MainContents'
import TopNav from './common/TopNav'

class Dashboard extends Component{
  render() {
    return (
      <div>
      <TopNav />
      <div className= 'container'>
        
        <Sidebar />
        <MainContents />
       </div>
      </div>
    )
  }
}
export default Dashboard