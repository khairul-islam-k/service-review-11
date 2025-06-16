import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    useEffect(()  => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            //setLoading(false);
            setUser(currentUser);

        })
        return () => {unSubscribe()}
    },[])

    const userInfo = {
        createUser,
        user
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;