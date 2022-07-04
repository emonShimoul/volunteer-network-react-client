import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav>
                        <div className='pt-2'>
                        <NavLink className='text-decoration-none text-dark px-3' to="/">Home</NavLink>
                        <NavLink className='text-decoration-none text-dark px-3' to="/donation">Donation</NavLink>
                        <NavLink className='text-decoration-none text-dark px-3' to="/events">Events</NavLink>
                        <NavLink className='text-decoration-none text-dark px-3' to="/blog">Blog</NavLink>
                        </div>

                        <Link className='text-decoration-none text-white' to="/register"><Button variant="primary mx-3">Register</Button></Link>
                             
                        <Button variant="secondary">Admin</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;