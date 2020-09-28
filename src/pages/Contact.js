import React, { Fragment } from "react";
import bg1 from "../res/images/background/12.jpg";
import SenderShipper from "../components/SenderShipper";

const Contact = () => {
  return (
    <Fragment>
      <section className="page-title" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="auto-container">
          <h2>Contact Us</h2>
          <div className="separater"></div>
        </div>
      </section>

      <div className="breadcrumb-outer">
        <div className="auto-container">
          <ul className="bread-crumb text-center">
            <li>
              <a href="index.html">Home</a> <span>/</span>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <section className="quote-section">
        <div className="auto-container">
          <div className="quote-form-box contact-page">
            <div className="sec-title centered">
              <h3>
                Give Us <span>Your Feedback</span>
              </h3>
              <div className="separater"></div>
              <div className="text">We Value Your Feedback Comments & Queries</div>
            </div>

            <form method="post" action="contact.html">
              <div className="row clearfix">
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email ID"
                    required
                  />
                </div>
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Contact"
                    required
                  />
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-lg-12">
                  <textarea placeholder="Your Message"></textarea>
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <button type="submit" className="theme-btn btn-style-one">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SenderShipper />
    </Fragment>
  );
};

export default Contact;
