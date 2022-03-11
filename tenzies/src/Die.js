import React from "react";

export default function Die(props){

    const styles = {
        backgroundColor: props.isHeld? '#59E391': 'white'
    }

    return(
        <div className="die_component" style={styles} onClick={props.holdDice}>
            <h2>{props.value}</h2>
        </div>
    )
}