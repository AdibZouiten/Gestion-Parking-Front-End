import React, { useContext } from 'react'
import './Navbar.css'
import logo from './../../assets/logoipsum-245(1).svg'
import {  Link } from 'react-router-dom'
import { AuthContext } from '../../pages/AuthContext';

function Navbar() {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <div>
            <nav>
            {isLoggedIn && (
                <nav className='navbar container'>
                    <div className='logo'>
                        <Link href='/'><img src={logo} alt="Logo" /></Link>
                    </div>
                    <ul className='nav-list'>
                        
                        <li className='nav-item'>
                            <Link className='nav-link' to='/Ajouter'>Ajouter</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/Rechercher'>Rechercher</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/Consulter'>Consulter</Link>
                        </li>
                    </ul>
                </nav>
                )}
            </nav>
        </div>

    )
}

export default Navbar