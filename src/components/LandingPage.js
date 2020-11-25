import React from 'react';
import Lightsaber from '../images/lightsaber.png'

const LandingPage = () => {
    return (
        <div>
            <div className='background2'>
                <h1>Join the Nikola Tesla Team</h1>
                <div className='formdiv'>
                    <form>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                        <br />
                        <input type="email" placeholder='Email Address' />
                        <br />
                        <input type="password" placeholder='Password' />
                        <br />
                        <button>Sign Up</button>
                    </form>
                    <img src={Lightsaber} alt="lightsaber" />
                </div>           
            </div>
        </div>
    );
};

export default LandingPage;