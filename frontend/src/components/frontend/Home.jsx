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

import Client1 from '../../assets/images/author-2.jpg';

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import Blog1 from '../../assets/images/construction-work-2698790_1280.jpg';
import Blog2 from '../../assets/images/construction9.jpg';
import Blog3 from '../../assets/images/construction11.jpg'; 

import 'swiper/css';

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
                <a className='btn btn-primary large'>Contact Now</a>
                <a className='btn btn-secondary ms-2 large'>View Projects</a>
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
                  <a href='/services' className='btn btn-primary small'>Learn More</a>
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
                  <a href='/services' className='btn btn-primary small'>Learn More</a>
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
                  <a href='/services' className='btn btn-primary small'>Learn More</a>
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
                  <a href='/services' className='btn btn-primary small'>Learn More</a>
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
                  <a href='/services' className='btn btn-primary small'>Learn More</a>
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
                  <a href='/services' className='btn btn-primary small'>Learn More</a>
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
                  <a href='/services' className='btn btn-primary small'>Learn More</a>
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
                  <a href='/services' className='btn btn-primary small'>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* Issue #1 : Not Responsive on Mobile */}
      <section className='section-5'>
        <div className='container py-5'>
          <div className='service-header text-center'>
            <span>Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>Discover what our clients have to say about their experience with Silva Builders.</p>
          </div>
          <Swiper
            modules={[ Pagination ]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            breakpoints={{
              // When window width is >= 768px
              768: {
                slidesPerView: 2
              },
              // When window width is >= 1024px
              1024: {
                slidesPerView: 3
              }
            }}
          >
            <SwiperSlide>
              <div className='card shadow border-0 p-4'>
                <div className='card-body p-5'>
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <div className='content pt-4 pb-2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <hr />
                    <div className='d-flex meta'>
                      <div>
                        <img src={Client1} alt='client' width={50} />
                      </div>
                      <div>
                        <div className='ps-3'>
                          <div className='name'>
                            John Doe
                          </div>
                          <div className='designation'>
                            CEO, Company Name
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card shadow border-0 p-4'>
                <div className='card-body p-5'>
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <div className='content pt-4 pb-2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <hr />
                    <div className='d-flex meta'>
                      <div>
                        <img src={Client1} alt='client' width={50} />
                      </div>
                      <div>
                        <div className='ps-3'>
                          <div className='name'>
                            John Doe
                          </div>
                          <div className='designation'>
                            CEO, Company Name
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card shadow border-0 p-4'>
                <div className='card-body p-5'>
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <div className='content pt-4 pb-2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <hr />
                    <div className='d-flex meta'>
                      <div>
                        <img src={Client1} alt='client' width={50} />
                      </div>
                      <div>
                        <div className='ps-3'>
                          <div className='name'>
                            John Doe
                          </div>
                          <div className='designation'>
                            CEO, Company Name
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card shadow border-0 p-4'>
                <div className='card-body p-5'>
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <div className='content pt-4 pb-2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <hr />
                    <div className='d-flex meta'>
                      <div>
                        <img src={Client1} alt='client' width={50} />
                      </div>
                      <div>
                        <div className='ps-3'>
                          <div className='name'>
                            John Doe
                          </div>
                          <div className='designation'>
                            CEO, Company Name
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Blog */}
      <section className='section-6 bg-light py-5'>
        <div className='container'>
          <div className='service-header text-center'>
            <span>Blog</span>
            <h2>Latest Articles & Blog</h2>
            <p>Stay updated with our latest articles and blog posts, covering the latest trends and insights in the construction industry.</p>
          </div>
          <div className='row pt-3'>
            <div className='col-md-4 col-lg-4'>
              <div className='card shadow border-0'>
                <div className='card-image-top'>
                   <img src={Blog1} alt='blog-1' className='w-100' />
                </div>
                <div className='card-body p-4'>
                  <div className='mb-3'>
                    <a href='#' className='title'>Upgrade Your Home with Silva Builders</a>
                  </div>
                  <a href='/#' className='btn btn-primary small'>Read More</a>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-lg-4'>
              <div className='card shadow border-0'>
                <div className='card-image-top'>
                   <img src={Blog2} alt='blog-1' className='w-100' />
                </div>
                <div className='card-body p-4'>
                  <div className='mb-3'>
                    <a href='#' className='title'>The Importance of Quality Construction</a>
                  </div>
                  <a href='/#' className='btn btn-primary small'>Read More</a>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-lg-4'>
              <div className='card shadow border-0'>
                <div className='card-image-top'>
                   <img src={Blog3} alt='blog-1' className='w-100' />
                </div>
                <div className='card-body p-4'>
                  <div className='mb-3'>
                    <a href='#' className='title'>The Future of Construction Technology</a>
                  </div>
                  <a href='/#' className='btn btn-primary small'>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home