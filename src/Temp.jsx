import React from 'react'
import Campaign from './assets/backend/campaign/campaign.json'

const Temp = () => {

  return (
    <div>
        <h1>Hello World</h1>
        {/* <img src={Campaign[0].campaign.thumbnail} alt="bluberry" /> */}

        {/* {console.log(Campaign[0].campaign.thumbnail)} */}

        <div className="box">
            {
                Campaign.map(record => {
                    return (
                        <div className="boxi" key={record.id}>
                            <img src={record.campaign.thumbnail} alt="" />
                            <br />
                            {record.campaign.title}
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Temp
