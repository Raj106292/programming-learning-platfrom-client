import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideNav from '../Components/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Row className='m-2'>
                <Col lg={4}>
                   <LeftSideNav></LeftSideNav> 
                </Col>
                <Col lg={8}>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </div>
    );
};

export default Main;