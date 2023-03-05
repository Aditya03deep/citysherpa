import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
       <div className="lan-rectangle-wrapper">
                <nav className="lan-rectangle-nav">
                    <div className="nav_container">
                        
                        <div className="nav_but"><span>RECOMMENDATIONS</span></div>
                        <div className="nav_but"><span>BUDGET CALCULATOR</span></div>
                        <div className="nav_but"><span>LOGIN</span></div>
                        <div className="nav_but"><span>REGISTER</span></div>
                        
                    </div>
                </nav>
            </div> 
  )
}

export default Navbar