import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';


/* Private route for preventing access of some specific route without log in */
const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    /* loader for keeping users logged in even after reloading the page */
    if(loading){
        return <div>Loading...</div>
    }

    if(user && user.uid){
        return children;
    }
    else{
        return (
            /* navigating users current location */
           <Navigate to='/login' state={{from: location}} replace></Navigate>
        );
    }
};

export default PrivateRoute;