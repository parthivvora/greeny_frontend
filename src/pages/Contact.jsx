import React, { useState } from "react";
import { imageConstant } from "../global/imageConstant";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import makeApiRequest from "../global/apiCall";
import { apiKeys, apiTypes } from "../global/apiKeys";

function Contact() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const getContactInfo = (i) => {
    setContact({ ...contact, [i.target.name]: i.target.value });
  };
  const handleSubmitContact = (e) => {
    e.preventDefault();
    makeApiRequest(apiTypes.POST, apiKeys.addContactData, contact, null, null)
      .then((response) => {
        alert(response.data.message);
        setContact({ name: "", email: "", message: "" })
      })
      .catch((error) => {
        console.log("🚀 ~ handleSubmitContact ~ error:", error)
        alert(error.response.data.message);
      });
  };
  return (
    <div>
      <Navbar />
      <section
        className="inner-section single-banner"
        style={{
          background: `url(${imageConstant.SINGLE_BANNER})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h2>contact us</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section contact-part">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="contact-card">
                <i className="fa-solid fa-location-dot"></i>
                <h4>head office</h4>
                <p>1Hd- 50, 010 Avenue, NY 90001 United States</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact-card active">
                <i className="fa-solid fa-phone"></i>
                <h4>phone number</h4>
                <p>
                  <a href="#">
                    009-215-5596 <span>(toll free)</span>
                  </a>
                  <a href="#">009-215-5595</a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact-card">
                <i className="fa-solid fa-envelope"></i>
                <h4>Support mail</h4>
                <p>
                  <a href="#">contact@example.com</a>
                  <a href="#">info@example.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586583016!2d72.73989514617271!3d21.159180203817595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710759712109!5m2!1sen!2sin"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  aria-hidden="false"
                  tabIndex={0}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <form
                className="contact-form"
                method="post"
                onSubmit={handleSubmitContact}
              >
                <h4>Drop Your Thoughts</h4>
                <div className="form-group">
                  <div className="form-input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={contact.name}
                      onChange={getContactInfo}
                    />
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-input-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={contact.email}
                      onChange={getContactInfo}
                    />
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-input-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message"
                      name="message"
                      value={contact.message}
                      onChange={getContactInfo}
                    />
                    <i className="fa-solid fa-paragraph"></i>
                  </div>
                </div>
                <button type="submit" className="form-btn-group">
                  <i className="fas fa-envelope" />
                  <span>send message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
