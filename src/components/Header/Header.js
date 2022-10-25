import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../logo.svg"

const Header = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <img src={Logo} alt="logo" style={{hight: "40px", width: "40px", borderRadius:"5px"}} />
                <h1 className="normal-case font-bold text-xl">Let'sLEARN</h1>
            </div>
        <div className="flex-none gap-2">

        
        <Link to="/" className="btn btn-ghost normal-case">Home</Link>
        <Link to="/courses" className="btn btn-ghost normal-case">Courses</Link>
        <Link to="/faq" className="btn btn-ghost normal-case">FAQ</Link>
        <Link to="/blog" className="btn btn-ghost normal-case">Blog</Link>
        <Link to="/login" className="btn btn-ghost normal-case">Login</Link>
        <Link to="/signup" className="btn btn-ghost normal-case">Signup</Link>
        <Link to="/" className="btn btn-ghost normal-case">Logout</Link>

        <button className='btn btn-outline'>
            <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>

            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
        </button>
            
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt=""/>
            </div>
        </label>
 
        </div>
        </div>
    );
};

export default Header;

