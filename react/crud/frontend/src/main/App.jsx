import './App.css'
import React from 'react'

import Logo from '../componets/template/Logo'
import Nav from '../componets/template/Nav'
import Main from '../componets/template/Main'
import Footer from '../componets/template/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>
   