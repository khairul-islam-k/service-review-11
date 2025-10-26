import React from 'react';
import NavBar from './NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer';
import Loader from '../pages/auth/Loader';

const MainLayOut = () => {
    const navigation = useNavigation();
    return (
        <div className='bg-base-200'>
            <NavBar></NavBar>
            {
                navigation?.state === 'loading'? <Loader></Loader>:<Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;