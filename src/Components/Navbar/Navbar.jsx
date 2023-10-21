import React from 'react'
import './navbar.css'
import BuyLogo from '../../assets/images/king.svg'
import Gift from '../../assets/images/gift.svg'
import Notification from '../../assets/images/notification.svg'
import Dot from '../../assets/images/dot.svg'
import Language from '../../assets/images/language.svg'
import User from '../../assets/images/user.svg'
import Dropdown from '../../assets/images/Vector.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="items">
        <span className="trial">Free trial ends in 2 days</span>

        <button className='buy-plan'>
          <img src={BuyLogo} alt='buy' /> Buy Plan
        </button>

        <button className="misc">
          <img src={Gift} alt="gift" />
          <img src={Dot} alt="" className="dot" />
        </button>

        <button className="misc">
          <img src={Notification} alt="noti" />
          <img src={Dot} alt="" className="dot" />
        </button>

        <div className="user">
          <img src={User} alt="user" />
          <span>Mukund cake shop</span>
          <img src={Dropdown} alt="arow" />
        </div>

        <button className="misc">
          <img src={Language} alt="noti" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
