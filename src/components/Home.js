import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './Navbar'
// IMAGES
import Hero from '../images/Hero.png'
import Master from '../images/tesla-master-of-lightning.png'
import LightBulb from '../images/light-bulb.png'
import DeathRay from '../images/death-ray2.png'
import Mi6 from '../images/mi6.png'
import Fbi from '../images/fbi.png'
import Doj from '../images/doj.png'
import Cern from '../images/cern.png'
import Cia from '../images/cia.png'
import Kgb from '../images/kgb.png'

const Home = () => {
    return (
        <>
            <div>
                <img className='cover-image' src={Hero} alt="image" />
            </div>
            <div className='text-and-pic'>
                <div className='textandimage'>
                    <div className='colortext'>
                        <h1>About Nikola</h1>
                        <p>
                        Tesla was an absolute genius! He spoke eight languages - Serbian, English, Czech, German, France, Hungarian, Italian
                and Latin. He could memorize Entire books and recite them at will. He could visualize devices entirely in
                his head and then build them without ever writing anything down. His notable inventions include...
                        </p>
                    </div>
                    <div>
                        <img className='nikolapic' src={Master} alt="tesla pic" />
                    </div>
                </div>

                <div className='bulbdiv'>
                    <img className='image-6' src={LightBulb} alt="light bulb" />
                </div>
            </div>
            <div>
                <h6>REVIEWS</h6>
                <p>When asked what it felt to be the smartest man alive, Albert Einstein said, “ I don’t know, you have to ask Nikola Tesla!”</p>
            </div>
            <div className='whatever'>
                <div className='deathray'>
                    <img src={DeathRay} alt="death ray" />
                </div>
                <div className='yes'>
                    <div className="govagencies">
                        <img className='image-1' src={Mi6} alt="mi6" />
                        <img className='image-2' src={Fbi} alt="fbi" />
                        <img className='image-3' src={Doj} alt="doj" />
                    </div>
                    <div className="govagencies">
                        <img className='image-4' src={Cern} alt="doj" />
                        <img className='image-5' src={Cia} alt="doj" />
                        <img className='image-6' src={Kgb} alt="doj" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;


