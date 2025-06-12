import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';

const AuthLayOut = () => {
    return (
        <div className='bg-base-200'>
            <header className='pt-4'>
                <NavBar></NavBar>
            </header>
            <div className=' flex justify-center items-center h-screen'>
               <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayOut;