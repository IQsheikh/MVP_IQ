import React from 'react'
import cities from './Cities.js'
import './CityArray.css'

function cityArray() {

  return (

    <div className= "city-container">
      {cities.map(city => (
        <div>
          <ul>
            <div className= "city-card" key={city.id}>
          <h2>{city.name}</h2>
          <div className= "city-details">
          {/*<p>Population of {city.name} is: {city.population}</p>*/}
          <p>Train Access: {city.trainAccess ? `Yes, ${city.trainAccess}` : 'No'}</p>
          </div>
          <img src = {city.url} className= 'city-image'/>
          
          <button>More Details</button>
          </div>
          </ul>
        </div>
      ))}
    </div>
  );
};


export default cityArray;