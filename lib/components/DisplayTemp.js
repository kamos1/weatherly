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
     <h1 className='current'>Current Forecast</h1>
     <div className='currentInfo'>
       <p>{stuff[0].hourly_forecast[0].temp.english}</p>
       <img src={stuff[0].hourly_forecast[0].icon_url.toString()}/>
     </div>
   </section>
 );
};

export default DisplayTemp;
