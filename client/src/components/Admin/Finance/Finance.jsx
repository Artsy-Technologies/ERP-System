import React from 'react'
import AllExpenses from './components/upperPanel/AllExpenses'
import SchoolBalance from './components/upperPanel/SchoolBalance'
import CalenderThings from './components/upperPanel/CalenderThings'
import TransactionTable from './components/bottomPanel/TransactionTable'
import ProfitChart from './components/bottomPanel/ProfitGraph'

const Finance = () => {
  return (
    <div>
      <div style={{height:"60%" , padding:'.5rem' }} className='d-flex gap-2  ' >
       <AllExpenses/>
       <SchoolBalance/>
       <CalenderThings/>
      </div>
      <div style={{height:"60%" , padding:'.5rem' }} className='d-flex gap-2  ' >
      <TransactionTable />
      <ProfitChart />
      </div>
    </div>
  )
}

export default Finance
