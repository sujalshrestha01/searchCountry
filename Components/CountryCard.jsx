import React from 'react'

export default function CountryCard({name,population,region,capital,img}) {

  return (
    <a className='countryCard' href={`/country?name=${name}`}  >
        <img src={img} className='flags' alt="" />
        <p>{name}</p>
        <p>Population: <span>{population}</span> </p>
        <p>Region: <span>{region}</span> </p>
        <p>Capital: <span>{capital}</span> </p>


        
    </a>
  )
}
