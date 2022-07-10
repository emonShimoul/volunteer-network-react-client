import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import '../Register/Register.css';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/register';
    // console.log(location.state?.from);
    // console.log(redirect_uri);

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            navigate(redirect_uri);
        })
    }
    return (
        <div className='container mt-4 mb-5'>
            <Link to="/"><img src={logo} alt="" width="180px" className='mb-5' /></Link>
            <div className="login">
                <h3 className='mb-4'>Login With</h3>
                <Button variant="outline-dark" className='rounded-pill' onClick={handleGoogleLogin}><FontAwesomeIcon icon={faG} /> <span className='px-5'>Continue with Google</span></Button>
                {/* <p className='mt-2'>Don't have an Account? <Link to="/register">Create New Account?</Link></p> */}
            </div>
        </div>
    );
};

export default Login;