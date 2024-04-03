import "../styles/main.css";
import "../styles/product-details.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import makeApiRequest from "../global/apiCall";
import { apiKeys, apiTypes } from "../global/apiKeys";
import { imageConstant } from "../global/imageConstant";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const [getProduct, setGetProduct] = useState([]);

  // Get single product for user
  const getSingleProductData = () => {
    makeApiRequest(
      apiTypes.GET,
      `${apiKeys.getAllSingleProductData}/${productId}`,
      null,
      null,
      null
    )
      .then((response) => {
        setGetProduct(response?.data?.productData[0]);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getSingleProductData();
  }, []);

  return (
    <div>
      <Navbar />
      <section
        className="single-banner inner-section"
        style={{
          background: `url(${imageConstant.SINGLE_BANNER})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h2>product details</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="details-gallery">
                <ul className="details-preview">
                  <li>
                    <img
                      src={getProduct?.productImage}
                      alt={getProduct?.productImage}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="details-content">
                <h3 className="details-name">
                  <a href="#">{getProduct?.productName}</a>
                </h3>
                <div className="details-meta">
                  <p>
                    SKU:<span>{getProduct?._id}</span>
                  </p>
                  <p>BRAND: {getProduct?.brandDetail?.brandName}</p>
                </div>
                <div className="details-rating">
                  <i className="active fa-solid fa-star" />
                  <i className="active fa-solid fa-star" />
                  <i className="active fa-solid fa-star" />
                  <i className="active fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  (3 reviews)
                </div>
                <h3 className="details-price">
                  <span>
                    ₹{getProduct?.productPrice}
                    <small>/{getProduct?.productMeasurement}</small>
                  </span>
                </h3>
                <p className="details-desc">{getProduct?.productDescription}</p>
                <div className="details-list-group">
                  <label className="details-list-title">tags:</label>
                  <ul className="details-tag-list">
                    {getProduct?.productTags?.split(", ").map((tag, index) => (
                      <li key={index}>
                        <a href="#">{tag}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="details-list-group">
                  <label className="details-list-title">Share:</label>
                  <ul className="details-share-list">
                    <li>
                      <a
                        href="#"
                        className="fa-brands fa-facebook"
                        title="Facebook"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fa-brands fa-twitter"
                        title="Twitter"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fa-brands fa-linkedin"
                        title="Linkedin"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fa-brands fa-instagram"
                        title="Instagram"
                      />
                    </li>
                  </ul>
                </div>
                <div className="details-add-group">
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket" />
                    <span>add to cart</span>
                  </button>
                  <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                      <i className="fa-solid fa-minus" />
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      defaultValue={1}
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="fa-solid fa-plus" />
                    </button>
                  </div>
                </div>
                <div className="details-action-group">
                  <a
                    className="details-wish wish"
                    href="#"
                    title="Add Your Wishlist"
                  >
                    <i className="fa-solid fa-heart" />
                    <span>add to wish</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-tabs">
                <li>
                  <a
                    href="#tab-desc"
                    className="tab-link active"
                    data-bs-toggle="tab"
                  >
                    descriptions
                  </a>
                </li>
                <li>
                  <a href="#tab-spec" className="tab-link" data-bs-toggle="tab">
                    Specifications
                  </a>
                </li>
                <li>
                  <a href="#tab-reve" className="tab-link" data-bs-toggle="tab">
                    reviews (2)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-pane fade show active" id="tab-desc">
            <div className="row">
              <div className="col-lg-12">
                <div className="product-details-frame">
                  <div className="tab-descrip">
                    <p>{getProduct?.productDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-spec">
            <div className="row">
              <div className="col-lg-12">
                <div className="product-details-frame">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th scope="row">Product code</th>
                        <td>SKU: {getProduct?._id}</td>
                      </tr>
                      <tr>
                        <th scope="row">Weight</th>
                        <td>{getProduct?.productWeight}</td>
                      </tr>
                      <tr>
                        <th scope="row">Styles</th>
                        <td>{getProduct?.productStyle}</td>
                      </tr>
                      <tr>
                        <th scope="row">Properties</th>
                        <td>{getProduct?.productProperties}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-reve">
            <div className="row">
              <div className="col-lg-12">
                <div className="product-details-frame">
                  <ul className="review-list">
                    <li className="review-item">
                      <div className="review-media">
                        <a className="review-avatar" href="#">
                          <img
                            src={require("../images/avatar/01.jpg")}
                            alt="review"
                          />
                        </a>
                        <h5 className="review-meta">
                          <a href="#">miron mahmud</a>
                          <span>June 02, 2020</span>
                        </h5>
                      </div>
                      <p className="review-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus hic amet qui velit, molestiae suscipit
                        perferendis, autem doloremque blanditiis dolores nulla
                        excepturi ea nobis!
                      </p>
                      <form className="review-reply">
                        <input type="text" placeholder="reply your thoughts" />
                        <button>reply</button>
                      </form>
                      <ul className="review-reply-list">
                        <li className="review-reply-item">
                          <div className="review-media">
                            <a className="review-avatar" href="#">
                              <img
                                src={require("../images/avatar/02.jpg")}
                                alt="review"
                              />
                            </a>
                            <h5 className="review-meta">
                              <a href="#">labonno khan</a>
                              <span>June 02, 2020</span>
                            </h5>
                          </div>
                          <p className="review-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus hic amet qui velit, molestiae suscipit
                            perferendis, autem doloremque blanditiis dolores
                            nulla excepturi ea nobis!
                          </p>
                          <form className="review-reply">
                            <input
                              type="text"
                              placeholder="reply your thoughts"
                            />
                            <button>reply</button>
                          </form>
                        </li>
                        <li className="review-reply-item">
                          <div className="review-media">
                            <a className="review-avatar" href="#">
                              <img
                                src={require("../images/avatar/03.jpg")}
                                alt="review"
                              />
                            </a>
                            <h5 className="review-meta">
                              <a href="#">tahmina bonny</a>
                              <span>June 02, 2020</span>
                            </h5>
                          </div>
                          <p className="review-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus hic amet qui velit, molestiae suscipit
                            perferendis, autem doloremque blanditiis dolores
                            nulla excepturi ea nobis!
                          </p>
                          <form className="review-reply">
                            <input
                              type="text"
                              placeholder="reply your thoughts"
                            />
                            <button>reply</button>
                          </form>
                        </li>
                      </ul>
                    </li>
                    <li className="review-item">
                      <div className="review-media">
                        <a className="review-avatar" href="#">
                          <img
                            src={require("../images/avatar/04.jpg")}
                            alt="review"
                          />
                        </a>
                        <h5 className="review-meta">
                          <a href="#">shipu shikdar</a>
                          <span>June 02, 2020</span>
                        </h5>
                      </div>
                      <p className="review-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus hic amet qui velit, molestiae suscipit
                        perferendis, autem doloremque blanditiis dolores nulla
                        excepturi ea nobis!
                      </p>
                      <form className="review-reply">
                        <input type="text" placeholder="reply your thoughts" />
                        <button>reply</button>
                      </form>
                    </li>
                  </ul>
                </div>
                <div className="product-details-frame">
                  <h3 className="frame-title">add your review</h3>
                  <form className="review-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="star-rating">
                          <input type="radio" name="rating" id="star-1" />
                          <label htmlFor="star-1" />
                          <input type="radio" name="rating" id="star-2" />
                          <label htmlFor="star-2" />
                          <input type="radio" name="rating" id="star-3" />
                          <label htmlFor="star-3" />
                          <input type="radio" name="rating" id="star-4" />
                          <label htmlFor="star-4" />
                          <input type="radio" name="rating" id="star-5" />
                          <label htmlFor="star-5" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Describe"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button className="btn btn-inline">
                          <i className="fa-solid fa-water-drop" />
                          <span>drop your review</span>
                        </button>
                      </div>
                    </div>
                  </form>
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

export default ProductDetail;
