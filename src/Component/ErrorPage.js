import React from 'react';
import Navbar from './Navbar';

const ErrorPage = () => {
    return (
        <div className=' h-screen'>
            <Navbar></Navbar>
            <div className='flex justify-center items-center flex-col gap-10 h-full'>
            <h1 className='text-6xl'>No Result Found</h1>
            <h1 className='text-4xl'>Search Again</h1>
            </div>

        </div>
    );
};

export default ErrorPage;