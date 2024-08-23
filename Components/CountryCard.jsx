import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({name,population,region,capital,img,data}) {

  return (
    <Link className='countryCard'  to={`/${name}`} state={data}  >
        <img src={img} className='flags' alt="" />
        <p>{name}</p>
        <p>Population: <span>{population}</span> </p>
        <p>Region: <span>{region}</span> </p>
        <p>Capital: <span>{capital}</span> </p>


        
    </Link>
  )
}
