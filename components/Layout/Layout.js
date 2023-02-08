import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div className='bg-gradient-to-r from-[#F9ECED] via-[#FEE5F9] to-[#F2EEF7]'>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;