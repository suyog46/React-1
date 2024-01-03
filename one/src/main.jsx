import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.scss'
import Nav from './nav'
import Header from './Header'
import Services from './services'
import Footer from './footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Nav/>
  <Header n="lamsal"/>
  <Services  n="suyog"/>
  <Footer/>
  </>
)