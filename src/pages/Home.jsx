import React from 'react'
import './Home.css'
import img1 from './img1.png';
import {  Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            {/* <LoginPage /> */}
            
            <div className='cont'>
                <div className='landing-layout'>
                    <div className='landing'>
                        <h1 className='landing-title'>Welcome to our Parking Management Software</h1>
                        <p className='landing-text'>Managing a parking lot can be a challenge, but with our powerful software, it's a breeze. Our platform is designed to streamline the management of parking facilities, making it easier for you to run your business efficiently.</p>
                        <Link to="/LoginPage" ><a href='#' className='button-landing'>Get started</a></Link>
                    </div>
                    <div>
                        <img className='img-landing' src={img1} alt="img" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home