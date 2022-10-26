import { faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../logo.svg"
import { AuthContext } from '../contexts/UserContext';


const Header = () => {

const {user, logout} = useContext(AuthContext);
console.log(user)

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

        {  user?.uid ?
            <button className="btn btn-ghost normal-case" onClick={logout}>Logout</button>
            :
            <>
                <button className="btn btn-ghost normal-case"><Link to="/login">Login</Link></button>
                <button className="btn btn-ghost normal-case"><Link to="/signup">Signup</Link></button>
            </>  
        }

        <button className='btn btn-outline'>
            <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>

            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
        </button>
         
         
         { user?.uid ? 

        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div onFocus={user?.name} className="w-10 rounded-full">
                <img title={user?.name} src={user?.photoURL} alt=""/>
            </div>
            <span>{user?.email}</span>
        </label>
        :
        <div onFocus={user?.name} className="w-10 rounded-full">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </div>
         }   
 
        </div>
        </div>
    );
};

export default Header;

