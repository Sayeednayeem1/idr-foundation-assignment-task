import Image from "next/image";
import bgImg1 from '../../public/image 81.png';

const HowItWorks = () => {
    return (
        <div>
            <div className="mx-6 md:ml-[200px] md:mr-[110px] mb-28 ">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <div className="p-4 bgImage">
                        <Image src={bgImg1} className="w-[415px] h-[408px] ml-8 -mb-28 rounded" alt="" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-[#262524] font-normal text-5xl mb-8">How it works</h2>
                        <div>
                            <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box mb-4">
                                <div className="collapse-title text-xl font-medium">
                                    Focus me to see content
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box mb-4">
                                <div className="collapse-title text-xl font-medium">
                                    Focus me to see content
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    Focus me to see content
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;