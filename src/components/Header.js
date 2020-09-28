import React, {useState} from "react";
import logo from "../res/images/logo-2.png";
import logo2 from "../res/images/logo-small-2.png";
import { Link, withRouter } from "react-router-dom";

const Header = (props) => {
  const [shippingCode, setShippingCode] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault();

    if(shippingCode !== ''){
      localStorage.setItem('tracker', shippingCode)
      props.history.replace('/track?shipping_code='+shippingCode+'&geo=code&status=shipped')
    }
  }
  return (
    <header className="main-header header-style-two">
      <div className="auto-container">
        <div className="header-inner">
          <div className="header-top">
            <div className="clearfix">
              <div className="top-right">
                <ul className="right-list">
                  <li>
                    <span className="icon flaticon-mail"></span>
                    <a
                      href="mailto:support@eaglexpress.com"
                      className="__cf_email__"
                    >
                      @eaglexpress.com
                    </a>
                  </li>
                  <li>
                    <span className="icon flaticon-phone-contact"></span>+444
                    987-321-300
                  </li>
                </ul>

                <div className="language dropdown">
                  <a
                    className="btn btn-default dropdown-toggle"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    href="#!"
                  >
                    <span className="globe flaticon-world"></span>United State
                    Office &nbsp;<span className="icon fa fa-angle-down"></span>
                  </a>
                  <ul
                    className="dropdown-menu style-one"
                    aria-labelledby="dropdownMenu2"
                  >
                    <li>
                      <a href="#">New York Office</a>
                    </li>
                    <li>
                      <a href="#">Berlin Office</a>
                    </li>
                    <li>
                      <a href="#">Dubai Office</a>
                    </li>
                  </ul>
                </div>

                <ul className="social-box">
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
                  <li>
                    <a href="#">
                      <span className="fa fa-google-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="header-upper">
            <div className="clearfix">
              <div className="pull-left logo-box">
                <div className="logo">
                  <a href="/">
                    {/* <img src={logo} alt="" title="" /> */}
                    <h2>EagleXpress</h2>
                  </a>
                </div>
              </div>
              <div className="pull-right upper-right">
                <div className="header-lower">
                  <div className="nav-outer clearfix">
                    <nav className="main-menu navbar-expand-md">
                      <div className="navbar-header">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                      </div>
                      <div
                        className="navbar-collapse collapse clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation clearfix">
                          <li className="current dropdown">
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about-us">About Us</Link>
                          </li>
                          <li>
                            <Link to="/track">Track & Trace</Link>
                          </li>
                          <li className="dropdown">
                            <Link to="/services">Services</Link>
                          </li>
                          <li>
                            <Link to="/contact-us">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>

                    <div className="outer-box clearfix">
                      <div className="option-box">
                        <div className="search-box-outer">
                          <div className="dropdown">
                            <button
                              className="search-box-btn dropdown-toggle"
                              type="button"
                              id="dropdownMenu3"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="flaticon-route"></span>
                            </button>
                            <ul
                              className="dropdown-menu pull-right search-panel"
                              aria-labelledby="dropdownMenu3"
                            >
                              <li className="panel-outer">
                                <div className="form-container">
                                  <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        name="shipping_code"
                                        placeholder="Track Your Shipment"
                                        onChange={e => setShippingCode(e.target.value)}
                                        value={shippingCode}
                                      />
                                      <button
                                        type="submit"
                                        className="search-btn"
                                      >
                                        <span className="fa fa-search"></span>
                                      </button>
                                    </div>
                                  </form>
                                </div>
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
          </div>
        </div>
      </div>

      <div className="sticky-header">
        <div className="auto-container clearfix">
          <div className="logo pull-left">
            <a href="index.html" className="img-responsive">
              <img src={logo2} alt="" title="" />
            </a>
          </div>

          <div className="right-col pull-right">
            <nav className="main-menu navbar-expand-md">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="navbar-collapse collapse clearfix"
                id="navbarSupportedContent1"
              >
                <ul className="navigation clearfix">
                  <li className="current dropdown">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/track">Track & Trace</Link>
                  </li>
                  <li>
                    <a href="track.html">Track & Trace</a>
                  </li>
                  <li className="dropdown">
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
