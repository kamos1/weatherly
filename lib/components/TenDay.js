import React from 'react';

const TenDay = ({ tenDay }) => {
  if (!tenDay.length) {
    return (
      <div>
      </div>
    );
  }

  return (
    <section>
      <h1 className='tenDayTitle'>10-Day Forecast</h1>
      {tenDay[0].forecast.simpleforecast.forecastday.map((day, index) => {
        return (
          <section className='tenDay' key={index}>
            <p>{day.date.weekday}</p>
            <img src={day.icon_url.toString()}/>
            <p>High Temp: {day.high.fahrenheit} F</p>
            <p>Low Temp: {day.low.fahrenheit} F</p>
          </section>
        );
      })}
    </section>
  );
};

export default TenDay;
