import React, { useEffect } from 'react'
import './Search.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


function Search() {
    const [maxPrice, setMaxPrice] = useState(0);
    const [parkings, setParkings] = useState([]);

    // useEffect(() => {
    //   // Fetch parkings data from API
    //   fetch("http://127.0.0.1:8000/api/filtrerparking")
    //   .then(response => response.json())
    //   .then((data) => { setParkings({data})
    //   console.log(data)

    //   })
    // }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/filtrerparking', {
                    params: {
                        prix: maxPrice
                    }
                });
                setParkings(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [maxPrice]);
    //   const fetchParkings = async () => {
    //     try {
    //       const response = await fetch('http://127.0.0.1:8000/api/filtrerparking');
    //       const data = await response.json();
    //       console.log(data)
    //       setParkings(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   fetchParkings();


    const handlePriceChange = (event) => {
        setMaxPrice(event.target.value);
    };
    // const filteredParkings = parkings.filter(
    //   (parking) => parking.price <= maxPrice
    // );

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
                            {parkings.map((parking) => (
                                <li key={parking.idPark}>
                                    <Link to={`/ParkingDetails/${parking.idPark}`}>
                                        {parking.nomPark}
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