import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import app from '../../../firebase/firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

const ContextsUser = ({ children }) => {

    const [user, setUser]= useState({});

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL,
          });
    };

    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {user, createNewUser, updateUser, userLogIn};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextsUser;