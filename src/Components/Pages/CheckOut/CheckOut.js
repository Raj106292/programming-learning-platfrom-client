import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Shared/Contexts/ContextsUser';

const CheckOut = () => {

    const {user} = useContext(AuthContext);

    const courseData = useLoaderData();
    // console.log(courseData);

    return (
        <div>
            <h2 className='text-primary'>Hello, {user?.displayName}.</h2>
            <h3 className='text-success'>Your Selected Course is: {courseData.name}</h3>
        </div>
    );
};

export default CheckOut;