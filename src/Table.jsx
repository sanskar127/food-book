import React from 'react'
import backend from './assets/backend/campaign.json'
import Switch from './Components/Switch'

const Table = () => {
    return (
        <div>
            <table>
                {/* <div className="thead"> */}
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
                {/* </div> */}
                {backend.map(item => {
                    return (
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td><Switch toggle={item.switch} /></td>
                            <td>
                                <div>
                                    <img src={item.campaign.thumbnail} alt="" />
                                    <h3>{item.campaign.title}</h3>
                                    <h4>{item.campaign.date}</h4>
                                </div>
                            </td>
                            <td>{item.range}</td>
                            <td>{item.clicks}</td>
                            <td>{item.budget}</td>
                            <td>{item.location}</td>
                            <td> <img src={item.platform} /></td>
                            <td>{item.status}</td>
                        </tr>

                    )
                })}
            </table>
        </div>
    )
}

export default Table
