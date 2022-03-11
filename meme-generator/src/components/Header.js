import React from "react";
import logo from '../images/Troll Face.png'

export default function Header(){
    return(
        <div className="header">
            <img src = {logo} className='header--image' />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course Project-3</h4>
        </div>
    )
}