import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Service1 from '../../assets/images/construction7.jpg';
import Service2 from '../../assets/images/construction4 (2).jpg';
import Service3 from '../../assets/images/construction2.jpg';
import Service4 from '../../assets/images/construction122 (2).jpg';
import Project1 from '../../assets/images/construction6 (2).jpg';
import Project2 from '../../assets/images/construction3.jpg';
import Project3 from '../../assets/images/construction1212.jpg';
import Project4 from '../../assets/images/construction10.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';

const Home = () => {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className='section-1'>
          <div className='hero d-flex align-items-center justify-content-center'>
            <div className='container-fluid'>
              <div className='text-center'>
                <span>Welcome to Silva Construction</span>
                <h1>Your Trusted Partner in Construction Excellence</h1>
                <p>At Silva Builders Builders, we are a team of skilled professionals dedicated to delivering exceptional construction solutions.<br></br>With years of experience and a passion for quality, we bring your visions to life with precision, reliability, and unmatched expertise.</p>
                <div className='mt-4'>
                <a className='btn btn-primary'>Contact Now</a>
                <a className='btn btn-secondary ms-2'>View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className='section-2 py-5'>
          <div className='container py-5'>
            <div className='row'>
              <div className='col-md-6 align-items-center justify-content-center'>
                <img src={AboutImg} alt='about-us' className='img-fluid' />
              </div>
              <div className='col-md-6'>
                <span>About Us</span>

                <h2>Your Trusted Partner in Construction Excellence</h2>
                
                <p>At Silva Builders Builders, we are a team of skilled professionals dedicated to delivering exceptional construction solutions.<br></br>With years of experience and a passion for quality.</p>

                <p>Founded with a commitment to excellence, Titan Builders has established itself as a leader in the construction industry. We specialize in residential, commercial, and industrial projects, ensuring each build reflects the highest standards of craftsmanship. Our mission is to create spaces that inspire and stand the test of time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Services */}
      <section className='section-3 sx bg-light'>
        <div className='container-fluid py-5'> 
          <div className='service-header text-center'>
            <span>Our Services</span>
            <h2>Explore Comprehensive Range <br></br> of Construction Services</h2>
            <p>At Silva Builders Builders, we offer a wide range of construction services designed to meet your unique needs.<br></br> Whether you're planning a new home, renovating your office, or embarking on a commercial project, our team is here to guide you through every step of the process.</p>
          </div>
          <div className='row'>
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={Service1} alt='service-1' className='w-100' />
                </div>
                <div className='service-content'>
                  <div className='service-title'>
                    <h3>Residential Construction</h3>
                  </div>
                  <div className='service-description'>
                    <p>We specialize in residential construction, delivering homes that are both functional and aesthetically pleasing.</p>
                  </div>
                  <a href='/services' className='btn btn-primary'>Learn More</a>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={Service2} alt='service-1' className='w-100' />
                </div>
                <div className='service-content'>
                  <div className='service-title'>
                    <h3>Corporate Construction</h3>
                  </div>
                  <div className='service-description'>
                    <p>We specialize in corporate construction, delivering spaces that are both functional and aesthetically pleasing.</p>
                  </div>
                  <a href='/services' className='btn btn-primary'>Learn More</a>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={Service3} alt='service-1' className='w-100' />
                </div>
                <div className='service-content'>
                  <div className='service-title'>
                    <h3>Industrial Construction</h3>
                  </div>
                  <div className='service-description'>
                    <p>We specialize in industrial construction, delivering spaces that are both functional and aesthetically pleasing.</p>
                  </div>
                  <a href='/services' className='btn btn-primary'>Learn More</a>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={Service4} alt='service-1' className='w-100' />
                </div>
                <div className='service-content'>
                  <div className='service-title'>
                    <h3>Civil Construction</h3>
                  </div>
                  <div className='service-description'>
                    <p>We specialize in civil construction, delivering spaces that are both functional and aesthetically pleasing.</p>
                  </div>
                  <a href='/services' className='btn btn-primary'>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Why Choose Us */}
       <section className='section-4'>
        <div className='container py-5'>
          <div className='service-header text-center'>
            <span>WHY CHOOSE US</span>
            <h2>Discover the Difference with Silva Builders</h2>
            <p>Experience the difference with Silva Builders. Our commitment to excellence, innovation, and customer satisfaction sets us apart.</p>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <div className='card shadow border-0 p-4'>
                <div className='card-icon'>
                  <img src={Icon1} alt='icon' />
                </div>
                <div className='card-body'>
                  <h3 className='mt-3'>Expertise and Experience</h3>
                  <p>Our team of seasoned professionals brings decades of experience to every project, ensuring your vision is realized with precision and care.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card shadow border-0 p-4'>
                <div className='card-icon'>
                  <img src={Icon2} alt='icon' />
                </div>
                <div className='card-body'>
                  <h3 className='mt-3'>Innovative Solutions</h3>
                  <p>We stay advanced with cutting-edge technologies and innovative approaches, ensuring your project is at the forefront of industry trends.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card shadow border-0 p-4'>
                <div className='card-icon'>
                  <img src={Icon3} alt='icon' />
                </div>
                <div className='card-body'>
                  <h3 className='mt-3'>Customer Satisfaction</h3>
                  <p>Our commitment to customer satisfaction is unwavering. We listen to your needs and deliver results that exceed your expectations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className='section-3 sx bg-light'>
        <div className='container-fluid py-5'> 
          <div className='service-header text-center'>
            <span>Our Projects</span>
            <h2>Our Recent Projects</h2>
            <p>Discover our latest construction projects, showcasing our expertise and commitment to excellence.</p>
          </div>
          <div className='row'>
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={Project1} alt='service-1' className='w-100' />
                </div>
                <div className='service-content'>
                  <div className='service-title'>
                    <h3>Museum of the Future</h3>
                  </div>
                  <div className='service-description'>
                    <p>The Museum of the Future is a state-of-the-art facility that showcases the latest advancements in technology and innovation.</p>
                  </div>
                  <a href='/services' className='btn btn-primary'>Learn More</a>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={Project2} alt='service-1' className='w-100' />
                </div>
                <div className='service-content'>
                  <div className='service-title'>
                    <h3>Dream Home</h3>
                  </div>
                  <div className='service-description'>
                    <p>Our Dream Home project is a testament to our commitment to excellence and innovation in construction.</p>
                  </div>
                  <a href='/services' className='btn btn-primary'>Learn More</a>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={Project3} alt='service-1' className='w-100' />
                </div>
                <div className='service-content'>
                  <div className='service-title'>
                    <h3>Skyscraper Tower</h3>
                  </div>
                  <div className='service-description'>
                    <p>Our Skyscraper Tower project is a testament to our commitment to excellence and innovation in construction.</p>
                  </div>
                  <a href='/services' className='btn btn-primary'>Learn More</a>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={Project4} alt='service-1' className='w-100' />
                </div>
                <div className='service-content'>
                  <div className='service-title'>
                    <h3>Green Building</h3>
                  </div>
                  <div className='service-description'>
                    <p>Our Green Building project is a testament to our commitment to excellence and innovation in construction.</p>
                  </div>
                  <a href='/services' className='btn btn-primary'>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home