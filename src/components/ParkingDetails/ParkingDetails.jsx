import React, { useState, useEffect } from 'react';
import parkingsData from '../API/parkings.json';

function ParkingDetails(match) {
  const [parking, setParking] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const parking = parkingsData.find((parking) => parking.id === parseInt(match.params.id));
      setParking(parking);
    };
    fetchData();
  }, [match.params.id]);

  if (!parking) {
    return <div>Loading...</div>;
  }
  console.log(parking)
  return (
    <div>
      <h1>{parking.name}</h1>
      <p>Adresse: {parking.city}</p>
      <p>Nombre de places libres: {parking.availableSpaces}</p>
      <p>Prix: {parking.price}</p>
    </div>
  );
}

export default ParkingDetails;
