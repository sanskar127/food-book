import React, { useState, useEffect, useRef } from 'react'
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


const Tabs = ({ image, imageAlt, text, status = false, css = 'tab' }) => {
  const [hover, setHover] = useState(status)

  return (
    <button className={css}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setHover(hover => !hover)}
      onBlur={() => setHover(false)}>
      <img src={hover ? imageAlt : image} style={{ height: 21, width: 21 }} />
      <div>
        <p>{text}</p>
      </div>
    </button>
  )
}

const Sidebar = () => {
  const myElementRef = useRef(null);

  useEffect(() => {
    if (myElementRef.current) {
      myElementRef.current.focus();
    }
  }, []);
  return (
    <div className='sidebar'>
      <img id='main-logo' src={Logo} alt="main-logo" />

      <Tabs image={Home_SVG} imageAlt={Home_SVG_Focus} text={'Home'} />
      <Tabs image={Campaign_SVG} imageAlt={Campaign_SVG_Focus} text={'Campaign'} css={'special tab'}/>
      <Tabs image={Products_SVG} imageAlt={Products_SVG_Focus} text={'Products'} />
      <Tabs image={Customers_SVG} imageAlt={Campaign_SVG_Focus} text={'Customers'} />
    </div>
  )
}

export default Sidebar
