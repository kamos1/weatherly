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
      10-Day Forecast
      {tenDay[0].forecast.simpleforecast.forecastday.map((day, index) => {
        return(
          <section  key={index}>
            <p>{day.date.weekday}</p>
            <p>{day.high.fahrenheit}</p>
            <p>{day.low.fahrenheit}</p>
            <img src={day.icon_url.toString()}/>
          </section>
        )
      })}

    </section>
  )
};

export default TenDay;
