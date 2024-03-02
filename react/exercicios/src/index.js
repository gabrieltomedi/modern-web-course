import React from 'react'
import ReactDOM from 'react-dom'

import GoodDay from './components/GoodDay'

//import { GoodMorning, GoodNight } from './components/multipleComponents'
import Multi from './components/multipleComponents'

ReactDOM.render(
    <div>
        <Multi.GoodMorning name="Ana" />
        <Multi.GoodNight name="Eto" />
    </div>,
document.getElementById('root'))