import React from "react";
import Son from "./Son"

export default props => 
    <div>
        <li>{props.name} {props.surname}</li>
        <h2>Children</h2>
        <ul>
            <Son name="Anita" surname={props.surname} />
            <Son {...props} /> {/* spread*/}
            <Son {...props} name="Carla "/>
            
        </ul>
    </div>