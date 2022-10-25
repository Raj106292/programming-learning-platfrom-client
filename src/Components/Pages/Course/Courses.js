import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = () => {

    const courseData = useLoaderData();
    console.log(courseData);

    return (
        <div>
            <h3>This is courses</h3>
            <Card className="">
                <Card.Header><strong>Welcome to {courseData.name} course</strong></Card.Header>
                <Card.Img variant="top" style={{height: '240px'}} src={courseData.course_image} />
                <Card.Body>
                    <Card.Title className='text-center'>{courseData.name}</Card.Title>
                    <Card.Text>
                        {courseData.details}
                    </Card.Text>
                    <Link to={`/course/${courseData.id}`}><Button variant="primary">Access The Course</Button></Link>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default Course;