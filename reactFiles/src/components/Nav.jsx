import React from 'react'
import './nav.css'
import {FaWarehouse} from 'react-icons/fa'
import {TbDeviceCctv} from 'react-icons/tb'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaWarehouse/></a>
      <a href="#aicounter" onClick={() => setActiveNav('#aicounter')} className={activeNav === '#aicounter' ? 'active' : ''}><TbDeviceCctv/></a>
    </nav>
  )
}

export default Nav