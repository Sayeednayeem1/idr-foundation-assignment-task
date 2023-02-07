import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 md:py-28 md:px-32 bg-[#1C3764] text-base-content">
                <div >
                    <div className='flex items-center mb-8'>
                        <h1 className='mr-1 bg-white py-[2px] px-1 rounded text-[#7270EE] font-normal text-xl'>Gym</h1>
                        <p className='font-[Sporting Grotesque] text-white font-normal text-xl'>Baran</p>
                    </div>
                    <p className='text-[#FFFFFF] opacity-60 font-normal text-xl'>We take care of your health with <br/> regular and fun exercise</p>
                </div>
                <div>
                    <span className="footer-title text-[#F0F6FF] font-bold">Programme</span>
                    <a className="link link-hover text-[#FFFFFF]">Workout</a>
                    <a className="link link-hover text-[#FFFFFF]">Gym</a>
                    <a className="link link-hover text-[#FFFFFF]">Cardio</a>
                    <a className="link link-hover text-[#FFFFFF]">Zumba</a>
                </div>
                <div>
                    <span className="footer-title text-[#F0F6FF] font-bold">Blog</span>
                    <a className="link link-hover text-[#FFFFFF]">Daily stretch</a>
                    <a className="link link-hover text-[#FFFFFF]">Daily workout</a>
                </div>
                <div>
                    <span className="footer-title text-[#F0F6FF] font-bold">About Us</span>
                    <a className="link link-hover text-[#FFFFFF]">Support</a>
                    <a className="link link-hover text-[#FFFFFF]">Contact</a>
                    <a className="link link-hover text-[#FFFFFF]">Address</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;