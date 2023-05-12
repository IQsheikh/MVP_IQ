import React, { useState } from 'react';
import cities from './Cities';
import './CityArray.css';
import CityDetails from './CityDetails';

function cityArray() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityDetailsClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="city-container">
      {cities.map((city) => (
        <div className="city-card" key={city.id}>
          <h2>{city.name}</h2>
          <div className="city-details">
            <p>Train Access: {city.trainAccess ? `Yes, ${city.trainAccess}` : 'No'}</p>
          </div>
          <img src={city.url} className="city-image" alt={city.name} />
          <button onClick={() => handleCityDetailsClick(city)}>More Details</button>
        </div>
      ))}

      {selectedCity && <CityDetails city={selectedCity} />}
    </div>
  );
}

export default cityArray;