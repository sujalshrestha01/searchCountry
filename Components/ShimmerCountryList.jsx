import React from 'react'
import './style.css'

export default function ShimmerCountryList() {
  return (
    <div className='allCountries'>
        

        {Array.from({length:15}).map((el,index)=>{
            return ( <div key={index} className='countryCard shimmerCardAll'></div> )
        })}

    </div>
  )
}
