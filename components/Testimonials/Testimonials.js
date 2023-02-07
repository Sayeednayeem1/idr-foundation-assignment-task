import Image from 'next/image';
import RectangleImage from '../../public/Rectangle259.png';

const Testimonials = () => {
    return (
        <div className='px-6 md:px-[120px] mb-32 '>
            <h1 className='text-center text-5xl font-normal text-[#262524] mb-12 mt-[120px]'>Testimonials</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='shadow-2xl py-11 rounded-xl '>
                    <p className='px-16  mx-auto'>It's great to be able to work out from home and be <br /> helped by the gymbaran. My day feels fresher when I <br /> regularly participate in this fun sport. Good luck to the coaches.</p>
                    <div className='px-16 mt-14 flex items-center'>
                        <Image className='mr-8' src={RectangleImage} alt='Rectangle shape' />
                        <div>
                            <h1>Suketi Mantapo</h1>
                            <p>Designer Graphic</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-2xl py-11 rounded-xl'>
                    <p className='px-16 mx-auto'>It's great to be able to work out from home and be <br /> helped by the gymbaran. My day feels fresher when I <br /> regularly participate in this fun sport. Good luck to the coaches.</p>
                    <div className='px-16 mt-14 flex items-center'>
                        <Image className='mr-8' src={RectangleImage} alt='Rectangle shape' />
                        <div>
                            <h1>Suketi Mantapo</h1>
                            <p>Designer Graphic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonials;