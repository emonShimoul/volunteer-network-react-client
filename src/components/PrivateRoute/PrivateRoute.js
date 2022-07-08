import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({
    redirectPath = '/login',
    children
}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
    if(!user.displayName) {
        return <Navigate to={redirectPath} replace state={{ from:  location }} />;
    }
    return children;
};

export default PrivateRoute;