import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav'>
            <Link to="/">Home</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;