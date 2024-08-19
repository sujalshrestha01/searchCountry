import React, { useState } from 'react'
import Header from './Components/Header'
import Search from './Components/Search'

import CountryCard from './Components/CountryCard'
import CountryList from './Components/CountryList'





export default function App() {


  const [query, setQuery] = useState('')
  const [filter,setFilter]=useState('')

  return (
    <div>
      <Header/>
      <Search setQuery={setQuery} setFilter={setFilter} />
      

      <CountryList query={query} filter={filter} />
      
    </div>
  )
}
