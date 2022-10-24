import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h3>We have total {courses.length} courses</h3>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/categories/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;