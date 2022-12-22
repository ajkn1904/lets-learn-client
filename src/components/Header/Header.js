import { faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../logo.svg"
import { AuthContext } from '../contexts/UserContext';


const Header = () => {

const {user, logout} = useContext(AuthContext);


    return (
        <div className="navbar">
            <div className="flex-1">
                <img src={Logo} alt="logo" style={{hight: "40px", width: "40px", borderRadius:"5px"}} />
                <h1 className="normal-case italic font-bold text-xl">Let'sLEARN</h1>
            </div>
            
            {/* to hide navbar options from small and medium devices */}
            <div className="flex-none gap-2">
               
                
                <div className='hidden sm:hidden md:hidden lg:block'>
                   
                    <Link to="/" className="btn btn-ghost normal-case">HOME</Link>
                    <Link to="/courses" className="btn btn-ghost normal-case">COURSES</Link>
                   {/*  <Link to="/faq" className="btn btn-ghost normal-case">FAQ</Link> */}
                    <Link to="/blog" className="btn btn-ghost normal-case">BLOG</Link>

                    {  user?.uid ?
                        <button className="btn btn-ghost normal-case" onClick={logout}>LOG OUT</button>
                    :
                    <>
                        <button className="btn btn-ghost normal-case"><Link to="/login">LOG IN</Link></button>
                        <button className="btn btn-ghost normal-case"><Link to="/signup">SIGN UP</Link></button>
                    </>  
                    }

                </div>


                {/* to show navbar options from small and medium devices */}
                <>
                <div className="dropdown lg:hidden">
                   
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-40">

                        <Link to="/" className="btn btn-ghost normal-case">HOME</Link>
                        <Link to="/courses" className="btn btn-ghost normal-case">COURSES</Link>
                       {/*  <Link to="/faq" className="btn btn-ghost normal-case">FAQ</Link> */}
                        <Link to="/blog" className="btn btn-ghost normal-case">BLOG</Link>

                        {  user?.uid ?
                            <button className="btn btn-ghost normal-case" onClick={logout}>LOG OUT</button>
                        :
                        <>
                            <button className="btn btn-ghost normal-case"><Link to="/login">LOG IN</Link></button>
                            <button className="btn btn-ghost normal-case"><Link to="/signup">SIGN UP</Link></button>
                        </>  
                        }
                    </ul>
                </div>
                </>


                {/* Theme toggler for light and dark UI*/}
                <button className='btn btn-ghost btn-circle'>
                    <label className="swap swap-rotate">
                    <input type="checkbox" />
                    <span className='swap-on fill-current'>
                        <FontAwesomeIcon icon={faMoon} className="w-5 h-5 bg-black p-1 rounded-full text-white" title='Light'></FontAwesomeIcon>
                    </span>

                    <span className='swap-off fill-current'>
                        <FontAwesomeIcon icon={faSun} className="w-5 h-5 bg-white p-1 rounded-full text-black" title='Dark'></FontAwesomeIcon>
                    </span>    
                    </label>
                </button>
         
                {/* Showing users info dynamically */}
                { user?.uid ? 

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                        <img title={user?.displayName} src={user?.photoURL} alt=""/>
                    </div>
                </label>
                :
                <Link to='/login' className="btn btn-ghost btn-circle">
                        <FontAwesomeIcon icon={faUser} className="w-5 h-5"></FontAwesomeIcon>
                </Link>
                }   
 
            </div>
        </div>
    );
};

export default Header;

