import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../Firebase/firebase.config';
import { useState, useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

const [user, setUser] = useState(null);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

const logout = () => {
    return signOut(auth)
}

const loginWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
}

useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
    });

    return () => unSubscribe();
} , [])

const authInfo = {user, login, createUser, logout, loginWithGoogle}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;