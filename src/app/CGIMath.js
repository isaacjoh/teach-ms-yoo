import React from "react";
import Title from "./helpers/Title";
import Picture from "./helpers/Picture";

const CGIMath = () => (
  <div className="page cgi-math">
    <Title text="CGI Math" />

    <div className="columns">
      <div className="column">
        <Picture
          ratio={true}
          src="images/cgi-math.jpg"
          text="An example of a CGI Math class material I created."
        />
      </div>
    </div>
  </div>
);

export default CGIMath;
