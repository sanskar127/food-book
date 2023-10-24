import React, { useState } from 'react'


const Steps = () => {
    

    return (
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
            {/* <button onClick={handleClick} className='continue'>Continue</button> */}
        </div>
    )
}

export default Steps
