import React from 'react'
// import Campaign from './temp.json'

const Temp = () => {

  return (
    <div>
        <h1>Hello World</h1>
        {/* <img src={Campaign[0].campaign.thumbnail} alt="bluberry" /> */}

        {/* {console.log(Campaign[0].campaign.thumbnail)} */}

        <div className="box">
            {/* {
                Campaign && Campaign.map(record => {
                    return (
                        <div className="boxi" key={record.id}>
                            <img src={record.icon} alt="" />

                            <br />
                            {record.name}
                        </div>
                    )
                })
            } */}
        </div>

    </div>
  )
}

export default Temp
