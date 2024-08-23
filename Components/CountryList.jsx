import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

import CountryListShimmer from "./CountryLIstShimmer";


export default function CountryList({ query, filter }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        
        setCountries(data);
      });
  }, []);
  let index=0
  if(!countries.length){
    return <CountryListShimmer />
  }

  return (
    <>
    
    <div className="allCountries">
      {countries
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .filter((country) => country.region.includes(filter))
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              img={country.flags.svg}
              data={country}
            />
          );
        })}
    </div>
    </>
  );
}
