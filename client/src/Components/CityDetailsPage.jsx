import React from 'react';
import SeasonDetails from './SeasonalActivities';

function CityDetailsPage({ city, season }) {
  return (
    <div>
      <h2>{city.name}</h2>
      <p>Province: {city.province}</p>
      <p>Language: {city.language}</p>
      <p>Population: {city.population}</p>
      <SeasonDetails city={city} season={season} />
    </div>
  );
}

export default CityDetailsPage;
