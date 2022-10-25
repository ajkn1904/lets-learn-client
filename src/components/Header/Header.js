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

        
        <a className="btn btn-ghost normal-case">Courses</a>
        <a className="btn btn-ghost normal-case">FAQ</a>
        <a className="btn btn-ghost normal-case">Blog</a>
        <a className="btn btn-ghost normal-case">Login</a>
        <a className="btn btn-ghost normal-case">Signup</a>
        <a className="btn btn-ghost normal-case">Logout</a>

        <>
        <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>

        <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
        </>
            
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

