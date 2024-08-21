import React, { useEffect, useState } from 'react'

export default function CountryDetail() {
  const countryName= new URLSearchParams(document.location.search).get('name');
  const [countryData,setCountryData]=useState({})

  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res)=>res.json())
    .then(([data])=>{
      console.log(data)
      setCountryData(
        {
          img:data.flags.svg,
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subRegion:data.subregion,
          capital:data.capital,
          tld:data.tld[0],
          currencies:Object.values(data.currencies)[0].name,
          languages:Object.values(data.languages).join(", "),
          borderCountries: countryData.borders
        }
      )
    })

  },[])
  console.log(countryData.borderCountries)


  return  countryData===null ? ('loading') : (<div className='countryDetail'>
      <img src={countryData.img} alt="" />
      <div>
      <h2> {countryData.name} </h2>
      <p>Native name: <span>{countryData.nativeName}</span></p>
      <p>Popultion: <span>{countryData.population}</span></p>
      <p>Region: <span>{countryData.region}</span></p>
      <p>Sub Region: <span>{countryData.subRegion}</span></p>
      <p>Capital: <span>{countryData.capital}</span></p>
      <p>Top level Domain: <span>{countryData.tld}</span></p>
      <p>currencies: <span>{countryData.currencies}</span></p>
      <p>Language: <span>{countryData.languages}</span></p>
      <p>Border countreis: <span>{countryData.borderCountries}</span></p>
      </div>
    </div>) 
  
}
