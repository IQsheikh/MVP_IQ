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



/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SeasonDetails from './SeasonalActivities';
import cities from './Cities';


function CityDetails() {
  const [city, setCity] = useState ({});
  const [selectedSeason, setSelectedSeason] = useState(null);
  let {id} = useParams();

  useEffect(() => {
    loadCityDetails();
  }, [])

  const loadCityDetails = () => {
    let cityByID = cities.filter (city => city.id === Number(id));
    setCity(cityByID[0]);
  };

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };


  return (
    <div className="city-card">
      <h2>"When will you visit {city.name}?</h2>
      
     {/*} <p>Province: {city.province}</p>
      <p>Language: {city.language}</p>
  <p>Population: {city.population}</p> */
  /*
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
          <img src={city.url} className="city-image" alt={city.name} />
        </div>
      ) : (
        <SeasonDetails city={city} season={selectedSeason} />
      )}
    </div>
  );
}

export default CityDetails;

*/


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SeasonDetails from './SeasonalActivities';
import cities from './Cities';

function CityDetails() {
  const [city, setCity] = useState({});
  const [selectedSeason, setSelectedSeason] = useState(null);
  const { id } = useParams();
  const [isFirstPage, setIsFirstPage] = useState(true);

  useEffect(() => {
    loadCityDetails();
  }, );

  const loadCityDetails = () => {
    const cityByID = cities.filter((city) => city.id === Number(id));
    setCity(cityByID[0]);
  };

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
    setIsFirstPage(false);
  };

  return (
    <div className="city-card">
      {isFirstPage && city.name && <h2>"When will you visit {city.name}?"</h2>}
      {!selectedSeason ? (
        <div>
          {isFirstPage && city.name && (
            <>
              <p>Province: {city.province}</p>
              <p>Language: {city.language}</p>
              <p>Population: {city.population}</p>
            </>
          )}
          <label htmlFor="season-dropdown">Select a Season:</label>
          <select id="season-dropdown" onChange={handleSeasonChange}>
            <option value="">-- Select Season --</option>
            <option value="winter">Winter</option>
            <option value="summer">Summer</option>
            <option value="spring">Spring</option>
            <option value="autumn">Autumn</option>
          </select>
          {isFirstPage && city.name && <img src={city.url} className="city-image" alt={city.name} />}
        </div>
      ) : (
        <SeasonDetails city={city} season={selectedSeason} />
      )}
    </div>
  );
}

export default CityDetails;
