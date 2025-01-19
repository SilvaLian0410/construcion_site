import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';

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

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home