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
    { stuff[0].hourly_forecast.slice(0, 6).map((item, index) => {
      // console.log(stuff.hourly_forecast.slice(0, 6))
      return (
      <section key={index}>
        <p>{item.temp.english}</p>
        <p>{item.condition}</p>
        <p>{item.FCTTIME.civil}</p>
      </section>
    )

  })}
    </div>
  );
};

export default Hourly;
