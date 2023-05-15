/*
import React from 'react';

function SeasonDetails({ city, season }) {

  return (
    <div className="city-card">
      <h2>{city.name}</h2>
  
      <p>Winter: {city.winter}</p>
      <p>Summer: {city.summer}</p>
      <p>Spring: {city.spring}</p>
      <p>Autumn: {city.autumn}</p>
    </div>
  );
}

export default SeasonDetails; */

import React from 'react';

function SeasonDetails({ city, season }) {
  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <p>{season.charAt(0).toUpperCase() + season.slice(1)}: {city[season]}</p>
    </div>
  );
}

export default SeasonDetails;