import React, {useState} from "react";
import banner from "../res/images/background/8.jpg";
import { withRouter } from "react-router-dom";

const Banner = (props) => {
  const [shippingCode, setShippingCode] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault();

    if(shippingCode !== ''){
      localStorage.setItem('tracker', shippingCode)
      props.history.replace('/track?shipping_code='+shippingCode+'&geo=code&status=shipped')
    }
  }
  return (
    <section
      className="banner-section-two"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="auto-container">
        <div className="content-column">
          <div
            className="inner-column wow slideInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <h1>WE DELIVER ON TIME </h1>
            <div className="text">
              Join the millions getting bargain deals on shipping cars, <br />{" "}
              furniture, freight, and more..
            </div>

            <div
              className="banner-form-two wow slideInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <form onSubmit={onSubmit}>
                <div className="row clearfix">
                  <div className="form-group col-lg-8 col-md-12 col-sm-12">
                    <input
                      type="text"
                      name="trackid"
                      placeholder="Enter Your Track ID"
                      onChange={(e) => setShippingCode(e.target.value)}
                      value={shippingCode}
                      required
                    />
                  </div>

                  <div className="form-group col-lg-4 col-md-12 col-sm-12">
                    <button type="submit" className="theme-btn btn-style-three">
                      Search Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Banner);
