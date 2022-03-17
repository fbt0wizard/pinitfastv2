import React from 'react'
import './navBar.css';
import { Link } from 'react-router-dom'

export const Navbar = ({btnTxt, text, link}) => {
  return (
    <div className='form-nav'>
        <div className="nav-content">
            <p>{text}</p>
            <Link to={link}>{btnTxt}</Link>
        </div>
    </div>
  )
}
