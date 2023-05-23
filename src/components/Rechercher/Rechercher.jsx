import React, { useEffect } from 'react'
import './Rechercher.css'
import { useState } from 'react'
import axios from 'axios';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';


function Rechercher() {
  const [maxPrice, setMaxPrice] = useState(0);
  const [parkings, setParkings] = useState([]);

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
            {/* <ul>
              {parkings.map((parking) => (
                <li className='search-item' key={parking.idPark}>
                  <i class="fa-solid fa-circle-info"></i>
                  <Link to={`/ParkingDetails/${parking.idPark}`}>
                    
                    {parking.nomPark}
                    {console.log(parking.idPark)}
                  </Link>
                </li>
              ))}
            </ul> */}
            <MDBListGroup style={{ minWidth: '22rem' }} light>
              {parkings.map((parking) => (
                <MDBListGroupItem
                  key={parking.idPark}
                  tag='a'
                  href={`/ParkingDetails/${parking.idPark}`}
                  action
                  noBorders
                  active={parking.idPark === 0}
                  aria-current={parking.idPark === 0 ? 'true' : undefined}
                  className='px-3'
                >
                  {parking.nomPark}
                </MDBListGroupItem>
              ))}
            </MDBListGroup>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Rechercher