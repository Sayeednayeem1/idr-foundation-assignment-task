import Image from "next/image";
import bannerImg from '../../public/BannerImg1.png';
import { BsArrowRight } from "react-icons/bs";

const BestWorkout = () => {
    return (
        <div className="px-6 md:ml-40 md:mr-28 mb-40">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="p-4">
                    <Image src={bannerImg} className="rounded-lg shadow-2xl" alt="" />
                </div>
                <div className="p-4">
                    <h2 className='text-[#262524] font-normal text-5xl mb-8'>Best full body <br/> workout to lose fat</h2>
                    <p>Exercise is a very important need for our body. Health and fitness <br /> will be obtained if you can do regular exercise and run a healthy <br /> routine. Even at home we still have to be diligent in exercising, either <br /> alone or with your friends at home. </p>
                    <div className="mb-14 mt-16 text-[#FFFFFF]">
                        <button className="mr-14 bg-[#264373] flex items-center px-6 py-4 rounded-xl font-normal text-xl"><span>This is a test</span> <BsArrowRight className="ml-20 w-[22px] text-2xl" /> </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BestWorkout;