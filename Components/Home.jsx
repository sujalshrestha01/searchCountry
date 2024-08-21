import React from 'react'
import React, { useState } from 'react'

import Search from './Search'


import CountryList from './CountryList'

export default function Home() {
    const [query, setQuery] = useState('')
    const [filter,setFilter]=useState('')
  return (
    <>
    <Search setQuery={setQuery} setFilter={setFilter} />
      

      <CountryList query={query} filter={filter} /></>
  )
}
