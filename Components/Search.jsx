import React from 'react'
import Filter from './Filter'
import CountryCard from './CountryCard'

export default function Search({setQuery,setFilter}) {
  return (
    <div className="search-filter max-width">
    <div className='search '>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input 
        onChange={(e)=> setQuery(e.target.value.toLowerCase())}
         type="text" placeholder='search for country' />
    </div>
    <Filter setFilter={setFilter}/>
    
    </div>
  )
}
