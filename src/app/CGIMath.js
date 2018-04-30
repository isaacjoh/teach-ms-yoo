import React from 'react'
import Title from "./helpers/Title";
import Picture from "./helpers/Picture";

const CGIMath = () => (
  <div className="page">
    <Title text="CGI Math" />

    <div className="columns">
      <div className="column">
        <Picture
          ratio={true}
          src="images/cgi-math.jpg"
          text="I had students who struggled with math."
        />
      </div>
      <div className="column">
        <Picture
          ratio={true}
          src="images/cgi-math.jpg"
          text="This worksheet is great."
        />
      </div>
      <div className="column">
        <Picture
          ratio={true}
          src="images/cgi-math.jpg"
          text="This worksheet is great."
        />
      </div>
    </div>
  </div>
)

export default CGIMath