import React from 'react'
import Title from './helpers/Title'
import Footer from './layout/Footer'

const Recommendations = () => (
  <div>
    <Title text="Recommendations" />

    <div className="recommendations-container">
      <div className="columns">
        <div className="column">
          <a href="images/LOR-Neuer-page-001.jpg" data-lightbox="LORS">
            <img src="images/LOR-Neuer-page-001.jpg" alt="neuer-thumbnail" />
            <div className="thumbnail-caption">
              <p className="thumbnail-caption-header">
                Eva Neuer
              </p>
              <p className="thumbnail-caption-body">
                Principal
                <br />
                Olivewood Elementary School
              </p>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="images/LOR-Miriam-page-001.jpg" data-lightbox="LORS">
            <img src="images/LOR-Miriam-page-001.jpg" alt="miriam-thumbnail" />
            <div className="thumbnail-caption">
              <p className="thumbnail-caption-header">
                Miriam Blank
              </p>
              <p className="thumbnail-caption-body">
                Blank
                <br />
                Olivewood Elementary School
              </p>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="images/LOR-Dawn-page-001.jpg" data-lightbox="LORS">
            <img src="images/LOR-Dawn-page-001.jpg" alt="dawn-thumbnail" />
            <div className="thumbnail-caption">
              <p className="thumbnail-caption-header">
                Dawn Ha
              </p>
              <p className="thumbnail-caption-body">
                Coach
                <br />
                Olivewood Elementary School
              </p>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="images/LOR-Diana-page-001.jpg" data-lightbox="LORS">
            <img src="images/LOR-Diana-page-001.jpg" alt="diana-thumbnail" />
            <div className="thumbnail-caption">
              <p className="thumbnail-caption-header">
                Diana Park
              </p>
              <p className="thumbnail-caption-body">
                Assistant Director
                <br />
                Grace Summer School
              </p>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="images/LOR-Patricia-page-001.jpg" data-lightbox="LORS">
            <img src="images/LOR-Patricia-page-001.jpg" alt="patricia-thumbnail" />
            <div className="thumbnail-caption">
              <p className="thumbnail-caption-header">
                Pat Murphy
              </p>
              <p className="thumbnail-caption-body">
                University Instructor & Support Provider
                <br />
                UCLA Extension - Special Education
              </p>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="images/LOR-Marie-page-001.jpg" data-lightbox="LORS">
            <img src="images/LOR-Marie-page-001.jpg" alt="marie-thumbnail" />
            <div className="thumbnail-caption">
              <p className="thumbnail-caption-header">
                Marie Sykes
              </p>
              <p className="thumbnail-caption-body">
                Teacher
                <br />
                Chaparral Elementary School
              </p>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="images/LOR-Jody-page-001.jpg" data-lightbox="LORS">
            <img src="images/LOR-Jody-page-001.jpg" alt="jody-thumbnail" />
            <div className="thumbnail-caption">
              <p className="thumbnail-caption-header">
                Jody Guarino
              </p>
              <p className="thumbnail-caption-body">
                Teacher
                <br />
                University of California, Irvine
              </p>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="images/LOR-Ingrid-page-001.jpg" data-lightbox="LORS">
            <img src="images/LOR-Ingrid-page-001.jpg" alt="ingrid-thumbnail" />
            <div className="thumbnail-caption">
              <p className="thumbnail-caption-header">
                Ingrid Beaty
              </p>
              <p className="thumbnail-caption-body">
                Teacher
                <br />
                Community Roots Academy
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default Recommendations