import React from 'react'
import logo from '../assets/logo.jpg' //image tannako lagi
import Home from '../pages/Home'
import { Link, Route,Routes } from 'react-router-dom'
import Category from '../Category'
function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={logo} height="100" alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cat/Business">Business</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/cat/Science'>Science</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/cat/:cid/' element={<Category/>} />
</Routes>
    </>
  )
}

export default Navbar