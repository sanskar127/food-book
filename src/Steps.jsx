import React, { useState } from 'react'
import './steps.css'

const Steps = () => {
    const progressList = [0, 261, 624, 885, 1108]
    const [progress, setProgress] = useState(0)

    const handleClick = () => {
        if (progress < 4) {
            setProgress(progress + 1)
        }
    }

    return (
        <div className='main-container'>
            <div className="container">
                <div className="progress-bar">
                    <div className="progress-bar-filled" style={{ width: `${progressList[progress]}px` }}></div>
                </div>
                <button onClick={handleClick} className='continue'>Continue</button>
            </div>
        </div>
    )
}

export default Steps
