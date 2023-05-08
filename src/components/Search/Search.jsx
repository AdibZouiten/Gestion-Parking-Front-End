import React from 'react'
import './Search.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import parkings from "../API/parkings.json"

function Search() {
    const [maxPrice, setMaxPrice] = useState(0);

  const filteredParkings = parkings.filter(
    (parking) => parking.price <= maxPrice
  );

  const handlePriceChange = (event) => {
    setMaxPrice(event.target.value);
  };
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
                                    <Link to={`/ParkingDetails/${parking.id}`}>
                                        {parking.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Search