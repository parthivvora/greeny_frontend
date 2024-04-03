import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiKeys, apiTypes } from "../global/apiKeys";
import makeApiRequest from "../global/apiCall";

function Navbar() {
  const [getCategories, setGetCategories] = useState([]);
  const [cartCount, setCartCount] = useState();
  const [wishlistCount, setWishlistCount] = useState();

  const isUserAuth = window.localStorage.getItem("userAuthToken");
  const userName = window.localStorage.getItem("userName");
  const navigate = useNavigate();

  const checkUserAuth = () => {
    isUserAuth ? navigate("/profile") : navigate("/login");
  };
  const logoutUser = () => {
    window.localStorage.clear("userAuthToken");
    window.localStorage.clear("userName");
    navigate("/");
  };

  // Get all categories for user
  const getAllCategoriesData = () => {
    makeApiRequest(apiTypes.GET, apiKeys.getAllCategories, null, null, null)
      .then((response) => {
        setGetCategories(response.data.categoryData);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // Get total count of cart data
  const getTotalCartCount = () => {
    makeApiRequest(apiTypes.GET, apiKeys.totalCountCart, null, null, null)
      .then((response) => {
        setCartCount(response.data.totalCountCartData.totalData);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // Get total count of wishlist data
  const getTotalWishlistCount = () => {
    makeApiRequest(apiTypes.GET, apiKeys.totalCountWishlist, null, null, null)
      .then((response) => {
        setWishlistCount(response.data.totalCountWishlistData.totalData);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getAllCategoriesData();
    getTotalCartCount();
    getTotalWishlistCount();
  }, []);
  return (
    <>
      <div className="backdrop" />
      <a className="backtop fas fa-arrow-up" href="#" />
      <header className="header-part">
        <div className="container">
          <div className="header-content">
            <div className="header-media-group">
              <button className="header-user">
                <i className="fa-solid fa-user"></i>
              </button>
              <a href="/">
                <img src={require("../images/logo.png")} alt="logo.png" />
              </a>
              <button className="header-src">
                <i className="fas fa-search" />
              </button>
            </div>
            <a href="/" className="header-logo">
              <img src={require("../images/logo.png")} alt="logo.png" />
            </a>
            <button
              className="header-widget"
              title="My Account"
              onClick={checkUserAuth}
            >
              <i className="fa-solid fa-user"></i>
              <span>{userName ? userName : "User"}</span>
            </button>
            <form className="header-form">
              <input type="text" placeholder="Search anything..." />
              <button>
                <i className="fas fa-search" />
              </button>
            </form>
            <div className="header-widget-group">
              <a href="/wishlist" className="header-widget" title="Wish list">
                <i className="fas fa-heart" />
                <sup>{wishlistCount}</sup>
              </a>
              <button className="header-widget header-cart" title="Cart list">
                <a href="/cart">
                  <i className="fas fa-shopping-basket" />
                  <sup>{cartCount}</sup>
                </a>
              </button>
              {isUserAuth ? (
                <button
                  className="font-medium py-2 px-4 ms-3 rounded bg-green-500 text-white"
                  title="Logout"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navbar-content">
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <a className="navbar-link" href="/">
                      home
                    </a>
                  </li>
                  <li className="navbar-item dropdown">
                    <a className="navbar-link dropdown-arrow" href="#">
                      category
                    </a>
                    <ul className="dropdown-position-list">
                      {getCategories.map((category, index) => (
                        <li
                          key={index}
                          style={{
                            display: `${category.isDeleted ? "none" : "block"}`,
                          }}
                        >
                          <a href={`/category/${category._id}`}>
                            {category.categoryName}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="navbar-item">
                    <a className="navbar-link" href="/blog">
                      blogs
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a className="navbar-link" href="/contact">
                      contact
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a className="navbar-link" href="/about">
                      about
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a className="navbar-link" href="/orders">
                      orders
                    </a>
                  </li>
                </ul>
                <div className="navbar-info-group">
                  <div className="navbar-info">
                    <i className="icofont-ui-touch-phone" />
                    <p>
                      <small>call us</small>
                      <span>(+880) 183 8288 389</span>
                    </p>
                  </div>
                  <div className="navbar-info">
                    <i className="icofont-ui-email" />
                    <p>
                      <small>email us</small>
                      <span>support@example.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside className="category-sidebar">
        <div className="category-header">
          <h4 className="category-title">
            <i className="fas fa-align-left" />
            <span>categories</span>
          </h4>
          <button className="category-close">
            <i className="icofont-close" />
          </button>
        </div>
        <ul className="category-list">
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-vegetable" />
              <span>vegetables</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">asparagus</a>
              </li>
              <li>
                <a href="#">broccoli</a>
              </li>
              <li>
                <a href="#">carrot</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-groceries" />
              <span>groceries</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Grains &amp; Bread</a>
              </li>
              <li>
                <a href="#">Dairy &amp; Eggs</a>
              </li>
              <li>
                <a href="#">Oil &amp; Fat</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-fruit" />
              <span>fruits</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Apple</a>
              </li>
              <li>
                <a href="#">Orange</a>
              </li>
              <li>
                <a href="#">Strawberry</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-dairy-products" />
              <span>dairy farm</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Egg</a>
              </li>
              <li>
                <a href="#">milk</a>
              </li>
              <li>
                <a href="#">butter</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-crab" />
              <span>sea foods</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Lobster</a>
              </li>
              <li>
                <a href="#">Octopus</a>
              </li>
              <li>
                <a href="#">Shrimp</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-salad" />
              <span>diet foods</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Salmon</a>
              </li>
              <li>
                <a href="#">Potatoes</a>
              </li>
              <li>
                <a href="#">Greens</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-dried-fruit" />
              <span>dry foods</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">noodles</a>
              </li>
              <li>
                <a href="#">Powdered milk</a>
              </li>
              <li>
                <a href="#">nut &amp; yeast</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-fast-food" />
              <span>fast foods</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">mango</a>
              </li>
              <li>
                <a href="#">plumsor</a>
              </li>
              <li>
                <a href="#">raisins</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-cheers" />
              <span>drinks</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Wine</a>
              </li>
              <li>
                <a href="#">Juice</a>
              </li>
              <li>
                <a href="#">Water</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-beverage" />
              <span>coffee</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Cappuchino</a>
              </li>
              <li>
                <a href="#">Espresso</a>
              </li>
              <li>
                <a href="#">Latte</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-barbecue" />
              <span>meats</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Meatball</a>
              </li>
              <li>
                <a href="#">Sausage</a>
              </li>
              <li>
                <a href="#">Poultry</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-fish" />
              <span>fishes</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Agujjim</a>
              </li>
              <li>
                <a href="#">saltfish</a>
              </li>
              <li>
                <a href="#">pazza</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="category-footer">
          <p>
            All Rights Reserved by <a href="#">Mironcoder</a>
          </p>
        </div>
      </aside>
      <aside className="cart-sidebar">
        <div className="cart-header">
          <div className="cart-total">
            <i className="fas fa-shopping-basket" />
            <span>total item (5)</span>
          </div>
          <button className="cart-close">
            <i className="icofont-close" />
          </button>
        </div>
        <ul className="cart-list">
          <li className="cart-item">
            <div className="cart-media">
              <a href="#">
                <img src={require("../images/product/01.jpg")} alt="01.jpg" />
              </a>
              <button className="cart-delete">
                <i className="far fa-trash-alt" />
              </button>
            </div>
            <div className="cart-info-group">
              <div className="cart-info">
                <h6>
                  <a href="product-single.html">existing product name</a>
                </h6>
                <p>Unit Price - $8.75</p>
              </div>
              <div className="cart-action-group">
                <div className="product-action">
                  <button className="action-minus" title="Quantity Minus">
                    <i className="icofont-minus" />
                  </button>
                  <input
                    className="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    defaultValue={1}
                  />
                  <button className="action-plus" title="Quantity Plus">
                    <i className="icofont-plus" />
                  </button>
                </div>
                <h6>$56.98</h6>
              </div>
            </div>
          </li>
          <li className="cart-item">
            <div className="cart-media">
              <a href="#">
                <img src={require("../images/product/02.jpg")} alt="02.jpg" />
              </a>
              <button className="cart-delete">
                <i className="far fa-trash-alt" />
              </button>
            </div>
            <div className="cart-info-group">
              <div className="cart-info">
                <h6>
                  <a href="product-single.html">existing product name</a>
                </h6>
                <p>Unit Price - $8.75</p>
              </div>
              <div className="cart-action-group">
                <div className="product-action">
                  <button className="action-minus" title="Quantity Minus">
                    <i className="icofont-minus" />
                  </button>
                  <input
                    className="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    defaultValue={1}
                  />
                  <button className="action-plus" title="Quantity Plus">
                    <i className="icofont-plus" />
                  </button>
                </div>
                <h6>$56.98</h6>
              </div>
            </div>
          </li>
          <li className="cart-item">
            <div className="cart-media">
              <a href="#">
                <img src={require("../images/product/03.jpg")} alt="03.jpg" />
              </a>
              <button className="cart-delete">
                <i className="far fa-trash-alt" />
              </button>
            </div>
            <div className="cart-info-group">
              <div className="cart-info">
                <h6>
                  <a href="product-single.html">existing product name</a>
                </h6>
                <p>Unit Price - $8.75</p>
              </div>
              <div className="cart-action-group">
                <div className="product-action">
                  <button className="action-minus" title="Quantity Minus">
                    <i className="icofont-minus" />
                  </button>
                  <input
                    className="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    defaultValue={1}
                  />
                  <button className="action-plus" title="Quantity Plus">
                    <i className="icofont-plus" />
                  </button>
                </div>
                <h6>$56.98</h6>
              </div>
            </div>
          </li>
          <li className="cart-item">
            <div className="cart-media">
              <a href="#">
                <img src={require("../images/product/04.jpg")} alt="04.jpg" />
              </a>
              <button className="cart-delete">
                <i className="far fa-trash-alt" />
              </button>
            </div>
            <div className="cart-info-group">
              <div className="cart-info">
                <h6>
                  <a href="product-single.html">existing product name</a>
                </h6>
                <p>Unit Price - $8.75</p>
              </div>
              <div className="cart-action-group">
                <div className="product-action">
                  <button className="action-minus" title="Quantity Minus">
                    <i className="icofont-minus" />
                  </button>
                  <input
                    className="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    defaultValue={1}
                  />
                  <button className="action-plus" title="Quantity Plus">
                    <i className="icofont-plus" />
                  </button>
                </div>
                <h6>$56.98</h6>
              </div>
            </div>
          </li>
          <li className="cart-item">
            <div className="cart-media">
              <a href="#">
                <img src={require("../images/product/05.jpg")} alt="05.jpg" />
              </a>
              <button className="cart-delete">
                <i className="far fa-trash-alt" />
              </button>
            </div>
            <div className="cart-info-group">
              <div className="cart-info">
                <h6>
                  <a href="product-single.html">existing product name</a>
                </h6>
                <p>Unit Price - $8.75</p>
              </div>
              <div className="cart-action-group">
                <div className="product-action">
                  <button className="action-minus" title="Quantity Minus">
                    <i className="icofont-minus" />
                  </button>
                  <input
                    className="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    defaultValue={1}
                  />
                  <button className="action-plus" title="Quantity Plus">
                    <i className="icofont-plus" />
                  </button>
                </div>
                <h6>$56.98</h6>
              </div>
            </div>
          </li>
        </ul>
        <div className="cart-footer">
          <button className="coupon-btn">Do you have a coupon code?</button>
          <form className="coupon-form">
            <input type="text" placeholder="Enter your coupon code" />
            <button type="submit">
              <span>apply</span>
            </button>
          </form>
          <a className="cart-checkout-btn" href="checkout.html">
            <span className="checkout-label">Proceed to Checkout</span>
            <span className="checkout-price">$369.78</span>
          </a>
        </div>
      </aside>
      <aside className="nav-sidebar">
        <div className="nav-header">
          <a href="#">
            <img src={require("../images/logo.png")} alt="logo.png" />
          </a>
          <button className="nav-close">
            <i className="icofont-close" />
          </button>
        </div>
        <div className="nav-content">
          <div className="nav-btn">
            <a href="login.html" className="btn btn-inline">
              <i className="fa fa-unlock-alt" />
              <span>join here</span>
            </a>
          </div>
          <div className="nav-select-group">
            <div className="nav-select">
              <i className="icofont-world" />
              <select className="select">
                <option value="english">English</option>
                <option value="bangali">Bangali</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
            <div className="nav-select">
              <i className="icofont-money" />
              <select className="select">
                <option value="english">Doller</option>
                <option value="bangali">Pound</option>
                <option value="arabic">Taka</option>
              </select>
            </div>
          </div>
          <ul className="nav-list">
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="fa-solid fa-angle-down"></i>Home
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="home-grid.html">Home grid</a>
                </li>
                <li>
                  <a href="index.html">Home index</a>
                </li>
                <li>
                  <a href="home-classic.html">Home classic</a>
                </li>
                <li>
                  <a href="home-standard.html">Home standard</a>
                </li>
                <li>
                  <a href="home-category.html">Home category</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="fa-solid fa-angle-down"></i>shop
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="shop-5column.html">shop 5 column</a>
                </li>
                <li>
                  <a href="shop-4column.html">shop 4 column</a>
                </li>
                <li>
                  <a href="shop-3column.html">shop 3 column</a>
                </li>
                <li>
                  <a href="shop-2column.html">shop 2 column</a>
                </li>
                <li>
                  <a href="shop-1column.html">shop 1 column</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="fa-solid fa-angle-down"></i>product
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="product-tab.html">product tab</a>
                </li>
                <li>
                  <a href="product-grid.html">product grid</a>
                </li>
                <li>
                  <a href="product-video.html">product video</a>
                </li>
                <li>
                  <a href="product-simple.html">product simple</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="fa-solid fa-angle-down"></i>my account
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="profile.html">profile</a>
                </li>
                <li>
                  <a href="wallet.html">wallet</a>
                </li>
                <li>
                  <a href="wishlist.html">wishlist</a>
                </li>
                <li>
                  <a href="compare.html">compare</a>
                </li>
                <li>
                  <a href="checkout.html">checkout</a>
                </li>
                <li>
                  <a href="orderlist.html">order history</a>
                </li>
                <li>
                  <a href="invoice.html">order invoice</a>
                </li>
                <li>
                  <a href="email-template.html">email template</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="icofont-lock" />
                authentication
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="login.html">login</a>
                </li>
                <li>
                  <a href="register.html">register</a>
                </li>
                <li>
                  <a href="reset-password.html">reset password</a>
                </li>
                <li>
                  <a href="change-password.html">change password</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="icofont-book-alt" />
                blogs
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="blog-grid.html">blog grid</a>
                </li>
                <li>
                  <a href="blog-standard.html">blog standard</a>
                </li>
                <li>
                  <a href="blog-details.html">blog details</a>
                </li>
                <li>
                  <a href="blog-author.html">blog author</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link" href="offer.html">
                <i className="icofont-sale-discount" />
                offers
              </a>
            </li>
            <li>
              <a className="nav-link" href="about.html">
                <i className="icofont-info-circle" />
                about us
              </a>
            </li>
            <li>
              <a className="nav-link" href="faq.html">
                <i className="icofont-support-faq" />
                need help
              </a>
            </li>
            <li>
              <a className="nav-link" href="contact.html">
                <i className="icofont-contacts" />
                contact us
              </a>
            </li>
            <li>
              <a className="nav-link" href="privacy.html">
                <i className="icofont-warning" />
                privacy policy
              </a>
            </li>
            <li>
              <a className="nav-link" href="coming-soon.html">
                <i className="icofont-options" />
                coming soon
              </a>
            </li>
            <li>
              <a className="nav-link" href="error.html">
                <i className="icofont-ui-block" />
                404 error
              </a>
            </li>
            <li>
              <a className="nav-link" href="login.html">
                <i className="icofont-logout" />
                logout
              </a>
            </li>
          </ul>
          <div className="nav-info-group">
            <div className="nav-info">
              <i className="icofont-ui-touch-phone" />
              <p>
                <small>call us</small>
                <span>(+880) 183 8288 389</span>
              </p>
            </div>
            <div className="nav-info">
              <i className="icofont-ui-email" />
              <p>
                <small>email us</small>
                <span>support@example.com</span>
              </p>
            </div>
          </div>
          <div className="nav-footer">
            <p>
              All Rights Reserved by <a href="#">Mironcoder</a>
            </p>
          </div>
        </div>
      </aside>
      <div className="mobile-menu">
        <a href="/" title="Home Page">
          <i className="fas fa-home" />
          <span>Home</span>
        </a>
        <button className="header-widget header-cart" title="Cart list">
          <a href="/cart">
            <i className="fas fa-shopping-basket" />
            <sup>9+</sup>
          </a>
        </button>
        <a href="/wishlist" title="Wishlist">
          <i className="fas fa-heart" />
          <span>wishlist</span>
          <sup>0</sup>
        </a>
      </div>
    </>
  );
}

export default Navbar;
