import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../../firebase/firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

const ContextsUser = ({ children }) => {

    const [user, setUser]= useState({});
    const [loader, setLoader] = useState(true);

    const createNewUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL,
          });
    };

    const userLogIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const userLogInWithGoogle = (provider) => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoader(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {user, createNewUser, updateUser, userLogIn, logOut, userLogInWithGoogle, loader};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextsUser;