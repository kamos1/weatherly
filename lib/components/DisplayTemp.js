import React from 'react';

const DisplayTemp = ({ stuff }) => {
  console.log(stuff.length)
  if (!stuff.length) {
    return (
      <div className="openingStuff">
        Please add location
      </div>
    );
  }

  return (
   <section className="rendered">
     <h1 className='current'>Current Forecast for: {stuff[0].current_observation.display_location.full}</h1>
     <div className='currentInfo'>
       <img src={stuff[0].hourly_forecast[0].icon_url.toString()}/>
       <p className='currentTemp'>{stuff[0].hourly_forecast[0].temp.english}</p>
     </div>
   </section>
 );
};

export default DisplayTemp;
