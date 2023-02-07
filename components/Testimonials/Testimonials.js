import Image from 'next/image';
import RectangleImage from '../../public/Rectangle259.png';

const Testimonials = () => {
    return (
        <div className='px-28'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                <div className='shadow-2xl'>
                    <p>It's great to be able to work out from home and be <br /> helped by the gymbaran. My day feels fresher when I <br /> regularly participate in this fun sport. Good luck to the coaches.</p>
                    <div>
                        <Image src={RectangleImage} alt='Rectangle shape' />
                        <div>
                            <h1>Suketi Mantapo</h1>
                            <p>Designer Graphic</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-2xl'>
                    <p>It's great to be able to work out from home and be <br /> helped by the gymbaran. My day feels fresher when I <br /> regularly participate in this fun sport. Good luck to the coaches.</p>
                    <div>
                        <Image src={RectangleImage} alt='Rectangle shape' />
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