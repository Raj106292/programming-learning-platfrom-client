import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../../../firebase/firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

const ContextsUser = ({ children }) => {

    const user = { displayName: '' };

    const userLogIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {user, userLogIn}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextsUser;