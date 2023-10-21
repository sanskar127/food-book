import React from 'react'
import './dashboard.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Circle from '../../assets/images/add-circle.svg'

const Dashboard = () => {
  return (
    <div className='dashboard'>

      <section>
        <Navbar />
      </section>

      <section>
        <Sidebar />
      </section>

      <section className='main'>
        <div className="header">
          <div>
            <h2 className="heading">Your Campaigns</h2>
            <h4 className="subheading">Check the list of campigns you created </h4>
          </div>
          <button className="create"> <img src={Circle} alt="plus" /> Create new campaign</button>
        </div>
      </section >

    </div>
  )
}

export default Dashboard
