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
              <img className="nearpod" src="images/nearpod.png" />
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
              <img className="google-slides" src="images/google-sites.jpeg" />
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
            href="https://dreamy-hoover-cc92d8.netlify.com/"
          >
            Check it out here!
          </a>
          <figure className="image is-4by3">
            <img className="google-slides" src="images/desert-min.png" />
          </figure>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div className="tile is-parent is-8">
        <article className="tile is-child notification is-info">
          <p className="title">Team Task</p>
          <p className="subtitle">
            While I worked with expert groups, students worked on different team
            tasks. One of the tasks was to learn more about different habitats as
            a group by using the links I provided on Google Slides.
          </p>
          <figure className="image is-4by3">
            <img className="team-task" src="images/team-task-min.png" />
          </figure>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-danger">
          <p className="title">Science Project using Do Ink</p>
          <p className="subtitle">
            Make an alien planet and include characteristics, plants, animals, and interesting facts as a group
          </p>
          <figure className="image is-4by3">
            <img className="team-task" src="images/do-ink.jpg" />
          </figure>
        </article>
      </div>
    </div>
  </div>
);

export default BlendedLearning;
