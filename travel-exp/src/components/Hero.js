import React from "react";
import img1 from '../images/Rectangle 77.png'
import loc from '../images/Fill 219.png'

export default function Hero(props){
    return(
        <div className="hero">
            <img src = {img1} className='hero-img'/>
            <div className="content">

                <div className="info">
                    <img src = {loc} className='loc'/>
                    <p className="location">{props.item.location}</p>
                    <p className="maps"><a href={props.item.googleMapsUrl}>View on google Maps</a></p>
                </div>
                
                <h1 className="title">{props.item.title}</h1>
                <p className="date">{props.item.startDate}-{props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}