import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../../../assets/my_logo.png';
import Switch from "react-switch";
import { AuthContext } from '../Contexts/ContextsUser';
import './Header.css';

const Header = () => {

    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };

    const { user } = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link className='fw-bold me-5' style={{ textDecoration: 'none' }} to='/'>PLwS</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='me-3 text-dark fw-bold' style={{ textDecoration: 'none' }} to='/categories'>Courses</Link>
                        <Link className='me-3 text-dark fw-bold' style={{ textDecoration: 'none' }} to='/faq'>FAQ</Link>
                        <Link className='me-3 text-dark fw-bold' style={{ textDecoration: 'none' }} to='/blog'>Blog</Link>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.displayName ?
                                    <p className='me-3'>{user?.displayName}</p> :
                                    <Link className='me-3' style={{ textDecoration: 'none' }} to='/login'>Log-in</Link>
                            }
                        </>
                        <><Switch
                            onChange={handleChange}
                            checked={checked}
                            className="react-switch"
                        /></>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;