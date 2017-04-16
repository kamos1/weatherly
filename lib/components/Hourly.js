import React from 'react';

const Hourly = ({ stuff }) => {
  if (!stuff.length) {
    return (
      <div>
      </div>
    );
  }
  return (
    <section>
      <h1 className="hourlyTitle">7-Hour Forecast</h1>
      <div className='hourlyTest'>
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
  </section>
  );
};

export default Hourly;
