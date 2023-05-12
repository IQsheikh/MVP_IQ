import React from 'react';

function cityDetails({ city }) {

  return (
    <div className="city-details-container">
      <h2>{city.name}</h2>
      <p>Province: {city.province}</p>
      <p>Language: {city.language}</p>
      <p>Population: {city.population}</p>
      <p>Winter: {city.winter}</p>
      <p>Summer: {city.summer}</p>
      <p>Spring: {city.spring}</p>
      <p>Autumn: {city.autumn}</p>
    </div>
  );
}

export default cityDetails;