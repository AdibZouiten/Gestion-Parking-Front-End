import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import Search from '../components/Search/Search'

function Home() {
    return (
        <div>
            <Navbar/>
            <Landing/>
            <Search/>
        </div>
    )
}

export default Home