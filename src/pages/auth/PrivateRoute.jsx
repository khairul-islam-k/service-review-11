import React from 'react';
import UseAuth from './UseAuth';
import { Navigate } from 'react-router';
import Loader from './Loader';

const PrivateRoute = ({children}) => {
    const {user,loading} = UseAuth();

    if (loading) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to='/auth/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;