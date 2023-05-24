
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import './Rechercher.css'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';


const Rechercher = () => {
  const [maxPrice, setMaxPrice] = useState('');
  const [parkings, setParkings] = useState([]);
  const [idType, setidType] = useState(1);
  const [type, settype] = useState()
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/alltypes')
      .then(response => {
        settype(response.data)
      }).catch(error => {
        console.log(error);
      })
  }, [])
  const handleSearch = () => {
    // Effectuer une requête API à votre backend Laravel pour récupérer les parkings
    // avec des places libres et un prix maximum
    axios.get('http://127.0.0.1:8000/api/filtrerparking', {
      params: {
        maxPrice: maxPrice,
        idType: idType
      }
    })
      .then(response => {
        setParkings(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='Rechercher bg-white' key={1}>
      <div className='Rechercher-form-row'>
        <h2>Recherche de Parkings</h2>
      </div>
      <div>
        <div className='Rechercher-form-row'>
          <label htmlFor="maxPrice">Prix maximum :</label>
          <input
            type="text"
            id="maxPrice"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
          />
        </div>
        <div className='Rechercher-form-row'>
          <label>paiment par :</label>
          <select id="type" name="type" value={idType} onChange={(e) => setidType(e.target.value)}>
            {type && type.map((elem) => (
              <>
                <option value={elem.idT}>{elem.nomType}</option>
              </>
            ))}
          </select>
        </div>
        <div className='Rechercher-form-row'>
          <button className='button-submit-con bg-black-400' onClick={handleSearch}>Rechercher</button>
        </div>
      </div>
      <div className='Rechercher-form-row'>
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
    </div>
  );
};

export default Rechercher;

