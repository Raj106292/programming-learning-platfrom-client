import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Courses.css';
import { Col, Row } from 'react-bootstrap';

const Courses = () => {

    const allCourses = useLoaderData();
    console.log(allCourses);

    return (
        <div>
            <h2>All courses</h2>
            <Row className='all-courses-card' style={{ gap: '20px' }}>
                {
                    allCourses.map(course =>
                        <Col key={course.id} lg={5} sm={12} md={5}>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" style={{ height: '180px' }} src={course.course_image} />
                                <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                        Want to know more about the Course? Than click on the <strong>Course Details</strong> button.
                                    </Card.Text>
                                    <Link to={`/courses/${course.category_id}`}><Button variant="primary">Course Details</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>)
                }
            </Row>
        </div>
    );
};

export default Courses;