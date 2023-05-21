import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function ParkingDetails() {
  const [parking, setParking] = useState({});
  const { idPark } = useParams();

  useEffect(() => {
    const fetchParkingDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/getParking/${idPark}`);
        setParking(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchParkingDetails();
  }, [idPark]);
  console.log(parking)
  if (!parking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{parking.nomPark}</h1>
      <p>Adresse: {parking.ville}</p>
      <p>Nombre de places: {parking.nbPLace}</p>
      <p>Nombre de places libres: {parking.nbPLaceLibre}</p>
      <p>Prix: {parking.prix}</p>
    </div>
  );
}

export default ParkingDetails;
