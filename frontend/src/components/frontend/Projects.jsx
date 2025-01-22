import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";

import Project1 from "../../assets/images/construction6 (2).jpg";
import Project2 from "../../assets/images/construction3.jpg";
import Project3 from "../../assets/images/construction1212.jpg";
import Project4 from "../../assets/images/construction10.jpg";

const Projects = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preheading="Projects"
          heading="Projects"
          description="Explore our latest projects and see how we've transformed spaces."
        />

        {/* Projects */}
        <section className="section-3 sx bg-light">
          <div className="container py-5">
            <div className="service-header text-center">
              <span>Our Projects</span>
              <h2>Our Recent Projects</h2>
              <p>
                Discover our latest construction projects, showcasing our
                expertise and commitment to excellence.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={Project1} alt="service-1" className="w-100" />
                  </div>
                  <div className="service-content">
                    <div className="service-title">
                      <h3>Museum of the Future</h3>
                    </div>
                    <div className="service-description">
                      <p>
                        The Museum of the Future is a state-of-the-art facility
                        that showcases the latest advancements in technology and
                        innovation.
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
                    <img src={Project2} alt="service-1" className="w-100" />
                  </div>
                  <div className="service-content">
                    <div className="service-title">
                      <h3>Dream Home</h3>
                    </div>
                    <div className="service-description">
                      <p>
                        Our Dream Home project is a testament to our commitment
                        to excellence and innovation in construction.
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
                    <img src={Project3} alt="service-1" className="w-100" />
                  </div>
                  <div className="service-content">
                    <div className="service-title">
                      <h3>Skyscraper Tower</h3>
                    </div>
                    <div className="service-description">
                      <p>
                        Our Skyscraper Tower project is a testament to our
                        commitment to excellence and innovation in construction.
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
                    <img src={Project4} alt="service-1" className="w-100" />
                  </div>
                  <div className="service-content">
                    <div className="service-title">
                      <h3>Green Building</h3>
                    </div>
                    <div className="service-description">
                      <p>
                        Our Green Building project is a testament to our
                        commitment to excellence and innovation in construction.
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

export default Projects;
