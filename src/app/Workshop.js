import React from "react";
import Title from "./helpers/Title";
import Picture from "./helpers/Picture";

const Workshop = () => (
  <div className="page workshop">
    <Title text="Reader's and Writer's Workshop" />
    <p class="subtitle">Choice, Voice, and Flexible Sitting = Empowerment and Engagement</p>
    
    <div className="columns">
      <div className="column">
        <Picture
          src="images/choice-1.png"
          text="Students receive differentiated workshop contracts at their level and are given the choice to choose what they want to work on. They can also choose to work independently or with a partner and sit wherever they want!"
        />
      </div>
      <div className="column">
        <Picture
          src="images/choice-2.png"
          text="Choice, freedom, and voice empower, engage, and help students take ownership of their own learning."
        />
      </div>
    </div>

    <Title text="Workshop Contract" />

    <div className="columns">
      <div className="column is-two-fifths">
        <Picture
          ratio={true}
          src="images/readers-1.png"
          text="Student record themselves reading and upload the best one to google classroom. Recording themselves reading engages students, and boost up their self-esteem to help them become confident readers. They can listen to themselves read and learn from their mistakes. They can also listen to other students read and learn from their peers."
        />
      </div>
      <div className="column is-three-fifths">
        <Picture
          src="images/readers-2.png"
          text="Reader’s Theater - Students practice reading with fluency and expression while having fun!"
        />
      </div>
    </div>

    <Title text="Differentiated Instruction" />

    <div className="columns">
      <div className="column">
        <Picture
          src="images/differentiated-instruction-1.png"
          text="I had students who struggled with decoding words with long vowels in my second grade class. My students showed huge interest and excitement with this activity."
        />
      </div>
      <div className="column">
        <Picture
          src="images/differentiated-instruction-2.png"
          text="This game helped to increase their engagement in learning as well as improved their decoding skills."
        />
      </div>
    </div>
  </div>
);

export default Workshop;
