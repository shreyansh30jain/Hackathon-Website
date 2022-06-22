import React from "react";

import I1 from "../images/cardimage/Group 1000002466.png"
import I2 from "../images/cardimage/Group 1000002766.png"
import I3 from "../images/cardimage//Group 1000002767.png"
import I4 from "../images/cardimage/Group 1000002771.png"
import I5 from "../images/cardimage/Group 1000002772.png"
import I6 from "../images/cardimage/Group 1000002773.png"

export default function Footer(){
    return(
        <div className="footer">
            <div className="upper-footer">
            <div className="search--area">
                <h1 className="footer--heading">Explore Challenges</h1>
            </div>
            <div className="search">
            <input type="text" placeholder="Search"/>
            <div class="filter">
  <button class="btn8 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Filter
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Easy
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Medium
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Hard
  </label>
</div>
<hr></hr>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Active
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Upcoming
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Ongoing
  </label>
</div>
  </div>
  </div>
  </div>
  </div>
        <div className="lower-footer">
            <div className="card_1">
                <img src={I1} alt=""></img>
                <h3 className="upcoming_1">UPCOMING</h3>
                <h1 className="event_1">Data Science Bootcamp - Graded Datathon</h1>
                <h4 className="status_1">Starts in</h4>
                <button className="b1">Participate Now</button>
            </div>
            <div className="card_2">
            <img src={I2} alt=""></img>
            <h3 className="upcoming_2">UPCOMING</h3>
            <h1 className="event_2">Data Sprint 72 - Butterfly Identification</h1>
            <h4 className="status_2">Starts in</h4>
            <button className="b2">Participate Now</button>
            </div>
            <div className="card_3">
            <img src={I3} alt=""></img>
            <h3 className="upcoming_3">ACTIVE</h3>
            <h1 className="event_3">Data Sprint 71 - Weather Recognition</h1>
            <h4 className="status_3">Ends in</h4>
            <button className="b3">Participate Now</button>
            </div>
            <div className="card_4">
            <img src={I4} alt=""></img>
            <h3 className="upcoming_4">ACTIVE</h3>
            <h1 className="event_4">Data Sprint 70-Airline Passenger Satisfaction</h1>
            <h4 className="status_4">Ends in</h4>
            <button className="b4">Participate Now</button>
            </div>
            <div className="card_5">
            <img src={I5} alt=""></img>
            <h3 className="upcoming_5">PAST</h3>
            <h1 className="event_5">Engineering Graduates Employment Outcomes</h1>
            <h4 className="status_5">Ended on</h4>
            <button className="b5">Participate Now</button>
            </div>
            <div className="card_6">
            <img src={I6} alt=""></img>
            <h3 className="upcoming_6">PAST</h3>
            <h1 className="event_6">Travel Insurance Claim Prediction</h1>
            <h4 className="status_6">Ended on</h4>
            <button className="b6">Participate Now</button>
            </div>
        </div>
        </div>
    )
}