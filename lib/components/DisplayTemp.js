import React from 'react';

const DisplayTemp = ({ stuff }) => {
  if (!stuff.length) {
    return (
      <div>
        Please add location
      </div>
    );
  }

  return (
   <div>
     Current Forecast
     <p>{stuff[0].hourly_forecast[0].temp.english}</p>
     <img src={stuff[0].hourly_forecast[0].icon_url.toString()}/>
   </div>
 );
};

export default DisplayTemp;
