import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import MainContent from '../MainContent/MainContent';
import Sidebar from '../Sidebar/Sidebar';
import './Admin.css';

const Admin = () => {
    return (
        <div className='container'>
            <AdminHeader />
            <div className='admin-content mt-4'>
                <Sidebar></Sidebar>
                <MainContent></MainContent>
            </div>
        </div>
    );
};

export default Admin;