import React from "react";
import Title from './helpers/Title'
import Footer from "./layout/Footer";

const Resume = () => (
  <div className="page">
    <Title text="Resume" />

    <div className="resume-container">
      <div className="columns">
        <div className="column recommendation-neuer">
          <a href="images/hayoung_yoo_resume_2018-page-001.jpg" data-lightbox="resume">
            <img src="images/hayoung_yoo_resume_2018-page-001.jpg" alt="page-1-thumbnail" />
          </a>
        </div>
        <div className="column">
          <div className="hider">

          </div>
          <a href="images/hayoung_yoo_resume_2018-page-002.jpg" data-lightbox="resume">
            <img src="images/hayoung_yoo_resume_2018-page-002.jpg" alt="page-2-thumbnail" />
          </a>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Resume;
