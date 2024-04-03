import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { imageConstant } from "../global/imageConstant";
import { apiKeys, apiTypes } from "../global/apiKeys";
import makeApiRequest from "../global/apiCall";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "../styles/checkout.css";

function Cart() {
  let discountAmount = 10;
  const [cartData, setCartData] = useState([]);
  const [viewProductData, setViewProductData] = useState([]);
  const [isShowLoader, setIsShowLoader] = useState(false);

  // Get all product of cart
  const getAllProductCart = () => {
    makeApiRequest(apiTypes.GET, apiKeys.getCartData, null, null, null)
      .then((response) => {
        setCartData(response.data.cartData);
      })
      .catch((error) => {
        // alert(error.response.data.message)
        console.log(
          "🚀 ~ getAllProductCart ~ error.response.data.message:",
          error.response.data.message
        );
      });
  };

  // Change quantity of cart
  const changeQuantity = (type, value, cartId) => {
    if (type == "plus") {
      makeApiRequest(
        apiTypes.PUT,
        `${apiKeys.updateCart}${cartId}`,
        { quantity: value + 1 },
        null,
        null
      )
        .then((response) => {
          getAllProductCart();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    } else {
      makeApiRequest(
        apiTypes.PUT,
        `${apiKeys.updateCart}${cartId}`,
        { quantity: value - 1 },
        null,
        null
      )
        .then((response) => {
          getAllProductCart();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };

  // Remove products from cart
  const removeCartData = (cartId) => {
    makeApiRequest(
      apiTypes.DELETE,
      `${apiKeys.deleteCart}${cartId}`,
      null,
      null,
      null
    )
      .then((response) => {
        getAllProductCart();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const columns = [
    {
      id: 1,
      name: "Serial",
      selector: (row) => row._id,
    },
    {
      id: 2,
      name: "Product",
      selector: (row) => (
        <img
          src={row.productDetails.productImage}
          alt={row.productDetails.productImage}
        />
      ),
    },
    {
      id: 3,
      name: "Name",
      selector: (row) => row.productDetails.productName,
    },
    {
      id: 4,
      name: "Price",
      selector: (row) => row.productDetails.productPrice,
    },
    {
      id: 5,
      name: "Brand",
      selector: (row) => row.userId,
    },
    {
      id: 6,
      name: "Quantity",
      selector: (row) => (
        <div className="flex cart-table-quantity-action items-center gap-2">
          <button
            className="plus-icon"
            onClick={() => changeQuantity("plus", row.quantity, row._id)}
          >
            +
          </button>
          <input
            type="text"
            value={row.quantity}
            className="w-full quantity-value-field text-center"
          />
          <button
            className="minus-icon"
            onClick={() => changeQuantity("minus", row.quantity, row._id)}
          >
            -
          </button>
        </div>
      ),
    },
    {
      id: 7,
      name: "Action",
      selector: (row) => (
        <div className="table-action flex gap-3">
          <a
            className="view cursor-pointer"
            onClick={() => setViewProductData(row)}
            title="Quick View"
            data-bs-toggle="modal"
            data-bs-target="#product-view"
          >
            <i className="fas fa-eye" />
          </a>
          <a
            className="trash cursor-pointer"
            title="Remove cart"
            onClick={() => removeCartData(row._id)}
          >
            <i className="fa-solid fa-trash" />
          </a>
        </div>
      ),
    },
  ];

  // Get sub total for cart items
  const getSubTotal = () => {
    let subTotal = 0;
    cartData.map((item) => {
      subTotal += item.productDetails.productPrice * item.quantity;
    });
    return subTotal;
  };

  const handleCheckout = (cartId) => {
    alert(cartId);
    setIsShowLoader(true);
    makeApiRequest(
      apiTypes.POST,
      apiKeys.checkout,
      { cartId: cartId },
      null,
      null
    )
      .then((response) => {
        setIsShowLoader(false);
        window.location.href = response.data.session;
      })
      .catch((error) => {
        console.log("🚀 ~ handleCheckout ~ error:", error);
        // alert(error.response.data.message)
      });
  };

  useEffect(() => {
    getAllProductCart();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="modal fade cart-product-show" id="product-view">
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              className="modal-close icofont-close"
              data-bs-dismiss="modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="product-view">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="view-gallery">
                    <ul className="preview-slider slider-arrow">
                      <li>
                        <img
                          src={viewProductData?.productDetails?.productImage}
                          alt={viewProductData?.productDetails?.productImage}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="view-details">
                    <h3 className="view-name">
                      {viewProductData?.productDetails?.productName}
                    </h3>
                    <div className="view-meta">
                      <p>
                        SKU:<span>{viewProductData?._id}</span>
                      </p>
                      <p>
                        BRAND:<a>{viewProductData?.brandDetails?.brandName}</a>
                      </p>
                    </div>
                    <div className="view-rating">
                      <i className="active fa-solid fa-star" />
                      <i className="active fa-solid fa-star" />
                      <i className="active fa-solid fa-star" />
                      <i className="active fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <a>(3 reviews)</a>
                    </div>
                    <h3 className="view-price">
                      <span>
                        ₹{viewProductData?.productDetails?.productPrice}
                        <small>
                          /{viewProductData?.productDetails?.productMeasurement}
                        </small>
                      </span>
                    </h3>
                    <p className="view-desc">
                      {viewProductData?.productDetails?.productDescription}
                    </p>
                    <div className="view-list-group">
                      <label className="view-list-title">tags:</label>
                      <ul className="view-tag-list">
                        {viewProductData?.productDetails?.productTags
                          ?.split(", ")
                          .map((tag, index) => (
                            <li key={index}>
                              <a className="hover:text-white">{tag}</a>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="view-list-group">
                      <label className="view-list-title">Share:</label>
                      <ul className="view-share-list">
                        <li>
                          <a
                            href="#"
                            className="fa-brands fa-facebook-f"
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
                    <div className="mt-5 flex items-center gap-3">
                      <button
                        className="btn btn-inline"
                        onClick={() => handleCheckout(viewProductData?._id)}
                      >
                        processed to checkout
                      </button>
                      {isShowLoader && <div className="loading"></div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="inner-section single-banner"
        style={{
          background: `url(${imageConstant.SINGLE_BANNER})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h2>cart</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              cart
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section checkout-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>Your products</h4>
                </div>
                <div className="account-content">
                  <div className="table-scroll">
                    {cartData?.length > 0 ? (
                      <DataTable
                        columns={columns}
                        data={cartData}
                        defaultSortFieldId={1}
                        sortIcon={<SortIcon />}
                        pagination
                      />
                    ) : (
                      <h2 className="text-center">No cart data found</h2>
                    )}
                  </div>
                </div>
                <div className="account-content mt-5">
                  <div className="checkout-charge">
                    <ul>
                      <li>
                        <span>Subtotal</span>
                        <span>₹ {getSubTotal()}</span>
                      </li>
                      <li>
                        <span>delivery fee</span>
                        <span>₹ {discountAmount}</span>
                      </li>
                      <li>
                        <span>
                          Total<small>(Incl. VAT)</small>
                        </span>
                        <span>₹ {getSubTotal() + discountAmount}</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="mt-5 text-center">
                    <button className="btn btn-inline">
                      processed to checkout
                    </button>
                  </div> */}
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

export default Cart;
