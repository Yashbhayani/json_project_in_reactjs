import React from 'react'
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
              <div className="container-fluid">
                  <a className="navbar-brand">CRUD</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to='/contact'>Contact</Link>
                        </li>
                    </ul>

                    <div className="d2-flex">
                        <Link className="nav-link" aria-current="page" to='/user/add'> <button className='btn btn-outline-light'><i class="fa fa-plus" aria-hidden="true"></i></button> </Link>
                    </div>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
