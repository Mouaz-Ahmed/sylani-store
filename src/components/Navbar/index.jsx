import React, { useEffect, useState } from 'react'
import logo from "../../assests/Logo.png"
import veg2 from "../../assests/veg2.jpg"
import shan from "../../assests/shan.jpg"
import meat from "../../assests/meat.jpg"
import swal from 'sweetalert'
import "./nav.css"
import { auth, firebaseSignIn, firebaseSignUp } from '../../config/firebase.js'
import AdminNav from '../AdminNav'
import { onAuthStateChanged } from 'firebase/auth'
import GetProduct from '../GetProduct'

export default function Navbar() {
    const [logInToggler, setLogInToggler] = useState(false)
    const [modalClose, setModalClose] = useState('')
    const [adminNav, setAdminNav] = useState(false)
    const [userNav, setUserNav] = useState(false)
    // form inputs
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // calling from adminNav
    function adminAuthCheck(value) {
        setAdminNav(value);
    }

    useEffect(() => {
        // check user login or not
        onAuthStateChanged(auth, (user) => {
            if (user.uid == 'hhXkYIriMVOZ60pQWC50jpns20B3') {
                setAdminNav(true)
            } else {
                setAdminNav(false)
            }
        });
    }, []);

    async function signUpWithFirebase() {
        console.log(email)
        try {
            await firebaseSignUp(name, phone, email, password)
            setModalClose('modal')
            swal("SignUp", "SignUp successfull", "success")

        } catch (error) {
            alert('error' + error)
        }
    }

    async function signInWithFirebase() {
        try {
            await firebaseSignIn(email, password)
            console.log(auth)
            if (auth.currentUser.uid == 'hhXkYIriMVOZ60pQWC50jpns20B3') { setAdminNav(true) }
            setModalClose('modal')
            swal("Login", "Login successfull", "success")
        } catch (error) {
            alert('error', error)
        }
    }

    return (
        <div className='main_div'>
            <div className='header_div'>
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
                                <button className="btn btn-success signUp_btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={() => { }}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
            {(adminNav) ? <AdminNav adminAuthCheck={adminAuthCheck} /> : <></>}

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
                                        <input onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} className="form-control" id="email" type="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="col-form-label">Password:</label>
                                        <input onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} className="form-control" id="password" type="password" />
                                    </div>
                                </form>
                            </div> :
                            //sign up
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="full-name" className="col-form-label">Enter Full Name:</label>
                                        <input onChange={(e) => {
                                            setName(e.target.value)
                                        }} type="text" className="form-control" id="full-name" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="contact" className="col-form-label">Contact:</label>
                                        <input onChange={(e) => {
                                            setPhone(e.target.value)
                                        }} type="text" className="form-control" id="contact" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="col-form-label">Email:</label>
                                        <input onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} className="form-control" id="email" type="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="col-form-label">Password:</label>
                                        <input onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} className="form-control" id="password" type="password" />
                                    </div>
                                </form>
                            </div>}

                        <div className="modal-footer" data-bs-dismiss={modalClose}>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            {/* condition btn and signUp signIn methods */}
                            {(logInToggler) ? <button type="button" className="btn btn-primary" onClick={() => { signInWithFirebase() }}>Sign In</button> : <button type="button" className="btn btn-primary" onClick={() => { signUpWithFirebase() }}>Sign Up</button>}

                        </div>
                        <div className='modal_footer'>
                            {(logInToggler) ? <p>create new account ? <span className='click_here' onClick={() => { setLogInToggler(false) }} >Sign Up</span></p> : <p>already have an account ? <span className='click_here' onClick={() => { setLogInToggler(true) }} >Sign In</span></p>}
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='wlcm_to'>WELCOME TO</h1>
            <h1 className='sylani_welfare'>Sylani Welfare</h1>
            <h2 className='on_dis_store'>Online Discount Store</h2>
            <div id="carouselExample" className="carousel slide container slider_div">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={veg2} className="d-block w-100 slider_img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={meat} className="d-block w-100 slider_img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={shan} className="d-block w-100 slider_img" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='margin_bottom_div'></div>
            <GetProduct />
        </div>
    )
}

