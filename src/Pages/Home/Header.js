import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar className='navigationBar' collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" ><span className='white'>YOUR SUCCESS MENTOR</span></Navbar.Brand>
                    <Navbar.Toggle className='white-bg' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/services"><span className='white'>Services</span></Nav.Link>
                            <Nav.Link as={Link} to="/blogs"><span className='white'>Blogs</span></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about"><span className='white'>About Me</span></Nav.Link>
                            {
                                user ?
                                    <button onClick={handleSignOut} className='white signOut-button'>Sign out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        <span className='white'>Log In</span>
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;