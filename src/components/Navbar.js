import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/FunPage'>Edison Who?</Link>
            <Link to='/FindStorms'>Find Storms</Link>
        </nav>
        
    );
};

export default Navbar;