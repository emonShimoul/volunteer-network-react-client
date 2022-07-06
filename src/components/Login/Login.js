import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faG } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.png';
import '../Register/Register.css';

const Login = () => {
    return (
        <div className='container mt-4 mb-5'>
            <img src={logo} alt="" width="180px" className='mb-5' />
            <div className="login">
                <h3 className='mb-4'>Login With</h3>
                <Button variant="outline-dark" className='rounded-pill'><FontAwesomeIcon icon={faG} /> <span className='px-5'>Continue with Google</span></Button>
                <p className='mt-2'><Link to="/register">Don't have an Account?</Link></p>
            </div>
        </div>
    );
};

export default Login;