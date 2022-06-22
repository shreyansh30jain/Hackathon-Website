import React from "react";

import I1 from "../images/icons/carbon_notebook-reference.svg"
import I2 from "../images/icons/Vector.svg"
import I3 from "../images/icons/Robot.svg"
import I4 from "../images/icons/IdentificationCard.svg"
export default function Hero(){
    return(
        <div className="hero">
            <h1 className="inner--heading">Why Participate in AI Challenges?</h1>
            <div className="blocks">
                <div className="block_1">
                    <img src={I1} alt="icon1"/>
                    <h3 className="b1">Prove your skills</h3>
                    <p className="p1">Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                </div>
                <div className="block_2">
                <img src={I2} alt="icon1"/>
                <h3 className="b2">Learn from community</h3>
                <p className="p2">One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>
                </div>
                <div className="block_3">
                <img src={I3} alt="icon1"/>
                <h3 className="b3">Challenge yourself</h3>
                <p className="p3">There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>
                </div>
                <div className="block_4">
                <img src={I4} alt="icon1"/>
                <h3 className="b4">Earn recognition</h3>
                <p className="p4">You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>
                </div>
            </div>
        </div>
    )
}