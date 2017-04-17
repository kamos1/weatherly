import React from 'react';

const DisplayTemp = ({ stuff }) => {
  if (!stuff.length) {
    return (
      <div className="openingStuff">
        Please add location
      </div>
    );
  }

  return (
   <section>
     <h1 className='currentTitle'>Current Forecast for: {stuff[0].current_observation.display_location.full}</h1>
     <div className='currentInfo'>
       <img src={stuff[0].hourly_forecast[0].icon_url.toString()}/>
       <p className='currentTemp'>Current Temperature: {stuff[0].hourly_forecast[0].temp.english} ℉</p>
       <p>Feels like: {stuff[0].hourly_forecast[0].feelslike.english} ℉</p>
       <p>Humidity: {stuff[0].hourly_forecast[0].humidity}%</p>
       <p>{stuff[0].current_observation.weather}</p>
       <hr></hr>
     </div>
   </section>
 );
};

export default DisplayTemp;
