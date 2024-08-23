// import React from 'react'
// import './style.css'

// export default function ShimmerCountryList() {
//   return (
//     <div className='allCountries'>
        

//         {Array.from({length:15}).map((_,index)=>{
          
//             return ( <div key={index} className='countryCard shimmerCardAll'></div> )
//         })}

//     </div>
//   )
// }
import React from 'react';
import './style.css';

export default function CountryListShimmer() {
  return (
    <div className='allCountries'>
      {Array.from({ length: 15 }).map((_,index) => (
        <div  key={index} className='countryCard shimmerCardAll'></div>
      ))}
    </div>
  );
}
