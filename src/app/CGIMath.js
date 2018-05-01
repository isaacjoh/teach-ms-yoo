import React from "react";
import Title from "./helpers/Title";
import Picture from "./helpers/Picture";

const CGIMath = () => (
  <div className="page cgi-math">
    <Title text="CGI Math" />

    <p className="subtitle">
      I create word problems based on students’ interests, differentiate instruction by providing different number sets, and plan an inquiry-based instruction that is centered around the students needs. I challenge students to productively struggle and persevere with the growth mindset. They are given a safe place to share during class discussion and critique the reasoning of others. Students are strongly encouraged to use manipulatives, virtual tools online, and explain everything to show their thinking visually and orally.
    </p>
    <div className="columns">
      <div className="column">
        <Picture
          ratio={true}
          src="images/cgi-math.jpg"
        />
      </div>
    </div>
  </div>
);

export default CGIMath;
