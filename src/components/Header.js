import React from "react";

import  I4 from "../images/icons/PicsArt_04-14-04.42 1.svg"
import I5 from "../images/icons/Group 1000002515.svg"
import I6 from "../images/icons/Group 1000002516.svg"
import I7 from "../images/icons/Group 1000002518.svg"

  const Header= ({nextPage}) => {
    const handlenext = () => {
        nextPage();
    }
  return (
    <body>
      <nav>
      <div className="cont">
      <div className="centered">
          <div className="headings">
            <h1 className="heading">
              Accelerate Innovation <br></br>with Global AI Challenges
            </h1>
            <p className="data">
              AI Challenges at DPhi simulate real-world problems.<br/> It is a great
              place to put your AI/Data Science <br/>skills to test on diverse
              datasets allowing you to<br/> foster learning through competitions.
              Create Challenge
            </p>
            <img className="rocket" src={I4} alt="pics_art"/>
        </div>
        <button className='buttons' onClick={handlenext}>CREATE Challenge</button>
        </div>
      </div>
      <div className="inner--container">
        <div className="sec_1">
          <img src={I5} alt="sec_1"/>
          <h1>100K+</h1>
          <h2>AI model submissions</h2>
        </div>
        <div className="sec_2">
          <img src={I6} alt="sec_2"/>
          <h1>50K+</h1>
          <h2>Data Scientists</h2>
        </div>
        <div className="sec_3">
        <img src={I7} alt="sec_3"/>
        <h1>100+</h1>
        <h2>AI Challenges hosted</h2>
        </div>
      </div>
    </nav>
    </body>
  );
}

export default Header;
