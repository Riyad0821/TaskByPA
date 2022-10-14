import React from 'react'
import logo from '../../assets/images/logo.png'
import '../../assets/sass/_logo.scss'

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt="Prothom Alo" />
            <hr />
        </div>
    )
}
