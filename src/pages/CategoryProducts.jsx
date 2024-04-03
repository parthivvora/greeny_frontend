import "../styles/blog-grid.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { imageConstant } from "../global/imageConstant";
import makeApiRequest from "../global/apiCall";
import { apiKeys, apiTypes } from "../global/apiKeys";
import Pagination from "react-js-pagination";

function CategoryProducts() {
  const { categoryId } = useParams();
  const [getProducts, setGetProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 4;

  // Get all products category wise using categoryId
  const getAllProductsData = () => {
    makeApiRequest(
      apiTypes.GET,
      `${apiKeys.getCategoryProduct}${categoryId}`,
      null,
      null,
      null
    )
      .then((response) => {
        setGetProducts(response.data.productData);
        setTotalItems(response.data.productData.length);
      })
      .catch((error) => {
        console.log(error.response.data.message);
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
        getAllProductsData();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getAllProductsData();
  }, []);
  return (
    <div className="category-product-section">
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
          <h2>Category Product</h2>
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
      <section className="inner-section shop-part">
        <div className="container">
          <div className="row content-reverse">
            <div className="col-lg-3">
              <div className="shop-widget-promo">
                <a href="#">
                  <img
                    src={require("../images/promo/shop/01.jpg")}
                    alt="promo"
                  />
                </a>
              </div>
              <div className="shop-widget">
                <h6 className="shop-widget-title">Filter by Price</h6>
                <form>
                  <div className="shop-widget-group">
                    <input type="text" placeholder="Min - 00" />
                    <input type="text" placeholder="Max - 5k" />
                  </div>
                  <button className="shop-widget-btn">
                    <i className="fas fa-search" />
                    <span>search</span>
                  </button>
                </form>
              </div>
              <div className="shop-widget">
                <h6 className="shop-widget-title">Filter by Rating</h6>
                <form>
                  <ul className="shop-widget-list">
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="feat1" />
                        <label htmlFor="feat1">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                        </label>
                      </div>
                      <span className="shop-widget-number">(13)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="feat2" />
                        <label htmlFor="feat2">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                        </label>
                      </div>
                      <span className="shop-widget-number">(28)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="feat3" />
                        <label htmlFor="feat3">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </label>
                      </div>
                      <span className="shop-widget-number">(35)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="feat4" />
                        <label htmlFor="feat4">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </label>
                      </div>
                      <span className="shop-widget-number">(47)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="feat5" />
                        <label htmlFor="feat5">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </label>
                      </div>
                      <span className="shop-widget-number">(59)</span>
                    </li>
                  </ul>
                  <button className="shop-widget-btn">
                    <i className="far fa-trash-alt" />
                    <span>clear filter</span>
                  </button>
                </form>
              </div>
              <div className="shop-widget">
                <h6 className="shop-widget-title">Filter by Tag</h6>
                <form>
                  <ul className="shop-widget-list">
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="tag1" />
                        <label htmlFor="tag1">new items</label>
                      </div>
                      <span className="shop-widget-number">(13)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="tag2" />
                        <label htmlFor="tag2">sale items</label>
                      </div>
                      <span className="shop-widget-number">(28)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="tag3" />
                        <label htmlFor="tag3">rating items</label>
                      </div>
                      <span className="shop-widget-number">(35)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="tag4" />
                        <label htmlFor="tag4">feature items</label>
                      </div>
                      <span className="shop-widget-number">(47)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="tag5" />
                        <label htmlFor="tag5">discount items</label>
                      </div>
                      <span className="shop-widget-number">(59)</span>
                    </li>
                  </ul>
                  <button className="shop-widget-btn">
                    <i className="far fa-trash-alt" />
                    <span>clear filter</span>
                  </button>
                </form>
              </div>
              <div className="shop-widget">
                <h6 className="shop-widget-title">Filter by Brand</h6>
                <form>
                  <input
                    className="shop-widget-search"
                    type="text"
                    placeholder="Search..."
                  />
                  <ul className="shop-widget-list shop-widget-scroll">
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand1" />
                        <label htmlFor="brand1">mari gold</label>
                      </div>
                      <span className="shop-widget-number">(13)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand2" />
                        <label htmlFor="brand2">tredar</label>
                      </div>
                      <span className="shop-widget-number">(28)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand3" />
                        <label htmlFor="brand3">keya</label>
                      </div>
                      <span className="shop-widget-number">(35)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand4" />
                        <label htmlFor="brand4">diamond</label>
                      </div>
                      <span className="shop-widget-number">(47)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand5" />
                        <label htmlFor="brand5">lilly's</label>
                      </div>
                      <span className="shop-widget-number">(59)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand6" />
                        <label htmlFor="brand6">fremant</label>
                      </div>
                      <span className="shop-widget-number">(64)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand7" />
                        <label htmlFor="brand7">avocads</label>
                      </div>
                      <span className="shop-widget-number">(77)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand8" />
                        <label htmlFor="brand8">boroclas</label>
                      </div>
                      <span className="shop-widget-number">(85)</span>
                    </li>
                  </ul>
                  <button className="shop-widget-btn">
                    <i className="far fa-trash-alt" />
                    <span>clear filter</span>
                  </button>
                </form>
              </div>
              <div className="shop-widget">
                <h6 className="shop-widget-title">Filter by Category</h6>
                <form>
                  <input
                    className="shop-widget-search"
                    type="text"
                    placeholder="Search..."
                  />
                  <ul className="shop-widget-list shop-widget-scroll">
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate1" />
                        <label htmlFor="cate1">vegetables</label>
                      </div>
                      <span className="shop-widget-number">(13)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate2" />
                        <label htmlFor="cate2">groceries</label>
                      </div>
                      <span className="shop-widget-number">(28)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate3" />
                        <label htmlFor="cate3">fruits</label>
                      </div>
                      <span className="shop-widget-number">(35)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate4" />
                        <label htmlFor="cate4">dairy farm</label>
                      </div>
                      <span className="shop-widget-number">(47)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate5" />
                        <label htmlFor="cate5">sea foods</label>
                      </div>
                      <span className="shop-widget-number">(59)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate6" />
                        <label htmlFor="cate6">diet foods</label>
                      </div>
                      <span className="shop-widget-number">(64)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate7" />
                        <label htmlFor="cate7">dry foods</label>
                      </div>
                      <span className="shop-widget-number">(77)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate8" />
                        <label htmlFor="cate8">fast foods</label>
                      </div>
                      <span className="shop-widget-number">(85)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate9" />
                        <label htmlFor="cate9">drinks</label>
                      </div>
                      <span className="shop-widget-number">(92)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate10" />
                        <label htmlFor="cate10">coffee</label>
                      </div>
                      <span className="shop-widget-number">(21)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate11" />
                        <label htmlFor="cate11">meats</label>
                      </div>
                      <span className="shop-widget-number">(14)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate12" />
                        <label htmlFor="cate12">fishes</label>
                      </div>
                      <span className="shop-widget-number">(56)</span>
                    </li>
                  </ul>
                  <button className="shop-widget-btn">
                    <i className="far fa-trash-alt" />
                    <span>clear filter</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-9">
              {getProducts.length > 0 ? (
                <>
                  <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                    {getProducts
                      .slice(indexOfFirstResult - 1, indexOfLastResult)
                      .map((product, index) => (
                        <div className="col" key={index}>
                          <div className="product-card">
                            <div className="product-media">
                              <button
                                className="product-wish wish"
                                onClick={() => wishlistProduct(product._id)}
                              >
                                <i className="fas fa-heart" />
                              </button>
                              <Link
                                className="product-image"
                                to={`/product/${product._id}`}
                              >
                                <img
                                  src={product.productImage}
                                  alt={product.productImage}
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
                                <a>(3)</a>
                              </div>
                              <h6 className="product-name">
                                <Link to={`/product/${product._id}`}>
                                  {product.productName}
                                </Link>
                              </h6>
                              <h6 className="product-price">
                                <span>
                                  <i className="fa-solid fa-indian-rupee-sign pe-1" />
                                  {product.productPrice}
                                  <small>/{product.productMeasurement}</small>
                                </span>
                              </h6>
                              <button
                                className="product-add"
                                title="Add to Cart"
                                onClick={() => addToCart(product._id)}
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
                </>
              ) : (
                <h3 className="text-center">No product available</h3>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CategoryProducts;
