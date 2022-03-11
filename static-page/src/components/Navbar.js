import React from 'react'
import logo from '../images/logo192.png'

export default function Navbar(){
    return(
        <div className = "navbar">
            <img src = {logo} className = "logo"/>
            <h2 className = "head2">ReactFacts</h2>
            <h4 className = "head3">React Course-Project 1</h4>
        </div>
    )
}