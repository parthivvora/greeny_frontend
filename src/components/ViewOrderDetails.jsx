import React from "react";

function ViewOrderDetails({ viewOrderDetails }) {
  let discountAmount = 10;

  return (
    <div className="modal fade cart-product-show" id="product-view">
      <div className="modal-dialog">
        <div className="modal-content">
          <button className="modal-close icofont-close" data-bs-dismiss="modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="product-view px-3">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="view-gallery">
                  <ul className="preview-slider slider-arrow">
                    <li>
                      <img
                        src={viewOrderDetails?.productsDetails?.productImage}
                        alt={viewOrderDetails?.productsDetails?.productImage}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="view-details">
                  <h3 className="view-name">
                    {viewOrderDetails?.productsDetails?.productName}
                  </h3>
                  <div className="view-meta">
                    <p>
                      SKU:<span>{viewOrderDetails?._id}</span>
                    </p>
                    <p className="m-0">
                      BRAND:<a>{viewOrderDetails?.brandDetails?.brandName}</a>
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
                      ₹{viewOrderDetails?.productsDetails?.productPrice}
                      <small>
                        /{viewOrderDetails?.productsDetails?.productMeasurement}
                      </small>
                    </span>
                  </h3>
                  <p className="view-desc">
                    {viewOrderDetails?.productsDetails?.productDescription}
                  </p>
                  <div className="view-list-group">
                    <label className="view-list-title">tags:</label>
                    <ul className="view-tag-list">
                      {viewOrderDetails?.productsDetails?.productTags
                        ?.split(", ")
                        .map((tag, index) => (
                          <li key={index}>
                            <a className="hover:text-white">{tag}</a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <ul className="orderlist-details">
                  <li>
                    <h6>order id</h6>
                    <p> {viewOrderDetails?._id} </p>
                  </li>
                  <li>
                    <h6>Order Time</h6>
                    <p>
                      {new Date(viewOrderDetails?.orderDate).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </p>
                  </li>
                  <li>
                    <h6>Delivery Time</h6>
                    <p>
                      {new Date(viewOrderDetails?.orderDate).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="orderlist-details">
                  <li>
                    <h6>Sub Total</h6>
                    <p>
                      ₹{" "}
                      {viewOrderDetails?.productsDetails?.productPrice *
                        viewOrderDetails?.cartDetails?.quantity}
                    </p>
                  </li>
                  <li>
                    <h6>delivery fee</h6>
                    <p>₹ {discountAmount}</p>
                  </li>
                  <li>
                    <h6>
                      Total<small>(Incl. VAT)</small>
                    </h6>
                    <p>
                      ₹{" "}
                      {viewOrderDetails?.productsDetails?.productPrice *
                        viewOrderDetails?.cartDetails?.quantity +
                        discountAmount}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div className="orderlist-deliver">
                  <h6>Delivery location</h6>
                  <p> {viewOrderDetails?.userDetails?.address} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewOrderDetails;
