import React from 'react';
import ReactPlayer from "react-player"
import TeslavsEdison from '../images/Tesla-vs-Edison.jpg'
import DeathRay from '../images/DeathRay.png'

const FunPage = () => {
    return (
        <div>
        <h2>Every Death Ray Has a Story</h2>

        <img src={TeslavsEdison} alt="Tesla Vs Edison" />

            <ReactPlayer
            url="https://www.youtube.com/watch?v=3gOR91oentQ" />

        <img src={DeathRay} alt="Death Ray Blueprints" />

        </div>
    );
};

export default FunPage;