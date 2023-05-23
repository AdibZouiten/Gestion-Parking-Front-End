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
        const response = await axios.get(`http://127.0.0.1:8000/api/parkings/${idPark}`);
        setParking(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchParkingDetails();
  }, [idPark]);

  if (!parking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{parking.nomPark}</h1>
      <p>Address: {parking.ville}</p>
      <p>Nombre de Place: {parking.nbPlace}</p>
      <p>Price: {parking.prix}</p>
    </div>
  );
}

export default ParkingDetails;
