import React from 'react'
import ReactDOM from 'react-dom'

import Father from './components/Father'
import Son from "./components/Son"

//import { GoodMorning, GoodNight } from './components/multipleComponents'
// import Multi from './components/multipleComponents'

ReactDOM.render(
    <div>
        <Father name="Gabriel" surname="Oliveira">
            <Son name="Paulo"  />
            <Son name="Sara" />
            <Son name="Luiz" surname="Oliveira" />
        </Father>
    </div>
, document.getElementById('root'))