import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;