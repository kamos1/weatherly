import React from 'react';

const DisplayTemp = ({ stuff }) => {
  console.log(stuff)
  if (!stuff.length) {
    return (
      <div>
        Please add location
      </div>
    )
  }
  return (
   <div>
     { stuff[0].hourly_forecast.map((item, index) => {
       let keys = Object.keys(item)
       console.log(item)
       return (
         <div key={index}>
           <section>{item[0]}</section>
         </div>
       );
     })
     }
   </div>
 );
};

export default DisplayTemp;
