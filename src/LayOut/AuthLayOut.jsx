import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';

const AuthLayOut = () => {
    return (
        <div className='bg-base-200 h-screen'>
            <header className='pt-4'>
                <NavBar></NavBar>
            </header>
            <div className='h-17/20 flex justify-center items-center'>
               <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayOut;