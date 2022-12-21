import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Row className='intro'>
                <Col className='img-sec' lg={12} style={{height: '400px'}}>
                    <img src='https://itchronicles.com/wp-content/uploads/2018/10/bigstock-Programming-Web-Banner-Best-P-258081862.jpg' style={{width: '100%', height: '100%'}} alt='' />
                </Col>
                <Col className='detail-sec' lg={12}>
                    <h2>Welcome to my page, Programming Language with "Shahriar"</h2>
                    <p>
                        Hello, I am Shahriar Ahmed. I am a Computer Engineer and I have completed my graduation on Computer Science & Engineering from Bangladesh University of Engineering and Technology. I have created the course for everyone but it is very essential for those students who have to study on CSE. So, if you are interested than enroll the course.
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default Home;