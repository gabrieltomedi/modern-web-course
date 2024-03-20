import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
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
        <Main icon="fa fa-home" title="Início" 
            subtitle="Segundo projeto do capítulo de React" />
        <Footer />
    </div>
   