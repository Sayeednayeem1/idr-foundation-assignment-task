import Image from "next/image";
import bannerImg from '../../public/BannerImg1.png';
import { BiRightArrow } from "react-icons/bi";
import Logo1 from '../../public/Rectangle 220 (1).png';


const Banner = () => {
    return (
        <div className="px-6 md:px-[110px]">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="p-4">
                    <h2 className="font-bold text-5xl text-[#262524] mb-6">Healthy in side <br /> <span className="text-[#8382EB]">fresh</span> out side</h2>
                    <p className="opacity-60">Exercise is a very important need for our body. Health and <br /> fitness will be obtained if you can do regular exercise and <br /> run a healthy routine.</p>
                    <div className="mb-16 flex items-center mt-9">
                        <div className="mr-9">
                            <button className=" bg-[#264373] text-white flex items-center px-4 py-4 rounded-xl font-normal text-xs"><span>Get Started</span> <BiRightArrow className="ml-20 w-[22px] text-2xl bg-white rounded-full p-1 text-black" /> </button>
                        </div>
                        <div>
                            <button className=" bg-white text-[#264373] flex items-center px-4 py-4 rounded-xl font-normal text-xs"><BiRightArrow className="mr-[15px] w-[22px] text-2xl bg-black rounded-full p-1 text-white" /><span>Learn More</span>  </button>
                        </div>
                    </div>
                    <p className="mb-7">Brands</p>
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <Image src={Logo1} alt='' />
                        <Image src={Logo1} alt='' />
                        <Image src={Logo1} alt='' />
                        <Image src={Logo1} alt='' />
                    </div>
                </div>
                <div className="p-4">
                    <Image src={bannerImg} className="rounded-lg shadow-2xl" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;