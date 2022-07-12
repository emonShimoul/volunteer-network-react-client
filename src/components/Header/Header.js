import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';

const Header = () => {
    const { pathname } = useLocation();
    const {user, logOut} = useAuth();
    // console.log(user);
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';

    const handleLogOut = () => {
        logOut();
        navigate(redirect_uri);
    }

    // logic for different navbar styles for login and registration route
    let userNav, adminNav;
    if(pathname === '/admin' || pathname === '/registerList' || pathname === '/addEvent' || pathname === '/allEvents'){
        userNav = {
            display: "none"
        };
    }
    else if(pathname === '/register' || pathname === '/login'){
        userNav = {
            display: "none"
        };
        adminNav = {
            display: "none"
        }
    }
    else{
        adminNav = {
            display: "none"
        }
    }
    return (
        <div>
            <Navbar bg="light" expand="lg" style={userNav}>
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
                        {/* <NavLink className='text-decoration-none text-dark px-3' to="/donation">Donation</NavLink> */}
                        <NavLink className='text-decoration-none text-dark px-3' to="/events">Events</NavLink>
                        {/* <NavLink className='text-decoration-none text-dark px-3' to="/blog">Blog</NavLink> */}
                        </div>

                            {(!user.email) ?
                                <div>
                                    <Link className='text-decoration-none text-white' to="/adminLogin"><Button variant="secondary">Admin</Button></Link>
                                    <Link className='text-decoration-none text-white' to="/login"><Button variant="primary mx-3">Login</Button></Link>
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

            <Navbar bg="light" expand="lg" style={adminNav}>
                <Container>
                    <NavLink to="/registerList" className="me-auto my-2 py-2 my-lg-0"><img width="170px" src={logo} alt="Logo" /></NavLink>
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
                        <NavLink className='text-decoration-none text-dark' to="/registerList">Volunteer Register List</NavLink>
                        <NavLink className='text-decoration-none text-dark px-4' to="/addEvent">Add Event</NavLink>
                        <NavLink className='text-decoration-none text-dark pe-4' to="/allEvents">All Event</NavLink>
                        </div>
                        <Button variant="secondary" onClick={handleLogOut}>Log Out</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;