import React, { useState } from 'react'
import Header from './Components/Header'
import './Components/style.css'
import { Outlet } from 'react-router-dom'





export default function App() {




  return (
    <div>
      <Header/>
      <Outlet/>
      
    </div>
  )
}
