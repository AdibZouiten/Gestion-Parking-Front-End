import React from 'react'
import './Navbar.css'
import logo from './../../assets/logoipsum-245(1).svg'
import {  Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
                <nav className='navbar container'>
                    <div className='logo'>
                        <Link href='/'><img src={logo} alt="Logo" /></Link>
                    </div>
                    <ul className='nav-list'>
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/AddForm'>Add</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/Search'>Search</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/Display'>Display</Link>
                        </li>
                    </ul>
                </nav>
            </nav>
        </div>

    )
}

export default Navbar