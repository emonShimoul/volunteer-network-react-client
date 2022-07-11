import React from 'react';
import adminLogo from '../../images/logo.png';
import './AdminHeader.css';

const AdminHeader = () => {
    return (
        <div className='adminHeader'>
            <img src={adminLogo} alt="Admin-Logo" />
            <h5 className='ms-5 mt-3'>This is Admin Header</h5>
        </div>
    );
};

export default AdminHeader;