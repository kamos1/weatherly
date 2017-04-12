import React from 'react';

const Hourly = ({ stuff }) => {
  if (!stuff.length) {
    return (
      <div>
      </div>
    );
  }
  return (
    <div>
      7-Hour Forecast
    { stuff[0].hourly_forecast.slice(0, 6).map((item, index) => {
      return (
      <section key={index}>
        <p>{item.temp.english}</p>
        <img src={stuff[0].hourly_forecast[0].icon_url.toString()}/>
        <p>{item.condition}</p>
        <p>{item.FCTTIME.civil}</p>
      </section>
    )

  })}
    </div>
  );
};

export default Hourly;
