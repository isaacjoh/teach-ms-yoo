import React from 'react'
import Title from './helpers/Title'
import Footer from './layout/Footer'

const Home = () => (
  <div>
    <div className="home-section">
      <div className="columns">
        <div className="column bio-img">
          <img src="images/hayoung-pic.jpg" alt="teacher"/>
        </div>
        <div className="column bio-info">
          <Title text="Hello!" />
          <p>
            My name is Hayoung Yoo and I am a second grade teacher at Olivewood Elementary School in Lake Forest. I have a teaching credential and a Master of Arts in Teaching degree from University of California, Irvine.
          </p>
          <p>
            My philosophy in teaching is to always be student centered and create a welcome, warm, and positive classroom environment where students feel empowered to learn, realize their individual potential, and become passionate lifelong learners.
          </p>
          <p>
            Please feel free to contact me below. Thank you for visiting!
          </p>
          <div className="icon-buttons">
            <a className="icon-button mail" href="mailto:Hayoung.Yoo@svusd.org">
              <i className="fas fa-envelope icon-mail"></i>
              <span></span>
            </a>
            <a className="icon-button linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hayoung-yoo-b5071375/">
              <i className="fab fa-linkedin icon-linkedin"></i>
              <span></span>
            </a>
            <a className="icon-button twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/TeachMsYoo">
              <i className="fab fa-twitter icon-twitter"></i>
              <span></span>
            </a>
          </div>
        </div>
      </div>
      <div className="certs-section">
        <Title text="Certifications" />

        <div className="certs-container">
          <img className="cert" src="images/google-cert.png" alt="google-cert" />
          <a href="images/glad-certification.jpg" data-lightbox="certifications">
            <img className="cert" src="images/glad-certification.jpg" alt="glad-certification" />
          </a>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
)

export default Home