/*
import React, { useState } from 'react';
import cities from './Cities';
import './CityArray.css';
import CityDetails from './CityDetails';


function cityArray(city) {
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
      ))};

      {selectedCity && <CityDetails city={selectedCity} />} 
    
    </div>
  );
  }

export default cityArray; */


import React, { useState } from 'react';
import cities from './Cities';
import './CityArray.css';
import CityDetails from './CityDetails';
import { useNavigate } from 'react-router-dom';
import SeasonDetails from './SeasonalActivities'

function cityArray(city) {

  const navigate = useNavigate ();
  //const [selectedCity, setSelectedCity] = useState(null);
  //const [reset, setReset] = useState(true);


  const handleCityDetailsClick = (city) => {
   // setSelectedCity(city);
    navigate(`/city/${city.id}`);
  };

 // const handleResetCB = () => {
    //setReset(false);
 // };

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
      ))};

    {/* {selectedCity && <CityDetails city={selectedCity} handleResetCB={() => handleResetCB(false)}/>} */}
      


    </div>
  );
}

export default cityArray;
