import "../styles/brand-single.css";
import "../styles/blog-grid.css";
import React, { useEffect, useState } from "react";
import { imageConstant } from "../global/imageConstant";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import makeApiRequest from "../global/apiCall";
import { apiKeys, apiTypes } from "../global/apiKeys";
import Pagination from "react-js-pagination";

function BrandList() {
  const { brandId } = useParams();
  const [brandData, setBrandData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 4;

  // Get banner data for user
  const getSingleBrandData = () => {
    makeApiRequest(
      apiTypes.GET,
      `${apiKeys.getProductsSingleBrand}${brandId}`,
      null,
      null,
      null
    )
      .then((response) => {
        setBrandData(response.data.brandsData[0]);
        setTotalItems(response.data.brandsData[0].productDetails.length);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // Pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfFirstResult = (currentPage - 1) * itemsPerPage + 1;
  const indexOfLastResult = Math.min(currentPage * itemsPerPage, totalItems);
  const resultsMessage = `Showing ${indexOfFirstResult} - ${indexOfLastResult} of ${totalItems} Results`;

  // Add to cart product
  const addToCart = (productId) => {
    const data = {
      productId: productId,
      quantity: 1,
    };
    makeApiRequest(apiTypes.POST, apiKeys.addCart, data, null, null)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // Add to wishlist product
  const wishlistProduct = (productId) => {
    makeApiRequest(
      apiTypes.POST,
      apiKeys.addWishlist,
      { productId: productId },
      null,
      null
    )
      .then((response) => {
        alert(response.data.message);
        getSingleBrandData();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getSingleBrandData();
  }, []);

  return (
    <div className="brand-list-page">
      <Navbar />
      <div className="modal fade" id="product-view">
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              className="modal-close icofont-close"
              data-bs-dismiss="modal"
            />
            <div className="product-view">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="view-gallery">
                    <div className="view-label-group">
                      <label className="view-label new">new</label>
                      <label className="view-label off">-10%</label>
                    </div>
                    <ul className="preview-slider slider-arrow">
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                    </ul>
                    <ul className="thumb-slider">
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                      <li>
                        <img src="images/product/01.jpg" alt="product" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="view-details">
                    <h3 className="view-name">
                      <a href="product-video.html">existing product name</a>
                    </h3>
                    <div className="view-meta">
                      <p>
                        SKU:<span>1234567</span>
                      </p>
                      <p>
                        BRAND:<a href="#">radhuni</a>
                      </p>
                    </div>
                    <div className="view-rating">
                      <i className="active icofont-star" />
                      <i className="active icofont-star" />
                      <i className="active icofont-star" />
                      <i className="active icofont-star" />
                      <i className="icofont-star" />
                      <a href="product-video.html">(3 reviews)</a>
                    </div>
                    <h3 className="view-price">
                      <del>$38.00</del>
                      <span>
                        $24.00<small>/per kilo</small>
                      </span>
                    </h3>
                    <p className="view-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      non tempora magni repudiandae sint suscipit tempore quis
                      maxime explicabo veniam eos reprehenderit fuga
                    </p>
                    <div className="view-list-group">
                      <label className="view-list-title">tags:</label>
                      <ul className="view-tag-list">
                        <li>
                          <a href="#">organic</a>
                        </li>
                        <li>
                          <a href="#">vegetable</a>
                        </li>
                        <li>
                          <a href="#">chilis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="view-list-group">
                      <label className="view-list-title">Share:</label>
                      <ul className="view-share-list">
                        <li>
                          <a
                            href="#"
                            className="icofont-facebook"
                            title="Facebook"
                          />
                        </li>
                        <li>
                          <a
                            href="#"
                            className="icofont-twitter"
                            title="Twitter"
                          />
                        </li>
                        <li>
                          <a
                            href="#"
                            className="icofont-linkedin"
                            title="Linkedin"
                          />
                        </li>
                        <li>
                          <a
                            href="#"
                            className="icofont-instagram"
                            title="Instagram"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="view-add-group">
                      <button className="product-add" title="Add to Cart">
                        <i className="fas fa-shopping-basket" />
                        <span>add to cart</span>
                      </button>
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
                    </div>
                    <div className="view-action-group">
                      <a
                        className="view-wish wish"
                        href="#"
                        title="Add Your Wishlist"
                      >
                        <i className="icofont-heart" />
                        <span>add to wish</span>
                      </a>
                      <a
                        className="view-compare"
                        href="compare.html"
                        title="Compare This Item"
                      >
                        <i className="fas fa-random" />
                        <span>Compare This</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="single-banner"
        style={{
          background: `url(${imageConstant.SINGLE_BANNER})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h2>Brand</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              brand
            </li>
          </ol>
        </div>
      </section>
      <div className="brand-single">
        <a href="#">
          <img
            className="ms-auto me-auto mt-12"
            src={brandData?.brandImage}
            alt={brandData?.brandImage}
          />
        </a>
        <a>
          <h3>{brandData?.brandName}</h3>
        </a>
        <ul>
          <li className="fas fa-star active" />
          <li className="fas fa-star active" />
          <li className="fas fa-star active" />
          <li className="fas fa-star active" />
          <li className="fas fa-star" />
          <li className="total">(163 ratings)</li>
        </ul>
        <p>{`(${brandData?.totalItems} items)`}</p>
      </div>
      <section className="inner-section shop-part">
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5">
            {brandData?.productDetails
              ?.slice(indexOfFirstResult - 1, indexOfLastResult)
              ?.map((product, index) => (
                <div className="col" key={index}>
                  <div className="product-card">
                    <div className="product-media">
                      <button
                        className="product-wish wish"
                        onClick={() => wishlistProduct(product?._id)}
                      >
                        <i className="fa-solid fa-heart" />
                      </button>
                      <Link
                        className="product-image"
                        to={`/product/${product._id}`}
                      >
                        <img
                          src={product?.productImage}
                          alt={product?.productImage}
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <i className="active fa-solid fa-star" />
                        <i className="active fa-solid fa-star" />
                        <i className="active fa-solid fa-star" />
                        <i className="active fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                      <h6 className="product-name">
                        <a href={`/product/${product?._id}`}>
                          {product?.productName}
                          <br />
                          {product?._id}
                        </a>
                      </h6>
                      <h6 className="product-price">
                        <span>
                          ${product?.productPrice}
                          <small>/{product?.productMeasurement}</small>
                        </span>
                      </h6>
                      <button
                        className="product-add"
                        title="Add to Cart"
                        onClick={() => addToCart(product?._id)}
                      >
                        <i className="fas fa-shopping-basket" />
                        <span>add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="bottom-paginate">
                <p className="page-info">{resultsMessage}</p>
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={itemsPerPage}
                  totalItemsCount={totalItems}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
                  itemClass="abc"
                  itemClassFirst="first"
                  itemClassLast="last"
                  itemClassPrev="prev"
                  itemClassNext="next"
                  prevPageText={false}
                  nextPageText={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BrandList;
