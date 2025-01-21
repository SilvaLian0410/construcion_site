import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";

const About = () => {
  return (
    <section className="section-2 py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 align-items-center justify-content-center">
            <img src={AboutImg} alt="about-us" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <span>About Us</span>

            <h2>Your Trusted Partner in Construction Excellence</h2>

            <p>
              At Silva Builders Builders, we are a team of skilled professionals
              dedicated to delivering exceptional construction solutions.
              <br></br>With years of experience and a passion for quality.
            </p>

            <p>
              Founded with a commitment to excellence, Titan Builders has
              established itself as a leader in the construction industry. We
              specialize in residential, commercial, and industrial projects,
              ensuring each build reflects the highest standards of
              craftsmanship. Our mission is to create spaces that inspire and
              stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
