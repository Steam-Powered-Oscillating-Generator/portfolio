import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/FunPage'>F Edison</Link>
            <p>Nikola Tesla</p>
        </div>
    );
};

export default Navbar;