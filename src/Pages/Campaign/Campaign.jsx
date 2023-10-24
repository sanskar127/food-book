import React, { useState } from 'react'
import './campaign.css'
import Checkbox from '../../Components/Checkbox'
import Step1 from '../../assets/backend/step1.json'
// ----------------
import Lamp from '../../assets/progress/lamp-charge.svg'
import Bag from '../../assets/progress/bag.svg'
import BagAlt from '../../assets/progress/bag-alt.svg'
import Appointments from '../../assets/progress/appointments.svg'
import AppointmentsAlt from '../../assets/progress/appointments-alt.svg'
import Tick from '../../assets/progress/tick-circle.svg'
import TickAlt from '../../assets/progress/tick-circle-alt.svg'

const Campaign = () => {
    const progressList = [261, 624, 885, 1108]
    const [progress, setProgress] = useState(0)
    const [badge, setBadge] = useState(1)

    const handleClick = () => {
        if (progress < 3) {
            setProgress(progress + 1)
            setBadge(badge + 1)
        }
    }

    return (
        <div className='campaign-main'>
            <div className="cheader">
                <div>
                    <h2 className="heading">Your Ad Campaign</h2>
                    <h4 className="subheading">Launch your ad in just 4 easy steps</h4>
                </div>
                <div className="container">
                    <div className="progress-bar">
                        <div className="progress-bar-filled" style={{ width: `${progressList[progress]}px` }}></div>
                        <div className="container-new">
                            <div className="caption">
                                <div className="stepper" style={{
                                    borderColor: "#FDFDFF",
                                    backgroundColor: "#F29A2E"
                                }}>
                                    <img src={Lamp} alt="" />
                                </div>
                                <h5>What you want to do</h5>
                            </div>
                            <div className="caption">
                                <div className="stepper" style={badge >= 2 ? {
                                    borderColor: "#FDFDFF",
                                    backgroundColor: "#F29A2E"
                                } : {
                                    borderColor: "#E4EAF2",
                                    backgroundColor: "#E4EAF2"
                                }} >
                                    <img src={badge >= 2 ? BagAlt : Bag} alt="" />
                                </div>
                                <h5>Choose product</h5>
                            </div>
                            <div className="caption">
                                <div className="stepper" style={badge >= 3 ? {
                                    borderColor: "#FDFDFF",
                                    backgroundColor: "#F29A2E"
                                } : {
                                    borderColor: "#E4EAF2",
                                    backgroundColor: "#E4EAF2"
                                }} >
                                    <img src={badge >= 3 ? AppointmentsAlt : Appointments} alt="" />
                                </div>
                                <h5>Campaign settings</h5>
                            </div>
                            <div className="caption">
                                <div className="stepper" style={badge > 3 ? {
                                    borderColor: "#FDFDFF",
                                    backgroundColor: "#F29A2E"
                                } : {
                                    borderColor: "#E4EAF2",
                                    backgroundColor: "#E4EAF2"
                                }} >
                                    <img src={badge > 3 ? TickAlt : Tick} alt="" />
                                </div>
                                <h5>Ready to go</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cbody">
                <div className="cap">
                    <h3>What you want to do?</h3>
                    <h5>(Step 1 of 4)</h5>
                </div>
                {Step1.map(item => {
                    return (
                        <Checkbox key={item.id} title={item.title} subtitle={item.subtitle} img={item.icon} img_alt={item['icon-alt']} cState={item.status} />
                    )
                })}
            </div>
            <button onClick={handleClick} className='continue'>Continue</button>
        </div>
    )
}

export default Campaign
