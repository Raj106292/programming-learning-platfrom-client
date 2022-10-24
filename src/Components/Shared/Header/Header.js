import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../../../assets/my_logo.png';
import Switch from "react-switch";
import './Header.css';
import { AuthContext } from '../Contexts/ContextsUser';

const Header = () => {

    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };

    const {user} = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link className='fw-bold me-5' to='/'>PLwS</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='me-3 text-dark fw-bold' to='/courses'>Courses</Link>
                        <Link className='me-3 text-dark fw-bold' to='/faq'>FAQ</Link>
                        <Link className='me-3 text-dark fw-bold' to='/blog'>Blog</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><p>{user?.displayName}</p></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        <Nav.Link><Switch
                            onChange={handleChange}
                            checked={checked}
                            className="react-switch"
                        /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;