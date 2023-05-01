import React from 'react'
import './Info.css'
import img from './../../assets/Thech Peeps_Business_by_Growwwkit.png'
function Info() {
    return (
        <div className='cont'>
            <div className='landing-layout'>
                <div className='landing'>
                        <h1 className='landing-title'>Welcome to our Parking Management Software</h1>
                        <p className='landing-text'>Managing a parking lot can be a challenge, but with our powerful software, it's a breeze. Our platform is designed to streamline the management of parking facilities, making it easier for you to run your business efficiently.</p>
                        <a href='#' className='button-landing'>Get started</a>
                </div>
                <div>
                    <img className='img-landing' src={img} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Info