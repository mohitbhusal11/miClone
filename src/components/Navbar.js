import React from 'react'
import "../styles/nav.css"
// import {logo} from "../data/data.json"
import { Link } from 'react-router-dom'

const logo = "https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"

function Navbar() {
  return (
    <div className='nav'>
        <div className='logo'>
            <Link to="/">
                <img id="logoImage" src={logo} alt="Not" />
            </Link>
            </div>
            <Link className='navlinks' to="/miphones">Mi Phones</Link>
            <Link className='navlinks' to="/redmiphones">Redmi Phones</Link>
            <Link className='navlinks' to="/tv">TV</Link>
            <Link className='navlinks' to="/laptops">Fitness & Lifestyle</Link>
            <Link className='navlinks' to="/home">Home</Link>
            <Link className='navlinks' to="/audio">Radio</Link>
            <Link className='navlinks' to="/accessories">Accessories</Link>

            <div className="searchbox">
                <input type="text" name='search' placeholder='Search Products' />
            </div>
    </div>
  )
}

export default Navbar