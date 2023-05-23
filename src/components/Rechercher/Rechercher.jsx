import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import './Rechercher.css'

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
    <div key={1}>
      <h2>Recherche de Parkings</h2>
      <div>
        <label htmlFor="maxPrice">Prix maximum :</label>
        <input
          type="text"
          id="maxPrice"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
        />
        <label>paiment par :</label>
        <select id="type" name="type" value={idType} onChange={(e) => setidType(e.target.value)}>
          {type && type.map((elem) => (
            <>
              <option value={elem.idT}>{elem.nomType}</option>
            </>
          ))}
        </select>
        <button onClick={handleSearch}>Rechercher</button>
      </div>
      <div>
        <h3>Résultats :</h3>
        <ul className='parking'>
          {parkings.map(parking => (
            <li key={parking.idPark}>
              <Link to={`/ParkingDetails/${parking.idPark}`}><span>{parking.nomPark}</span></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rechercher


// import React, { useEffect } from 'react'
// import './Rechercher.css'
// import { useState } from 'react'
// import axios from 'axios';
// import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';


// function Rechercher() {
//   const [maxPrice, setMaxPrice] = useState(0);
//   const [parkings, setParkings] = useState([]);
//   const [idType, setidType] = useState(1);
//   const [type, settype] = useState()
//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/alltypes')
//       .then(response => {
//         settype(response.data)
//       }).catch(error => {
//         console.log(error);
//       })
//   }, [])
//   const handleSearch = () => {
//     axios.get('http://127.0.0.1:8000/api/filtrerparking', {
//       params: {
//         maxPrice: maxPrice,
//         idType: idType
//       }
//     })
//       .then(response => {
//         setParkings(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };
//   return (
//     <div>
//       <div className='cont search'>
//         <form className='search-form'>
//           <div className='search-form-row'>
//             <h1>Search</h1>
//           </div>
//           <div className='search-form-row'>
//             <label>Prix Maximale</label>
//             <input type="text" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />

//           </div>
//           <div className='search-form-row'>

//             <label>paiment par :</label>
//             <select id="type" name="type" value={idType} onChange={(e) => setidType(e.target.value)}>
//               {type && type.map((elem) => (
//                 <>
//                   <option value={elem.idT}>{elem.nomType}</option>
//                 </>
//               ))}
//             </select>
//           </div>
//           <div className='search-form-row'>
//             <button className='btn-submit-search' onClick={handleSearch}>Rechercher</button>
//           </div>
//         </form>
//         <div className='search-form-row'>
//           <MDBListGroup style={{ minWidth: '22rem' }} light>
//             {parkings.map((parking) => (
//               <MDBListGroupItem
//                 key={parking.idPark}
//                 tag='a'
//                 href={`/ParkingDetails/${parking.idPark}`}
//                 action
//                 noBorders
//                 active={parking.idPark === 0}
//                 aria-current={parking.idPark === 0 ? 'true' : undefined}
//                 className='px-3'
//               >
//                 {parking.nomPark}
//               </MDBListGroupItem>
//             ))}
//           </MDBListGroup>
//         </div>

//       </div>
//     </div >
//   )
// }

// export default Rechercher;


