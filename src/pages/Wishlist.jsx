import React, { useEffect, useState } from "react";
import { imageConstant } from "../global/imageConstant";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import makeApiRequest from "../global/apiCall";
import { apiKeys, apiTypes } from "../global/apiKeys";
import DataTable from "react-data-table-component";

function Wishlist() {
  const [wishlistData, setWishlistData] = useState([]);
  const [viewProductData, setViewProductData] = useState([]);

  // Get all product of wishlist
  const getAllProductWishlist = () => {
    makeApiRequest(apiTypes.GET, apiKeys.getAllWishlist, null, null, null)
      .then((response) => {
        setWishlistData(response.data.wishlistData);
      })
      .catch((error) => {
        console.log("🚀 ~ getAllProductWishlist ~ error:", error);
        // alert(error.response.data.message)
      });
  };

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

  // Delete product from wishlist
  const deleteWishlistProduct = (wishlistId) => {
    makeApiRequest(
      apiTypes.DELETE,
      `${apiKeys.deleteWishlist}${wishlistId}`,
      null,
      null,
      null
    )
      .then((response) => {
        alert(response.data.message);
        getAllProductWishlist();
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
          src={row?.productDetails?.productImage}
          alt={row?.productDetails?.productImage}
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
      selector: (row) => (
        <div className="product-price m-0">
          <i className="fa-solid fa-indian-rupee-sign pe-1"></i>
          {row.productDetails.productPrice} /{" "}
          {row.productDetails.productMeasurement}
        </div>
      ),
    },
    {
      id: 5,
      name: "Description",
      selector: (row) => row.productDetails.productDescription,
    },
    {
      id: 6,
      name: "Status",
      selector: (row) => (
        <div>
          {row.productDetails.isDeleted.toString() == "true" ? (
            <span style={{ color: "#e86121" }}>Stock Out</span>
          ) : (
            <span style={{ color: "#b12fad" }}>Stock In</span>
          )}
        </div>
      ),
    },
    {
      id: 7,
      name: "Shopping",
      selector: (row) => (
        <button
          className="font-medium py-2 px-4 ms-3 rounded bg-green-500 text-white"
          onClick={() => addToCart(row.productId)}
        >
          Add To Cart
        </button>
      ),
    },
    {
      id: 8,
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
            onClick={() => deleteWishlistProduct(row._id)}
          >
            <i className="fa-solid fa-trash" />
          </a>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getAllProductWishlist();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="modal fade" id="product-view">
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              className="modal-close fa-solid fa-xmark"
              data-bs-dismiss="modal"
            />
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
                      <a>{viewProductData?.productDetails?.productName}</a>
                    </h3>
                    <div className="view-meta">
                      <p>
                        SKU:<span>{viewProductData?.productId}</span>
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
                        <i className="fa-solid fa-indian-rupee-sign pe-1"></i>
                        {viewProductData?.productDetails?.productPrice}
                        <small>
                          /per{" "}
                          {viewProductData?.productDetails?.productMeasurement}
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
                          .split(", ")
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
                            className="cursor-pointer fa-brands fa-facebook-f"
                            title="Facebook"
                          />
                        </li>
                        <li>
                          <a
                            className="cursor-pointer fa-brands fa-twitter"
                            title="Twitter"
                          />
                        </li>
                        <li>
                          <a
                            className="cursor-pointer fa-brands fa-linkedin"
                            title="Linkedin"
                          />
                        </li>
                        <li>
                          <a
                            className="cursor-pointer fa-brands fa-instagram"
                            title="Instagram"
                          />
                        </li>
                      </ul>
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
          <h2>wishlist</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              wishlist
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section wishlist-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-scroll">
                {wishlistData?.length > 0 ? (
                  <DataTable
                    columns={columns}
                    data={wishlistData}
                    defaultSortFieldId={1}
                    pagination
                  />
                ) : (
                  <h2 className="text-center">No wishlist data found</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Wishlist;
