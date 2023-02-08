import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navItems = <>
        <li> <Link href='/'>Home</Link> </li>
        <li> <h1>program</h1> </li>
        <li> <h1>Blog</h1> </li>
        <li> <h1>About us</h1> </li>
        <li> <button className='bg-[#264373] md:py-[13px] md:px-[35px]  text-white font-normal text-[16px]'>Log in</button></li> 
        
    </>

    return (
        <div className='mb-24 px-6 md:px-[100px] md:py-[55px]'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case  text-[#6765F0] text-2xl font-normal "><span className='text-2xl font-bold text-white bg-[#6765F0] p-2 rounded-xl mr-2'>Gym </span> Baran</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;