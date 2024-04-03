import React from "react";
import Navbar from "../components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import { imageConstant } from "../global/imageConstant";

function About() {
  var aboutTestimonialOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  var teamSliderOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
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
          <h2>about our shop</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active ps-1" aria-current="page">
              about
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section about-company">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>Our Motive is to Provide Best for Those Who Deserve</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis exercitationem commodi aliquam necessitatibus vero
                  reiciendis quaerat illo est fuga ea temporibus natus
                  doloremque ipsum voluptas quod deserunt expedita reprehenderit
                  pariatur quidem quisquam, recusandae animi non! Voluptas totam
                  repudiandae rerum molestiae possimus quis numquam sapiente
                  sunt architecto quisquam Aliquam odio optio
                </p>
              </div>
              <ul className="about-list">
                <li>
                  <h3>34785</h3>
                  <h6>registered users</h6>
                </li>
                <li>
                  <h3>2623</h3>
                  <h6>per day visitors</h6>
                </li>
                <li>
                  <h3>189</h3>
                  <h6>total products</h6>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img src={require("../images/about/01.jpg")} alt="01.jpg" />
                <img src={require("../images/about/02.jpg")} alt="02.jpg" />
                <img src={require("../images/about/03.jpg")} alt="03.jpg" />
                <img src={require("../images/about/04.jpg")} alt="04.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="inner-section about-testimonial">
        <div className="container">
          <ul className="testi-slider slider-arrow">
            <Slider {...aboutTestimonialOptions}>
              <li>
                <div className="testi-content">
                  <a className="testi-img" href="#">
                    <img
                      src={require("../images/testimonial/01.jpg")}
                      alt="01.jpg"
                    />
                  </a>
                  <div className="testi-quote">
                    <i className="fa-solid fa-quote-left"></i>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      neque earum sapiente vitae obcaecati magnam doloribus
                      magni provident ab ipsam sint dolores repellat inventore
                      sequi temporibus natus.
                    </p>
                    <h4>tahmina labonno1</h4>
                    <h6>Former MD - joomtech.com</h6>
                  </div>
                </div>
              </li>
              <li>
                <div className="testi-content">
                  <a className="testi-img" href="#">
                    <img
                      src={require("../images/testimonial/02.jpg")}
                      alt="01.jpg"
                    />
                  </a>
                  <div className="testi-quote">
                    <i className="fa-solid fa-quote-left"></i>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      neque earum sapiente vitae obcaecati magnam doloribus
                      magni provident ab ipsam sint dolores repellat inventore
                      sequi temporibus natus.
                    </p>
                    <h4>tahmina labonno2</h4>
                    <h6>Former MD - joomtech.com</h6>
                  </div>
                </div>
              </li>
              <li>
                <div className="testi-content">
                  <a className="testi-img" href="#">
                    <img
                      src={require("../images/testimonial/01.jpg")}
                      alt="01.jpg"
                    />
                  </a>
                  <div className="testi-quote">
                    <i className="fa-solid fa-quote-left"></i>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      neque earum sapiente vitae obcaecati magnam doloribus
                      magni provident ab ipsam sint dolores repellat inventore
                      sequi temporibus natus.
                    </p>
                    <h4>tahmina labonno3</h4>
                    <h6>Former MD - joomtech.com</h6>
                  </div>
                </div>
              </li>
            </Slider>
          </ul>
        </div>
      </section>
      <section className="about-choose">
        <div className="container">
          <div className="row">
            <div className="col-11 col-md-9 col-lg-7 col-xl-6 mx-auto">
              <div className="section-heading">
                <h2>Why People Choose Their Daily Organic Life With Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i className="fa-solid fa-bowl-food"></i>
                </div>
                <div className="choose-text">
                  <h4>100% fresh organic food</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing tempora
                    pariatur provident animi error dignissimo cumque minus
                    facere dolores cupiditate debitis
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i className="fa-solid fa-truck"></i>
                </div>
                <div className="choose-text">
                  <h4>Delivery within one hour</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing tempora
                    pariatur provident animi error dignissimo cumque minus
                    facere dolores cupiditate debitis
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i className="fa-solid fa-rotate-left"></i>
                </div>
                <div className="choose-text">
                  <h4>quickly return policy</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing tempora
                    pariatur provident animi error dignissimo cumque minus
                    facere dolores cupiditate debitis
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <div className="choose-text">
                  <h4>instant support team</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing tempora
                    pariatur provident animi error dignissimo cumque minus
                    facere dolores cupiditate debitis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
