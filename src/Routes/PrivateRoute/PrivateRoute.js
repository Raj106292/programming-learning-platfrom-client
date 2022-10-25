import React, { useContext } from 'react';
import { AuthContext } from '../../Components/Shared/Contexts/ContextsUser';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;