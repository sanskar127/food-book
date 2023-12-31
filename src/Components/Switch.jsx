import React, { useState } from 'react';
import './style.css'

const Switch = ({ toggle }) => {
  const [isChecked, setIsChecked] = useState(toggle);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggle-switch">
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;