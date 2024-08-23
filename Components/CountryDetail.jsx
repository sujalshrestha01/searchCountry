import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ShimmerCountryDetail from "./ShimmerCountryDetail";

export default function CountryDetail() {
  const { country: countryName } = useParams();

  const [countryData, setCountryData] = useState(null);
  const [foundErr, setFoundErr] = useState(false);
  // const [loading, setLoading] = useState(true);
  const {state}=useLocation()
  

  function updataData(data){
    if (!data) {
      throw new Error("No data found");
    }

    setCountryData({
      img: data.flags.svg,
      name: data.name.common,
      nativeName: data.name.nativeName ? Object.values(data.name.nativeName)[0].common : "N/A",
      population: data.population,
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital ? data.capital[0] : "N/A",
      tld: data.tld[0],
      currencies: data.currencies ? Object.values(data.currencies)[0].name : "N/A",
      languages: data.languages ? Object.values(data.languages).join(", ") : "N/A",
      borderCountries: [],
      
    });

    if (data.borders && data.borders.length > 0) {
     
      return Promise.all(
        data.borders.map((border) =>
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => borderCountry.name.common)
        )
      ).then((borderCountries) => {
        setTimeout(() => {
          setCountryData((prev) => ({ ...prev, borderCountries }));
        });
      });
    }
  }

  useEffect(() => {
    if (!countryName) return;
    if(state){
       updataData(state)
       return
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
       updataData(data)
      })
      .catch((err) => {
        setFoundErr(true);
      // })
      // .finally(() => {
      //   setLoading(false);
      });
  }, [countryName]);

  if (foundErr) {
    return <h2>Page not found</h2>;
  }

  if ( !countryData) {
    return <ShimmerCountryDetail/>
  }

  return (
  
    <div>
      <button className="backBtn" onClick={() => history.back()}>
        ← Back
      </button>
      
      <div className="countryDetail">
        <img src={countryData.img} alt={`${countryData.name} flag`} />
        <div>
          <h2>{countryData.name}</h2>
          <p>
            Native name: <span>{countryData.nativeName}</span>
          </p>
          <p>
            Population: <span>{countryData.population}</span>
          </p>
          <p>
            Region: <span>{countryData.region}</span>
          </p>
          <p>
            Sub Region: <span>{countryData.subRegion}</span>
          </p>
          <p>
            Capital: <span>{countryData.capital}</span>
          </p>
          <p>
            Top-level Domain: <span>{countryData.tld}</span>
          </p>
          <p>
            Currencies: <span>{countryData.currencies}</span>
          </p>
          <p>
            Languages: <span>{countryData.languages}</span>
          </p>
          {countryData.borderCountries.length > 0 && (
            <div>
              Border countries:{" "}
              <div className="borderCountries" >
                {countryData.borderCountries.map((border) => (
                  <Link className="borderCountry" key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
