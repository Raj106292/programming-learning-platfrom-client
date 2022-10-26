import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFileDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Course = () => {

    const courseData = useLoaderData();
    // console.log(courseData);

    return (
        <div>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <strong>Welcome to {courseData.name} course</strong>
                    <Pdf targetRef={ref} filename={`${courseData.name}.pdf`} x={.5} y={.5} scale={0.8}>
                        {({ toPdf }) => <button onClick={toPdf}><FaFileDownload></FaFileDownload></button>}
                    </Pdf>
                </Card.Header>
                <div ref={ref}>
                    <Card.Img variant="top" style={{ height: '240px' }} src={courseData.course_image} />
                    <Card.Body>
                        <Card.Title className='text-center'>{courseData.name}</Card.Title>
                        <Card.Text>
                            {courseData.details}
                        </Card.Text>
                    </Card.Body>
                </div>
                <Link to={`/course/${courseData.id}`}><Button className='mb-2 ms-3' variant="primary">Get Premium Access</Button></Link>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default Course;