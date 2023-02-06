import Image from "next/image";
import bannerImg from '../../public/BannerImg1.png';


const Banner = () => {
    return (
        <div>
            <div className="">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-5xl font-bold">Healthy Inside <br/> Fresh Outside</h1>
                        <p className="">Exercise is a very important need for our body. Health and <br/> fitness will be obtained if you can do regular exercise and <br/> run a healthy routine.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>

                    <Image src={bannerImg} className="rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;