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
    <div class="container-details">
      <div class="card-parking-info">
        <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <div class="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              Address: {parking.parking.ville}
            </time>

            <a href="#">
              <h3 class="mt-0.5 text-lg text-gray-900">
              {parking.parking.nomPark}
              </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Nombre de Place Libre: <strong>{parking.parking.nbPlaceLibre}</strong>
            </p>
            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              prix par carte: <strong>{tarifs[0].prix}</strong>
            </p>
            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              prix par espece: <strong>{tarifs[1].prix}</strong>
            </p>
          </div>
        </article>
      </div>
    </div>

  );
}

export default ParkingDetails;

