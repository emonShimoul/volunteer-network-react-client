import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import '../Register/Register.css';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {googleLogin} = useFirebase();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/events';

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            // console.log(result);
            navigate(redirect_uri);
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
    return (
        <div className='container mt-4 mb-5'>
            <Link to="/"><img src={logo} alt="" width="180px" className='mb-5' /></Link>
            <div className="login">
                <h3 className='mb-4'>Login With</h3>
                <Button variant="outline-dark" className='rounded-pill' onClick={handleGoogleLogin}><FontAwesomeIcon icon={faG} /> <span className='px-5'>Continue with Google</span></Button>
                <p className='mt-2'><Link to="/register">Don't have an Account?</Link></p>
            </div>
        </div>
    );
};

export default Login;