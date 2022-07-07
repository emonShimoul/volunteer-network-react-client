import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useFirebase();
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
    if(!user.displayName) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default PrivateRoute;