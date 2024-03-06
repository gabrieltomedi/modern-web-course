import React from 'react'
import ReactDOM from 'react-dom'

import Greetings from './components/Greetings'

//import { GoodMorning, GoodNight } from './components/multipleComponents'
// import Multi from './components/multipleComponents'

ReactDOM.render(
    <div>
        <Greetings type="Good Morning" name="Bia" />
    </div>
, document.getElementById('root'))