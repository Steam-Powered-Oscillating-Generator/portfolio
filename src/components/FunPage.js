import React from 'react';
import ReactPlayer from "react-player"
import TeslavsEdison from '../images/Tesla-vs-Edison.jpg'
import DeathRay from '../images/DeathRay.png'

const FunPage = () => {
    return (
        <div className="funStuff">
            <div>
                <h2 className="TvEtext">Every Death Ray Has a Story</h2>
            </div>

            <div className="TvEimg">
                <img src={TeslavsEdison} alt="Tesla Vs Edison" />
            </div>

            <div>
            <h3 className="TvEtext">Watch This - Tesla vs. Edison: Drunk History</h3>
            </div>
            <div className="DHvideo">
            <ReactPlayer
                url="https://www.youtube.com/watch?v=3gOR91oentQ" />
            </div>

            <div>
            <h3 className="TvEtext">Tesla's Death Ray Blueprints</h3>
            </div>
            <div className="DRdiv">
                <img className="blueprints" src={DeathRay} alt="Death Ray Blueprints" />
            </div>
        </div>
    );
};

export default FunPage;