import React from 'react'
import Logo from "../../assets/header/printer.png"

import './Header.css'

function Header() {
    return (
        <div className="header-container">
            <div className="logo-wrapper">
                <div className="logo"><img src={Logo} alt="logo"></img></div>
                <div className="header-text">Click Click Print</div>
            </div>
        </div>
    )
}

export default Header
