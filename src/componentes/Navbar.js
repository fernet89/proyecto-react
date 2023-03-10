import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/inicio'>inicio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to='/productos'>productos</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contacto'>contacto</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/ubicacion'>ubiacion</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
