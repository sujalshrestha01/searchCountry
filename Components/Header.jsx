import React, { useState } from "react";
import './style.css'
import { jsxs } from "react/jsx-runtime";
import { json } from "react-router-dom";


export default function Header() {
  const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDark')))
  
  if(isDark){
    document.body.classList.add('dark')
  }
  else{
    document.body.classList.remove('dark')
  }
  
  
  function darkMode(){
    setIsDark(!isDark)
    
  }
  return (
    
    <div className="header max-width  ">
      <h2>Where in the world?</h2>
      <div  className="theme-changer " onClick={darkMode}>
      <i className={`fa-regular fa-${isDark?"sun":"moon"}`} ></i>
      <p>{isDark?"Light mode":"Dark mode"}</p>
      </div>
    </div>
   
  );
}
