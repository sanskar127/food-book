import React, { useState } from 'react'
import './dashboard.css'
import Circle from '../../assets/images/add-circle.svg'
import Search from '../../assets/images/search-normal.svg'
import Switch from '../../Components/Switch';
import Campaign from '../../assets/backend/campaign.json'

const DropdownMenu = ({ label, list }) => {
  const [selectedOption, setSelectedOption] = useState(list[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='dropdown'>
      <label>{label}:</label>
      <select value={selectedOption} onChange={handleOptionChange}>
        {list.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const DropdownMenuAlt = ({ list }) => {
  const [selectedOption, setSelectedOption] = useState(list[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='dropdown'>
      <select value={selectedOption} onChange={handleOptionChange}>
        {list.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="header">
        <div>
          <h2 className="heading">Your Campaigns</h2>
          <h4 className="subheading">Check the list of campigns you created </h4>
        </div>
        <button className="create"> <img src={Circle} alt="plus" /> Create new campaign</button>
      </div>

      <div className="body">
        <div className="top">

          <div className="search">
            <img src={Search} alt="search" style={{ width: 24, height: 24, paddingRight: '8px' }} />
            <input type="text" placeholder='Search for the campaign' />
          </div>

          <div className="options">
            <DropdownMenu label={'Platform'} list={['All Platforms', 'Facebook', 'Google', 'Youtube']} />
            <DropdownMenu label={'Status'} list={['All Status', 'Live Now', 'Paused', 'Exhausted']} />
            <DropdownMenuAlt list={['Last 30 days', 'Last Week', 'Last Year', 'Last 2 days']} />
          </div>
        </div>
        <div className="table">
          <table>
            <div className="thead">
              <tr>
                <th><input type="checkbox" name="ck" id="" /></th>
                <th>On/Off</th>
                <th>Campaign</th>
                <th>Date Range</th>
                <th>Clicks</th>
                <th>Budget</th>
                <th>Location</th>
                <th>Platform</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </div>
            <td>
              {/* <Switch/> */}
            </td>
            <tr>
              <td><input type="checkbox" name="" id="" /></td>
              <td><Switch toggle={Campaign[0].switch}/></td>
              <td>
                <div>
                  <img src={Campaign[0].campaign.thumbnail} alt="" />
                  <h3>{Campaign[0].campaign.title}</h3>
                  <h4>{Campaign[0].campaign.date}</h4>
                </div>
              </td>
              <td>{Campaign[0].range}</td>
              <td>{Campaign[0].clicks}</td>
              <td>{Campaign[0].budget}</td>
              <td>{Campaign[0].location}</td>
              <td> <img src={Campaign[0].platform} /></td>
              <td>{Campaign[0].status}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
