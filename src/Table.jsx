import React from 'react'
import backend from './assets/backend/campaign.json'
import Switch from './Components/Switch'
import Edit from './assets/images/edit-2.svg'
import Trash from './assets/images/trash.svg'

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
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
        </thead>
        <tbody>
          {backend.map(item => {
            return (
                <tr className="item" key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td><Switch toggle={item.switch} /></td>
                  <td>
                    <div className='campaign'>
                      <img src={item.campaign.thumbnail} alt="" />
                      <div className="campaign-text">
                        <h3>{item.campaign.title}</h3>
                        <h4>{item.campaign.date}</h4>
                      </div>
                    </div>
                  </td>
                  <td>{item.range}</td>
                  <td>{item.clicks}</td>
                  <td>{item.budget}</td>
                  <td>{item.location}</td>
                  <td> <img src={item.platform} /></td>
                  <td>{item.status}</td>
                  <td>
                    <span>
                        <img src={Edit} alt="edit" />
                    </span>
                    <span>
                        <img src={Trash} alt="edit" />
                    </span>
                  </td>
                </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
