import React from "react";
import "../styles/success.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa";

function Success() {
  return (
    <>
      <Navbar />
      <div className="payment-section">
        <div className="card">
          <div className="icon-circle">
            <FaCheck className="checkMark" />
          </div>
          <h1>Success</h1>
          <p>
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
          <a href="/" className="mt-5">Back to Home</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;
