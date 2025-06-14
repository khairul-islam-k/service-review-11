import React, { useContext } from 'react';
import { AuthContext } from './AuthContex';

const UseAuth = () => {
    const userinfo = useContext(AuthContext);
    return userinfo;
};

export default UseAuth;