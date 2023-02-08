
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import bgImg1 from '../../public/image 81.png';

const DailyMorningWorkout = () => {
    return (
        <div className="px-6 md:px-28 mb-[140px]">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="p-4">
                    <h2 className='text-[#262524] font-normal text-5xl mb-8'>Daily morning <br /> workout in home</h2>
                    <p>Exercise is a very important need for our body. Health and fitness <br /> will be obtained if you can do regular exercise and run a healthy <br /> routine. Even at home we still have to be diligent in exercising, either <br /> alone or with your friends at home. </p>
                    <div className="mb-14 mt-16 text-[#FFFFFF]">
                        <button className="mr-14 bg-[#264373] flex items-center px-6 py-4 rounded-xl font-normal text-xl"><span>This is a test</span> <BsArrowRight className="ml-20 w-[22px] text-2xl" /> </button>
                    </div>
                </div>
                <div className="p-4">
                    <div className="p-4 bgImage">
                        <Image src={bgImg1} className="w-[415px] h-[408px] ml-8 -mb-28 rounded" alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DailyMorningWorkout;