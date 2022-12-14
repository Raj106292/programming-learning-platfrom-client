import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../../../assets/my_logo.png';
import { AuthContext } from '../Contexts/ContextsUser';
import "./Header.css";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            }).catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link className='fw-bold me-5' style={{ textDecoration: 'none' }} to='/'>PLwS</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='me-3 text-dark fw-bold' style={{ textDecoration: 'none' }} to='/categories'>Courses</Link>
                        <Link className='me-3 text-dark fw-bold' style={{ textDecoration: 'none' }} to='/faq'>FAQ</Link>
                        <Link className='me-3 text-dark fw-bold' style={{ textDecoration: 'none' }} to='/blogs'>Blogs</Link>
                    </Nav>
                    <Nav className="d-flex align-items-center">
                        <>
                            {
                                user?.displayName ?
                                    <div className="d-flex align-items-center">
                                        <div title={user.displayName}>
                                            <img className='me-3' style={{ width: '40px', height: '40px', borderRadius: '20px' }} src={user?.photoURL} alt="" />
                                        </div>
                                        <button onClick={handleLogOut} className='me-3 btn btn-warning'>Log-out</button>
                                    </div> :
                                    <Link className='me-3' style={{ textDecoration: 'none' }} to='/login'>Log-in</Link>
                            }
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;