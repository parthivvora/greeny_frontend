import React, { useState } from 'react'
import makeApiRequest from '../global/apiCall'
import { apiKeys, apiTypes } from '../global/apiKeys'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })
    const getUserLoginInfo = (i) => {
        setUserInfo({ ...userInfo, [i.target.name]: i.target.value })
    }
    const loginSubmit = (e) => {
        e.preventDefault()
        makeApiRequest(apiTypes.POST, apiKeys.userLogin, userInfo, null, null)
            .then((response) => {
                alert(response.data.message)
                localStorage.setItem("userAuthToken", response.data.userData.userToken)
                localStorage.setItem("userName", response.data.userData.userName)
                navigate("/")
            })
            .catch((error) => {
                console.log("🚀 ~ file: Login.jsx:17 ~ loginSubmit ~ error:", error)
                alert(error.response.data.message)
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
                                <h2>welcome!</h2>
                                <p>Use your credentials to access</p>
                            </div>
                            <div className="user-form-group">
                                <ul className="user-form-social">
                                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f" />login with facebook</a></li>
                                    <li><a href="#" className="twitter"><i className="fab fa-twitter" />login with twitter</a></li>
                                    <li><a href="#" className="google"><i className="fab fa-google" />login with google</a></li>
                                    <li><a href="#" className="instagram"><i className="fab fa-instagram" />login with instagram</a></li>
                                </ul>
                                <div className="user-form-divider"><p>or</p></div>
                                <form className="user-form" onSubmit={loginSubmit}>
                                    <div className="form-group"><input type="email" className="form-control" placeholder="Enter your email" name='email' onChange={getUserLoginInfo} /></div>
                                    <div className="form-group"><input type="password" className="form-control" placeholder="Enter your password" name='password' onChange={getUserLoginInfo} /></div>
                                    <div className="form-check mb-3"><input className="form-check-input" type="checkbox" defaultValue id="check" /><label className="form-check-label" htmlFor="check">Remember Me</label></div>
                                    <div className="form-button">
                                        <button type="submit">login</button>
                                        <p>Forgot your password?<a href="reset-password.html">reset here</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="user-form-remind">
                            <p>Don't have any account?<a href="/register">register here</a></p>
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

export default Login