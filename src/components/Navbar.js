import React from 'react';
import { Link } from 'react-router-dom'
import Image from '../images/giphy.png'

const Navbar = () => {
    return (
        <header>
            <img src={Image} />
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/FunPage'>Edison Who?</Link></li>
                    <li><Link to='/FindStorms'>Storm Tracker</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;