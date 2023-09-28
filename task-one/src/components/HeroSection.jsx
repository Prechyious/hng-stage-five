import { Link } from "react-router-dom";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

const HeroSection = () => {
    return (
        <section className="flex items-center justify-center gap-6 px-24 h-[90dvh]">
            <div>
                <h1 className="text-[4rem] leading-[4rem] text-headings font-bold font-sora mb-5 max-w-[29.5rem]">
                    Show Them Don't Just Tell
                </h1>
                <p className="font-inter font-normal text-xl max-w-[34.25rem] mb-12 text-grayText leading-7">
                    Help your friends and loved ones by creating and sending
                    videos on how to get things done on a website.
                </p>
                <Link
                    to="/"
                    className="px-5 py-6 bg-primary rounded-lg text-white font-workSans font-medium text-lg"
                >
                    install helpMeOut
                    <span className="ml-2 font-bold">&rarr;</span>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-rows-2 gap-4">
                    <img className="h-full rounded-lg" src={image1} alt="" />
                    <img className="h-full rounded-lg" src={image2} alt="" />
                </div>
                <div>
                    <img
                        className="rounded-lg w-full h-full"
                        src={image3}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
