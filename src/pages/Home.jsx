import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import Search from '../components/Search/Search'


function Home() {
    return (
        <div>
            <Landing />
            <Search />
        </div>
    )
}

export default Home