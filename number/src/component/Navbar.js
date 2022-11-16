import React from 'react'
import Logo from "../images/Logo.svg";
import "bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <a class="navbar-brand" href="#">
                        <img src={Logo} height="20px"></img>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link active'href="#">Home</a>
                </li>
            </ul>
            
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Ask Question Here" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
             </form>
            <div class="nav justify-content-end">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Log In</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Sign In</a>
                    </li>
                </ul>
            </div>
         </div>
    </nav>
  )
}

export default Navbar