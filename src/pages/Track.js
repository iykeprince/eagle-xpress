import React, { Fragment, useState, useEffect } from "react";
import bg1 from "../res/images/background/12.jpg";
import firebase from "../Firebase";
import TrackingBox from "../components/TrackingBox";
import Spinner from '../components/Spinner'

const Track = (props) => {
  const [trackingCode, setTrackingCode] = useState(localStorage.tracker || "");
  const [loading, setLoading] = useState(false);
  const [shipment, setShipment] = useState(null);
  const [shipmentHistory, setShipmentHistory] = useState([]);

  useEffect(() => {
    loadShipment(trackingCode);
    //eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setTrackingCode(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("tracker", trackingCode);
    loadShipment(trackingCode);
  };

  const loadShipment = async (shippingCode) => {
    console.log('shipment loading')
    const histories = [];
    setLoading(true);
    const querySnapshot = await firebase.getShipment(shippingCode);

    querySnapshot.forEach((doc) => {
      setShipment({ id: doc.id, ...doc.data() });
      firebase.getShipmentHistory(doc.id).then(historySnapshot => {
        historySnapshot.forEach((historyDoc) => {
          console.log(historyDoc.id, "it got here with some data", historyDoc.data());
          histories.push({ id: historyDoc.id, ...historyDoc.data() });
        });
        setShipmentHistory(histories);
      } )
    });
    
    setLoading(false);
  };

  return (
    <Fragment>
      <section
        className="page-title"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="auto-container">
          <h2>Track & Trace</h2>
          <div className="separater"></div>
        </div>
      </section>

      <div className="breadcrumb-outer">
        <div className="auto-container">
          <ul className="bread-crumb text-center">
            <li>
              <a href="index.html">Home</a> <span>/</span>
            </li>
            <li>Track & Trace</li>
          </ul>
        </div>
      </div>

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-side col-lg-9 col-md-12 col-sm-12">
              <div className="track-section">
                <div className="sec-title-two sec-title">
                  <h2>
                    Track & <span>Trace Shipment</span>
                  </h2>
                  <div className="separater"></div>
                </div>

                <div className="track-form-two">
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label>Enter Tracking Number Here</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="tracking_code"
                        placeholder="Enter your tracking number e.g CRG-11-XXXX"
                        onChange={handleChange}
                        value={trackingCode}
                      />
                      <button type="submit" className="theme-btn submit-btn">
                        Track Your Shipment
                      </button>
                    </div>
                  </form>
                </div>
                {loading && <Spinner />}
                {trackingCode && shipment ? (
                  <Fragment>
                    <div className="map-outer">
                      <div
                        className="map-canvas"
                        data-zoom="12"
                        data-lat={shipment.current_location.lat}
                        data-lng={shipment.current_location.lng}
                        data-type="roadmap"
                        data-hue="#ffc400"
                        data-title={shipment.current_location.location}
                        data-icon-path="images/icons/map-marker.png"
                        data-content={
                          "Shipment currently at <strong>" +
                          shipment.current_location.location +
                          "</strong><br><a href='mailto:support@eaglexpress.com'>support@eaglexpress.com</a>"
                        }
                      ></div>
                    </div>
                  </Fragment>
                ) : (
                  <div className="p-5 d-flex justify-content-center">
                    <h1 className="">No tracked Shippment specified</h1>
                  </div>
                )}
              </div>
            </div>

            <div className="sidebar-side col-lg-3 col-md-12 col-sm-12" style={{borderLeft: '1px solid #eee'}}>
              {trackingCode && shipment ? (
                <Fragment>
                  <h3>Shipping History</h3>
                  <p className="lead">Type: {shipment.shipping_mode}</p>
                  <div className="tracking-info-detail">
                    {shipmentHistory.length === 0 ? (
                      <div>
                        <h3>No History</h3>
                      </div>
                    ) : (
                      shipmentHistory.map((history) => (
                        <TrackingBox key={history.id} history={history} />
                      ))
                    )}
                  </div>
                </Fragment>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Track;
