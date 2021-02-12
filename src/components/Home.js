import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

// IMAGES
import Hero from '../images/Hero.png';
import Master from '../images/tesla-master-of-lightning.png';
import DeathRay from '../images/death-ray2.png';
import Mi6 from '../images/mi6.png';
import Fbi from '../images/fbi.png';
import Doj from '../images/doj.png';
import Cern from '../images/cern.png';
import Cia from '../images/cia.png';
import Kgb from '../images/kgb.png';

const Home = () => {
    useEffect(() => { startElectricity() }, [])
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
                            Tesla was an absolute genius! He spoke eight languages:
                            <br /> Serbian, English, Czech, German, France, Hungarian, Italian
                            <br />and Latin. He could memorize Entire books and recite
                            <br />them at will. He could visualize devices entirely in
                            <br />his head and then build them without ever writing
                            <br />anything down. He invented the first alternating current
                            <br />(AC) motor and developed AC generation and transmission
                            <br />technology. Though he was famous and respected, he was
                            <br />never able to translate his copious inventions into
                            <br />long-term financial success — unlike his early employer
                            <br />and chief rival, Thomas Edison.
                        </p>
                    </div>
                    <div>
                        <img className='nikolapic' src={Master} alt="tesla pic" />
                    </div>
                </div>
                <div className="electricity">
                    <div className="plus-diode">
                        <div className="ball">
                            <div className="shine"></div>
                        </div>
                        <div className="socket"></div>
                        <div className="socket foot"></div>
                        <div className="ring"></div>
                        <div className="ring medium"></div>
                        <div className="ring small"></div>
                    </div>
                    <div className="minus-diode">
                        <div className="ball">
                            <div className="shine"></div>
                        </div>
                        <div className="socket"></div>
                        <div className="socket foot"></div>
                        <div className="ring"></div>
                        <div className="ring medium"></div>
                        <div className="ring small"></div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
                        <defs>
                            <filter id="f1" x="0" y="0">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                            </filter>
                        </defs>
                        <g>
                            <path d="M0,100,500,100" fill="none" stroke="#42ee77" filter="url(#f1)"></path>
                            <path d="M0,100,500,100" fill="none" stroke="#42ee77"></path>
                        </g>
                    </svg>
                </div>
            </div>
            <div className='quote'>
                <h2>REVIEWS</h2>
                <br />
                <p>When asked what it felt to be the smartest man alive, Albert Einstein said, “ I don’t know, you have to ask Nikola Tesla!”</p>
            </div>
            <div className='DRsection'>
                <div className='deathray'>
                    <img src={DeathRay} alt="death ray" />
                </div>
                <div>
                    <h2 className='sponsorh2'>Sponsored By:</h2>
                </div>
                <div className='logos'>
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

function startElectricity() {
    class electricity {
        constructor(selector) {
            this.svg = document.querySelector(selector);
            this.run();
        }

        render() {
            let d = this.calculatePoints(0, 0, 500, 80);
            this.svg.querySelectorAll('path')[0].setAttribute('d', d);
            this.svg.querySelectorAll('path')[1].setAttribute('d', d);
        }

        calculatePoints(x, y, width, height) {
            let points = [[x, height / 2]];
            let maxPoints = 10;
            let chunkRange = width / maxPoints;
            for (let i = 0; i < maxPoints; i++) {
                let cx = chunkRange * i + Math.cos(i) * chunkRange;
                let cy = Math.random() * height;
                points.push([cx, cy]);
            }

            points.push([width, height / 2]);

            let d = points.map(point => point.join(','));
            return 'M' + d.join(',');
        }

        run() {
            let fps = 25,
                now,
                delta,
                then = Date.now(),
                interval = 1000 / fps,
                iteration = 0,
                loop = () => {
                    requestAnimationFrame(loop);

                    now = Date.now();
                    delta = now - then;
                    if (delta > interval) {
                        then = now - delta % interval;

                        // update stuff
                        this.render(iteration++);
                    }
                };
            loop();
        }
    }



    new electricity('svg');

}
