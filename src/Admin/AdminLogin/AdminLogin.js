import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // console.log(email, password);

    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/registerList';

    const {adminEmailPassLogin} = useAuth();

    const handleRegistration = e => {
        e.preventDefault();
        // console.log(email, password);
        if(password.length < 6){
          setError('Password must be at least 6 characters long!!');
          return;
        }
        // processLogin(email, password);
        processLogin(email, password);
      }

    const processLogin = (email, password) => {
        adminEmailPassLogin(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            navigate(redirect_uri);
        })
        .catch(error => {
            setError(error.message);
            // console.log(error.message);
        })
    }

    const handleEmailChange = e => {
    setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
    setPassword(e.target.value);
    }

    return (
        <div className="container">
            <div className="mt-5">
                <form onSubmit={handleRegistration} className="w-50 mx-auto border rounded-3 ps-5 py-5">
                    <h3 className='text-dark text-start'>Admin Login </h3>
                    <p className='text-start'><small>(<span className='fw-bold'>email:</span> admin@demo.com /<span className='fw-bold'> pass:</span> admin123)</small></p>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder='Email' required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder='Password' required/>
                        </div>
                    </div>
                    
                    <div className="row mb-2 text-danger">{error}</div>
                    <button type="submit" className="btn btn-warning px-5 me-5 fw-bold">Login</button>
                    {/* <button type='button' onClick={handleResetPassword} className="btn btn-secondary ms-3">Reset Password</button> */}
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;