import React from 'react'
import './dashboard.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <Navbar/>
    </div>
  )
}

export default Dashboard
