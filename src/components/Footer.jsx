import React, { useState } from "react";
import newsBg from "../images/newsletter.jpg";
import makeApiRequest from "../global/apiCall";
import { apiKeys, apiTypes } from "../global/apiKeys";

function Footer() {
  const [email, setEmail] = useState();

  // Subscribe by User
  const handleSubscribe = (e) => {
    e.preventDefault();
    makeApiRequest(
      apiTypes.POST,
      apiKeys.subscribeByUser,
      { email: email },
      null,
      null
    )
      .then((response) => {
        alert(response.data.message);
        setEmail("");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <div>
      <section
        className="news-part"
        style={{ backgroundImage: `url(${newsBg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-6 col-xl-7">
              <div className="news-text">
                <h2>Get 20% Discount for Subscriber</h2>
                <p>Lorem ipsum dolor consectetur adipisicing accusantium</p>
              </div>
            </div>
            <div className="col-md-7 col-lg-6 col-xl-5">
              <form
                className="news-form"
                method="post"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="subscribe-email-field"
                />
                <button type="submit">
                  <span>
                    <i className="fa-solid fa-at"></i>
                    Subscribe
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="intro-part">
        <div className="container">
          <div className="row intro-content">
            <div className="col-sm-6 col-lg-3">
              <div className="intro-wrap">
                <div className="intro-icon">
                  <i className="fas fa-truck" />
                </div>
                <div className="intro-content">
                  <h5>free home delivery</h5>
                  <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="intro-wrap">
                <div className="intro-icon">
                  <i className="fas fa-sync-alt" />
                </div>
                <div className="intro-content">
                  <h5>instant return policy</h5>
                  <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="intro-wrap">
                <div className="intro-icon">
                  <i className="fas fa-headset" />
                </div>
                <div className="intro-content">
                  <h5>quick support system</h5>
                  <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="intro-wrap">
                <div className="intro-icon">
                  <i className="fas fa-lock" />
                </div>
                <div className="intro-content">
                  <h5>secure payment way</h5>
                  <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-part">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-3">
              <div className="footer-widget">
                <a className="footer-logo" href="#">
                  <img src={require("../images/logo.png")} alt="logo" />
                </a>
                <p className="footer-desc">
                  Adipisci asperiores ipsum ipsa repellat consequatur
                  repudiandae quisquam assumenda dolor perspiciatis sit ipsum
                  dolor amet.
                </p>
                <ul className="footer-social">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="footer-widget contact">
                <h3 className="footer-title">contact us</h3>
                <ul className="footer-contact">
                  <li>
                    <i className="fa-solid fa-at" />
                    <p>
                      <span>support@example.com</span>
                      <span>carrer@example.com</span>
                    </p>
                  </li>
                  <li>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                    <p>
                      <span>+120 279 532 13</span>
                      <span>+120 279 532 14</span>
                    </p>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    <p>1Hd- 50, 010 Avenue, NY 90001 United States</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="footer-widget ps-10">
                <h3 className="footer-title">quick Links</h3>
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="/profile">My Account</a>
                    </li>
                    <li>
                      <a href="/profile">Order History</a>
                    </li>
                    <li>
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/faq">Faq</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="footer-widget">
                <h3 className="footer-title">Download App</h3>
                <p className="footer-desc">
                  Lorem ipsum dolor sit amet tenetur dignissimos ipsum eligendi
                  autem obcaecati minus ducimus totam reprehenderit
                  exercitationem!
                </p>
                <div className="footer-app">
                  <a href="#">
                    <img
                      src={require("../images/google-store.png")}
                      alt="google"
                    />
                  </a>
                  <a href="#">
                    <img src={require("../images/app-store.png")} alt="app" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom">
                <p className="footer-copytext">
                  © All Copyrights Reserved by <a href="#">Greeny store</a>
                </p>
                <div className="footer-card">
                  <a href="#">
                    <img
                      src={require("../images/payment/jpg/01.jpg")}
                      alt="payment"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={require("../images/payment/jpg/02.jpg")}
                      alt="payment"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={require("../images/payment/jpg/03.jpg")}
                      alt="payment"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={require("../images/payment/jpg/04.jpg")}
                      alt="payment"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
