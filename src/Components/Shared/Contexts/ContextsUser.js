import React, { createContext } from 'react';

export const AuthContext = createContext();

const ContextsUser = ({ children }) => {

    const user = { displayName: '' };

    const authInfo = {user}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextsUser;