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


/*
import React from 'react';
import './SeasonalActivities.css';

function SeasonDetails({ city, season }) {
  const capitalizedSeason = season.charAt(0).toUpperCase() + season.slice(1);

  return (
    <div className="city-card">
      <h2 className="heading">Things To Do in {city.name} in <span className="season-name">{capitalizedSeason}</span></h2>
      <p>{city[season]}</p>
    </div>
  );
}

export default SeasonDetails;
*/

import React from 'react';
import './SeasonalActivities.css';

function SeasonDetails({ city, season }) {
  
  const capitalizedSeason = season.charAt(0).toUpperCase() + season.slice(1);

  const imageUrls = city.images[season];

  return (
    <div className="city-card">
      
      <h2 className="heading">Things to do in {city.name} in <span className="season-name">{capitalizedSeason}</span></h2>
      <div className="image-gallery">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} className="city-image" alt={city.name} />
        ))}
      </div>
      <p>{city[season]}</p>
    </div>
  );
}

export default SeasonDetails;