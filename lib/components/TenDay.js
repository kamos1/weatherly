import React from 'react';
import DayItem from './DayItem';

const TenDay = ({ tenDay }) => {
  if (!tenDay.length) {
    return (
      <div className="empty">
      </div>
    );
  }

  return (
    <section className="tenDaySection">
      <h1 className='tenDayTitle'>10-Day Forecast</h1>
      {tenDay[0].forecast.simpleforecast.forecastday.map((day, index) => {
        return (
          <section className="dayitems"key = {index}>
            <DayItem
              date = {day.date.weekday}
              icon = {day.icon_url}
              hiTemp = {day.high.fahrenheit}
              lowTemp = {day.low.fahrenheit}
            />
          </section>
        );
      })}
    </section>
  );
};

export default TenDay;
