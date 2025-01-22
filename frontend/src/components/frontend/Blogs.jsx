import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";

import Blog1 from "../../assets/images/construction-work-2698790_1280.jpg";
import Blog2 from "../../assets/images/construction9.jpg";
import Blog3 from "../../assets/images/construction11.jpg";

const Blogs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preheading="Blogs"
          heading="Blogs"
          description="Stay updated with our latest blog posts and industry insights."
        />

        <section className="section-6 bg-light py-5">
          <div className="container">
            <div className="service-header text-center">
              <span>Blog</span>
              <h2>Latest Articles & Blog</h2>
              <p>
                Stay updated with our latest articles and blog posts, covering
                the latest trends and insights in the construction industry.
              </p>
            </div>
            <div className="row pt-3">
              <div className="col-md-4 col-lg-4">
                <div className="card shadow border-0">
                  <div className="card-image-top">
                    <img src={Blog1} alt="blog-1" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <a href="#" className="title">
                        Upgrade Your Home with Silva Builders
                      </a>
                    </div>
                    <a href="/#" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="card shadow border-0">
                  <div className="card-image-top">
                    <img src={Blog2} alt="blog-1" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <a href="#" className="title">
                        The Importance of Quality Construction
                      </a>
                    </div>
                    <a href="/#" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="card shadow border-0">
                  <div className="card-image-top">
                    <img src={Blog3} alt="blog-1" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <a href="#" className="title">
                        The Future of Construction Technology
                      </a>
                    </div>
                    <a href="/#" className="btn btn-primary small">
                      Read More
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

export default Blogs;
