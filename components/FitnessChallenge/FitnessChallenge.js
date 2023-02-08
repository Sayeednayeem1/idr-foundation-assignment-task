import Image from 'next/image';
import { BsArrowRight } from "react-icons/bs";
import Icon1 from '../../public/Vector (7).png';

const FitnessChallenge = () => {
    return (
        <div className='bg-gradient-to-r from-[#6462F0] to-[#9190E9] rounded-lg mx-6 md:mx-28 mb-32'>
            <div className='grid grid-cols-1 md:grid-cols-3 px-6 py-6 md:py-[87px] md:px-24'>
                <div className='flex items-center'>
                    <div className='bg-[#946CF3] px-6 py-6 rounded-xl'>
                        <Image className='' src={Icon1} alt="this is an icon"></Image>
                    </div>
                    <div className='ml-8'>
                        <h1 className='text-white font-bold text-xl'>Get that 11 line <br /> in 30 days</h1>
                        <div className='flex items-center mt-4'>
                            <p className='font-normal opacity-50 text-white mr-6'>Learn More</p>
                            <BsArrowRight className='text-white' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='bg-[#946CF3] px-6 py-6 rounded-xl'>
                        <Image className='' src={Icon1} alt="this is an icon"></Image>
                    </div>
                    <div className='ml-8'>
                        <h1 className='text-white font-bold text-xl'>Get that 11 line <br /> in 30 days</h1>
                        <div className='flex items-center mt-4'>
                            <p className='font-normal opacity-50 text-white mr-6'>Learn More</p>
                            <BsArrowRight className='text-white' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='bg-[#946CF3] px-6 py-6 rounded-xl'>
                        <Image className='' src={Icon1} alt="this is an icon"></Image>
                    </div>
                    <div className='ml-8'>
                        <h1 className='text-white font-bold text-xl'>Get that 11 line <br /> in 30 days</h1>
                        <div className='flex items-center mt-4'>
                            <p className='font-normal opacity-50 text-white mr-6'>Learn More</p>
                            <BsArrowRight className='text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FitnessChallenge;