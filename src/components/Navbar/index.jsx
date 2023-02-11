import React from 'react'
import logo from "../../assests/Logo.png"
import "./index.css"
<img src={logo} className="logo"></img>
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary container nav">
                <div class="container-fluid">
                    <img src={logo} className="logo"></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                               <h2 className='h2'>sylani welfare</h2>
                            </li>
                          
                        </ul>
                        <form class="d-flex" role="search">
                            <button class="btn btn-success" type="submit">LogIn</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

