import React from "react";
import Title from "./helpers/Title";

const BlendedLearning = () => (
  <div className="page blended-learning">
    <Title text="Blended Learning" />

    <div className="tile is-ancestor">
      <div className="tile is-vertical is-parent is-4">
        <div className="tile is-child is-vertical">
          <article className="tile is-child notification is-info">
            <p className="title">Expert Groups were taught using Nearpod</p>
            <figure className="image is-4by3">
              <img
                className="blended-learning-img"
                src="images/nearpod.png"
                alt="nearpod"
              />
            </figure>
          </article>
          <article className="tile is-child notification is-warning">
            <p className="title">Google Sites</p>
            <p className="subtitle">
              Students have an authentic audience to share with what they have
              been learning through the year. It shows their growth and gives
              students time to self-reflect on their learning.
            </p>
            <figure className="image is-4by3">
              <img
                className="blended-learning-img"
                src="images/google-sites.jpeg"
                alt="google-slides"
              />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-primary">
          <p className="title">Virtual Field Trip</p>
          <p className="subtitle">
            Students took a virtual reality field trip to the different habitats
            and participated in a discussion with their partner by asking
            questions, making comments and making predictions.
          </p>
          <a
            className="subtitle"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dreamy-hoover-cc92d8.netlify.com/"
          >
            Check it out here!
          </a>
          <figure className="image is-4by3">
            <img
              className="blended-learning-img"
              src="images/desert-min.png"
              alt="desert"
            />
          </figure>
        </article>
      </div>
    </div>

    <div className="tile is-ancestor">
      <div className="tile is-parent is-6">
        <article className="tile is-child notification is-info">
          <p className="title">Team Task</p>
          <p className="subtitle">
            While I worked with expert groups, students worked on different team
            tasks. One of the tasks was to learn more about different habitats
            as a group by using the links I provided on Google Slides.
          </p>
          <figure className="image is-4by3">
            <img
              className="blended-learning-img"
              src="images/team-task-min.png"
              alt="team-task-1"
            />
          </figure>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-danger">
          <p className="title">Science Project using Do Ink</p>
          <p className="subtitle">
            Make an alien planet and include characteristics, plants, animals,
            and interesting facts as a group
          </p>
          <iframe
            src="https://www.youtube.com/embed/_2FMkC1fHDw"
            title="science project using do ink"
            width="100%"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allowFullScreen
          />
        </article>
      </div>
    </div>
  </div>
);

export default BlendedLearning;
