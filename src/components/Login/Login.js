import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Login = () => {
    return (
        <div className='container mt-4 mb-5'>
            <img src={logo} alt="" width="180px" className='mb-4' />
            <div className="login">
                <h3>Login With</h3>
                <Button variant="outline-dark">Continue with Google</Button>
                <p className='mt-2'><Link to="/register">Don't have an Account?</Link></p>
            </div>
        </div>
    );
};

export default Login;