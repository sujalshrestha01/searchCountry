import React from 'react'

export default function CountryCard({key,name,population,region,capital,img}) {
  return (
    <div className='countryCard' key={key}>
        <img src={img} className='flags' alt="" />
        <p>{name}</p>
        <p>Population: <span>{population}</span> </p>
        <p>Region: <span>{region}</span> </p>
        <p>Capital: <span>{capital}</span> </p>


        
    </div>
  )
}
