import React from 'react';

const Hourly = ({ hourly }) => {
  if (!hourly.length) {
    return (
      <div className='empty'>
      </div>
    );
  }
  return (
    <section className='hourlyMain'>
      <h1 className="hourlyTitle">7-Hour Forecast</h1>
      <div className='hourlyWrapper'>
        { hourly[0].hourly_forecast.slice(0, 7).map((item, index) => {
          return (
            <section className='hourlyForecast' key={index}>
              <div>{item.FCTTIME.civil}</div>
              <img src={item.icon_url}/>
        <p>{item.temp.english} ℉</p>
        <p>{item.condition}</p>
        <hr></hr>
      </section>

    );
    })}
    </div>
  </section>
  );
};

export default Hourly;
