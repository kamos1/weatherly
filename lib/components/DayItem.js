import React from 'react';

const DayItem = ({ date, icon, hiTemp, lowTemp }) => {
  return (
    <section className='tenDay' >
      <p>{date}</p>
      <img src={icon} />
      <p>High Temp: {hiTemp} F</p>
      <p>Low Temp: {lowTemp} F</p>
    </section>
  )
}

export default DayItem;
