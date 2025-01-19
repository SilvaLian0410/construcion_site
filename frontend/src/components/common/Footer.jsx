import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-3'>
              <h3>Silva Construction</h3>
              <div className='pe-5'>
              <p>At Silva Builders Builders, we are a team of skilled professionals dedicated to delivering exceptional construction solutions.</p>
              </div>
            </div>

            <div className='col-md-3'>
              <h3 className='mb-3'>Our Services</h3>
              <ul>
                <li><a href='#'>Civil Construction</a></li>
                <li><a href='#'>Residential Construction</a></li>
                <li><a href='#'>Corporate Construction</a></li>
                <li><a href='#'>Industrial Construction</a></li>
                <li><a href='#'>Building Construction</a></li>
              </ul>
            </div>

            <div className='col-md-3'>
            <h3 className='mb-3' >Quick Links</h3>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Blogs</a></li>
                <li><a href='#'>Contact Us</a></li>
              </ul>
            </div>

            <div className='col-md-3'>
            <h3 className='mb-3'>Contact Us</h3>
              <ul>
                <li><a href='#'>(06) 1234567890</a></li>
                <li><a href='#'>info@silvaconstruction.com</a></li>
                <li><a href='#'>Level 31, WeWork, Buruj Khalifa, Dubai, UAE</a></li>
              </ul>
            </div>
            <hr />
            <div className='text-center pt-5'>
              <p>Copyright © 2025 Silva Construction. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer