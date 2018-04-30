import React from 'react'
import Title from './helpers/Title'
import Footer from './layout/Footer'

const BlendedLearning = () => (
  <div className="page blended-learning">
    <div className="container">
      <div className="columns">
        <div className="card column">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
            </figure>
          </div>
          
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Virtual field trip</p>
                <a className="subtitle is-6">https://dreamy-hoover-cc92d8.netlify.com/</a>
              </div>
            </div>

            <div className="content">
              Students took a virtual reality field trip to the different habitats and participated in a discussion with their partner by asking questions, making comments and making predictions <a>@bulmaio</a>.
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>

        <div className="card column">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
            </figure>
          </div>
          
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Expert Groups were taught using nearpod</p>
                <a className="subtitle is-6">https://nearpod.com/</a>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>

        <div className="card column">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
            </figure>
          </div>
          
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Team Task</p>
              </div>
            </div>

            <div className="content">
              While I worked with expert groups, students worked on different team tasks. One of the task was to learn more about different habitats as a group by using the links I provided on google slides.  <a>@bulmaio</a>.
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default BlendedLearning