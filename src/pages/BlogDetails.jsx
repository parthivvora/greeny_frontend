import "../styles/blog-details.css";
import React, { useCallback, useEffect, useState } from "react";
import { imageConstant } from "../global/imageConstant";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { apiKeys, apiTypes } from "../global/apiKeys";
import makeApiRequest from "../global/apiCall";

function BlogDetails() {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState();
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    message: "",
    blogId: blogId,
  });

  // Get single blog details
  const getSingleBlogDetails = useCallback(() => {
    makeApiRequest(
      apiTypes.GET,
      `${apiKeys.getSingleBlog}/${blogId}`,
      null,
      null,
      null
    )
      .then((response) => {
        console.log("🚀 ~ .then ~ response:", response.data.blogData[0])
        setBlogData(response.data.blogData[0]);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, [blogId]);

  // Post comment
  const getCommentData = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const addCommentData = (e) => {
    e.preventDefault();
    makeApiRequest(apiTypes.POST, apiKeys.addComments, commentData, null, null)
      .then((response) => {
        alert(response.data.message);
        setCommentData({ name: "", email: "", message: "" });
        getSingleBlogDetails();
      })
      .catch((error) => {
        console.log("🚀 ~ addCommentData ~ error:", error);
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getSingleBlogDetails();
  }, [blogId]);

  return (
    <div>
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
          <h2>blog details</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/blog">Blog</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog Details
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section blog-details-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-10">
              <article className="blog-details">
                <a className="blog-details-thumb">
                  <img
                    src={`${blogData?.blogImage}`}
                    alt={blogData?.blogImage}
                  />
                </a>
                <div className="blog-details-content">
                  <ul className="blog-details-meta">
                    <li>
                      <i className="fa-solid fa-calendar-days" />
                      <span>
                        {new Date(blogData?.blogDate).toLocaleString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </li>
                    <li>
                      <i className="fa-solid fa-user"></i>
                      <span>Admin</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-comments"></i>
                      <span>{blogData?.commentCount} COMMENTS</span>
                    </li>
                  </ul>
                  <h2 className="blog-details-title">{blogData?.blogTitle}</h2>
                  <p className="blog-details-desc">
                    {blogData?.blogDescription}
                  </p>
                  <div className="blog-details-footer">
                    <ul className="blog-details-share">
                      <li>
                        <span>share:</span>
                      </li>
                      <li>
                        <a href="#" className="fa-brands fa-facebook-f" />
                      </li>
                      <li>
                        <a href="#" className="fa-brands fa-twitter" />
                      </li>
                      <li>
                        <a href="#" className="fa-brands fa-linkedin" />
                      </li>
                      <li>
                        <a href="#" className="fa-brands fa-instagram" />
                      </li>
                      <li>
                        <a href="#" className="fa-brands fa-pinterest-p" />
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
              <div className="blog-details-comment">
                <h3 className="comment-title">
                  {blogData?.commentCount} Comments
                </h3>
                <ul className="comment-list">
                  {blogData?.commentData.map((comment, index) => (
                    <li
                      className="comment-item"
                      style={{
                        display: `${comment.isDeleted ? "none" : "block"}`,
                      }}
                      key={index}
                    >
                      <div className="comment-media">
                        <h6 className="comment-meta">
                          <a>{comment?.name}</a>
                          <span>
                            {new Intl.DateTimeFormat("en-US", options).format(
                              new Date(comment?.createdAt)
                            )}
                          </span>
                        </h6>
                      </div>
                      <p className="comment-desc">{comment?.message}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <form
                className="blog-details-form"
                method="post"
                onSubmit={addCommentData}
              >
                <h3 className="details-form-title">post comment</h3>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="write your comment"
                        name="message"
                        onChange={getCommentData}
                        value={commentData.message}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter your name"
                        name="name"
                        onChange={getCommentData}
                        value={commentData.name}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="enter your email"
                        name="email"
                        onChange={getCommentData}
                        value={commentData.email}
                      />
                    </div>
                  </div>
                </div>
                <button className="form-btn" type="submit">
                  post comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogDetails;
