import React from 'react';

const Hourly = ({ stuff }) => {
  if (!stuff.length) {
    return (
      <div>
      </div>
    );
  }
  return (
    <div className='hourlyTest'>
      <h1>7-Hour Forecast</h1>
    { stuff[0].hourly_forecast.slice(0, 7).map((item, index) => {
      return (
      <section className='hourlyForecast' key={index}>
        <p>{item.FCTTIME.civil}</p>
        <img src={stuff[0].hourly_forecast[0].icon_url.toString()}/>
        <p className='marginHourly'>{item.temp.english}</p>
        <p className='marginHourly'>{item.condition}</p>
      </section>
    );
    })}
    </div>
  );
};

export default Hourly;
