import React from 'react';
import NavBar from '../../LayOut/NavBar';

const Error = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='h-screen flex justify-center items-center'>
                <div className="bg-[url('assets/error.png')] w-[380px] h-[400px] text-white rounded-xl">
                    <h3 className='text-3xl font-bold text-center'>404</h3>
                    <p className='text-center text-2xl'>page not found</p>
                </div>
            </div>
        </div>
    );
};

export default Error;