import Image from 'next/image';
import Icon from '../../public/Vector.png';
import Icon1 from '../../public/Vector (1).png';
import Icon2 from '../../public/Vector (2).png';
import Icon3 from '../../public/Vector (3).png';
import Icon4 from '../../public/Vector (4).png';
import Icon5 from '../../public/Vector (5).png';

const WorkOutPrograms = () => {
    return (
        <div className='px-6 md:px-[120px]'>
            <h1 className='text-center text-[#262524] font-normal text-5xl mb-12'>Programs that can <br /> be taken</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-[68px]'>
                <div>
                    <div className='flex items-center'>
                        <div className='bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-5 rounded-[100%] '>
                            <Image className='' src={Icon} alt="this is an icon"></Image>
                        </div>
                        <div className='ml-6'>
                            <h1 className='text-[#262524] font-bold text-base'>Get ABS in 2 weeks</h1>
                            <p className='mt-3 opacity-60'>Exercise is a very important <br /> need for our body </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <div className='bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-5 rounded-[100%] '>
                            <Image className='' src={Icon1} alt="this is an icon"></Image>
                        </div>
                        <div className='ml-6'>
                            <h1 className='text-[#262524] font-bold text-base'>25 Mins full body workout</h1>
                            <p className='mt-3 opacity-60'>Exercise is a very important <br /> need for our body </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <div className='bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-5 rounded-[100%] '>
                            <Image className='' src={Icon2} alt="this is an icon"></Image>
                        </div>
                        <div className='ml-6'>
                            <h1 className='text-[#262524] font-bold text-base'>10 Mins toned arms workout</h1>
                            <p className='mt-3 opacity-60'>Exercise is a very important <br /> need for our body </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <div className='bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-5 rounded-[100%] '>
                            <Image className='' src={Icon3} alt="this is an icon"></Image>
                        </div>
                        <div className='ml-6'>
                            <h1 className='text-[#262524] font-bold text-base'>15 Mins full body fat burn</h1>
                            <p className='mt-3 opacity-60'>Exercise is a very important <br /> need for our body </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <div className='bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-5 rounded-[100%] '>
                            <Image className='' src={Icon4} alt="this is an icon"></Image>
                        </div>
                        <div className='ml-6'>
                            <h1 className='text-[#262524] font-bold text-base'>25 Mins HIIT workout</h1>
                            <p className='mt-3 opacity-60'>Exercise is a very important <br /> need for our body </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <div className='bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-5 rounded-[100%] '>
                            <Image className='' src={Icon5} alt="this is an icon"></Image>
                        </div>
                        <div className='ml-6'>
                            <h1 className='text-[#262524] font-bold text-base'>Intense lower Abs workout</h1>
                            <p className='mt-3 opacity-60'>Exercise is a very important <br /> need for our body </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkOutPrograms;