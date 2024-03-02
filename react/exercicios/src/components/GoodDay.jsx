import React, {Fragment} from "react";

export default props => [
    <h1 key="h1">Good morning {props.name}!</h1>,
    <h2 key="h2">See you soon!</h2>
]


// export default props => 
//     <Fragment>
//         <h1>Good morning {props.name}!</h1>
//         <h2>See you soon!</h2>
//     </Fragment>
