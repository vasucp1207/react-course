import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./data";

export default function App(){

  const cards = data.map((item)=>{
    return(
      <Hero
        item = {item}
      />
    )
  })

  return(
    <div className="app">
      <Navbar/>
      {cards}
      {cards}
      {cards}
    </div>
  )
}
