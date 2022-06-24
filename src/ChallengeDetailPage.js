import React from "react"
import I1 from "./components/images/icons/carbon_skill-level-basic.svg"

export default function ChallengeDetailPage(){
    return(
        <div className="challenge--container">
            <div className="challenge--time"><h3>Starts on 17th Jun'22 09:00 PM (India Standard Time)</h3></div>
            <h1>Data Sprint 72 - Butterfly Identification</h1>
            <h2>Identify the class to which each butterfly belongs to</h2>
            <div className="challenge--image">
                <img src={I1} alt=""></img>
                <h3>EASY</h3>
            </div>
            <div className="lower-challenge">
                <h1>Overview</h1>
                <div className="edit-class">
                <button className="edit">Edit</button>
                </div>
                <div className="delete-class">
                <button className="delete">delete</button>
                </div>
            </div>
            <p className="para">
            Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.

An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.

Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.
            </p>
        </div>
    )
}