import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';
import { useState, useEffect } from 'react';

export const AuthContext = createContext();     //creating context

const auth = getAuth(app);          //firebase auth

const UserContext = ({children}) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

/* Create user with email & password */
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

/* Log in by email & password */
const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

/* Log out */
const logout = () => {
    setLoading(true);
    return signOut(auth)
}

/* Sign in with different providers */
const continueWithProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
}

/* Update profile */
const updatePro = (profile) => {
    return updateProfile(auth.currentUser, profile)
}

/* using useEffect to set user*/
useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
    });

    return () => unSubscribe();
} , [])

const authInfo = {user, login, createUser, logout, continueWithProvider, loading, updatePro}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;