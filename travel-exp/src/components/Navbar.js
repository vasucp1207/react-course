import React from "react";
import logo from '../images/Fill 213.png'

export default function Navbar(){
    return(
        <div className="navbar">
            <img src = {logo}/>
            <p>my travel journal</p>
        </div>
    )
}