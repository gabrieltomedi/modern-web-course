import React from "react";
import { childrenWithProps } from "../utils/utils";


export default props => 
    <div>
        <li>{props.name} {props.surname}</li>
        <h2>Children</h2>
        <ul>
            { childrenWithProps(props)}
        </ul>
    </div>