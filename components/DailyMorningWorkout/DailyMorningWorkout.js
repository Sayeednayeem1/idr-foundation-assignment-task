import React from 'react';
import Image from "next/image";
import bannerImg from '../../public/BannerImg1.png';

const DailyMorningWorkout = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="p-4">
                    <h2 className='text-[#262524] font-normal text-5xl mb-8'>Daily morning <br/> workout in home</h2>
                    <p>Exercise is a very important need for our body. Health and fitness <br/> will be obtained if you can do regular exercise and run a healthy <br/> routine. Even at home we still have to be diligent in exercising, either <br/> alone or with your friends at home. </p>
                    <div className="mb-14">
                        <button className="mr-14">Get Started</button>
                        <button>Learn More</button>
                    </div>
                    <p className="mb-7">Brands</p>
                    <div>

                    </div>
                </div>
                <div className="p-4">
                    <Image src={bannerImg} className="rounded-lg shadow-2xl" alt="" />
                </div>
            </div>
        </div >
    );
};

export default DailyMorningWorkout;