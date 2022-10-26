import React from 'react';
import { FaSadTear } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2>Oops!!</h2>
            <h3>404!!! Not Found</h3>
            <div className='fs-1'>
                <FaSadTear></FaSadTear>
            </div>
            <Link to='/'><button className='btn btn-secondary'>Go to Home</button></Link>
        </div>
    );
};

export default NotFound;