import React from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import './style.css'

export default function App(){
  return(
    <div className = 'app'>
      <Navbar/>
      <Main/>
    </div>
  )
}