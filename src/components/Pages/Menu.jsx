import React from 'react'
import "./Menu.css"
import Navbar from '../Navbar'

const Menu = () => {
  return (
    <>
     <div className="menu-image">
        <div className="menu-image-text">
          <p>MENU</p>
        </div>
     </div> 

     <div className="menu-links-container">
        <ul className="menu-links">
            <li>breakfast</li>
            <li>lunch</li>
            <li>dinner</li>
            <li>drinks</li>
        </ul>
     </div>
    </>
  )
}

export default Menu
