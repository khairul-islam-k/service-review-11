import React from 'react';
import NavBar from '../../LayOut/NavBar';

const Error = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='h-screen flex justify-center items-center'>
                <div>
                    <h3 className='text-2xl font-bold text-center'>404</h3>
                    <p>page not found</p>
                </div>
            </div>
        </div>
    );
};

export default Error;