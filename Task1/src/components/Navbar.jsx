import React from 'react'
import { Route,Routes,Link } from 'react-router-dom';
import Home from '../pages/Home';
import Aboutus from '../pages/Aboutus';
import cd from '../cat-data';
import Category from '../pages/Category';
import Detail from '../pages/Detail';
function Navbar() {
    return (
      <>
       <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About us</Link>
        </li>
      {cd.map((a)=>
      <li className='nav-item'><Link to={`/cat/${a}`} className='text-dark mx-3 nav-link'>{a}</Link></li>
      )}
      {/*to="cat/{a}" lekhda chai quotation vitra ko jati sabai string data vanera lintho*/}
      {/* a jati chai array ko yeuta component ho..one at atime which is passed as arrow function parameter */}
      </ul>
      
    </div>
  </div>
</nav>
{/* '/''ma click garda'home' vanni element khulos */}
<Routes>
  <Route path='/' element={<Home/>} /> 
  <Route path='/about' element={<Aboutus/>} /> 
  <Route path='/cat/:cid' element={<Category/>} /> 
  {/* :cid le chai paxadi ko dynamic xa vanera bujako..like a vaiable */}
  <Route path='/details/:did' element={<Detail/>} />

</Routes>
</>
    )
}

export default Navbar;