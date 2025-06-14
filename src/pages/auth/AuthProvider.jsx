import React from 'react';
import { AuthContext } from './AuthContex';

const AuthProvider = ({children}) => {
    const userInfo = {
        email:'khairul@gmail.com'
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;