import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function Website() {
    return (
        <>
            <Navbar />
            <Home tt="men's clothing"/>
            <Home tt="women's clothing"/>
            <Home tt="electronics"/>

            <Footer />
        </>
    )
}

export default Website