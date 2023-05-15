 /*
 import React from 'react';

function cityDetails({ city }) {

  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <p>Province: {city.province}</p>
      <p>Language: {city.language}</p>
      <p>Population: {city.population}</p>
      
    </div>
  );
}

export default cityDetails; */




/*

import React, { useState } from 'react';
import cities from './Cities';
//import './CityArray.css';
import SeasonDetails from './SeasonalActivities'



function cityDetails(city) {
  const [selectedSeason, setSelectedSeason] = useState(null);

  const handleSeasonDetailsClick = (city) => {
    setSelectedSeason(city);
  }

  return (
    <div className="city-container">
    
        {cities.map((city) => (
        <div className="city-card" key={city.id}>
        <h2>{city.name}</h2> 


    <button onClick={() => handleSeasonDetailsClick(city)}>Season Details</button> 
       </div>
      ))};

      {selectedSeason && <SeasonDetails city={selectedSeason} />}
    


    </div>
  );
}

export default cityDetails; */

/* 
import React, { useState } from 'react';
import SeasonDetails from './SeasonalActivities';
import cities from './Cities';

function CityDetails({ city }) {
  const [selectedSeason, setSelectedSeason] = useState(null);

  const handleSeasonDetailsClick = (city) => {
    setSelectedSeason(city);
  }

  return (
    <div className="city-card">
      {cities.map((city) => (
        <div key={city.name}>
          <h2>{city.name}</h2>
          <p>Province: {city.province}</p>
          <p>Language: {city.language}</p>
          <p>Population: {city.population}</p>
          <button onClick={() => handleSeasonDetailsClick(city)}>Season Details</button>
        </div>
      ))}
      {selectedSeason && <SeasonDetails city={selectedSeason} />}
    </div>
  );
}

export default CityDetails;

*/



/*
import React, { useState } from 'react';
import SeasonDetails from './SeasonalActivities';

function CityDetails({ city }) {
  const [selectedSeason, setSelectedSeason] = useState(null);

  const handleSeasonDetailsClick = (season) => {
    setSelectedSeason(season);
  };

  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <p>Province: {city.province}</p>
      <p>Language: {city.language}</p>
      <p>Population: {city.population}</p>
      {selectedSeason ? (
        <SeasonDetails city={city} season={selectedSeason} />
      ) : (
        <div>
          <button onClick={() => handleSeasonDetailsClick('winter')}>Winter Details</button>
          <button onClick={() => handleSeasonDetailsClick('summer')}>Summer Details</button>
          <button onClick={() => handleSeasonDetailsClick('spring')}>Spring Details</button>
          <button onClick={() => handleSeasonDetailsClick('autumn')}>Autumn Details</button>
        </div>
      )}
    </div>
  );
}

export default CityDetails;
*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SeasonDetails from './SeasonalActivities';


function CityDetails({ city }) {
  const history = useNavigate();
  const [selectedSeason, setSelectedSeason] = useState(null);

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
    navigate(`/city/${city.id}/${event.target.value}`);
  };
 
  const handlePageReset = (event) => {
    setSelectedSeason(null);
  };


  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <p>Province: {city.province}</p>
      <p>Language: {city.language}</p>
      <p>Population: {city.population}</p>
      {!selectedSeason ? (
        <div>
          <label htmlFor="season-dropdown">Select a Season:</label>
          <select id="season-dropdown" onChange={handleSeasonChange}>
            <option value="">-- Select Season --</option>
            <option value="winter">Winter</option>
            <option value="summer">Summer</option>
            <option value="spring">Spring</option>
            <option value="autumn">Autumn</option>
          </select>
        </div>
      ) : (
        <SeasonDetails city={city} season={selectedSeason} />
      )}
    </div>
  );
}

export default CityDetails;
