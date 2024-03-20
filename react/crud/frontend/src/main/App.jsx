import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../componets/template/Logo'
import Nav from '../componets/template/Nav'
import Home from '../componets/home/Home'
import Footer from '../componets/template/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>
   