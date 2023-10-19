import React from "react";
import "../styles/ournumbers.css";

const OurNumbers = () => {
  return (
    <section className="ournumbers">
      <div className="ournumbers-container container">
        <h2>
          Our
          <strong>Numbers</strong>
          <img
            src="https://cdn.unstop.com/uploads/images/home/graph-icon.svg?d=38x27"
            alt="increasing"
            loading="lazy"
          />
        </h2>
        <div className="numbers-container">
          
          
          <div className="brands-box">
            <h3>500+</h3>
            <span>Brands trust us</span>
          </div>
          <div className="countries-box">
            <h3>78+</h3>
            <span>Countries</span>
          </div>
          <div className="countries-box">
            <h3>78+</h3>
            <span>Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
