import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-neutral'>
            <div className="navbar text-neutral-content w-11/12 md:w-4/5 mx-auto">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-2xl">Meal Data</a>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered text-black" />
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>

                </div>
            </div>
       </div>
    );
};

export default Navbar;