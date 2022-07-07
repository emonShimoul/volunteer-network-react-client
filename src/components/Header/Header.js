import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';

const Header = () => {
    const { pathname } = useLocation();
    const {user, logOut} = useFirebase();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/login';

    const handleLogOut = () => {
        logOut();
        navigate(redirect_uri);
    }

    // logic for different navbar styles for login and registration route
    let loginStyle;
    if(pathname === '/register' || pathname === '/login'){
        loginStyle = {
            display: "none"
        };
    }
    else{}
    return (
        <div>
            <Navbar bg="light" expand="lg" style={loginStyle}>
                <Container>
                    <NavLink to="/" className="me-auto my-2 py-2 my-lg-0"><img width="170px" src={logo} alt="Logo" /></NavLink>
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

                            {(!user.email) ?
                                <div>
                                    <Link className='text-decoration-none text-white' to="/register"><Button variant="primary mx-3">Register</Button></Link>
                             
                                    <Button variant="secondary">Admin</Button>
                                </div> :
                                <div className='pt-1'>
                                    <span className='fw-bold ms-2 me-3'>{user.displayName}</span>
                                    <Button variant="secondary" onClick={handleLogOut}>Log Out</Button>
                                </div>
                            }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;