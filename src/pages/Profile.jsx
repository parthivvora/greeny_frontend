import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { imageConstant } from "../global/imageConstant";
import makeApiRequest from "../global/apiCall";
import { apiKeys, apiTypes } from "../global/apiKeys";

function Profile() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    addressType: "",
  });
  const [userImage, setUserImage] = useState(null);

  const getUserProfile = () => {
    makeApiRequest(apiTypes.GET, apiKeys.getUserProfile, null, null, null)
      .then((response) => {
        setUserInfo(response.data.userData);
        setUserImage(response.data.userData.userImage);
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Profile.jsx:15 ~ getUserProfile ~ error:",
          error
        );
        alert(error.response.data.message);
      });
  };

  function editUserInfo(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }
  const handleEditUserInfo = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userProfile", userImage);
    formData.append("userInfo", JSON.stringify(userInfo));
    makeApiRequest(apiTypes.PUT, apiKeys.editUserProfile, formData, null, null)
      .then((response) => {
        ref1.current.click();
        ref2.current.click();
        ref3.current.click();
        alert(response.data.message);
        getUserProfile();
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Profile.jsx:34 ~ handleEditUserInfo ~ error:",
          error
        );
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <section
        className="inner-section single-banner"
        style={{
          background: `url(${imageConstant.SINGLE_BANNER})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>my profile</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              profile
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section profile-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>Your Profile</h4>
                  <button data-bs-toggle="modal" data-bs-target="#profile-edit">
                    edit profile
                  </button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="profile-image">
                        <a>
                          <img src={`${userImage}`} alt={userImage} />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group">
                        <label className="form-label">name</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={userInfo.name}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          className="form-control"
                          type="email"
                          defaultValue={userInfo.email}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="profile-btn">
                        <a href="/change-password">change pass.</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>contact number</h4>
                  <button data-bs-toggle="modal" data-bs-target="#contact-add">
                    edit contact
                  </button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact active">
                        <h6>primary</h6>
                        <p>{userInfo.contact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>delivery address</h4>
                  <button data-bs-toggle="modal" data-bs-target="#address-add">
                    edit address
                  </button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address active">
                        <h6>
                          {userInfo.addressType ? userInfo.addressType : ""}{" "}
                        </h6>
                        <p>{userInfo.address ? userInfo.address : ""}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="contact-add" ref={ref1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="fa-solid fa-xmark" />
            </button>
            <form
              className="modal-form"
              method="post"
              onSubmit={handleEditUserInfo}
            >
              <div className="form-title">
                <h3>add new contact</h3>
              </div>
              <div className="form-group">
                <label className="form-label">number</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your number"
                  name="contact"
                  defaultValue={userInfo.contact}
                  onChange={editUserInfo}
                />
              </div>
              <button className="form-btn" type="submit">
                save contact info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="address-add" ref={ref2}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="fa-solid fa-xmark" />
            </button>
            <form
              className="modal-form"
              method="post"
              onSubmit={handleEditUserInfo}
            >
              <div className="form-title">
                <h3>add new address</h3>
              </div>
              <div className="form-group">
                <label className="form-label">title</label>
                <select
                  className="form-select"
                  name="addressType"
                  onChange={editUserInfo}
                >
                  <option disabled selected>
                    choose title
                  </option>
                  <option value="home">home</option>
                  <option value="office">office</option>
                  <option value="Bussiness">Bussiness</option>
                  <option value="academy">academy</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">address</label>
                <textarea
                  className="form-control"
                  placeholder="Enter your address"
                  name="address"
                  defaultValue={userInfo.address}
                  onChange={editUserInfo}
                />
              </div>
              <button className="form-btn" type="submit">
                save address info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="profile-edit" ref={ref3}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="fa-solid fa-xmark" />
            </button>
            <form
              className="modal-form"
              method="post"
              onSubmit={handleEditUserInfo}
            >
              <div className="form-title">
                <h3>edit profile info</h3>
              </div>
              <div className="form-group">
                <label className="form-label">profile image</label>
                <input
                  className="form-control"
                  type="file"
                  name="userImage"
                  onChange={(e) => setUserImage(e.target.files[0])}
                />
              </div>
              <div className="form-group">
                <label className="form-label">name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  defaultValue={userInfo.name}
                  onChange={editUserInfo}
                />
              </div>
              <div className="form-group">
                <label className="form-label">email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  defaultValue={userInfo.email}
                  onChange={editUserInfo}
                />
              </div>
              <button className="form-btn" type="submit">
                save profile info
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
