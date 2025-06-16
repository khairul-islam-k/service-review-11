import React from 'react';
import UseAuth from './UseAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = UseAuth();

    if (loading) {
        return <span>loading...</span>
    }

    if (!user) {
        return <Navigate to='/auth/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;