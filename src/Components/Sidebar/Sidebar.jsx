import React, { useState } from 'react'
import './sidebar.css'
import Logo from '../../assets/images/Frame.svg'

// Sidebar SVG's 
import Home_SVG from '../../assets/vuesax/linear/house.svg'
import Home_SVG_Focus from '../../assets/vuesax/bold/house.svg'

import Campaign_SVG from '../../assets/vuesax/outline/volume-high.svg'
import Campaign_SVG_Focus from '../../assets/vuesax/bold/volume-high.svg'

import Products_SVG from '../../assets/vuesax/outline/bag.svg'
import Products_SVG_Focus from '../../assets/vuesax/bold/bag.svg'

import Customers_SVG from '../../assets/vuesax/outline/profile-2user.svg'
import Customers_SVG_Focus from '../../assets/vuesax/bold/profile-2user.svg'


const Tabs = ({ image, imageAlt, text }) => {
  const [hover, changeHover] = useState(false)

  return (
    <button className='tab'>
        <img src={image} style={{height: 21, width: 21}} />
      <div>
        <p>{text}</p>
      </div>
    </button>
  )
}

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img id='main-logo' src={Logo} alt="main-logo" />

      <Tabs image={Home_SVG} text={'Home'} />
      <Tabs image={Campaign_SVG} text={'Campaign'} />
      <Tabs image={Products_SVG} text={'Products'} />
      <Tabs image={Customers_SVG} text={'Customers'} />
    </div>
  )
}

export default Sidebar
