import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import adminLogo from '../../images/logo.png';
import './AdminHeader.css';

const AdminHeader = () => {
    const {user, logOut} = useAuth();
    // console.log(user);
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';

    const handleLogOut = () => {
        logOut();
        navigate(redirect_uri);
    }
    return (
        <div className='adminHeader container'>
            <img src={adminLogo} alt="Admin-Logo" />
            <h5 className='ms-5 mt-3'>This is Admin Header</h5>
            <div>
            <Button className='ms-5' variant="secondary" onClick={handleLogOut}>Log Out</Button>
            </div>
        </div>
    );
};

export default AdminHeader;