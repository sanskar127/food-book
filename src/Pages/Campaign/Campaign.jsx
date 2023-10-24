import React from 'react'
import './campaign.css'
import Steps from '../../Components/Steps'
import Checkbox from '../../Components/Checkbox'

const Campaign = () => {
    return (
        <div className='campaign-main'>
            <div className="header">
                <div>
                    <h2 className="heading">Your Ad Campaign</h2>
                    <h4 className="subheading">Launch your ad in just 4 easy steps</h4>
                </div>
                <Steps />
            </div>
            <div className="cbody">
                <Checkbox/>
            </div>
        </div>
    )
}

export default Campaign
