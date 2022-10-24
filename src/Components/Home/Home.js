import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h2>Welcome to my page, Programming Language with "Shahriar"</h2>
            <Row className='intro'>
                <Col lg={6}>
                    <p>
                        Hello, I am Shahriar Ahmed. I am a Computer Engineer and I have completed my graduation on Computer Science & Engineering from Bangladesh University of Engineering and Technology. I have created the course for everyone but it is very essential for those students who have to study on CSE. So, if you are interested than enroll the course.
                    </p>
                </Col>
                <Col lg={6}>
                    <img src='https://itchronicles.com/wp-content/uploads/2018/10/bigstock-Programming-Web-Banner-Best-P-258081862.jpg' alt='' />
                </Col>
            </Row>
        </div>
    );
};

export default Home;