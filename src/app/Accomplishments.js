import React from 'react'
import Title from './helpers/Title'
import Footer from './layout/Footer'

const Accomplishments = () => (
  <div>
    <Title text="Accomplishments" />

    <div className="certifications-container">
      <a href="images/glad-certification.jpg" data-lightbox="certifications">
        <img src="images/glad-certification.jpg" alt="glad-certification" />
        <div className="thumbnail-caption">
          <p className="thumbnail-caption-header">
            GLAD Certification
          </p>
        </div>
      </a>
    </div>

    <Footer />
  </div>
)

export default Accomplishments