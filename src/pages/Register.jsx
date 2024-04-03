import React, { useState } from 'react'
import { apiKeys, apiTypes } from '../global/apiKeys'
import makeApiRequest from '../global/apiCall'

function Register() {
    const [userInfo, setUserInfo] = useState({ name: "", contact: "", email: "", password: "" })
    const getUserRegisterInfo = (i) => {
        setUserInfo({ ...userInfo, [i.target.name]: i.target.value })
    }
    const registerSubmit = (e) => {
        e.preventDefault()
        makeApiRequest(apiTypes.POST, apiKeys.userRegister, userInfo, null, null)
            .then((response) => {
                console.log("🚀 ~ file: Register.jsx:13 ~ .then ~ response:", response)
                alert(response.data.messsage)
            })
            .catch((error) => {
                console.log("🚀 ~ file: Register.jsx:17 ~ registerSubmit ~ error:", error)
                alert(error.response.data.messsage)
            })
    }
    return (
        <section className="user-form-part">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
                        <div className="user-form-logo"><a href="index.html"><img src="images/logo.png" alt="logo" /></a></div>
                        <div className="user-form-card">
                            <div className="user-form-title">
                                <h2>Join Now!</h2>
                                <p>Setup A New Account In A Minute</p>
                            </div>
                            <div className="user-form-group">
                                <ul className="user-form-social">
                                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f" />Join with facebook</a>
                                    </li>
                                    <li><a href="#" className="twitter"><i className="fab fa-twitter" />Join with twitter</a></li>
                                    <li><a href="#" className="google"><i className="fab fa-google" />Join with google</a></li>
                                    <li><a href="#" className="instagram"><i className="fab fa-instagram" />Join with
                                        instagram</a></li>
                                </ul>
                                <div className="user-form-divider">
                                    <p>or</p>
                                </div>
                                <form className="user-form" onSubmit={registerSubmit}>
                                    <div className="form-group"><input type="text" className="form-control" placeholder="Enter your name" name='name' onChange={getUserRegisterInfo} /></div>
                                    <div className="form-group"><input type="email" className="form-control" placeholder="Enter your email" name='email' onChange={getUserRegisterInfo} /></div>
                                    <div className="form-group"><input type="password" className="form-control" placeholder="Enter your password" name='password' onChange={getUserRegisterInfo} /></div>
                                    <div className="form-group"><input type="text" className="form-control" placeholder="Enter contact number" name='contact' onChange={getUserRegisterInfo} /></div>
                                    <div className="form-check mb-3"><input className="form-check-input" type="checkbox" defaultValue id="check" /><label className="form-check-label" htmlFor="check">Accept all the <a href="#">Terms &amp; Conditions</a></label></div>
                                    <div className="form-button"><button type="submit">register</button></div>
                                </form>
                            </div>
                        </div>
                        <div className="user-form-remind">
                            <p>Already Have An Account?<a href="/login">login here</a></p>
                        </div>
                        <div className="user-form-footer">
                            <p>Greeny | © Copyright by <a href="#">Mironcoder</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Register