import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { imageConstant } from "../global/imageConstant";
import ViewOrderDetails from "../components/ViewOrderDetails";
import makeApiRequest from "../global/apiCall";
import { apiKeys, apiTypes } from "../global/apiKeys";

function OrderHistory() {
  const [ordersData, setOrdersData] = useState([]);
  const [totalOrderCount, setTotalOrderCount] = useState(0);
  const [viewOrderDetails, setViewOrderDetails] = useState([]);

  // Get all orders details using userId
  const getAllOrdersOfUser = () => {
    makeApiRequest(
      apiTypes.GET,
      `${apiKeys.getAllOrdersByUser}`,
      null,
      null,
      null
    )
      .then((response) => {
        setOrdersData(response.data.orderData);
        setTotalOrderCount(response.data.orderData.length);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  useEffect(() => {
    getAllOrdersOfUser();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <section
          className="inner-section single-banner"
          style={{
            background: `url(${imageConstant.SINGLE_BANNER})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <h2>Order History</h2>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Order list
              </li>
            </ol>
          </div>
        </section>
        <section className="inner-section orderlist-part">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="orderlist-filter">
                  <h5>
                    total order <span>- ({totalOrderCount})</span>
                  </h5>
                  <div className="filter-short">
                    <label className="form-label">short by:</label>
                    <select className="form-select">
                      <option value="all" selected>
                        all order
                      </option>
                      <option value="recieved">recieved order</option>
                      <option value="processed">processed order</option>
                      <option value="shipped">shipped order</option>
                      <option value="delivered">delivered order</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="orderlist">
                  {/* <div className="orderlist-head">
                    <h5>order#01</h5>
                    <h5>order recieved</h5>
                  </div> */}
                  <div className="orderlist-body">
                    <div className="row">
                      {/* <div className="col-lg-5">
                        <ul className="orderlist-details">
                          <li>
                            <h6>order id</h6>
                            <p>14667</p>
                          </li>
                          <li>
                            <h6>Total Item</h6>
                            <p>6 Items</p>
                          </li>
                          <li>
                            <h6>Order Time</h6>
                            <p>7th February 2021</p>
                          </li>
                          <li>
                            <h6>Delivery Time</h6>
                            <p>12th February 2021</p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul className="orderlist-details">
                          <li>
                            <h6>Sub Total</h6>
                            <p>$10,864.00</p>
                          </li>
                          <li>
                            <h6>discount</h6>
                            <p>$20.00</p>
                          </li>
                          <li>
                            <h6>delivery fee</h6>
                            <p>$49.00</p>
                          </li>
                          <li>
                            <h6>
                              Total<small>(Incl. VAT)</small>
                            </h6>
                            <p>$10,874.00</p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="orderlist-deliver">
                          <h6>Delivery location</h6>
                          <p>
                            jalkuri, fatullah, narayanganj-1420. word no-09,
                            road no-17/A
                          </p>
                        </div>
                      </div> */}
                      <div className="col-lg-12">
                        <div className="table-scroll">
                          <table className="table-list">
                            <thead>
                              <tr>
                                <th scope="col">Serial</th>
                                <th scope="col">Product</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">brand</th>
                                <th scope="col">quantity</th>
                                <th scope="col">view</th>
                              </tr>
                            </thead>
                            <tbody>
                              {ordersData?.length > 0 ? (
                                ordersData.map((order, index) => (
                                  <tr key={index}>
                                    <td className="table-serial">
                                      <h6> {index + 1} </h6>
                                    </td>
                                    <td className="table-image">
                                      <img
                                        src={
                                          order?.productsDetails?.productImage
                                        }
                                        alt={
                                          order?.productsDetails?.productImage
                                        }
                                      />
                                    </td>
                                    <td className="table-name">
                                      <h6>
                                        {" "}
                                        {
                                          order?.productsDetails?.productName
                                        }{" "}
                                      </h6>
                                    </td>
                                    <td className="table-price">
                                      <h6>
                                        ${order?.productsDetails?.productPrice}
                                        <small>
                                          /
                                          {
                                            order?.productsDetails
                                              ?.productMeasurement
                                          }
                                        </small>
                                      </h6>
                                    </td>
                                    <td className="table-brand">
                                      <h6>
                                        {" "}
                                        {order?.brandDetails?.brandName}{" "}
                                      </h6>
                                    </td>
                                    <td className="table-quantity">
                                      <h6> {order?.cartDetails?.quantity} </h6>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          className="view cursor-pointer"
                                          onClick={() =>
                                            setViewOrderDetails(order)
                                          }
                                          title="Quick View"
                                          data-bs-toggle="modal"
                                          data-bs-target="#product-view"
                                        >
                                          <i className="fas fa-eye" />
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td>
                                    <h1>No Order Found</h1>
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                          
                          <ViewOrderDetails
                            viewOrderDetails={viewOrderDetails}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default OrderHistory;
