import React, { useState } from 'react'

export default function Filter({setFilter}) {
  function changeEvent(e){
    setFilter(e.target.value)
  }
  
  return (
    <div className='filter'>
        <select className='filterByRegion' name="region" id="" onChange={changeEvent}>
            <option value="filter" hidden>filter by region</option>
            <option value="">All Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
        </select>
        
    </div>
  )
}
