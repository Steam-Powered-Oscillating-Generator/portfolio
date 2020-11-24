import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './Navbar'
// IMAGES
import Hero from '../images/Hero.png'
import Master from '../images/tesla-master-of-lightning.png'

const Home = () => {
    return (
        <>
            <div>
                <img src={Hero} alt="image" />
            </div>
            <div>
                <div>
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <img src={Master} alt="tesla pic" />
                </div>
            </div>
        </>
    );
};

export default Home;


