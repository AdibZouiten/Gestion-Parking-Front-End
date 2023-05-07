import React from 'react'
import './Search.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Search() {
    const [maxPrice, setMaxPrice] = useState(0);
    const [parkings, setParkings] = useState([]);

    useEffect(() => {
        // Fetch parkings data from API
        const fetchParkings = async () => {
            try {
                const response = await fetch('/api/parkings');
                const data = await response.json();
                setParkings(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchParkings();
    }, []);

    const handlePriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const filteredParkings = parkings.filter(
        (parking) => parking.price <= maxPrice
    );
    return (
        <div>
            <div className='cont search'>
                <form className='search-form'>
                    <div className='search-form-row'>
                        <h1>Search</h1>
                    </div>
                    <div className='search-form-row'>
                        <label>Prix Maximale</label>
                        <input type="text" value={maxPrice} onChange={handlePriceChange} />

                    </div>
                    <div className='search-form-row'>
                        <ul>
                            {filteredParkings.map((parking) => (
                                <li key={parking.id}>
                                    <Link to={`/parkings/${parking.id}`}>
                                        {parking.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='search-form-row'>
                        <a className='btn btn-submit-search' href='#'>Submit</a>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Search