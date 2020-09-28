import React, { Fragment } from "react";
import welcomeBg from "../res/images/resource/welcome.jpg";
import bg1 from "../res/images/background/12.jpg";
import bg2 from "../res/images/background/3.jpg";
import bg3 from "../res/images/background/4.png";

import team1 from "../res/images/clients/38.jpg";
import team2 from "../res/images/clients/39.jpg";
import team3 from "../res/images/clients/40.jpg";
import team4 from "../res/images/clients/41.jpg";

import client1 from "../res/images/clients/1.png";
import client2 from "../res/images/clients/2.png";
import client3 from "../res/images/clients/3.png";
import client4 from "../res/images/clients/4.png";

const About = () => {
  return (
    <Fragment>
      <section className="page-title" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="auto-container">
          <h2>About Us</h2>
          <div className="separater"></div>
        </div>
      </section>

      <div className="breadcrumb-outer">
        <div className="auto-container">
          <ul className="bread-crumb text-center">
            <li>
              <a href="index.html">Home</a> <span>/</span>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      <section className="welcome-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner-column wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="sec-title-two sec-title">
                  <h2>
                    Welcome <span>To Carga</span>
                  </h2>
                  <div className="separater"></div>
                </div>
                <ul className="list-style-one">
                  <li>
                    <span>100% Safe Delivery</span>We have accomplished 100%
                    safe delivery, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt dolore magna aliqua...
                  </li>
                  <li>
                    <span>Weather Insurance</span>Any weather any where, we
                    deliver to your commitement consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore...
                  </li>
                  <li>
                    <span>Fast & On Time Delivery</span>Fast and timly deliver
                    is our motto, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore...
                  </li>
                </ul>
                <a href="#" className="theme-btn btn-style-four">
                  Read More
                </a>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner-column wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <img src={welcomeBg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="counter-section"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            <div className="order-column col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner-column"
                style={{ backgroundImage: `url(${bg3})` }}
              >
                <div className="icon-box">
                  <span className="icon flaticon-fast-delivery"></span>
                </div>
                <h2>Track Your Order</h2>
                <div className="text">Enter your Track Id For Instant Search</div>

                <div className="track-form">
                  <form method="post" action="contact.html">
                    <div className="form-group">
                      <input
                        type="text"
                        name="text"
                        placeholder="Tracking ID"
                        required=""
                      />
                      <button type="submit" className="theme-btn">
                        <span className="fa fa-search"></span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="social-box">
                  <a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-google-plus"></a>
                </div>
              </div>
            </div>

            <div className="counter-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="fact-counter">
                  <div className="clearfix">
                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div className="inner">
                        <div className="content">
                          <div className="count-outer count-box counted">
                            <span
                              className="count-text"
                              data-speed="2000"
                              data-stop="61"
                            >
                              61
                            </span>
                          </div>
                          <h4 className="counter-title">Years of Experience</h4>
                        </div>
                      </div>
                    </div>

                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div className="inner">
                        <div className="content">
                          <div className="count-outer count-box alternate counted">
                            <span
                              className="count-text"
                              data-speed="2800"
                              data-stop="2500"
                            >
                              2500
                            </span>
                            +
                          </div>
                          <h4 className="counter-title">Professional Workers</h4>
                        </div>
                      </div>
                    </div>

                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div className="inner">
                        <div className="content">
                          <div className="count-outer count-box counted">
                            <span
                              className="count-text"
                              data-speed="2500"
                              data-stop="79"
                            >
                              79
                            </span>
                            %
                          </div>
                          <h4 className="counter-title">Areas Covered</h4>
                        </div>
                      </div>
                    </div>

                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div className="inner">
                        <div className="content">
                          <div className="count-outer count-box counted">
                            <span
                              className="count-text"
                              data-speed="2000"
                              data-stop="207"
                            >
                              207
                            </span>
                            +
                          </div>
                          <h4 className="counter-title">Countries Covered</h4>
                        </div>
                      </div>
                    </div>

                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div className="inner">
                        <div className="content">
                          <div className="count-outer count-box counted">
                            <span
                              className="count-text"
                              data-speed="2000"
                              data-stop="186"
                            >
                              186
                            </span>
                            +
                          </div>
                          <h4 className="counter-title">Corporate Clients</h4>
                        </div>
                      </div>
                    </div>

                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div className="inner">
                        <div className="content">
                          <div className="count-outer count-box counted">
                            <span
                              className="count-text"
                              data-speed="2000"
                              data-stop="450"
                            >
                              450
                            </span>
                            +
                          </div>
                          <h4 className="counter-title">Owned Vehicles</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h3>
              Professional <span>Team</span>
            </h3>
            <div className="separater"></div>
          </div>
          <div className="tem-sec">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-lg-3">
                <div className="tm-bx wowallow fadeInLeft">
                  <div className="tm-thmb">
                    <a href="#" title="">
                      <img src={team1} alt="Team-Image.jpg" />
                    </a>
                    <div className="tm-inf">
                      <h5>
                        <a href="team-detail.html" title="">
                          Tim Patinson
                        </a>
                      </h5>
                      <span className="designation">Cargo Supervisor</span>
                      <ul className="social-icon-one">
                        <li>
                          <a href="#">
                            <span className="fa fa-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-linkedin"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-lg-3">
                <div className="tm-bx wowallow fadeInDown">
                  <div className="tm-thmb">
                    <a href="#" title="">
                      <img src={team2} alt="Team-Image.jpg" />
                    </a>
                    <div className="tm-inf">
                      <h5>
                        <a href="team-detail.html" title="">
                          Jina Patinson
                        </a>
                      </h5>
                      <span className="designation">Shipping Manager</span>
                      <ul className="social-icon-one">
                        <li>
                          <a href="#">
                            <span className="fa fa-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-linkedin"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-lg-3">
                <div className="tm-bx wowallow fadeInUp">
                  <div className="tm-thmb">
                    <a href="#" title="">
                      <img src={team3} alt="Team-Image.jpg" />
                    </a>
                    <div className="tm-inf">
                      <h5>
                        <a href="team-detail.html" title="">
                          Mark Hustler
                        </a>
                      </h5>
                      <span className="designation">Tracking Dept</span>
                      <ul className="social-icon-one">
                        <li>
                          <a href="#">
                            <span className="fa fa-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-linkedin"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-lg-3">
                <div className="tm-bx wowallow fadeInRight">
                  <div className="tm-thmb">
                    <a href="#" title="">
                      <img src={team4} alt="Team-Image.jpg" />
                    </a>
                    <div className="tm-inf">
                      <h5>
                        <a href="team-detail.html" title="">
                          John Doe
                        </a>
                      </h5>
                      <span className="designation">IT Technician</span>
                      <ul className="social-icon-one">
                        <li>
                          <a href="#">
                            <span className="fa fa-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-linkedin"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors-section">
        <div className="auto-container">
          <div className="carousel-outer">
            <ul className="sponsors-carousel owl-carousel owl-theme">
              <li>
                <div className="image-box">
                  <a href="#">
                    <img src={client1} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="image-box">
                  <a href="#">
                    <img src={client2} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="image-box">
                  <a href="#">
                    <img src={client3} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="image-box">
                  <a href="#">
                    <img src={client1} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="image-box">
                  <a href="#">
                    <img src={client4} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="image-box">
                  <a href="#">
                    <img src={client1} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="image-box">
                  <a href="#">
                    <img src={client2} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="image-box">
                  <a href="#">
                    <img src={client3} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="image-box">
                  <a href="#">
                    <img src={client1} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="image-box">
                  <a href="#">
                    <img src={client4} alt="" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
