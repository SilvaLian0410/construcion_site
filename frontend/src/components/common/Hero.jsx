import React from "react";

export const Hero = ({ preheading, heading, description }) => {
  return (
    <section className="section-7">
      <div className="hero d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="text-left">
            <span>{preheading}</span>
            <h1>{heading}</h1>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
