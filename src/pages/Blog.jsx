import "../styles/blog-grid.css";
import React, { useEffect, useState } from "react";
import { imageConstant } from "../global/imageConstant";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import makeApiRequest from "../global/apiCall";
import { apiKeys, apiTypes } from "../global/apiKeys";
import Pagination from "react-js-pagination";

function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 4;

  // Get all blogs
  const getBlogsDetails = () => {
    makeApiRequest(apiTypes.GET, apiKeys.getAllBlogs, null, null, null)
      .then((response) => {
        setBlogData(response.data.blogData);
        setTotalItems(response.data.blogData.length);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Blog.jsx:19 ~ getBlogsDetails ~ error:", error);
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

  useEffect(() => {
    getBlogsDetails();
  }, []);
  return (
    <div className="blog-section">
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
          <h2>blog</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {" "}
              Blog
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section blog-grid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <div className="top-filter">
                    <div className="filter-short">
                      <label className="filter-label">Short by :</label>
                      <select className="form-select filter-select">
                        <option>default</option>
                        <option value={3}>recent</option>
                        <option value={1}>featured</option>
                        <option value={2}>recommend</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {blogData
                  .slice(indexOfFirstResult - 1, indexOfLastResult)
                  .map((blogInfo, index) => (
                    <div className="col-md-6 col-lg-6" key={index}>
                      <div className="blog-card">
                        <div className="blog-media">
                          <img
                            src={`${blogInfo?.blogImage}`}
                            alt={blogInfo?.blogImage}
                            className="blog-img"
                          />
                        </div>
                        <div className="blog-content">
                          <ul className="blog-meta">
                            <li>
                              <i className="fas fa-user" />
                              <span>admin</span>
                            </li>
                            <li>
                              <i className="fas fa-calendar-alt" />
                              <span>
                                {new Date(blogInfo?.blogDate).toLocaleString(
                                  "en-US",
                                  {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </li>
                          </ul>
                          <h4 className="blog-title">{blogInfo?.blogTitle}</h4>
                          <p className="blog-desc">
                            {blogInfo?.blogDescription}
                          </p>
                          <Link
                            className="blog-btn"
                            to={`/blog/${blogInfo?._id}`}
                          >
                            <span>read more</span>
                            <i className="fa-solid fa-arrow-right" />
                          </Link>
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
