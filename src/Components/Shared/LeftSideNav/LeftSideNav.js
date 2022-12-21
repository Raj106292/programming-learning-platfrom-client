import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader';

const LeftSideNav = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://programming-learning-platform-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <h3><u>We have total {courses.length} courses</u></h3>
            {
                loading ? <Loader /> :
                    <div>
                        {
                            courses.map(course => <p key={course.id}>
                                <Link to={`/courses/${course.id}`}>{course.name}</Link>
                            </p>)
                        }
                    </div>
            }
        </div>
    );
};

export default LeftSideNav;