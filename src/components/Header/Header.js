import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
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
                    <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action1">Donation</Nav.Link>
                        <Nav.Link href="#action1">Events</Nav.Link>
                        <Nav.Link href="#action1">Blog</Nav.Link>

                        <Button variant="primary mx-3">Register</Button>
                        <Button variant="secondary">Admin</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;