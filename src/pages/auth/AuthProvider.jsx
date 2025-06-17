import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUser = (information) => {
        setLoading(true);
        return updateProfile(auth.currentUser, information)
    }

    const logInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth);
    }

    //console.log(user)

    useEffect(()  => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
            
            // if (currentUser?.email) {
            //     const userData = {email: currentUser.email}
            //     axios.post('https://service-review-server-gules-seven.vercel.app/jwt',userData,{
            //         withCredentials: true
            //     }).then(res => {
            //         console.log(res.data);
            //     }).catch(error => {
            //         console.log(error);
            //     })
            // }

        })
        return () => {unSubscribe()}
    },[])

    const userInfo = {
        createUser,
        updateUser,
        user,
        logOutUser,
        logInUser,
        loading,
        googleLogin

    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;