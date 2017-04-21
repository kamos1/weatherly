import React from 'react';

const DayItem = ({ date, icon, hiTemp, lowTemp }) => {
  return (
    <section className='tenDay' >
      <table className='dayItemTable'>
        <tbody>
          <tr>
            <td className='day'>{date}</td>
            <td><img src={icon} /></td>
            <td>High Temp: {hiTemp} ℉</td>
            <td>Low Temp: {lowTemp} ℉</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default DayItem;
