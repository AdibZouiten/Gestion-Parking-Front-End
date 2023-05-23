import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ParkingDetails.css'

function ParkingDetails() {
  const [parking, setParking] = useState(null);
  const { idPark } = useParams();

  useEffect(() => {
    const fetchParkingDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/parking/${idPark}`);
        setParking(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchParkingDetails();
  }, [idPark]);

  if (!parking) {
    return <div>Chargement...</div>;
  }
  const tarifs = parking.tarifs

  return (
    <div>
      <h1>{parking.parking.nomPark}</h1>
      <p>Address: {parking.parking.ville}</p>
      <p>Nombre de Place Libre: {parking.parking.nbPlaceLibre}</p>
      <p>prix par carte :{tarifs[0].prix}</p>
      <p>prix par espece :{tarifs[1].prix}</p>
    </div>
  );
}

export default ParkingDetails;

