import React from 'react';
import ReactPlayer from "react-player"
import TeslavsEdison from '../images/Tesla-vs-Edison.jpg'

const FunPage = () => {
    return (
        <div>
        <h2>Every Death Ray Has a Story</h2>
        <img src={TeslavsEdison} alt="Tesla Vs Edison" />
            <ReactPlayer
            url="https://www.youtube.com/watch?v=3gOR91oentQ" />
        </div>
    );
};

export default FunPage;