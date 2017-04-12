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
     {stuff[0].hourly_forecast[0].temp.english}
   </div>
 );
};

export default DisplayTemp;
