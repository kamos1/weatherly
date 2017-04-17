import React from 'react';

const Hourly = ({ stuff }) => {
  if (!stuff.length) {
    return (
      <div>
      </div>
    );
  }
  return (
    <section className='hourlyMain'>
      <h1 className="hourlyTitle">7-Hour Forecast</h1>
      <div className='hourlyTest'>
    { stuff[0].hourly_forecast.slice(0, 7).map((item, index) => {
      return (
      <section className='hourlyForecast' key={index}>
        <p>{item.FCTTIME.civil}</p>
        <img src={item.icon_url}/>
        <p>{item.temp.english}℉</p>
        <p>{item.condition}</p>
      </section>
    );
    })}
    </div>
  </section>
  );
};

export default Hourly;
