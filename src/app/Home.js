import React from "react";
import Title from "./helpers/Title";

const Home = () => (
  <div className="page">
    <div className="home-section">
      <div className="columns">
        <div className="column bio-img">
          <img src="images/hayoung-pic-small.jpg" alt="teacher" />
        </div>
        <div className="column bio-info">
          <Title text="Hello!" />
          <p>
            My name is Hayoung Yoo and I am a second grade teacher at Olivewood
            Elementary School in Lake Forest. I have a teaching credential and a
            Master of Arts in Teaching degree from University of California,
            Irvine. I also completed the University Induction Clear Credential
            Program at University of California, Los Angeles.
          </p>
          <p>
            My philosophy in teaching is to always be student centered and to
            create a positive classroom environment where students feel
            empowered to learn, grow, and become passionate lifelong learners
            and creative problem solvers.
          </p>
          <p>Please feel free to contact me below. Thank you for visiting!</p>
          <div className="icon-buttons">
            <a className="icon-button mail" href="mailto:Hayoung.Yoo@svusd.org">
              <i className="fas fa-envelope icon-mail" />
              <span />
            </a>
            <a
              className="icon-button linkedin"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hayoung-yoo-b5071375/"
            >
              <i className="fab fa-linkedin icon-linkedin" />
              <span />
            </a>
            <a
              className="icon-button twitter"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/TeachMsYoo"
            >
              <i className="fab fa-twitter icon-twitter" />
              <span />
            </a>
          </div>
        </div>
      </div>
      <div className="certs-section">
        <Title text="Certifications" />

        <div className="certs-container">
          <div className="cert-wrapper">
            <img
              className="cert"
              src="images/google-cert.png"
              alt="google-cert"
            />
          </div>
          <div className="cert-wrapper">
            <a
              href="images/glad-certification.jpg"
              data-lightbox="certifications"
            >
              <img
                className="cert"
                src="images/glad-certification.jpg"
                alt="glad-certification"
              />
            </a>
          </div>
          <div className="cert-wrapper">
            <a
              href="images/iirp-cert.jpg"
              data-lightbox="certifications"
            >
              <img
                className="cert"
                src="images/iirp-cert.jpg"
                alt="iirp-certification"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
