import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#" className="me-auto my-2 my-lg-0"><img width="150px" src={logo} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}c
                        navbarScroll
                    >
                    </Nav>
                    <Nav>
                    <Nav.Link><Link className='text-decoration-none text-dark' to="/">Home</Link></Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none text-dark' to="/donation">Donation</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none text-dark' to="/events">Events</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none text-dark' to="/blog">Blog</Link>
                        </Nav.Link>

                        <Button variant="primary mx-3">
                            <Link className='text-decoration-none text-white' to="/register">Register</Link>
                        </Button>
                        <Button variant="secondary">Admin</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;