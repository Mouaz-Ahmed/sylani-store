import React, { useState } from 'react'
import logo from "../../assests/Logo.png"
import "./index.css"
<img src={logo} className="logo"></img>
export default function Navbar() {
    const [logInToggler, setLogInToggler] = useState(false)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary container">
                <div className="container-fluid">
                    <img src={logo} className="logo"></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <h2 className='h2'>sylani welfare</h2>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            {/* <button className="btn btn-success mx-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={() => { }}>Admin LogIn</button> */}
                            <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={() => { }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/*LogIn modal */}

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{logInToggler ? "Sign In" : "Sign Up"}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {(logInToggler) ?
                            // login
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="email" className="col-form-label">Email:</label>
                                        <input className="form-control" id="email" type="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="col-form-label">Password:</label>
                                        <input className="form-control" id="password" type="password" />
                                    </div>
                                </form>
                            </div> :
                            //sign up
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="full-name" className="col-form-label">Enter Full Name:</label>
                                        <input type="text" className="form-control" id="full-name" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="contact" className="col-form-label">Contact:</label>
                                        <input type="text" className="form-control" id="contact" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="col-form-label">Email:</label>
                                        <input className="form-control" id="email" type="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="col-form-label">Password:</label>
                                        <input className="form-control" id="password" type="password" />
                                    </div>
                                </form>
                            </div>}

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {(logInToggler) ? <button type="button" className="btn btn-primary">Sign In</button> : <button type="button" className="btn btn-primary">Sign Up</button>}

                        </div>
                        <div className='modal_footer'>
                            {(logInToggler) ? <p>create new account ? <span className='click_here' onClick={() => { setLogInToggler(false) }} >Sign Up</span></p> : <p>already have an account ? <span className='click_here' onClick={() => { setLogInToggler(true) }} >Sign In</span></p>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

