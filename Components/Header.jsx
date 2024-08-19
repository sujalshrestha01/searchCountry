import React from "react";
import './style.css'


export default function Header() {
  return (
    
    <div className="header max-width  ">
      <h2>Where in the world?</h2>
      <div  className="theme-changer ">
      <i className="fa-regular fa-moon"></i>
      <p>Dark Mode</p>
      </div>
    </div>
   
  );
}
