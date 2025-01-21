import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Hero } from "../common/Hero";

import Service1 from "../../assets/images/construction7.jpg";
import Service2 from "../../assets/images/construction4 (2).jpg";
import Service3 from "../../assets/images/construction2.jpg";
import Service4 from "../../assets/images/construction122 (2).jpg";

const Services = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero
          preheading="Services"
          heading="Services"
          description="Explore our comprehensive range of construction services <br>designed to meet your needs."
        />

        <section className="section-3 sx bg-light">
          <div className="container py-5">
            <div className="service-header text-center">
              <span>Our Services</span>
              <h2>
                Explore Comprehensive Range <br></br> of Construction Services
              </h2>
              <p>
                At Silva Builders Builders, we offer a wide range of
                construction services designed to meet your unique needs.
                <br></br> Whether you're planning a new home, renovating your
                office, or embarking on a commercial project, our team is here
                to guide you through every step of the process.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={Service1} alt="service-1" className="w-100" />
                  </div>
                  <div className="service-content">
                    <div className="service-title">
                      <h3>Residential Construction</h3>
                    </div>
                    <div className="service-description">
                      <p>
                        We specialize in residential construction, delivering
                        homes that are both functional and aesthetically
                        pleasing.
                      </p>
                    </div>
                    <a href="/services" className="btn btn-primary small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={Service2} alt="service-1" className="w-100" />
                  </div>
                  <div className="service-content">
                    <div className="service-title">
                      <h3>Corporate Construction</h3>
                    </div>
                    <div className="service-description">
                      <p>
                        We specialize in corporate construction, delivering
                        spaces that are both functional and aesthetically
                        pleasing.
                      </p>
                    </div>
                    <a href="/services" className="btn btn-primary small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={Service3} alt="service-1" className="w-100" />
                  </div>
                  <div className="service-content">
                    <div className="service-title">
                      <h3>Industrial Construction</h3>
                    </div>
                    <div className="service-description">
                      <p>
                        We specialize in industrial construction, delivering
                        spaces that are both functional and aesthetically
                        pleasing.
                      </p>
                    </div>
                    <a href="/services" className="btn btn-primary small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={Service4} alt="service-1" className="w-100" />
                  </div>
                  <div className="service-content">
                    <div className="service-title">
                      <h3>Civil Construction</h3>
                    </div>
                    <div className="service-description">
                      <p>
                        We specialize in civil construction, delivering spaces
                        that are both functional and aesthetically pleasing.
                      </p>
                    </div>
                    <a href="/services" className="btn btn-primary small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
