import React from 'react';

const DisplayTemp = ({ hourly }) => {
  if (!hourly.length) {
    return (
      <div className="openingStuff">
        Please add location
      </div>
    );
  }

  return (
   <section className = 'display'>
     <h1 className='currentTitle'>Current Forecast for: {hourly[0].current_observation.display_location.full}</h1>
     <div className='currentInfo'>
       <img src={hourly[0].hourly_forecast[0].icon_url.toString()}/>
       <p className='currentTemp'>Current Temperature: {hourly[0].hourly_forecast[0].temp.english} ℉</p>
       <p>Feels like: {hourly[0].hourly_forecast[0].feelslike.english} ℉</p>
       <p>Humidity: {hourly[0].hourly_forecast[0].humidity}%</p>
       <p>{hourly[0].current_observation.weather}</p>
       <hr></hr>
     </div>
   </section>
 );
};

export default DisplayTemp;
