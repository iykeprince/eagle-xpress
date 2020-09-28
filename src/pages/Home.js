import React, { Fragment } from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Welcome from "../components/Welcome";
import Service from "../components/Service";
import Counter from "../components/Counter";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import SenderShipper from "../components/SenderShipper";

const Home = () => {
  return (
    <Fragment>
      {/* Banner here */}
      <Banner />
      {/* Feature section here */}
      <Feature />
      {/* Welcome section here */}
      <Welcome />
      {/* Services here */}
      <Service />
      {/* Counter section here */}
      <Counter />
      {/* Team section here  */}
      <Team />
      {/* Testimonial */}
      <Testimonial />
      {/* Sender/Shipper */}
      <SenderShipper />
    </Fragment>
  );
};

export default Home;
