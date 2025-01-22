import React, { PureComponent } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";

export default class Contact extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <main>
          <Hero
            title="Contact Us"
            heading="Contact Us"
            description="We are a team of experienced construction professionals who are dedicated to <br>providing you with the highest quality construction services."
          />

          <section className="section-9 py-5">
            <div className="container">
              <div className="service-header text-center">
                <h2>Contact Us</h2>
                <p>
                  We are a team of experienced construction professionals who
                  are dedicated to providing <br />
                  you with the highest quality construction services.
                </p>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <div className="card shadow border-0 mb-5">
                    <div className="card-body p-4">
                      <h3>Call Us</h3>
                      <div>
                        <a href="tel:+971501234567">
                          <p>+971 50 123 4567</p>
                        </a>
                      </div>
                      <div>
                        <a href="tel:+971501234567">
                          <p>+971 50 123 4567</p>
                        </a>
                      </div>

                      <h3 className="mt-4">Email Us</h3>
                      <div>
                        <a href="mailto:info@construction.com">
                          <p>info@construction.com</p>
                        </a>
                      </div>
                      <div>
                        <a href="mailto:info@construction.com">
                          <p>info@example.com</p>
                        </a>
                      </div>

                      <h3 className="mt-4">Visit Us</h3>
                      <p>Level 31, WeWork, Buruj Khalifa, Dubai, UAE</p>

                      <h3 className="mt-4">Follow Us</h3>
                      <a href="#" className="me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                      </a>
                      <a href="#" className="me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-linkedin"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                      </a>
                      <a href="#" className="me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <form action="">
                        <div className="row mt-5">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="name" className="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Enter your name"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="phone" className="form-label">
                              Phone
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                              placeholder="Enter your phone"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="subject" className="form-label">
                              Subject
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              placeholder="Enter your subject"
                            />
                          </div>
                          <div className="col-md-12">
                            <label htmlFor="message" className="form-label">
                              Message
                            </label>
                            <textarea
                              className="form-control"
                              id="message"
                              rows="5"
                              placeholder="Enter your message"
                            ></textarea>
                          </div>
                        </div>

                        <button type="submit" className="btn btn-primary large mt-4">
                          Submit
                        </button>

                      </form>
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
  }
}
