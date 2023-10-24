import React, { useState } from 'react'
import Tick from '../assets/images/tick-circle.svg'
import './checkbox.css'

const Checkbox = ({ title, subtitle, img, img_alt, cState = false }) => {
  const [isChecked, setChecked] = useState(cState)

  return (
    <div className="shell">
      <div className='chip' onClick={() => setChecked(!isChecked)} style={{ borderColor: isChecked ? '#0F6EFF' : '#F3F3F3', backgroundColor: isChecked ? '#e7f0ff4d' : 'transparent' }}>
        <div className='icon'>
          <img src={isChecked ? img_alt : img} />
        </div>
        <div>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </div>
      </div>
      <img src={Tick} className='tick' alt="tick" style={{ visibility: isChecked ? 'visible' : 'hidden' }} />
    </div>
  )
}

export default Checkbox
