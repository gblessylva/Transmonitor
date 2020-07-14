import React, { Component } from 'react';
import TopWidget from './common/TopWidget';
import Overview from './common/OverviewSection';
import TableSection from './common/PaymentTable'

class MainContents extends Component {
  render() {
    const widgetData = [
      { title: 'Daily Transaction Volume', amount: 2342 },
      { title: 'Daily Transaction Value', amount: 'N 4,000,000' },
      { title: 'Total Transaction Volume', amount: '452,000' },
      {title: 'Total Transaction Value', amount: 'N 4,000,000'},
    ]
    return (
      <React.Fragment>
        <div className='main'>
          <div className='top-widget'>
            {widgetData.map((data, i) => {
            const {title, amount} =data
            return (
              <TopWidget
            title={title}
            amount = {amount}
          />
            )
          })}
          </div>
        <div>
            <Overview />
        </div>
        <div>
            <TableSection />

          </div>
      </div>
      </React.Fragment>
    )
  }
}
export default MainContents