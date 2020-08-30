import React from 'react'

import './Header.css'
import logo from './logo.png'

function Header() {
    return (
        <div className="header-container">
            <div className="logo-wrapper">
                <img src={logo} alt='logo' />
            </div>
        </div>
    )
}

export default Header
