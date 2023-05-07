import React from 'react'
import './Navbar.css'
import logo from './../../assets/logoipsum-245(1).svg'

function Navbar() {
    return (
        <div>
            <nav>
                <div className='container'>
                    <div className='logo'>
                        <a href='#'><img src={logo} alt="Logo" /></a>
                    </div>
                    <ul className='nav-list'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='/'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/AddForm/AddForm'>Add</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/Search'>Search</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/Display'>Display</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar