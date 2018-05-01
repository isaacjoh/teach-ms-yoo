import React from "react";
import Title from './helpers/Title'

const Resume = () => (
  <div className="page">
    <Title text="Resume" />

    <div className="resume-container">
      <div className="columns">
        <div className="column resume-page-1">
          <a href="images/hayoung_yoo_resume_2018-page-001.jpg" data-lightbox="resume">
            <img src="images/hayoung_yoo_resume_2018-page-001.jpg" alt="page-1-thumbnail" />
          </a>
        </div>
        <div className="column resume-page-2">
          <a href="images/hayoung_yoo_resume_2018-page-002.jpg" data-lightbox="resume">
            <img src="images/hayoung_yoo_resume_2018-page-002.jpg" alt="page-2-thumbnail" />
          </a>
        </div>
      </div>
    </div>

  </div>
);

export default Resume;
