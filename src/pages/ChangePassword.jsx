import React, { useState } from 'react'
import makeApiRequest from '../global/apiCall'
import { apiKeys, apiTypes } from '../global/apiKeys'

function ChangePassword() {
    const [userInfo, setUserInfo] = useState({ currentPass: "", newPass: "", newPassReapet: "" })
    function editUserPassword(e) {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }
    const handleEditUserPassword = (e) => {
        e.preventDefault()
        if (userInfo.newPass == userInfo.newPassReapet) {
            const newObj = { currentPass: userInfo.currentPass, newPass: userInfo.newPass }
            makeApiRequest(apiTypes.PUT, apiKeys.changePasswordOfUserProfile, newObj, null, null)
                .then((response) => {
                    alert(response.data.message)
                    window.location.href = "/"
                })
                .catch((error) => {
                    alert(error.response.data.message)
                })
        }
        else {
            alert("Your new password and repeat password does not match...!")
        }
    }
    return (
        <section className="user-form-part">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                        <div className="user-form-logo"><a href="index.html"><img src="images/logo.png" alt="logo" /></a></div>
                        <div className="user-form-card">
                            <div className="user-form-title">
                                <h2>any issue?</h2>
                                <p>Make sure your current password is strong</p>
                            </div>
                            <form className="user-form" method='post' onSubmit={handleEditUserPassword}>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Old password" name='currentPass' onChange={editUserPassword} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Current password" name='newPass' onChange={editUserPassword} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="reapet password" name='newPassReapet' onChange={editUserPassword} />
                                </div>
                                <div className="form-button">
                                    <button type="submit">change password</button>
                                </div>
                            </form>
                        </div>
                        <div className="user-form-remind">
                            <p>Go Back To<a href="/login">login here</a></p>
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

export default ChangePassword