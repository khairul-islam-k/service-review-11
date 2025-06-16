import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logOutUser = () => {
        return signOut(auth);
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
        user,
        logOutUser

    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;